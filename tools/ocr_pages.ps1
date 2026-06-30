param(
  [string]$Manifest = "tmp/render-manifest.json",
  [string]$Output = "tmp/ocr-lines.json"
)

$ErrorActionPreference = "Stop"
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

Add-Type -AssemblyName System.Runtime.WindowsRuntime

$null = [Windows.Storage.StorageFile, Windows.Storage, ContentType = WindowsRuntime]
$null = [Windows.Storage.FileAccessMode, Windows.Storage, ContentType = WindowsRuntime]
$null = [Windows.Graphics.Imaging.BitmapDecoder, Windows.Graphics.Imaging, ContentType = WindowsRuntime]
$null = [Windows.Graphics.Imaging.SoftwareBitmap, Windows.Graphics.Imaging, ContentType = WindowsRuntime]
$null = [Windows.Media.Ocr.OcrEngine, Windows.Media.Ocr, ContentType = WindowsRuntime]
$null = [Windows.Media.Ocr.OcrResult, Windows.Media.Ocr, ContentType = WindowsRuntime]
$null = [Windows.Storage.Streams.IRandomAccessStream, Windows.Storage.Streams, ContentType = WindowsRuntime]

$asTaskMethods = [System.WindowsRuntimeSystemExtensions].GetMethods() | Where-Object {
  $_.Name -eq 'AsTask' -and
  $_.IsGenericMethod -and
  $_.GetParameters().Count -eq 1 -and
  $_.GetParameters()[0].ParameterType.Name -eq 'IAsyncOperation`1'
}
$asTask = $asTaskMethods[0]

function Await-WinRtOperation {
  param(
    [Parameter(Mandatory = $true)]
    $Operation,
    [Parameter(Mandatory = $true)]
    [Type]$ResultType
  )

  $task = $asTask.MakeGenericMethod($ResultType).Invoke($null, @($Operation))
  $task.Wait() | Out-Null
  return $task.Result
}

function Read-OcrLines {
  param(
    [Parameter(Mandatory = $true)]
    [string]$ImagePath,
    [Parameter(Mandatory = $true)]
    $Engine
  )

  $resolvedPath = (Resolve-Path -LiteralPath $ImagePath).Path
  $file = Await-WinRtOperation ([Windows.Storage.StorageFile]::GetFileFromPathAsync($resolvedPath)) ([Windows.Storage.StorageFile])
  $stream = Await-WinRtOperation ($file.OpenAsync([Windows.Storage.FileAccessMode]::Read)) ([Windows.Storage.Streams.IRandomAccessStream])
  $decoder = Await-WinRtOperation ([Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync($stream)) ([Windows.Graphics.Imaging.BitmapDecoder])
  $bitmap = Await-WinRtOperation ($decoder.GetSoftwareBitmapAsync()) ([Windows.Graphics.Imaging.SoftwareBitmap])
  $result = Await-WinRtOperation ($Engine.RecognizeAsync($bitmap)) ([Windows.Media.Ocr.OcrResult])

  $lines = @()
  foreach ($line in $result.Lines) {
    $text = ($line.Text -replace "\s+", " ").Trim()
    if ($text.Length -gt 0) {
      $lines += $text
    }
  }
  return $lines
}

function Add-DedupedLines {
  param(
    [System.Collections.ArrayList]$Target,
    [array]$NewLines
  )

  if ($null -eq $NewLines) {
    return
  }

  foreach ($line in $NewLines) {
    $text = ($line -replace "\s+", " ").Trim()
    if ($text.Length -eq 0) {
      continue
    }
    if ($Target.Count -gt 0 -and $Target[$Target.Count - 1] -eq $text) {
      continue
    }
    [void]$Target.Add($text)
  }
}

$manifestPath = (Resolve-Path -LiteralPath $Manifest).Path
$manifestData = Get-Content -LiteralPath $manifestPath -Raw | ConvertFrom-Json
$outputPath = Join-Path (Get-Location) $Output
$outputDir = Split-Path -Parent $outputPath
if ($outputDir -and -not (Test-Path -LiteralPath $outputDir)) {
  New-Item -ItemType Directory -Force -Path $outputDir | Out-Null
}

$engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromUserProfileLanguages()
if ($null -eq $engine) {
  throw "Windows OCR engine is not available for the current user languages."
}

$pages = @()
$total = $manifestData.pages.Count
$index = 0
foreach ($page in $manifestData.pages) {
  $index += 1
  Write-Host ("OCR {0}/{1}: {2} page {3}" -f $index, $total, $page.sourceTitle, $page.page)
  $lines = [System.Collections.ArrayList]::new()
  $ocrImages = @()
  if ($page.PSObject.Properties.Name -contains "ocrImages" -and $page.ocrImages.Count -gt 0) {
    $ocrImages = @($page.ocrImages)
  } else {
    $ocrImages = @($page.ocrImage)
  }
  foreach ($imagePath in $ocrImages) {
    $chunkLines = Read-OcrLines -ImagePath $imagePath -Engine $engine
    Add-DedupedLines -Target $lines -NewLines $chunkLines
  }
  $pages += [PSCustomObject]@{
    sourceId = $page.sourceId
    sourceTitle = $page.sourceTitle
    pdfPath = $page.pdfPath
    page = $page.page
    previewImage = $page.previewImage
    lines = @($lines)
  }
}

$payload = [PSCustomObject]@{
  generatedAt = (Get-Date).ToUniversalTime().ToString("o")
  engine = "Windows.Media.Ocr"
  pages = $pages
}

$payload | ConvertTo-Json -Depth 8 | Set-Content -LiteralPath $outputPath -Encoding UTF8
Write-Host ("Wrote {0} with {1} pages" -f $outputPath, $pages.Count)
