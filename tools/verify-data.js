const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const dataFile = path.join(root, "data", "materials.js");
const indexFile = path.join(root, "index.html");

if (!fs.existsSync(indexFile)) {
  throw new Error("index.html is missing");
}

if (!fs.existsSync(dataFile)) {
  throw new Error("data/materials.js is missing");
}

const context = { window: {} };
vm.createContext(context);
vm.runInContext(fs.readFileSync(dataFile, "utf8"), context, { filename: dataFile });

const materials = context.window.INKLING_MATERIALS;
if (!materials || !Array.isArray(materials.cards) || !Array.isArray(materials.sources)) {
  throw new Error("materials.js did not define the expected card data");
}

if (materials.cards.length === 0) {
  throw new Error("materials.js contains no cards");
}

for (const card of materials.cards.slice(0, 50)) {
  if (!card.id || !card.text || !card.pageImage) {
    throw new Error(`Invalid card shape: ${JSON.stringify(card)}`);
  }
}

console.log(
  `Verified ${materials.cards.length.toLocaleString()} cards from ${materials.sources.length} sources.`,
);
