window.INKLING_QUESTIONS = {
 "generatedAt": "2026-06-30T14:24:12.870597Z",
 "stats": {
  "total": 253,
  "perSource": {
   "adfinkling1": 44,
   "adfinkling2": 69,
   "adfinkling3": 11,
   "inkling1": 59,
   "inklingpart2": 70
  },
  "perDomain": {
   "App Dev Fundamentals": 124,
   "Client-Side Scripting": 59,
   "Server-Side Scripting & Flow": 70
  }
 },
 "questions": [
  {
   "id": "adfinkling1-p005-q1",
   "source": "adfinkling1",
   "sourceTitle": "ADF Inkling Part 1",
   "page": 5,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling1-p005.jpg",
   "stem": "In the ServiceNow application development model, what does ServiceNow provide versus what the Application Developer provides?",
   "options": [
    "ServiceNow provides the JavaScript; developers provide the servers",
    "ServiceNow manages the computing resources and platform; developers configure it and use industry-standard JavaScript to extend functionality",
    "Developers manage the cloud infrastructure; ServiceNow writes the business logic",
    "ServiceNow provides the browser; developers provide the database"
   ],
   "answer": 1,
   "explanation": "ServiceNow manages the computing resources and provides the platform. Application Developers configure ServiceNow and use industry-standard JavaScript to extend and add functionality. Users access apps through a web browser."
  },
  {
   "id": "adfinkling1-p007-q1",
   "source": "adfinkling1",
   "sourceTitle": "ADF Inkling Part 1",
   "page": 7,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling1-p007.jpg",
   "stem": "Which scenario is a GOOD technical fit for building a custom application on the Now Platform?",
   "options": [
    "A multiplayer game requiring a graphics engine",
    "Data that is unstructured, such as audio or video",
    "A process that follows a request-fulfill pattern and can be modeled in a relational database",
    "An app needing proprietary libraries that have no API"
   ],
   "answer": 2,
   "explanation": "Good fits: data modeled in a relational database, a request-fulfill pattern, heavy form use, reporting, and workflow/flow needs. Poor fits include unstructured data, graphics engines, proprietary libraries with no API, and apps with no process flow."
  },
  {
   "id": "adfinkling1-p010-q1",
   "source": "adfinkling1",
   "sourceTitle": "ADF Inkling Part 1",
   "page": 10,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling1-p010.jpg",
   "stem": "In which ServiceNow release were scoped applications introduced?",
   "options": [
    "Dublin",
    "Fuji",
    "Geneva",
    "Eureka"
   ],
   "answer": 1,
   "explanation": "Scoped applications were introduced in the Fuji release (around 2014). The Geneva release later added Studio (the IDE) and Delegated Development. Prior to scoping, all apps were built in global and deployed with Update Sets."
  },
  {
   "id": "adfinkling1-p011-q1",
   "source": "adfinkling1",
   "sourceTitle": "ADF Inkling Part 1",
   "page": 11,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling1-p011.jpg",
   "stem": "What is true about changing an application's scope after the application record has been saved?",
   "options": [
    "You can change scope at any time from the App settings page",
    "It is not possible to change an application's scope once the record is saved to the database",
    "Scope can only be changed by deleting and recreating all artifacts",
    "Only an admin with the source_control role can change scope"
   ],
   "answer": 1,
   "explanation": "Once an application record is saved, its scope cannot be changed. Legacy custom apps built before scoping always remain in global scope — there is no migration path to a different scope."
  },
  {
   "id": "adfinkling1-p012-q1",
   "source": "adfinkling1",
   "sourceTitle": "ADF Inkling Part 1",
   "page": 12,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling1-p012.jpg",
   "stem": "Which of the following are artifacts (application files) that exist within an application's scope?",
   "options": [
    "Only Tables and Fields",
    "Access Controls, Business Rules, Script Includes, Tables, and Client Scripts",
    "Only server-side scripts",
    "Update Sets and repositories"
   ],
   "answer": 1,
   "explanation": "Artifacts are all of the application files comprising an application, including but not limited to Access Controls, Business Rules, Script Includes, Tables, and Client Scripts. Best practice is to work in a private scoped application."
  },
  {
   "id": "adfinkling1-p013-q1",
   "source": "adfinkling1",
   "sourceTitle": "ADF Inkling Part 1",
   "page": 13,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling1-p013.jpg",
   "stem": "A scoped application's namespace identifier (e.g. x_acme_book_rooms) has a maximum total character length of:",
   "options": [
    "10 characters",
    "18 characters",
    "32 characters",
    "No limit"
   ],
   "answer": 1,
   "explanation": "The namespace identifier is limited to 18 total characters, including the x_, the 2-to-5 character app creator code, and the trailing underscore. The application name is truncated to fit the remaining space. Scoped apps always start with x_."
  },
  {
   "id": "adfinkling1-p013-q2",
   "source": "adfinkling1",
   "sourceTitle": "ADF Inkling Part 1",
   "page": 13,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling1-p013.jpg",
   "stem": "Where does ServiceNow store the customer prefix used to build a scoped application's namespace?",
   "options": [
    "In the sys_scope table's name field",
    "In the glide.appcreator.company.code system property",
    "In the x_ prefix dictionary",
    "In the user's session token"
   ],
   "answer": 1,
   "explanation": "The instance customer prefix is generated by ServiceNow for each customer and stored in the glide.appcreator.company.code system property. It is 2-to-5 characters long and forms the middle of the namespace identifier."
  },
  {
   "id": "adfinkling1-p014-q1",
   "source": "adfinkling1",
   "sourceTitle": "ADF Inkling Part 1",
   "page": 14,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling1-p014.jpg",
   "stem": "Delegated Development in ServiceNow allows administrators to grant non-admin users the ability to develop, deploy, and delete which kind of applications?",
   "options": [
    "Global applications only",
    "Scoped applications only",
    "Both global and scoped applications",
    "Store applications only"
   ],
   "answer": 1,
   "explanation": "Delegated access can be granted to scoped applications only. Admins use Studio to manage delegated developers, controlling which file types they can access and whether scripting is allowed (e.g., All File Types + Allow Scripting to write advanced Business Rules)."
  },
  {
   "id": "adfinkling1-p016-q1",
   "source": "adfinkling1",
   "sourceTitle": "ADF Inkling Part 1",
   "page": 16,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling1-p016.jpg",
   "stem": "To save work incrementally DURING the application development process, which tool should you use?",
   "options": [
    "Application repository",
    "ServiceNow Store",
    "Update sets",
    "A Git tag"
   ],
   "answer": 2,
   "explanation": "Update Sets (or Source Control) are used to save incrementally during development. The Application repository and ServiceNow Store are used to deploy the app as a complete package."
  },
  {
   "id": "adfinkling1-p018-q1",
   "source": "adfinkling1",
   "sourceTitle": "ADF Inkling Part 1",
   "page": 18,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling1-p018.jpg",
   "stem": "The Loaner Request application built throughout the course demonstrates which set of development actions?",
   "options": [
    "Only creating tables and fields",
    "Creating an application, tables/fields/forms, access controls, Flow Designer processes, notifications, external data, and publishing via the app repository",
    "Building a global application deployed only by Update Set",
    "Writing a standalone JavaScript library"
   ],
   "answer": 1,
   "explanation": "The course builds a scoped Loaner Request app by creating the app; creating tables, fields, and forms; applying access controls; using Flow Designer; sending notifications; retrieving external data; testing; and publishing/installing via the application repository."
  },
  {
   "id": "adfinkling1-p022-q1",
   "source": "adfinkling1",
   "sourceTitle": "ADF Inkling Part 1",
   "page": 22,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling1-p022.jpg",
   "stem": "Why would you create a scoped application? (Best answer)",
   "options": [
    "Because it is the only kind of application that can be created",
    "To enable contextual development, gain table-level data access control, and simplify app installation/uninstallation",
    "To avoid having to define any roles",
    "Because scoped apps require no namespace"
   ],
   "answer": 1,
   "explanation": "Reasons to build scoped apps include enabling contextual development, gaining table-level data access control, and simplifying installation and uninstallation. Scoping is not mandatory for all apps, and global apps still exist."
  },
  {
   "id": "adfinkling1-p022-q2",
   "source": "adfinkling1",
   "sourceTitle": "ADF Inkling Part 1",
   "page": 22,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling1-p022.jpg",
   "stem": "What is the correct development process order for a scoped application?",
   "options": [
    "Development > Test > Analysis and design > Deployment",
    "Analysis and design > Development > Test > Deployment",
    "Test > Analysis and design > Development > Deployment",
    "Deployment > Development > Test > Analysis"
   ],
   "answer": 1,
   "explanation": "The scoped application development process is: Analysis and design > Development > Test > Deployment. Planning the data model and design before building is strongly recommended."
  },
  {
   "id": "adfinkling1-p025-q1",
   "source": "adfinkling1",
   "sourceTitle": "ADF Inkling Part 1",
   "page": 25,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling1-p025.jpg",
   "stem": "What does ServiceNow recommend you do before creating any application and its tables?",
   "options": [
    "Immediately start building forms",
    "Take time to plan a strategy and design the data model first",
    "Publish to the ServiceNow Store",
    "Link to source control"
   ],
   "answer": 1,
   "explanation": "Before creating an application, plan a strategy and design the data model first. The design may change, but starting with a well-defined plan (tables, columns, relationships) is most efficient. Now Create offers a 'Create your own app' success pack to help."
  },
  {
   "id": "adfinkling1-p028-q1",
   "source": "adfinkling1",
   "sourceTitle": "ADF Inkling Part 1",
   "page": 28,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling1-p028.jpg",
   "stem": "Personas in application design largely equate to what in ServiceNow, and what role recommendation applies?",
   "options": [
    "Tables; every app should have at least two tables",
    "Roles; it is recommended every application have at least a User and an Admin role",
    "Fields; every persona maps to one field",
    "Modules; each persona needs its own module"
   ],
   "answer": 1,
   "explanation": "Personas largely equate to Roles. Security is applied to applications and records using roles, and it is recommended that every application have at least a User role and an Admin role."
  },
  {
   "id": "adfinkling1-p030-q1",
   "source": "adfinkling1",
   "sourceTitle": "ADF Inkling Part 1",
   "page": 30,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling1-p030.jpg",
   "stem": "What does the data model for an application describe?",
   "options": [
    "The color scheme of the forms",
    "The data the application reads from and writes to the database and how it is stored (tables and columns)",
    "The list of users who can log in",
    "The Git branching strategy"
   ],
   "answer": 1,
   "explanation": "The data model describes the data your application reads from and writes to the database and how it is stored. Foundation tables such as user, cmdb_ci, and task are shared across applications. The database design underpins the entire application."
  },
  {
   "id": "adfinkling1-p053-q1",
   "source": "adfinkling1",
   "sourceTitle": "ADF Inkling Part 1",
   "page": 53,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling1-p053.jpg",
   "stem": "Which of the following is a valid method for creating a data table for a custom application?",
   "options": [
    "Only creating a brand-new table from scratch",
    "Extend an existing table, create a new table, or upload a spreadsheet/PDF",
    "Tables can only be created by ServiceNow support",
    "Tables must always extend the Task table"
   ],
   "answer": 1,
   "explanation": "Table creation methods are: Extend an existing table (copies a parent and adds child fields), Create a new table from scratch, or Upload a spreadsheet/PDF (App Engine Enterprise only). These can be combined."
  },
  {
   "id": "adfinkling1-p054-q1",
   "source": "adfinkling1",
   "sourceTitle": "ADF Inkling Part 1",
   "page": 54,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling1-p054.jpg",
   "stem": "What is the primary benefit of EXTENDING an existing ServiceNow table rather than creating a brand-new base table?",
   "options": [
    "It uses fewer characters in the namespace",
    "You inherit the functionality already built into ServiceNow for the base table",
    "It prevents the table from having any fields",
    "It removes the need for access controls"
   ],
   "answer": 1,
   "explanation": "Extending an existing table inherits the functionality built into ServiceNow for the base table (fields, business logic, workflows). Starting from a blank-slate table gives you the opportunity to script and configure all behaviors yourself."
  },
  {
   "id": "adfinkling1-p055-q1",
   "source": "adfinkling1",
   "sourceTitle": "ADF Inkling Part 1",
   "page": 55,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling1-p055.jpg",
   "stem": "How can you view the existing business logic (Business Rules, Client Scripts, ACLs, etc.) configured for a table?",
   "options": [
    "Only by reading the system logs",
    "Use the Configure option from a list's column context menu, or type <table name>.config in the filter navigator",
    "Delete the table and recreate it",
    "Export the table to a spreadsheet"
   ],
   "answer": 1,
   "explanation": "Use the Configure option to see existing business logic for a table — from a list, open the column context menu (ellipsis) and select Configure > All, or type <table_name>.config in the filter navigator."
  },
  {
   "id": "adfinkling1-p056-q1",
   "source": "adfinkling1",
   "sourceTitle": "ADF Inkling Part 1",
   "page": 56,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling1-p056.jpg",
   "stem": "Which six fields are created by default on every new ServiceNow table?",
   "options": [
    "sys_id, sys_created_on, sys_created_by, sys_updated_on, sys_updated_by, sys_mod_count",
    "number, state, priority, assigned_to, opened_by, short_description",
    "name, label, type, value, active, order",
    "sys_id, parent, child, scope, prefix, namespace"
   ],
   "answer": 0,
   "explanation": "Every new table gets six default fields: Sys ID [sys_id] (GUID), Created [sys_created_on], Created by [sys_created_by], Updated [sys_updated_on], Updated by [sys_updated_by], and Updates [sys_mod_count] (count of updates)."
  },
  {
   "id": "adfinkling1-p056-q2",
   "source": "adfinkling1",
   "sourceTitle": "ADF Inkling Part 1",
   "page": 56,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling1-p056.jpg",
   "stem": "What is the field type of the Sys ID [sys_id] field, and what is its purpose?",
   "options": [
    "String; stores the record number",
    "GUID; the unique record identifier for all records, automatically populated by the system",
    "glide_date_time; stores the insert timestamp",
    "Numeric; counts updates"
   ],
   "answer": 1,
   "explanation": "sys_id is a GUID — the Unique Record Identifier for all records, automatically populated by the system on insert. sys_created_on and sys_updated_on are glide_date_time; sys_mod_count is numeric."
  },
  {
   "id": "adfinkling1-p058-q1",
   "source": "adfinkling1",
   "sourceTitle": "ADF Inkling Part 1",
   "page": 58,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling1-p058.jpg",
   "stem": "Which requirement must be met before a table can be extended?",
   "options": [
    "The table must be a database view",
    "The table must have the Extensible option selected; you cannot extend a system or database view table",
    "The table must be empty",
    "The table must be in global scope"
   ],
   "answer": 1,
   "explanation": "A table must have the Extensible option selected to be extended. You cannot extend a system table or a database view table. (Also: the User Approval workflow activity works with all tables, but other Approval activities work only with tables that extend Task.)"
  },
  {
   "id": "adfinkling1-p060-q1",
   "source": "adfinkling1",
   "sourceTitle": "ADF Inkling Part 1",
   "page": 60,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling1-p060.jpg",
   "stem": "In a table's Application Access settings, what does selecting 'All application scopes' for 'Can read/create/update/delete' do?",
   "options": [
    "It blocks all other scopes from the table",
    "It allows scripts from other application scopes to access (read/create/update/delete) the table",
    "It deletes the table's data",
    "It applies the restriction to the current application's own scope"
   ],
   "answer": 1,
   "explanation": "Application Access provides runtime protection against read/create/update/delete from scripts and web service calls. 'This application scope only' gives complete runtime protection; 'All application scopes' allows other privately-scoped apps to access it. These options never apply to the current app's own scope."
  },
  {
   "id": "adfinkling1-p060-q2",
   "source": "adfinkling1",
   "sourceTitle": "ADF Inkling Part 1",
   "page": 60,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling1-p060.jpg",
   "stem": "What does the 'Allow configuration' option on a table's Application Access do?",
   "options": [
    "Allows the table to be deleted by any user",
    "Allows application developers working from OTHER application scopes to write scripts (such as Business Rules) for this table",
    "Disables all access controls on the table",
    "Makes the table read-only"
   ],
   "answer": 1,
   "explanation": "'Allow configuration' lets application developers working from other application scopes write scripts (e.g., Business Rules) for this table. This is distinct from the runtime read/create/update/delete access options."
  },
  {
   "id": "adfinkling1-p061-q1",
   "source": "adfinkling1",
   "sourceTitle": "ADF Inkling Part 1",
   "page": 61,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling1-p061.jpg",
   "stem": "When is an application menu (module) created, and what does the default module display?",
   "options": [
    "Never automatically; you must always build it manually",
    "Once a table exists in the application scope; the default module displays a list of all records from the table",
    "Only after publishing to the Store; it displays a form",
    "When a Business Rule runs; it displays a report"
   ],
   "answer": 1,
   "explanation": "The application menu is created once a table exists in the app scope. The default module name is the plural of the table's name and always displays a list of all records (no default records). Reload the browser after adding menus/modules."
  },
  {
   "id": "adfinkling1-p063-q1",
   "source": "adfinkling1",
   "sourceTitle": "ADF Inkling Part 1",
   "page": 63,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling1-p063.jpg",
   "stem": "What does leaving the Roles field BLANK on a module configuration do?",
   "options": [
    "Hides the module from everyone",
    "Inherits the application's roles, making the module visible to all users",
    "Restricts the module to admins only",
    "Deletes the module"
   ],
   "answer": 1,
   "explanation": "If the module's Roles field is left blank, the application's roles are inherited and the module is visible to all users. The 'Override application menu roles' option lets users access a module even without permission to view the containing application menu (they still need the module's role)."
  },
  {
   "id": "adfinkling1-p065-q1",
   "source": "adfinkling1",
   "sourceTitle": "ADF Inkling Part 1",
   "page": 65,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling1-p065.jpg",
   "stem": "What is the default JavaScript Mode for a new custom application, and where do you change it?",
   "options": [
    "Compatibility Mode; in the Business Rule",
    "ECMAScript 2021 (ES12); from the App settings / Custom Application record",
    "ES5 Standards Mode; in the dictionary",
    "It cannot be changed"
   ],
   "answer": 1,
   "explanation": "ECMAScript 2021 (ES12) is the default JavaScript Mode. You can switch the mode from the App settings and related links (gear icon) on the application's Custom Application record, where you can also bundle the app into an Update Set."
  },
  {
   "id": "adfinkling1-p066-q1",
   "source": "adfinkling1",
   "sourceTitle": "ADF Inkling Part 1",
   "page": 66,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling1-p066.jpg",
   "stem": "In ServiceNow Studio, where is the current scope of the application file you are editing displayed?",
   "options": [
    "In the top banner only",
    "In the bottom left corner of the screen; it changes as you switch between files",
    "It is never displayed",
    "Only in the URL"
   ],
   "answer": 1,
   "explanation": "In Studio, the scope of each application file is visible in the bottom-left corner and changes as you switch files. Because you can have multiple scopes open at once, always double-check you are in the correct scope when creating records."
  },
  {
   "id": "adfinkling1-p070-q1",
   "source": "adfinkling1",
   "sourceTitle": "ADF Inkling Part 1",
   "page": 70,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling1-p070.jpg",
   "stem": "What is required to link a ServiceNow application to a Git source control repository?",
   "options": [
    "The source_control role only",
    "Admin permissions, plus configuring the network protocol, repository URL, branch, and credential via Source Control > Link to Source Control",
    "A ServiceNow Store account",
    "Nothing; all apps are linked automatically"
   ],
   "answer": 1,
   "explanation": "Source Control integration is available for all custom apps and works with GitLab, GitHub, Bitbucket, etc. In Studio, open the App details page and select Source Control > Link to Source Control, then configure protocol, URL, branch, and credential. Linking requires admin permissions."
  },
  {
   "id": "adfinkling1-p071-q1",
   "source": "adfinkling1",
   "sourceTitle": "ADF Inkling Part 1",
   "page": 71,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling1-p071.jpg",
   "stem": "In Git/source control terminology used by ServiceNow, what is a 'tag'?",
   "options": [
    "A copy of a repository under a new account",
    "The process of sending the local application to the ServiceNow repository",
    "A point-in-time marker that, once set, cannot be modified and can be used to create a branch",
    "A collection of files in a Git database"
   ],
   "answer": 2,
   "explanation": "A tag is a point-in-time marker; once set it cannot be modified, and it can be used to create a branch in ServiceNow. (A fork is a copy of a repo under a new account; a repository is a collection of files in a Git database.)"
  },
  {
   "id": "adfinkling1-p072-q1",
   "source": "adfinkling1",
   "sourceTitle": "ADF Inkling Part 1",
   "page": 72,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling1-p072.jpg",
   "stem": "By default, what is the name of the definitive branch in a Git repository, and how is the ServiceNow default branch initially set?",
   "options": [
    "master; set to 'main' automatically",
    "main; set by default to sn_instances/<instance_name> unless changed via glide.source_control.default_branch_name",
    "trunk; always named after the application",
    "dev; set to the user's name"
   ],
   "answer": 1,
   "explanation": "The default Git branch is named 'main'. In Studio, once linked, the default branch value is sn_instances/<instance_name>. Setting glide.source_control.default_branch_name to 'main' makes the branch auto-merge with the repository's main branch instead of requiring a merge request."
  },
  {
   "id": "adfinkling1-p073-q1",
   "source": "adfinkling1",
   "sourceTitle": "ADF Inkling Part 1",
   "page": 73,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling1-p073.jpg",
   "stem": "What is true about a Git stash in ServiceNow Studio?",
   "options": [
    "You can pick and choose which changes to stash",
    "Creating a stash takes ALL local changes and must be created before a commit; it can be applied to any branch",
    "A stash permanently deletes local changes",
    "Stashes can only be applied to the branch they were created from"
   ],
   "answer": 1,
   "explanation": "A stash is a locally stored set of changes — creating one takes ALL local changes (you can't pick and choose) and must be done before committing. Stashes move changes between branches and can be applied to any branch, including the one they were created from."
  },
  {
   "id": "adfinkling1-p076-q1",
   "source": "adfinkling1",
   "sourceTitle": "ADF Inkling Part 1",
   "page": 76,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling1-p076.jpg",
   "stem": "According to the course, when should you use an Update Set instead of Source Control?",
   "options": [
    "For complex apps with multiple developers and CI/CD pipelines",
    "For simple configuration changes, a small team or single developer making linear changes, and quick fixes",
    "Never; Source Control is always required",
    "Only when publishing to the Store"
   ],
   "answer": 1,
   "explanation": "Use Update Sets for simple configuration changes, small teams or single developers making linear changes, and quick fixes/patches. Use Source Control for complex apps with multiple simultaneous developers, advanced branching/merging, and DevOps/CI-CD practices."
  },
  {
   "id": "adfinkling1-p074-q1",
   "source": "adfinkling1",
   "sourceTitle": "ADF Inkling Part 1",
   "page": 74,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling1-p074.jpg",
   "stem": "During application development, what is a key purpose of Update Sets?",
   "options": [
    "To run server-side scripts on a schedule",
    "To capture and track customizations to application tables, fields, and records, including why a change was made",
    "To replace the need for a data model",
    "To grant developer roles"
   ],
   "answer": 1,
   "explanation": "Update Sets capture changes made to an application — tracking customizations to tables, fields, and records; storing customizations; and recording why a change was made. They support version control and can be used in both development and deployment."
  },
  {
   "id": "adfinkling1-p075-q1",
   "source": "adfinkling1",
   "sourceTitle": "ADF Inkling Part 1",
   "page": 75,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling1-p075.jpg",
   "stem": "How is using an Update Set during development often described, and how do you finalize it?",
   "options": [
    "Like a backup; you finalize it by deleting it",
    "Like pressing 'Record' to capture changes; you finalize by changing its State to Complete",
    "Like a Git commit; you finalize by tagging it",
    "Like a branch; you finalize by merging"
   ],
   "answer": 1,
   "explanation": "An Update Set is like pressing 'Record' — all changes are recorded into it. To stop recording, set the Update Set's State to Complete (from Studio's Deployment tab), which closes the set so no further changes are captured."
  },
  {
   "id": "adfinkling1-p081-q1",
   "source": "adfinkling1",
   "sourceTitle": "ADF Inkling Part 1",
   "page": 81,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling1-p081.jpg",
   "stem": "Where in the main ServiceNow application navigator can you access ServiceNow Studio?",
   "options": [
    "System Definitions > ServiceNow Studio",
    "Applications > ServiceNow Studio",
    "System Policy > ServiceNow Studio",
    "System Applications > ServiceNow Studio (Applications menu)"
   ],
   "answer": 3,
   "explanation": "ServiceNow Studio is accessed via the Applications module (System Applications > ServiceNow Studio / Applications > ServiceNow Studio). Studio provides a unified IDE experience for scoped and global application development."
  },
  {
   "id": "adfinkling1-p085-q1",
   "source": "adfinkling1",
   "sourceTitle": "ADF Inkling Part 1",
   "page": 85,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling1-p085.jpg",
   "stem": "For a table that EXTENDS another table, what determines the fields shown on its default list?",
   "options": [
    "The list always starts empty",
    "The fields depend on the parent table's fields and list",
    "Only the six system fields are shown",
    "The child table's first three fields alphabetically"
   ],
   "answer": 1,
   "explanation": "For extended tables, the default list (and default form) fields depend on the parent table's fields and list/form. A non-extended table gets a default list, while its default form starts empty because none of the six default fields are set to display."
  },
  {
   "id": "adfinkling1-p087-q1",
   "source": "adfinkling1",
   "sourceTitle": "ADF Inkling Part 1",
   "page": 87,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling1-p087.jpg",
   "stem": "What is the recommended labeling convention when adding a field to a table?",
   "options": [
    "Capitalize every word in the label",
    "Capitalize only the first letter of the first word in the label",
    "Use all uppercase letters",
    "Match the label exactly to the column name"
   ],
   "answer": 1,
   "explanation": "When adding fields, capitalize only the first letter of the first word in the label. You add fields to your own table (not the base table), define the data Type, and configure column parameters before saving."
  },
  {
   "id": "adfinkling1-p088-q1",
   "source": "adfinkling1",
   "sourceTitle": "ADF Inkling Part 1",
   "page": 88,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling1-p088.jpg",
   "stem": "Why is it important to choose a field's data type carefully when creating it?",
   "options": [
    "The type controls the field's color on the form",
    "Changing the type later can result in data loss",
    "Field types cannot be set after table creation",
    "Only string fields are allowed in scoped apps"
   ],
   "answer": 1,
   "explanation": "Choose the field type carefully because changing the type later can result in data loss. Use string fields for unstructured text, date/date-time fields for dates, and choice lists or reference fields to limit options rather than free-form text."
  },
  {
   "id": "adfinkling1-p089-q1",
   "source": "adfinkling1",
   "sourceTitle": "ADF Inkling Part 1",
   "page": 89,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling1-p089.jpg",
   "stem": "When you reconfigure the LABEL of an inherited field on a child table, what is the effect?",
   "options": [
    "The label changes on both the parent and child tables",
    "The label changes only for the current (child) table, not the parent table(s)",
    "The underlying column name is renamed everywhere",
    "The field is deleted from the parent"
   ],
   "answer": 1,
   "explanation": "Configuring a field's label changes the label only for the current table, not the parent table(s). Because only the label changes (not the column name), this can cause confusion, so use it with caution."
  },
  {
   "id": "adfinkling1-p090-q1",
   "source": "adfinkling1",
   "sourceTitle": "ADF Inkling Part 1",
   "page": 90,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling1-p090.jpg",
   "stem": "Which statement about deleting fields from a table is correct?",
   "options": [
    "Inherited fields can be deleted just like user-defined fields",
    "User-defined fields can be deleted, but inherited fields cannot; deleting a field deletes no table records",
    "Deleting a field also deletes all records in the table",
    "Fields can only be deleted by ServiceNow support"
   ],
   "answer": 1,
   "explanation": "User-defined fields can be deleted (via the gear icon > Delete field icon > confirm). Inherited fields cannot be deleted. Deleting a field does not delete any table records. In Table Builder you must first clear the column's data."
  },
  {
   "id": "adfinkling1-p091-q1",
   "source": "adfinkling1",
   "sourceTitle": "ADF Inkling Part 1",
   "page": 91,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling1-p091.jpg",
   "stem": "After creating new fields, how do they get onto a form versus onto a list view?",
   "options": [
    "Both are added automatically",
    "New fields appear in the form's available fields to drag-and-drop, but are NOT automatically added to a list view",
    "Neither requires any action",
    "Only list views require dragging fields"
   ],
   "answer": 1,
   "explanation": "New fields are added to the list of available form fields, ready to drag and drop onto the form. They are NOT automatically added to a list view — to add them to a list, use the Personalize List gear, select columns, arrange them, and Save."
  },
  {
   "id": "adfinkling1-p092-q1",
   "source": "adfinkling1",
   "sourceTitle": "ADF Inkling Part 1",
   "page": 92,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling1-p092.jpg",
   "stem": "Which of the following is a recommended form design guideline?",
   "options": [
    "Place two-column layouts at the bottom of the section",
    "Use a single full-width column for short fields",
    "Place important fields like record number/name at the top and read top to bottom",
    "Avoid using sections to keep forms in one long block"
   ],
   "answer": 2,
   "explanation": "Good form design: logical layout with sections, meaningful labels, tooltips, place important fields (record number/name) at the top, read top to bottom, two-column layouts near the top, full-width single-column for large text fields, and keep forms as short as possible."
  },
  {
   "id": "adfinkling1-p094-q1",
   "source": "adfinkling1",
   "sourceTitle": "ADF Inkling Part 1",
   "page": 94,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling1-p094.jpg",
   "stem": "In a classic form, when do section tabs appear, and what is the platform default?",
   "options": [
    "Tabs appear only when there is one section; default is no tabs",
    "Tabs appear when there are two or more sections; the default behavior is tabbed layout",
    "Tabs never appear automatically",
    "Tabs appear only on mobile"
   ],
   "answer": 1,
   "explanation": "Tabs only appear when there are two or more sections. The baseline/default behavior is to display a tabbed layout, so users do not see all fields at once. You can disable section tabs in user Preferences > Display."
  },
  {
   "id": "adfinkling1-p096-q1",
   "source": "adfinkling1",
   "sourceTitle": "ADF Inkling Part 1",
   "page": 96,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling1-p096.jpg",
   "stem": "What is the purpose of a tooltip (Hint) on a form field, and a best practice for it?",
   "options": [
    "It permanently labels the field; make it as long as possible",
    "It clarifies what information the user should enter; keep it short (one line) since it is only visible for a few seconds",
    "It validates the field's data type",
    "It sets the field's default value"
   ],
   "answer": 1,
   "explanation": "Tooltips (hints) help clarify what information a user should enter. Keep them short — one line is best — because they are only visible for a few seconds. Use the Hint, Annotation, or Help fields for longer descriptions."
  },
  {
   "id": "adfinkling2-p001-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 1,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p001.jpg",
   "stem": "What is Form Builder used for, and how do you access it from a record?",
   "options": [
    "To write Business Rules; via System Definition",
    "To add and configure form elements (fields, formatters, embedded lists), select views, apply policies/rules, and preview; access via Configure > Form Builder (opens in a new window)",
    "To create tables; via the dictionary",
    "To run ATF tests; via Diagnostics"
   ],
   "answer": 1,
   "explanation": "Form Builder lets you add/configure form elements (fields, formatters, embedded lists), select which views layouts apply to, apply policies and rules, and preview customizations. From a record, access it via Configure > Form Builder (it opens in a new window); also reachable from Related Links or Table Builder's Forms tab."
  },
  {
   "id": "adfinkling2-p004-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 4,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p004.jpg",
   "stem": "What does a View Rule do?",
   "options": [
    "It deletes a view",
    "It forces a particular form View from the server based on a contextual condition (e.g., the logged-in user's relationship to the record) — and can't be bypassed by injecting query strings into the URL",
    "It changes a field's label",
    "It sets an ACL"
   ],
   "answer": 1,
   "explanation": "View Rules ensure a specific View is forced from the server in certain cases — and even injecting query strings into the URL can't override it. You use the filter condition builder to set a contextual condition (e.g., about the currently logged-in user's relationship to the record)."
  },
  {
   "id": "adfinkling2-p011-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 11,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p011.jpg",
   "stem": "On a script record, what is the Messages field used for?",
   "options": [
    "Setting the trigger condition",
    "Localization — strings the script outputs are listed there, and if a matching key exists in sys_ui_message for the user's language, the localized version is shown",
    "Documenting the author",
    "Aborting the transaction"
   ],
   "answer": 1,
   "explanation": "Every script has a trigger (when to execute) and a Script field (what to do). The Description field is for documentation; the Messages field is for localization — output strings placed there are translated via matching sys_ui_message records for the user's language."
  },
  {
   "id": "adfinkling2-p014-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 14,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p014.jpg",
   "stem": "When are a UI Policy's conditions re-evaluated, and when are they NOT?",
   "options": [
    "On every database change including imports",
    "Only when a user manually changes a field on the form; they are NOT re-evaluated for changes via UI Action, Context Menu, Import Set, web services, or the List Editor",
    "Never after form load",
    "Only on submit"
   ],
   "answer": 1,
   "explanation": "UI Policy conditions are only re-checked when a user manually changes a field on a form. They are NOT evaluated when a change comes from a UI Action, Context Menu action, an Import Set, web services, or the List Editor. Use the Condition Builder rather than scripting for performance; blank conditions always execute."
  },
  {
   "id": "adfinkling2-p016-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 16,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p016.jpg",
   "stem": "In a UI Policy's Advanced view, what is required if the Global checkbox is NOT selected, and what limitation applies to scripts?",
   "options": [
    "Nothing changes",
    "You must specify the View the UI Policy applies to (the View field appears only when Global is off), and a script can only act on fields that are part of the selected form view",
    "The policy is disabled",
    "It applies to all extended tables automatically"
   ],
   "answer": 1,
   "explanation": "Global means the UI Policy applies to all views. If Global is not selected, you must specify the View; the View field is visible only when Global is off. A script can only act on fields that are part of the selected form view. 'Reverse if false' reverses actions and runs Execute-if-false when conditions are false; 'Inherit' applies to extended tables."
  },
  {
   "id": "adfinkling2-p017-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 17,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p017.jpg",
   "stem": "What can a UI Policy SCRIPT do that UI Policy Actions cannot, and where does it execute?",
   "options": [
    "Run server-side queries; on the server",
    "Show/hide entire SECTIONS of a form (actions can hide fields but not sections), create more complex conditions, and add/change/validate data — executing client-side with full client-side JavaScript",
    "Modify ACLs; asynchronously",
    "Send email; on the MID server"
   ],
   "answer": 1,
   "explanation": "The Script tab (Advanced view, Run scripts checkbox) lets developers create conditions beyond the condition builder, work with data, and show/hide form sections — note fields can be hidden via UI Policy Actions but SECTIONS cannot. UI Policy scripts execute client-side with full client-side JavaScript (Execute if true / Execute if false)."
  },
  {
   "id": "adfinkling2-p021-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 21,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p021.jpg",
   "stem": "Comparing Client Scripts and UI Policies, which is unique to Client Scripts?",
   "options": [
    "Execute on form load",
    "Execute on list field value change (onCellEdit) and access to a field's prior value (oldValue) — UI Policies cannot do these",
    "Execute after Client Scripts",
    "Access to the Condition Builder"
   ],
   "answer": 1,
   "explanation": "Both run client-side and use the same API. Client Scripts can execute on list field value changes (onCellEdit) and access a field's prior value (oldValue); UI Policies cannot. UI Policies execute AFTER Client Scripts, have access to the Condition Builder, and don't require scripting — so prefer them for show/hide/mandatory/read-only when possible."
  },
  {
   "id": "adfinkling2-p022-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 22,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p022.jpg",
   "stem": "Why does impersonation affect a g_user-based client script, as in an onLoad that greets g_user.firstName?",
   "options": [
    "g_user executes server-side and ignores impersonation",
    "g_user executes client-side using the session's current user — so if an admin impersonates Beth Anglin, g_user reflects Beth (the alert would say 'Welcome Beth')",
    "g_user always shows the admin",
    "g_user cannot read the first name"
   ],
   "answer": 1,
   "explanation": "g_user is instantiated client-side and holds information about the current session user. Because impersonation changes the session user, g_user reflects the impersonated user — e.g., an admin impersonating Beth Anglin (who has hr_agent) would see 'Welcome Beth'. g_form holds the form's fields/values; g_user holds user info and role-checking methods."
  },
  {
   "id": "adfinkling2-p025-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 25,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p025.jpg",
   "stem": "How do scoped client scripts differ from global ones, and which API can NOT be re-enabled?",
   "options": [
    "No difference",
    "Scoped client scripts are wrapped in an immediately-invoked function expression (IIFE), making some APIs (jQuery, Prototype $, etc.) unavailable; glide.script.block.client.globals=false re-enables many, but GlideRecord can never be turned back on",
    "Scoped scripts run server-side; GlideAjax can't be re-enabled",
    "Global scripts are wrapped; $ can't be re-enabled"
   ],
   "answer": 1,
   "explanation": "Scoped client scripts are wrapped in an IIFE, so certain APIs are modified or unavailable (e.g., $/$$ Prototype, jQuery/$j, $F). Setting glide.script.block.client.globals to false makes inaccessible APIs available per-application, but GlideRecord is the only API that cannot be turned back on (GlideAjax can)."
  },
  {
   "id": "adfinkling2-p029-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 29,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p029.jpg",
   "stem": "How does a Display Business Rule pass data to a client-side script, and what is a key constraint?",
   "options": [
    "Via g_form; values can be any type",
    "Via the g_scratchpad object (which has no properties until populated); ALL property values must be passed as strings, and g_scratchpad does not exist on mobile",
    "Via current; only numbers",
    "Via a REST message; only on insert"
   ],
   "answer": 1,
   "explanation": "A Display Business Rule populates the g_scratchpad object (e.g., g_scratchpad.prop1 = current.field1) so any client-side script can read it (g_form.setValue('description', g_scratchpad.prop1)). g_scratchpad has no properties by default; all values must be passed as strings; and g_scratchpad does not exist on the mobile platform."
  },
  {
   "id": "adfinkling2-p034-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 34,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p034.jpg",
   "stem": "What are the three methods to publish an application, and what is each best for?",
   "options": [
    "Update Set, Git, Store — backup, version control, sale",
    "Publish to Update Set (backup/transfer to another instance), Publish to the application repository (deploy to instances in the same company), Publish to the ServiceNow Store (share/sell to other companies)",
    "Export XML, Clone, Email — all the same purpose",
    "Source control only"
   ],
   "answer": 1,
   "explanation": "Three publish methods: Update Set (snapshot of all app config records — backup/auditing or transfer to a test/prod instance outside the stack), the application repository (deploy completed apps to all instances in the same company), and the ServiceNow Store (share or sell to other companies). By default, Update Sets capture configuration, not data."
  },
  {
   "id": "adfinkling2-p037-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 37,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p037.jpg",
   "stem": "What is the rule about moving Update Sets between instances on different family releases?",
   "options": [
    "You can move freely in both directions with no risk",
    "You can always load an Update Set from an OLDER family release onto a NEWER one; loading a NEWER release's Update Set onto an OLDER instance requires extra testing and may cause outages or data loss",
    "Update Sets can only move within the same release",
    "Newer-to-older is always safe"
   ],
   "answer": 1,
   "explanation": "An Update Set created on an older family release can always be loaded on a newer release. Loading an Update Set created on a NEWER family release onto an instance running an OLDER release requires additional testing — updates may not produce the same functionality and, in extreme cases, can cause outages or data loss. Avoid where possible."
  },
  {
   "id": "adfinkling2-p039-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 39,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p039.jpg",
   "stem": "What is required for the ServiceNow application repository to work across a company's instances?",
   "options": [
    "The instances must be on different family releases",
    "The glide.appcreator.company.code value must be the SAME on all instances (a maint-only property), and the admin role is required",
    "Each instance needs a unique company code",
    "A Store subscription"
   ],
   "answer": 1,
   "explanation": "The application repository is a central repository for published scoped apps, enabling install/uninstall/update across instances belonging to the same company. The glide.appcreator.company.code value must be identical on all instances (a maint-only property), and the admin role is required. Versions must be unique when publishing."
  },
  {
   "id": "adfinkling2-p041-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 41,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p041.jpg",
   "stem": "What is the best practice about where to do development relative to instances where apps are installed?",
   "options": [
    "Develop on any instance with the app installed",
    "Do NOT do development work on instances where apps are installed; only develop on the dev instance — administrators must apply updates (there are no forced updates)",
    "Always develop on production",
    "Development can happen anywhere"
   ],
   "answer": 1,
   "explanation": "Applications in the repository appear on the All Apps tab; badges indicate available updates. Best practice: do not develop on instances where apps are installed — only develop on dev. Administrators must manually apply updates; there are no forced updates."
  },
  {
   "id": "adfinkling2-p042-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 42,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p042.jpg",
   "stem": "What is the difference between rolling back and uninstalling an application?",
   "options": [
    "They are identical",
    "Rollback reverts to the previous installation (does not affect the global application record); Uninstall removes the app from the instance but not from the Repository, so it can be re-installed at any time",
    "Rollback deletes the repository copy; uninstall keeps it",
    "Both permanently delete the app everywhere"
   ],
   "answer": 1,
   "explanation": "Roll back returns the app to its previous installed version and does not affect the global application record. Uninstall removes the application from an instance but not from the Repository, so it can be re-installed at any time (confirm by typing 'uninstall')."
  },
  {
   "id": "adfinkling2-p054-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 54,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p054.jpg",
   "stem": "If a user has access to the System Definition > Tables module, what can they see, and what messages indicate restricted access?",
   "options": [
    "Only their own records; no messages",
    "All tables (including tables whose records they can't see); restricted access shows 'Number of rows removed from this list by Security constraints' or 'Security constraints prevent access to requested page'",
    "Nothing; the module is admin-only",
    "All records in every table"
   ],
   "answer": 1,
   "explanation": "A user with access to System Definition > Tables can see all tables, even ones whose records they can't view (they can also try <table>.list in the navigator). Depending on permissions, a list may show 'Number of rows removed from this list by Security constraints', or the page won't render ('Security constraints prevent access to requested page')."
  },
  {
   "id": "adfinkling2-p056-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 56,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p056.jpg",
   "stem": "What does the 'Override application menu roles' option on a module do?",
   "options": [
    "It hides the module from everyone",
    "It allows users WITHOUT access to the application menu to still access a module they are authorized for (the module appears even without the menu)",
    "It removes all role requirements",
    "It deletes the application menu"
   ],
   "answer": 1,
   "explanation": "Module access is controlled by roles (users without the role can't see the module). The 'Override application menu roles' option lets a user who lacks permission to see the application menu still access a module they're authorized for — the user sees it in addition to the specified module."
  },
  {
   "id": "adfinkling2-p057-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 57,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p057.jpg",
   "stem": "What role must a user be elevated to in order to create or edit Access Controls, and what is ServiceNow's default security approach?",
   "options": [
    "admin; allow by default",
    "security_admin (elevated); the approach is to DENY access by default — ACL rules define the permissions required to gain access",
    "itil; deny by default",
    "No role; allow by default"
   ],
   "answer": 1,
   "explanation": "Access Controls can only be created/edited in Studio if the user is elevated to the security_admin role (Elevate Role in the user preferences menu). ServiceNow's security approach is to deny access by default; ACL rules define the permissions that must be met. The four basic ACLs (create/read/write/delete) can be auto-generated when creating tables."
  },
  {
   "id": "adfinkling2-p059-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 59,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p059.jpg",
   "stem": "In ACL evaluation, what does a table.None rule control versus a table.field rule?",
   "options": [
    "They are interchangeable",
    "table.None applies to a table's records (a row) — if denied, no field rule can grant access; table.field applies to one specific field; table.* applies to every field with no field-specific ACL",
    "table.None applies to one field; table.field applies to the row",
    "Neither affects access"
   ],
   "answer": 1,
   "explanation": "table.None applies to a table's records (the row) — users must pass it to see the list/form, and if row access is denied, no field-level rule can grant access. table.field applies to a single field (if the row is allowed but the field denied, the field is hidden). table.* applies to every field that has no field-specific ACL."
  },
  {
   "id": "adfinkling2-p063-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 63,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p063.jpg",
   "stem": "What is the guidance on whether to create a table.* (star) ACL?",
   "options": [
    "Always create one for every table",
    "Use a * ACL to easily EXCLUDE fields (it grants access to all fields without a field-specific rule and excludes other roles); do NOT use a * ACL when you want to easily INCLUDE fields",
    "Never create a * ACL",
    "* ACLs grant access to all roles"
   ],
   "answer": 1,
   "explanation": "A table.* Read ACL grants access to all fields that lack a field-specific rule and excludes other roles. So use a * ACL to easily exclude fields; do not use one if you want to easily include fields. Misusing it can inadvertently revoke a role's access to a field unless that role also passes the field-level rule."
  },
  {
   "id": "adfinkling2-p064-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 64,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p064.jpg",
   "stem": "What is the order in which record ACL rules are processed, and what must a user pass to access a field?",
   "options": [
    "Field rules first, then table rules; pass either",
    "Table ACL rules first (most specific to most general) — failing denies all fields; then field ACL rules (most specific to most general); a user must pass BOTH the table and field rules",
    "Only the field rule matters",
    "Most general to most specific; pass any one"
   ],
   "answer": 1,
   "explanation": "Record ACLs are processed table rules first (most specific to most general) — if a user fails the table ACL, they're denied all fields even if a field rule would pass. Then field ACL rules are matched (most specific to most general). A user must pass BOTH the table and field ACL rules to access a field."
  },
  {
   "id": "adfinkling2-p065-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 65,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p065.jpg",
   "stem": "An Access Control grants access only if which checks all evaluate to true?",
   "options": [
    "Role OR Condition OR Script (any one)",
    "Role (user has a listed role or list is empty) AND Security attribute/Conditions AND Condition field AND Script — all must be true, evaluated independently in order",
    "Only the Script",
    "Only the Role"
   ],
   "answer": 1,
   "explanation": "An ACL allows access only if ALL of these evaluate to true: Roles (user has a listed role, or the list is empty), Security attribute/Conditions (met or empty), Condition field (true or empty), and Script (evaluates to true / sets answer=true, or empty). They're evaluated independently and all must be true."
  },
  {
   "id": "adfinkling2-p066-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 66,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p066.jpg",
   "stem": "Where do Access Control scripts execute, and what should you avoid for performance?",
   "options": [
    "Client-side; avoid g_form",
    "Server-side (can use any server-side logic); avoid GlideRecord queries in ACL scripts as they can adversely impact performance — useful methods include gs.hasRole(), gs.getUserID(), current.isNewRecord()",
    "On the MID server; avoid gs methods",
    "Asynchronously; avoid current"
   ],
   "answer": 1,
   "explanation": "Access Control scripts execute server-side and can use any server-side logic. For best performance, avoid GlideRecord queries in them. Useful methods: GlideSystem user methods like hasRole(), getUserName(), getUserID(); and the GlideRecord method current.isNewRecord()."
  },
  {
   "id": "adfinkling2-p067-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 67,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p067.jpg",
   "stem": "How do you enable field-level ACL debugging to see which ACL rules apply and their results?",
   "options": [
    "System Logs > Events",
    "System Security > Debugging > Debug Security Rules — a bug icon then appears beside each field with an ACL; stop with Debugging > Stop",
    "Diagnostics > Script Tracer",
    "It cannot be debugged"
   ],
   "answer": 1,
   "explanation": "Enable ACL debugging via System Security > Debugging > Debug (Security Rules). A small bug icon then appears beside each field with an ACL; selecting it lists the ACL rules and their evaluation results (shown in order: roles, security attribute, condition, script). Stop via System Security > Debugging > Stop."
  },
  {
   "id": "adfinkling2-p070-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 70,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p070.jpg",
   "stem": "Why are GlideSystem methods preferred over client-side scripting for controlling access?",
   "options": [
    "They are easier to write",
    "They execute server-side, which is better for performance AND security (client-side checks like g_user.hasRole() are easily bypassed) — methods include gs.hasRole(), and GlideRecord canCreate/canRead/canWrite/canDelete",
    "They run faster on the client",
    "They don't require any role"
   ],
   "answer": 1,
   "explanation": "Controlling access with server-side GlideSystem methods is better than client-side strategies for both performance and security (client checks are easily defeated). Methods include gs.getUser(), gs.getUserID(), gs.hasRole(), and GlideRecord's canCreate(), canRead(), canWrite(), canDelete(). A Business Rule can use current.canRead() / setAbortAction(true)."
  },
  {
   "id": "adfinkling2-p073-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 73,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p073.jpg",
   "stem": "How does Application Access relate to Access Controls, and what is the default when access is granted to all scopes?",
   "options": [
    "It replaces ACLs entirely",
    "Application Access is evaluated IN ADDITION to ACLs, configured per-table; it governs runtime CRUD, web service, and script access — and when set to All application scopes, the default is to allow READ access only",
    "It only affects client scripts",
    "It overrides ACLs"
   ],
   "answer": 1,
   "explanation": "Application Access is evaluated in addition to Access Controls and is configured table-by-table (the Application Access tab). It governs CRUD, web service API access, and script access. The 'web services' and 'Allow configuration' options are only selectable when Accessible from is All application scopes, where the default is to allow read access only."
  },
  {
   "id": "adfinkling2-p074-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 74,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p074.jpg",
   "stem": "What happens at runtime when an out-of-scope script attempts an operation the table's Application Access does not allow?",
   "options": [
    "A runtime error is thrown and execution halts",
    "The unauthorized operation is silently SKIPPED and ServiceNow continues running normally (no runtime error); application access does NOT apply to scripts in the same scope",
    "The script is deleted",
    "The whole transaction rolls back"
   ],
   "answer": 1,
   "explanation": "Application Access applies to all server-side scripts EXCEPT scripts executing in the same scope. When access is denied (e.g., an out-of-scope script tries insert/update/delete that's not allowed), the offending operation is skipped at runtime — it does NOT cause a runtime error; ServiceNow continues normally."
  },
  {
   "id": "adfinkling2-p076-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 76,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p076.jpg",
   "stem": "What are the three Caller Access (restricted caller access) options for cross-scope calls?",
   "options": [
    "Allow, Deny, Log",
    "None (approved/denied per Accessible from), Caller Tracking (auto-approved, tracked with status Allowed), Caller Restriction (manually approved, tracked with status Requested)",
    "Read, Write, Execute",
    "Public, Private, Protected"
   ],
   "answer": 1,
   "explanation": "Caller Access acts on the Accessible from value. Options: None (cross-scope calls approved/denied per Accessible from), Caller Tracking (automatically approved, tracked in the Restricted Caller Access table as Allowed), and Caller Restriction (manually approved, tracked as Requested). It's enabled by the Scoped Application Restricted Caller Access plugin."
  },
  {
   "id": "adfinkling2-p077-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 77,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p077.jpg",
   "stem": "When do Protection policies apply, and what do the options None/Read-only/Protected mean?",
   "options": [
    "They apply on the dev instance always",
    "They apply when an app is migrated from the Application repository or installed from the ServiceNow Store (NOT via update set); None = viewable/editable, Read-only = viewable not editable, Protected = not viewable",
    "They apply only to tables",
    "They prevent uninstalling the app"
   ],
   "answer": 1,
   "explanation": "Protection policies safeguard intellectual property by making artifact logic read-only or hidden. They apply when an application is migrated from the Application repository OR installed from the ServiceNow Store (not when migrated via update set). Options: None (viewable/editable), Read-only (viewable, not editable), Protected (not viewable). On the dev instance, use ACLs/roles instead."
  },
  {
   "id": "adfinkling2-p086-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 86,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p086.jpg",
   "stem": "What does a Flow consist of, and what happens each time a flow is triggered?",
   "options": [
    "Only actions; nothing is recorded",
    "Properties, a trigger, action(s), and the data collected/created (and possibly conditions); Flow Designer creates an event entry each time a flow is triggered",
    "Only a trigger; a record is deleted",
    "Only conditions; a notification is sent"
   ],
   "answer": 1,
   "explanation": "All flows consist of properties, a trigger, action(s), and the data collected or created (and may contain conditions). The trigger is the activity that initiates the flow (record- or time-based) — Flow Designer creates an event entry each time a flow is triggered. Data is stored as pills in the Data Panel."
  },
  {
   "id": "adfinkling2-p087-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 87,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p087.jpg",
   "stem": "Which of the following is a SCHEDULED (time-based) flow trigger type?",
   "options": [
    "Created or Updated",
    "Daily, Weekly, Monthly, Run Once, or Repeat",
    "MetricBase",
    "Service Catalog"
   ],
   "answer": 1,
   "explanation": "Record triggers include Created, Updated, and Created or Updated. Application triggers include MetricBase and Service Catalog. Scheduled (time-based) triggers include Daily, Weekly, Monthly, Run Once, and Repeat."
  },
  {
   "id": "adfinkling2-p088-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 88,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p088.jpg",
   "stem": "When you test a flow in Flow Designer, what happens regarding the trigger conditions, and where should you test?",
   "options": [
    "It only runs if conditions are met; test on production",
    "The flow executes whether or not the trigger conditions are met (you supply input data); always test on a NON-production instance, then review the flow execution details",
    "It never actually runs; test anywhere",
    "It deletes test records automatically on production"
   ],
   "answer": 1,
   "explanation": "Testing a flow asks for the necessary input data and runs the flow as if the trigger conditions were met (it executes whether or not they actually are). Always test on a non-production instance so flow record changes can't interfere with production data, then use the flow execution details to verify it ran correctly."
  },
  {
   "id": "adfinkling2-p090-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 90,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p090.jpg",
   "stem": "What is IntegrationHub, and what plugin does it require?",
   "options": [
    "A reporting tool; no plugin",
    "An extension of Flow Designer providing low-code/no-code integration with third-party apps via reusable components; it requires the com.glide.hub.integrations plugin",
    "A debugger; the script_debugger plugin",
    "A testing tool; the ATF plugin"
   ],
   "answer": 1,
   "explanation": "IntegrationHub extends Flow Designer to provide low-code to no-code integration capabilities with third-party applications, encapsulating integration actions into reusable components (e.g., Microsoft Teams, Azure AD, REST web service request step). It requires the com.glide.hub.integrations plugin."
  },
  {
   "id": "adfinkling2-p091-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 91,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p091.jpg",
   "stem": "What is a spoke in Flow Designer, and when is it activated?",
   "options": [
    "A custom action; on demand",
    "A scoped application containing Flow Designer actions for a specific application/record type; it is activated when its parent application is activated (e.g., activating Visual Task Board activates the VTB Spoke)",
    "A trigger; on a schedule",
    "A subflow; when published"
   ],
   "answer": 1,
   "explanation": "A spoke is a scoped application containing Flow Designer actions for a specific application or record type. Spokes activate when their parent application is activated (e.g., activating Visual Task Board activates the Visual Task Board Spoke). Default spokes include ITSM, Customer Service, Field Service, etc.; some require an IntegrationHub subscription."
  },
  {
   "id": "adfinkling2-p095-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 95,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p095.jpg",
   "stem": "What are application properties, and what type of field can you NOT create a property for?",
   "options": [
    "Per-user settings; choice fields",
    "A single location for configurable application settings (typically editable only by app admins) whose values can be retrieved and used in scripts; you cannot create properties for REFERENCE fields (those require reference tables)",
    "Database tables; string fields",
    "Roles; date fields"
   ],
   "answer": 1,
   "explanation": "Application properties provide a single location for all configurable application settings; typically only application administrators can edit them, and values can be retrieved and used in scripts. You cannot create properties for reference fields — reference fields require the use of reference tables."
  },
  {
   "id": "adfinkling2-p098-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 98,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p098.jpg",
   "stem": "On a System Property, why is the 'Ignore cache' checkbox important?",
   "options": [
    "It speeds up the page",
    "Selecting Ignore cache ensures the application uses the CURRENT property value rather than a cached value",
    "It encrypts the value",
    "It makes the property read-only"
   ],
   "answer": 1,
   "explanation": "When defining a System Property, confirm the Ignore cache checkbox is selected so the application uses the current property value rather than a cached one. It's also recommended to provide a description, as that text appears in the properties list. Properties can be added to a category directly or as a separate application file."
  },
  {
   "id": "adfinkling2-p100-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 100,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p100.jpg",
   "stem": "To build an application properties page accessible from a module, what Link type and Arguments syntax are used?",
   "options": [
    "List of Records; table=...",
    "URL (from Arguments:); system_properties_ui.do?sysparm_title=<header text>&sysparm_category=<System Property Category name>",
    "Script; gs.getProperty()",
    "Documentation Link; help.do"
   ],
   "answer": 1,
   "explanation": "A properties module uses Link type 'URL (from Arguments:)' with the syntax system_properties_ui.do?sysparm_title=<property form header text>&sysparm_category=<System Property Category name>. Set the Read and Write roles to the application's admin role. Using %20 for a space in Arguments is optional."
  },
  {
   "id": "adfinkling2-p104-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 104,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p104.jpg",
   "stem": "What triggers a Scheduled Script Execution, and what does it NEVER respond to?",
   "options": [
    "A button click; database changes",
    "A defined schedule/specific time (recurring), e.g., periodic queries or modifications; it is NEVER triggered by user actions or modifications to records",
    "An event; a schedule",
    "A REST call; a form load"
   ],
   "answer": 1,
   "explanation": "A Scheduled Script Execution is automated logic that runs at a specific time and/or recurringly (e.g., find overdue requests, close records resolved too long, assign unassigned records). It is NEVER triggered by actions taken by users or by modifications to records — only by its schedule."
  },
  {
   "id": "adfinkling2-p110-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 110,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p110.jpg",
   "stem": "What is an Event in ServiceNow, and what must be true for ServiceNow to respond to one?",
   "options": [
    "An action that runs automatically; nothing",
    "An entry in the Event Queue indicating something notable happened (not itself an action) — it must be REGISTERED in the Event Registry, and logic must be written to respond to it; unregistered events get no response",
    "A scheduled job; it must be active",
    "A notification; it must have a recipient"
   ],
   "answer": 1,
   "explanation": "An Event is an entry in the Event Queue indicating something notable occurred — it is not an action itself; logic must be written to respond. ServiceNow can only respond to events that are registered in the Event Registry. Unless otherwise specified, user-created events appear in the default queue. Events are usually generated in Business Rules or Workflow scripts."
  },
  {
   "id": "adfinkling2-p112-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 112,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p112.jpg",
   "stem": "Which GlideSystem method generates (queues) an Event, and what does the conventional signature look like?",
   "options": [
    "gs.addInfoMessage(name)",
    "gs.eventQueue('<event_name>', object, parm1, parm2) — object is current/previous/a GlideRecord; by convention parm1=gs.getUserID(), parm2=gs.getUserName() when unused",
    "gs.fireEvent(name)",
    "gs.log(event)"
   ],
   "answer": 1,
   "explanation": "Generate an event with gs.eventQueue('<event_name>', object, parm1, parm2). event_name is the registered name; object is current, previous, or a GlideRecord; parm1 and parm2 are optional strings — by convention pass gs.getUserID() and gs.getUserName() respectively when not otherwise needed. View fired events in System Logs > Events."
  },
  {
   "id": "adfinkling2-p114-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 114,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p114.jpg",
   "stem": "What are the configurable components of an Email Notification, and what else can send email?",
   "options": [
    "Only the subject; nothing else",
    "What to send, to whom, and when to send it; the Notification (sysevent_email_action) is created in Studio, and the Notification workflow activity can also send email (often unnecessary since notifications auto-send on insert/update/event)",
    "Only the recipient; a Business Rule",
    "How to send; a Client Script"
   ],
   "answer": 1,
   "explanation": "An Email Notification configures what to send, to whom, and when (record insert/update or event generation). You create a Notification [sysevent_email_action] in Studio. The Notification workflow activity can also send email, though it may be unnecessary since notifications are automatically sent on inserts/updates and event generation."
  },
  {
   "id": "adfinkling2-p117-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 117,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p117.jpg",
   "stem": "How can Email Notification recipients be specified?",
   "options": [
    "Only by selecting ServiceNow users",
    "Statically or dynamically — Users (or any valid email address), Groups, or Users/groups in a reference field; recipients need not be ServiceNow users (options include Send to event creator, Exclude delegates, Subscribable, Event parm contains recipient)",
    "Only by group",
    "Only the admin"
   ],
   "answer": 1,
   "explanation": "Recipients can be static or dynamic and need not be ServiceNow users. Options: Users (individuals or any valid email), Groups, and Users/groups in field (a reference field). Advanced options include Exclude delegates, Send to event creator, Subscribable, and 'Event parm 1/2 contains recipient' (visible only when Send when = Event is fired)."
  },
  {
   "id": "adfinkling2-p118-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 118,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p118.jpg",
   "stem": "In an Email Notification message, how do you dynamically reference a field value from the triggering record?",
   "options": [
    "With {{field}}",
    "Enclose the field name in ${} — e.g., ${short_description}; an Email template's Subject is inherited but its Message is replaced by the notification's Message",
    "With [field]",
    "With %field%"
   ],
   "answer": 1,
   "explanation": "To dynamically reference a field from the triggering record, enclose the field name in ${} — e.g., ${short_description}. If an Email template is used, the Subject is inherited from the template, but the template's Message is replaced by the notification's Message. Content can be static or dynamic."
  },
  {
   "id": "adfinkling2-p119-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 119,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p119.jpg",
   "stem": "In notification content, what is the difference between ${URI} and ${URI_REF}?",
   "options": [
    "They are identical",
    "${URI} renders the word LINK to open the triggering record; ${URI_REF} renders the record's Display Name as the link; ${ref_field.URI} / ${ref_field.URI_REF} do the same for a related record",
    "${URI} is for email; ${URI_REF} is for SMS",
    "${URI} opens a related record; ${URI_REF} opens the current record"
   ],
   "answer": 1,
   "explanation": "${URI} displays the word 'LINK' to open the triggering record; ${URI_REF} displays the record's Display Name as the clickable link. For a related record, ${<reference_field>.URI} shows LINK and ${<reference_field>.URI_REF} shows the related record's display name."
  },
  {
   "id": "adfinkling2-p120-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 120,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p120.jpg",
   "stem": "What does the 'Preview Notification' feature allow?",
   "options": [
    "Sending the notification immediately to all users",
    "Testing a notification (examining recipients, subject, and message body) WITHOUT having to create the conditions that would actually generate it",
    "Editing the email template",
    "Scheduling the notification"
   ],
   "answer": 1,
   "explanation": "Preview Notification lets you test a notification without creating the real conditions to generate it. After creating the notification, select Preview Notification, choose the Event Creator and a Preview Record, and examine the recipient list (including skipped users), subject, and message body."
  },
  {
   "id": "adfinkling2-p121-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 121,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p121.jpg",
   "stem": "What objects are available to a Script Action when responding to an Event?",
   "options": [
    "g_form and g_user",
    "current, the object passed in from gs.eventQueue(), and the event object",
    "previous and g_scratchpad",
    "Only the current record"
   ],
   "answer": 1,
   "explanation": "A Script Action responds to an Event and has access to: current, the object passed in from gs.eventQueue(), and the event object. Configure the Event name it responds to, an optional Condition Script (loads the script only if true), and the server-side Script. Active is not selected by default."
  },
  {
   "id": "adfinkling2-p140-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 140,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p140.jpg",
   "stem": "What is the role of an Import Set table and a Transform Map in the data import process?",
   "options": [
    "The import set table is the final destination; the transform map deletes data",
    "Import data is loaded into a staging Import Set table; a Transform Map defines the field relationships from the import set table to fields in the target (destination) table where the data is placed",
    "They both store the final data",
    "The transform map is the source; the import set is the target"
   ],
   "answer": 1,
   "explanation": "Import Sets pull data into ServiceNow, storing it in a staging import set table (not directly in the destination). A Transform Map determines the relationships between fields in the import set table and fields in the existing target table. The target table is where data lands post-transformation. The import process skips records when instance data matches the imported data."
  },
  {
   "id": "adfinkling2-p142-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 142,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p142.jpg",
   "stem": "When configuring a Transform Map, what does selecting 'Run business rules' control?",
   "options": [
    "Whether the map is active",
    "Whether business rules, workflows, approval engines, auditing, and field normalization run while the transformation inserts/updates data into the target table",
    "Whether fields auto-map",
    "Whether the import set is deleted"
   ],
   "answer": 1,
   "explanation": "A Transform Map is a set of field maps from the source (import set) table to the target table, and can be reused. Options include Run business rules — which runs business rules, workflows, approval engines, auditing, and field normalization while the transform inserts/updates data into the target — plus Enforce mandatory fields, Copy empty fields, and coalesce settings."
  },
  {
   "id": "adfinkling2-p143-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 143,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p143.jpg",
   "stem": "What is the difference between the Auto map matching fields utility and the Mapping Assist utility?",
   "options": [
    "They are identical",
    "Auto map matching fields automatically matches fields when import-set and target field NAMES are identical; Mapping Assist provides a visual environment to manually map fields (and can map one source field to multiple destination fields)",
    "Auto map is manual; Mapping Assist is automatic",
    "Both only work for the State field"
   ],
   "answer": 1,
   "explanation": "Fields can be matched automatically (if names are identical) or manually. The Automatic Mapping Utility (Auto map matching fields related link) matches identically named fields. The Mapping Assist Utility provides a visual environment to specify mappings and can map a single source field to multiple destination fields."
  },
  {
   "id": "adfinkling2-p149-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 149,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p149.jpg",
   "stem": "In web services, what is the difference between consuming and publishing, and how does ServiceNow consume a third-party service?",
   "options": [
    "Consuming publishes a service; publishing consumes one",
    "Consuming = invoking another service (done by creating an Outbound REST Message, callable from Business Rules, UI Actions, Client Scripts, Workflow, Flow Designer); Publishing = exposing a service for others to invoke (an Inbound web service)",
    "Both create inbound services",
    "Both require Flow Designer"
   ],
   "answer": 1,
   "explanation": "A consumer invokes/consumes published web services — ServiceNow consumes a third-party service by creating a new Outbound REST Message (callable from Business Rules, UI Actions, Client Scripts, Workflow, and Flow Designer), performing CRUD per parameters/security. A publisher exposes web services for others to consume by creating a new Inbound web service."
  },
  {
   "id": "adfinkling2-p150-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 150,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p150.jpg",
   "stem": "On an Outbound REST Message form, what does the Endpoint represent, and which authentication types are available?",
   "options": [
    "The local table; only Basic",
    "The URL of the data to be retrieved/updated/deleted; authentication types are None, Basic, or OAuth 2.0 (mutual authentication uses SSL certificates)",
    "The script; only OAuth",
    "The MID server; no authentication"
   ],
   "answer": 1,
   "explanation": "On the REST Message form, the Endpoint is the URL of the data to retrieve, update, or delete. Authentication type can be None, Basic, or OAuth 2.0; mutual authentication establishes trust by exchanging SSL certificates. REST Messages are reusable in Business Rules, Email Notifications, and other server-side scripts."
  },
  {
   "id": "adfinkling2-p151-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 151,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p151.jpg",
   "stem": "When do HTTP methods appear on a REST Message form?",
   "options": [
    "Immediately upon creation",
    "Not until the record is saved for the first time; HTTP methods retrieve, update, create, and delete data at the endpoint (and the user must be authorized)",
    "Only after testing",
    "Only in Flow Designer"
   ],
   "answer": 1,
   "explanation": "HTTP methods do not appear on the REST Message form until the record is saved for the first time. HTTP methods are used to retrieve, update, create, and delete data at the endpoint, and the user must be authorized to access the data."
  },
  {
   "id": "adfinkling2-p153-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 153,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p153.jpg",
   "stem": "When adding an HTTP Query Parameter to a REST Message, how should the Name and Value be configured?",
   "options": [
    "Include the = sign in the Name; hard-code the Value",
    "Name matches a parameter from the endpoint's API docs (do NOT include the = sign, it's added automatically); enclose the Value in ${} so a dynamic value is substituted at runtime",
    "Name is arbitrary; Value must be a number",
    "Both must be enclosed in quotes"
   ],
   "answer": 1,
   "explanation": "For an HTTP Query Parameter, provide a Name matching a parameter from the endpoint API documentation — do not include the equals sign (it's inserted automatically at runtime). Add a Value enclosed in ${} so a dynamically determined value is substituted at runtime."
  },
  {
   "id": "adfinkling2-p155-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 155,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p155.jpg",
   "stem": "When testing a REST Message, what does an HTTP status of 200 indicate?",
   "options": [
    "The data returned is exactly correct",
    "That a connection was made — but you should always check the results to verify you received what was expected",
    "An authentication failure",
    "The endpoint is down"
   ],
   "answer": 1,
   "explanation": "A status of 200 indicates a connection was made, but you should always check the results to verify you received what was expected. Testing requires configuring Variable Substitutions for all required HTTP Query Parameters before posting the message. The Parameters field shows the variables passed."
  },
  {
   "id": "adfinkling2-p158-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 158,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p158.jpg",
   "stem": "A REST response can be JSON or XML. How are values extracted from each?",
   "options": [
    "Both use g_form.getValue()",
    "JSON: parse with JSON.parse(response.getBody()) then access object properties; XML: use new XMLDocument2(), parseXML(responseBody), then getNodeText('//path')",
    "Both use XMLDocument2()",
    "Neither can be parsed in script"
   ],
   "answer": 1,
   "explanation": "You must understand the returned data's structure to extract values. For JSON: var obj = JSON.parse(response.getBody()); then read obj.path.to.value. For XML: var xmlDoc = new XMLDocument2(); xmlDoc.parseXML(responseBody); then xmlDoc.getNodeText('//latitude'). The JSON Script Include (accessible from all scopes) provides methods for JSON."
  },
  {
   "id": "adfinkling2-p160-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 160,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p160.jpg",
   "stem": "What is the REST API Explorer, what important caution applies, and how do its HTTP methods map to operations?",
   "options": [
    "A read-only doc tool; safe on production; GET creates",
    "A tool that creates endpoints/methods/variables to send REST requests to a ServiceNow instance — it IMPACTS database records, so do NOT use it on production; POST=Create, PUT=Update(replace), PATCH=Update(modify), DELETE=Delete, GET=Retrieve",
    "A flow designer; safe everywhere; PUT creates",
    "A debugger; production-only; POST deletes"
   ],
   "answer": 1,
   "explanation": "The REST API Explorer (System Web Services > REST > REST API Explorer) creates endpoints, methods, and variables for sending REST requests to a ServiceNow instance. It impacts database records — do NOT practice on production. HTTP methods: POST=Create, PUT=Update (replace), PATCH=Update (modify), DELETE=Delete/remove, GET=Retrieve."
  },
  {
   "id": "adfinkling2-p161-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 161,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p161.jpg",
   "stem": "What is the default API in the REST API Explorer, and what does it let you do?",
   "options": [
    "The Import Set API; only read",
    "The Table API — it performs CRUD operations (create/read/update/delete) on a table's records; you cannot change the instance URL while exploring (but you can in the generated script)",
    "The Attachment API; only delete",
    "The Aggregate API; only count"
   ],
   "answer": 1,
   "explanation": "The Table API is the default API in the REST API Explorer and allows create, read, update, and delete (CRUD) operations on existing tables' records (POST/GET/PUT/etc.). You cannot change the instance URL while exploring, but you can in the generated script. Endpoint variables are configured via Query Parameters per the selected operation."
  },
  {
   "id": "adfinkling2-p165-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 165,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p165.jpg",
   "stem": "When posting a REST message from inside an Email Notification message, what two requirements apply?",
   "options": [
    "Use <script> tags and gs.print()",
    "Enclose the script in <mail_script></mail_script> tags, and replace any logging/printing methods (gs.info/debug/warn/error) with template.print()",
    "Use plain JavaScript and console.log()",
    "No script is allowed in notifications"
   ],
   "answer": 1,
   "explanation": "To run script in an Email Notification message, enclose it in <mail_script></mail_script> tags and replace logging/printing methods (gs.info/debug/warning/error) with template.print(). There's no syntax checking in the Notification Message field, so develop and test the script in a Business Rule first, then copy it over."
  },
  {
   "id": "adfinkling2-p166-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 166,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p166.jpg",
   "stem": "What is true about Notification (Email) Scripts?",
   "options": [
    "They are stored inside each Notification and can't be reused",
    "They are reusable, are NOT stored in Notifications (managed under System Notification > Email > Notification Email Scripts), have required syntax auto-inserted, and are referenced with ${mail_script:<name>}",
    "They run client-side",
    "They cannot be tested at all and have no recommended workaround"
   ],
   "answer": 1,
   "explanation": "Notification (Email) Scripts are reusable and are NOT stored in the Notifications themselves; manage them under System Notification > Email > Notification Email Scripts. Required syntax is auto-inserted and they're referenced via ${mail_script:<name>}. There's no test mechanism other than generating email, so develop them first as Business Rules for easy testing."
  },
  {
   "id": "adfinkling2-p178-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 178,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p178.jpg",
   "stem": "What is the difference between the Test Management application and the Automated Test Framework (ATF)?",
   "options": [
    "They are the same tool",
    "Test Management is a tool for MANUAL software testing (e.g., user acceptance testing, Test Board); ATF is a tool for AUTOMATIC/unit testing (regression, test-driven development) within a ServiceNow instance",
    "Test Management is automatic; ATF is manual",
    "Both only do regression testing"
   ],
   "answer": 1,
   "explanation": "Test Management streamlines MANUAL testing (Test Management 1.0 covers user acceptance testing; 2.0 adds industry-standard data model and the Test Board UI). The Automated Test Framework (ATF) is for AUTOMATIC software testing and unit testing within an instance — regression testing, test-driven development, etc. By default, the property to run automated tests is disabled to prevent running on production."
  },
  {
   "id": "adfinkling2-p180-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 180,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p180.jpg",
   "stem": "How does ATF protect data, and why is it upgrade-safe and license-free?",
   "options": [
    "It backs up the whole database first; it requires a separate license",
    "ATF tracks the data created by tests and rolls back the changes after testing (changes made in the same session during a test are also rolled back); because it's part of the platform, it works after upgrades and needs no separate license",
    "It never modifies data; it needs the atf license",
    "It only runs on production; it requires a plugin purchase"
   ],
   "answer": 1,
   "explanation": "ATF tracks the data being created by tests and rolls back changes after testing (including changes you make in the same session while a test runs). Because ATF is part of the platform, it works after upgrades and does not require a separate license purchase. Roles include atf_test_admin and atf_test_designer."
  },
  {
   "id": "adfinkling2-p181-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 181,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p181.jpg",
   "stem": "Which is an example of an ATF test step that requires NO scripting?",
   "options": [
    "Perform a server-side assert",
    "Open a new form, Set field values, Validate field values/attributes, Submit the form",
    "Run unit tests",
    "Output server variables"
   ],
   "answer": 1,
   "explanation": "ATF test steps come from many categories (Form, Server, REST, etc.). No-scripting examples include: Open a new form, Set field values, Validate field values and attributes, and Submit the form. Server-side scripting steps include performing unit tests, outputting variables, and server-side asserts on inserted records."
  },
  {
   "id": "adfinkling2-p183-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 183,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p183.jpg",
   "stem": "Before you can run ATF tests, what must be enabled and why is it off by default?",
   "options": [
    "The script_debugger role; to prevent debugging",
    "The 'Enable test/test suite execution' property (Automated Test Framework > Administration > Properties), set to true on sub-production instances — it defaults to false so tests don't accidentally run on production",
    "The flow_designer role; to limit access",
    "Nothing; tests run by default everywhere"
   ],
   "answer": 1,
   "explanation": "To run ATF tests, enable test/test suite execution via Automated Test Framework > Administration > Properties (check the box and save). The default is false specifically so tests don't accidentally run on production systems and corrupt data — set it to true only on sub-production instances."
  },
  {
   "id": "adfinkling2-p187-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 187,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p187.jpg",
   "stem": "What is the Service Catalog, and is a license required to use it?",
   "options": [
    "A reporting tool; yes, a license is required",
    "A categorical listing of items/services that can be ordered or requested; it is part of the Self-Service application and requires NO license; catalog items are organized into Categories",
    "A database table; yes",
    "A scripting API; no, but admin only"
   ],
   "answer": 1,
   "explanation": "The Service Catalog is a categorical listing of things that can be ordered/requested. It is part of the ServiceNow Self-Service application and requires no license. Catalog Items are organized into logical groupings called Categories. It's a user-friendly replacement for forms, can be tied to a workflow/flow, and item scripts run client and server side."
  },
  {
   "id": "adfinkling2-p188-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 188,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p188.jpg",
   "stem": "What are the two possible outcomes when selecting an item from the Service Catalog?",
   "options": [
    "A flow and a subflow",
    "A Record Producer item results in a record being added/modified in a developer-selected table; a Catalog Item results in a Request Item (like ordering from a store)",
    "An email and an event",
    "A report and a dashboard"
   ],
   "answer": 1,
   "explanation": "There are two outcomes: a Record Producer Service Catalog item results in records being added or modified in a table selected by the developer; a (standard) Service Catalog Item results in Request items — very much like ordering from a store."
  },
  {
   "id": "adfinkling2-p190-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 190,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p190.jpg",
   "stem": "What is a record producer, and how does the user interact with it?",
   "options": [
    "A Business Rule that creates records on a schedule",
    "A special type of Service Catalog item that is an alternative to the traditional form — users answer questions (variables) to populate fields in a new database record; it can include graphics, HTML, and help",
    "A report that produces records",
    "A REST endpoint"
   ],
   "answer": 1,
   "explanation": "A record producer is a special Service Catalog item that is an alternative to the traditional form; both create a new record in a database table. Users answer questions to populate fields in the new record, and the record producer form can include graphics, HTML, and help text."
  },
  {
   "id": "adfinkling2-p197-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 197,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p197.jpg",
   "stem": "In a record producer form, how are multi-column layouts defined?",
   "options": [
    "Via a UI Policy",
    "With Container Start and Container End variable types (layout options: one column; two columns alternating sides; two columns one side then the other)",
    "With a script step",
    "Columns cannot be configured"
   ],
   "answer": 1,
   "explanation": "Record producer form columns are defined with Container Start and Container End variable types. Layout options are: one column wide; two columns wide alternating sides; and two columns wide, one side then the other. Variables are configured via the Variables related list; Catalog UI Policies and Catalog Client Scripts enhance the experience."
  },
  {
   "id": "adfinkling2-p199-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 199,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p199.jpg",
   "stem": "What can Catalog Client Scripts do, and where do their available variables come from?",
   "options": [
    "Manage database records server-side",
    "Manage/enhance the catalog UI and UX — get/set variable values and make variable fields read-only, mandatory, or invisible; they apply to catalog items or variable sets, and available variables come from the questions on the record producer form",
    "Send email; from the notification",
    "Define ACLs; from roles"
   ],
   "answer": 1,
   "explanation": "Catalog Client Scripts (like Client Scripts) manage and enhance the UI/UX: get/set variable values and make variable fields read-only, mandatory, or invisible. They can apply to individual catalog items or to variable sets, and the variables available come from the questions on the record producer form."
  },
  {
   "id": "adfinkling2-p200-q1",
   "source": "adfinkling2",
   "sourceTitle": "ADF Inkling Part 2",
   "page": 200,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling2-p200.jpg",
   "stem": "When scripting a record producer (server-side, before the record is written), what is the 'current' object and what must you NOT do?",
   "options": [
    "current is the producer object; always call current.update()",
    "current is the new record (record producer variables map to fields on current); the producer object holds the variable values — and you must NOT call current.update(), because the record is inserted automatically when the script completes",
    "current is a GlideRecord query; call insert()",
    "current is g_form; call submit()"
   ],
   "answer": 1,
   "explanation": "In a record producer server-side script (runs before the record is written), current is the new record — record producer variables map to fields on current, and the producer object holds the variable values. Do NOT call current.update(): the current record is automatically inserted into the database when the script executes."
  },
  {
   "id": "adfinkling3-p003-q1",
   "source": "adfinkling3",
   "sourceTitle": "ADF Inkling Part 3",
   "page": 3,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling3-p003.jpg",
   "stem": "When a record producer is created using the 'Add to Service Catalog' related link, why is a redirect script automatically created?",
   "options": [
    "Because record producers cannot save records without a redirect",
    "Because Service Catalogs have no lists, so there is no traditional return-to-list behavior; the script sends the user to a valid ServiceNow URL",
    "Because every catalog item must redirect to the homepage by law",
    "Because the redirect replaces the need for a workflow"
   ],
   "answer": 1,
   "explanation": "Service Catalogs do not have lists, so they lack the traditional behavior of returning a user to a list view after submission. A redirect script (e.g., producer.redirect = 'catalog_home.do') is auto-created; developers modify it to send users to any valid ServiceNow URL, ideally a familiar page like a home page."
  },
  {
   "id": "adfinkling3-p004-q1",
   "source": "adfinkling3",
   "sourceTitle": "ADF Inkling Part 3",
   "page": 4,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling3-p004.jpg",
   "stem": "When creating a custom Service Catalog category, what is the purpose of the 'Parent' field?",
   "options": [
    "It sets the role required to order items",
    "It defines a parent category, allowing you to create a category hierarchy (sub-categories)",
    "It chooses which catalog the category appears in",
    "It sets the icon for the category"
   ],
   "answer": 1,
   "explanation": "The Parent field designates a parent category, used to build a hierarchy of sub-categories. A custom category (sc_category) also has Title, Catalog, Location, Active, Roles, Icon, Description, Header icon, and Homepage renderer."
  },
  {
   "id": "adfinkling3-p005-q1",
   "source": "adfinkling3",
   "sourceTitle": "ADF Inkling Part 3",
   "page": 5,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling3-p005.jpg",
   "stem": "When adding a category to the Service Catalog, what determines whether the category actually appears in the catalog?",
   "options": [
    "It always appears once Active is checked",
    "It will NOT appear in the list if it has no record producers or catalog items assigned to it",
    "It only appears for admin users",
    "It appears only after a workflow is attached"
   ],
   "answer": 1,
   "explanation": "If a category has no record producers or catalog items assigned to it, it will not appear in the Service Catalog. You add it via Self-Service > Service Catalog > Add content (+), choose the category, and place it with an 'Add here' button."
  },
  {
   "id": "adfinkling3-p007-q1",
   "source": "adfinkling3",
   "sourceTitle": "ADF Inkling Part 3",
   "page": 7,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling3-p007.jpg",
   "stem": "What is the recommended use of a record producer in the Loaner Request application?",
   "options": [
    "To replace the database table",
    "To serve as the application's user interface instead of a standard form, presenting friendly questions to the user",
    "To run server-side business rules on a schedule",
    "To define access controls"
   ],
   "answer": 1,
   "explanation": "A record producer serves as the Loaner Request application's user interface in place of a form. It presents user-friendly questions (variables) and creates a record on the target table when submitted."
  },
  {
   "id": "adfinkling3-p008-q1",
   "source": "adfinkling3",
   "sourceTitle": "ADF Inkling Part 3",
   "page": 8,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling3-p008.jpg",
   "stem": "To make the 'Other' field visible and mandatory only when the depot value is 'Other', which artifact is configured?",
   "options": [
    "A standard UI Policy on the table",
    "A Catalog UI Policy with a catalog condition (depot is Other) and a UI Policy Action setting the variable mandatory",
    "A Business Rule",
    "An Access Control"
   ],
   "answer": 1,
   "explanation": "A Catalog UI Policy applies to a catalog item/record producer. You set the Applies to (Catalog Item), the Catalog item, and Catalog Conditions (depot is Other), then add a Catalog UI Policy Action targeting the variable (Variable name: other, Mandatory: True)."
  },
  {
   "id": "adfinkling3-p009-q1",
   "source": "adfinkling3",
   "sourceTitle": "ADF Inkling Part 3",
   "page": 9,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling3-p009.jpg",
   "stem": "In the publish workflow, what does the 'Publish to Update Set...' related link do for an application?",
   "options": [
    "It commits changes to the Git repository",
    "It pushes everything created so far in the app into a new update set (with a version and description)",
    "It deletes the application",
    "It links the app to source control"
   ],
   "answer": 1,
   "explanation": "'Publish to Update Set...' (from App settings and related links) pushes everything created so far into a new update set; you set the Version number and Description, then Publish. Committing changes (Source Control > Commit changes) is a separate Git operation."
  },
  {
   "id": "adfinkling3-p010-q1",
   "source": "adfinkling3",
   "sourceTitle": "ADF Inkling Part 3",
   "page": 10,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling3-p010.jpg",
   "stem": "Which is a Service Catalog best practice for designing a record producer interface?",
   "options": [
    "Use as many variables as possible for completeness",
    "Use the smallest possible number of variables and clear, carefully worded questions to keep the interface lightweight",
    "Avoid Catalog Client Scripts entirely",
    "Expose the underlying table form to all users"
   ],
   "answer": 1,
   "explanation": "Best practices: use record producers instead of forms for a friendly UI, restrict forms/lists with security and use the catalog as the primary UI, use the smallest number of variables, ask clear and carefully worded questions, and enhance with Catalog UI Policies and Catalog Client Scripts."
  },
  {
   "id": "adfinkling3-p011-q1",
   "source": "adfinkling3",
   "sourceTitle": "ADF Inkling Part 3",
   "page": 11,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling3-p011.jpg",
   "stem": "Where do Service Catalog Item scripts (such as Catalog Client Scripts) execute?",
   "options": [
    "Client-side only",
    "Server-side only",
    "On both the client and server sides",
    "Only during a workflow"
   ],
   "answer": 2,
   "explanation": "Service Catalog Item scripts execute on both the client and server sides. The Service Catalog is a user-friendly replacement for forms; items can be associated with a workflow or flow, and record producers add records to the database."
  },
  {
   "id": "adfinkling3-p013-q1",
   "source": "adfinkling3",
   "sourceTitle": "ADF Inkling Part 3",
   "page": 13,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling3-p013.jpg",
   "stem": "What is the purpose of configuring an Outbound REST Message in the Loaner Request application?",
   "options": [
    "To let other applications call into ServiceNow",
    "To make the application a web service consumer that retrieves data (e.g., latitude/longitude) from a public external web service",
    "To create a new database table",
    "To send email notifications"
   ],
   "answer": 1,
   "explanation": "An Outbound REST Message makes ServiceNow a web service consumer — calling out to an external provider. In the lab it retrieves latitude/longitude from a public geocoding web service to map the location of loaner equipment borrowers."
  },
  {
   "id": "adfinkling3-p015-q1",
   "source": "adfinkling3",
   "sourceTitle": "ADF Inkling Part 3",
   "page": 15,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling3-p015.jpg",
   "stem": "What is true about applications published on the ServiceNow App Store (Store)?",
   "options": [
    "They are never reviewed and can contain anything",
    "They are certified by ServiceNow for compliance with best practices, and after review can be installed on any supported instance; some are free and some are fee-based",
    "They are all free and unvetted",
    "They can only be installed by ServiceNow partners"
   ],
   "answer": 1,
   "explanation": "ServiceNow Store apps are certified by ServiceNow for best-practice compliance; after review and approval they can be installed on any instance running a supported version. Some are free, some fee-based. (In contrast, Developer Share site apps are free but NOT vetted by ServiceNow.)"
  },
  {
   "id": "adfinkling3-p017-q1",
   "source": "adfinkling3",
   "sourceTitle": "ADF Inkling Part 3",
   "page": 17,
   "domain": "App Dev Fundamentals",
   "image": "assets/pages/adfinkling3-p017.jpg",
   "stem": "Which statement about ServiceNow and web services is correct?",
   "options": [
    "ServiceNow instances cannot integrate with external systems",
    "ServiceNow instances can use web services to interact with other applications and external data sources",
    "Web services only work inside a single instance",
    "Record producers prevent the use of web services"
   ],
   "answer": 1,
   "explanation": "ServiceNow instances can use web services to interact with other applications and external data sources. Record producers add records to the database, with item scripts running on both client and server sides."
  },
  {
   "id": "inkling1-p003-q1",
   "source": "inkling1",
   "sourceTitle": "Inkling Part 1",
   "page": 3,
   "domain": "Client-Side Scripting",
   "image": "assets/pages/inkling1-p003.jpg",
   "stem": "The JavaScript engine ServiceNow uses is based on which technology, and which standards does it support?",
   "options": [
    "Google V8; supports only ECMAScript 6",
    "Mozilla Rhino (open-source JavaScript in Java); supports ECMAScript5 and ECMAScript 2021",
    "Node.js; supports only ECMAScript 2021",
    "Java applets; supports ES3 only"
   ],
   "answer": 1,
   "explanation": "ServiceNow lets you customize an instance with JavaScript based on Mozilla Rhino — an open-source implementation of JavaScript written in Java. The engine supports the ECMAScript5 and ECMAScript 2021 standards. Use the Condition Builder for simple logic and scripting for complex behavior."
  },
  {
   "id": "inkling1-p004-q1",
   "source": "inkling1",
   "sourceTitle": "Inkling Part 1",
   "page": 4,
   "domain": "Client-Side Scripting",
   "image": "assets/pages/inkling1-p004.jpg",
   "stem": "Before writing a script in ServiceNow, what is a recommended best practice?",
   "options": [
    "Always script first, then check documentation",
    "Determine whether configuration (e.g., an ACL rule or no-code options) can meet at least 80% of the requirement instead of scripting",
    "Never use Access Control Lists",
    "Script everything to maximize control"
   ],
   "answer": 1,
   "explanation": "Make sure a script is really needed: consider whether an ACL or configuration can do the job, and whether you can achieve at least 80% of requirements via configuration. Scripting less makes upgrades easier to debug and maintain. Stay current with release notes."
  },
  {
   "id": "inkling1-p007-q1",
   "source": "inkling1",
   "sourceTitle": "Inkling Part 1",
   "page": 7,
   "domain": "Client-Side Scripting",
   "image": "assets/pages/inkling1-p007.jpg",
   "stem": "What is the key difference in data access between client-side and server-side scripts?",
   "options": [
    "Client-side scripts access database records; server-side scripts access forms",
    "Client-side scripts have access to data on forms and in lists; server-side scripts have access to database records",
    "Both access only the database",
    "Both access only forms"
   ],
   "answer": 1,
   "explanation": "Where a script executes matters for performance and access. Client-side scripts have access to data on forms and in lists (the browser). Server-side scripts have access to database records. Scripts can also run on a MID Server for third-party integrations."
  },
  {
   "id": "inkling1-p008-q1",
   "source": "inkling1",
   "sourceTitle": "Inkling Part 1",
   "page": 8,
   "domain": "Client-Side Scripting",
   "image": "assets/pages/inkling1-p008.jpg",
   "stem": "What do granular admin roles like client_script_admin and ui_policy_admin provide compared to the full admin role?",
   "options": [
    "They grant broader access than admin",
    "They grant specific access rights (e.g., manage UI Policies but not edit Client Scripts) without granting the broad privileges of the admin role",
    "They remove all administrative access",
    "They are identical to the admin role"
   ],
   "answer": 1,
   "explanation": "Granular admin roles such as business_rule_admin, client_script_admin, script_include_admin, and ui_policy_admin grant specific rights without the broad admin privileges. The full admin role accesses all platform features and data regardless of security constraints, so grant it carefully."
  },
  {
   "id": "inkling1-p009-q1",
   "source": "inkling1",
   "sourceTitle": "Inkling Part 1",
   "page": 9,
   "domain": "Client-Side Scripting",
   "image": "assets/pages/inkling1-p009.jpg",
   "stem": "On an upgraded instance, what must happen before the Syntax Editor is available?",
   "options": [
    "Nothing; it is always enabled",
    "A System Administrator must activate the Syntax Editor [com.glide.syntax_editor] plugin",
    "It must be purchased from the Store",
    "Every user must enable it individually"
   ],
   "answer": 1,
   "explanation": "The Syntax Editor is enabled baseline for new instances, but on upgraded instances a System Administrator must activate the Syntax Editor [com.glide.syntax_editor] plugin. It supports ES2021 mode and offers syntax coloring, auto-indentation, context-sensitive help, macros, and error checking."
  },
  {
   "id": "inkling1-p010-q1",
   "source": "inkling1",
   "sourceTitle": "Inkling Part 1",
   "page": 10,
   "domain": "Client-Side Scripting",
   "image": "assets/pages/inkling1-p010.jpg",
   "stem": "In the Syntax Editor's syntax coloring, what does bold + italicized text indicate?",
   "options": [
    "A syntax error",
    "That the item has a Context menu — right-clicking opens it",
    "A reserved JavaScript keyword",
    "A comment"
   ],
   "answer": 1,
   "explanation": "Bold, italicized text indicates the item has an associated Context menu; right-clicking it opens the menu. Syntax coloring improves readability (e.g., red for strings). You cannot use a JavaScript reserved word as a variable name."
  },
  {
   "id": "inkling1-p012-q1",
   "source": "inkling1",
   "sourceTitle": "Inkling Part 1",
   "page": 12,
   "domain": "Client-Side Scripting",
   "image": "assets/pages/inkling1-p012.jpg",
   "stem": "In the Syntax Editor, what keystroke invokes Context-Sensitive Help to list valid elements/methods at the cursor?",
   "options": [
    "Alt+F8",
    "Ctrl+Space (both Mac and Windows)",
    "Ctrl+S",
    "Tab"
   ],
   "answer": 1,
   "explanation": "Context-Sensitive Help is invoked with Ctrl+Space (Mac/Windows). Typing a period after a valid class name lists its methods, expected parameters, and descriptions; an open parenthesis after a method lists expected parameters."
  },
  {
   "id": "inkling1-p013-q1",
   "source": "inkling1",
   "sourceTitle": "Inkling Part 1",
   "page": 13,
   "domain": "Client-Side Scripting",
   "image": "assets/pages/inkling1-p013.jpg",
   "stem": "Which statement about Context-Sensitive Help in the Syntax Editor is correct?",
   "options": [
    "It works in XML fields and UI Actions",
    "It is disabled for XML fields and UI Actions, and turns off when text no longer matches any suggestion",
    "It always shows every Glide API regardless of input",
    "It only works for server-side scripts"
   ],
   "answer": 1,
   "explanation": "Context-Sensitive Help is disabled for XML fields and UI Actions, and it turns off when the entered text no longer matches any suggestion. Suggestions are part of the Scoped Application API; locally declared object properties also appear. A mismatched keyboard/instance language can cause unexpected behavior."
  },
  {
   "id": "inkling1-p014-q1",
   "source": "inkling1",
   "sourceTitle": "Inkling Part 1",
   "page": 14,
   "domain": "Client-Side Scripting",
   "image": "assets/pages/inkling1-p014.jpg",
   "stem": "In the Syntax Editor Context Menu, what does the 'Find References' option do?",
   "options": [
    "Opens the Glide API documentation",
    "Lists all active files that reference the token (Script Include, API, or table)",
    "Shows the table's data for the current user",
    "Reformats the code"
   ],
   "answer": 1,
   "explanation": "Find References lists all active files that reference the token (a Script Include, API, or table). The context menu also offers Show Definition, Show Data, Open Definition, and Show Documentation. The glide.ui.syntax_editor.context_menu property enables/disables the context menu."
  },
  {
   "id": "inkling1-p016-q1",
   "source": "inkling1",
   "sourceTitle": "Inkling Part 1",
   "page": 16,
   "domain": "Client-Side Scripting",
   "image": "assets/pages/inkling1-p016.jpg",
   "stem": "In the Syntax Editor toolbar, what is the difference between Replace and Replace All?",
   "options": [
    "Replace All asks for confirmation; Replace does not",
    "Replace replaces the next occurrence (confirmation needed); Replace All replaces all occurrences with no confirmation",
    "They are identical",
    "Neither can use regular expressions"
   ],
   "answer": 1,
   "explanation": "Replace replaces the next occurrence and needs confirmation (use Find Next/Previous to move between occurrences); Replace All replaces all occurrences with no confirmation. Format Code applies proper indentation (Ctrl/Cmd+A then Shift+Tab)."
  },
  {
   "id": "inkling1-p019-q1",
   "source": "inkling1",
   "sourceTitle": "Inkling Part 1",
   "page": 19,
   "domain": "Client-Side Scripting",
   "image": "assets/pages/inkling1-p019.jpg",
   "stem": "What is the keyboard shortcut sequence to Format Code (apply standard indentation) in any scripting field across the platform?",
   "options": [
    "Ctrl+S, then Enter",
    "Ctrl/Cmd+A (select all), then Shift+Tab",
    "Alt+F8",
    "Ctrl+Space"
   ],
   "answer": 1,
   "explanation": "To format code, use Ctrl/Cmd+A to select all, then Shift+Tab. The Syntax Editor also auto-indents as you type, and Format Code re-applies indentation. This works across all scripting fields and improves readability."
  },
  {
   "id": "inkling1-p020-q1",
   "source": "inkling1",
   "sourceTitle": "Inkling Part 1",
   "page": 20,
   "domain": "Client-Side Scripting",
   "image": "assets/pages/inkling1-p020.jpg",
   "stem": "How must a regular expression be written when using the Syntax Editor's Search or Replace features?",
   "options": [
    "Enclosed in double quotes",
    "Bracketed by the '/' character (e.g., /g_[a-z]{4}/)",
    "Prefixed with regex:",
    "Wrapped in parentheses"
   ],
   "answer": 1,
   "explanation": "The Search, Replace, and Replace All features can use regular expressions, which must be bracketed by the '/' character — for example, /g_[a-z]{4}/ would match the string g_form."
  },
  {
   "id": "inkling1-p022-q1",
   "source": "inkling1",
   "sourceTitle": "Inkling Part 1",
   "page": 22,
   "domain": "Client-Side Scripting",
   "image": "assets/pages/inkling1-p022.jpg",
   "stem": "By default, how do new client scripts run regarding DOM access, and what disables that restriction?",
   "options": [
    "With full DOM and jQuery access; nothing changes it",
    "In strict mode with direct DOM access disabled (jQuery, prototype, and window object disabled); add the 'Isolate script' field per-script, or set glide.script.blockclientglobals to false",
    "With direct DOM access always enabled",
    "Only in mobile mode"
   ],
   "answer": 1,
   "explanation": "New client scripts run in strict mode with direct DOM access disabled (access to jQuery, prototype, and the window object is disabled). To disable this per-script, add the 'Isolate script' field to the form; globally, set glide.script.blockclientglobals to false."
  },
  {
   "id": "inkling1-p023-q1",
   "source": "inkling1",
   "sourceTitle": "Inkling Part 1",
   "page": 23,
   "domain": "Client-Side Scripting",
   "image": "assets/pages/inkling1-p023.jpg",
   "stem": "How do you insert an Editor Macro in the Syntax Editor, and how do you see the list of available macros?",
   "options": [
    "Press Ctrl+M; type 'macros'",
    "Type the macro name and press Tab; type 'help' then Tab to list available macros",
    "Right-click and choose Insert Macro",
    "They cannot be listed"
   ],
   "answer": 1,
   "explanation": "Editor macros provide shortcuts for commonly used code — type the macro name and press Tab to expand it. Type 'help' then Tab to see the list of available macros (e.g., 'for' + Tab inserts a for-loop template)."
  },
  {
   "id": "inkling1-p024-q1",
   "source": "inkling1",
   "sourceTitle": "Inkling Part 1",
   "page": 24,
   "domain": "Client-Side Scripting",
   "image": "assets/pages/inkling1-p024.jpg",
   "stem": "Where do you create or edit Syntax Editor Macros, and which field's text replaces the macro name?",
   "options": [
    "System Properties; the Name field",
    "System Definition > Syntax Editor Macros; the Text field replaces the name when used",
    "System Logs; the Comments field",
    "Client Scripts; the Description field"
   ],
   "answer": 1,
   "explanation": "Navigate to System Definition > Syntax Editor Macros to create/edit macros. Name is the keyword typed (no special characters), Application is the scope, Comments is the description used by the help macro, and Text is the full macro text that replaces the name. You are responsible for the accuracy of your macros."
  },
  {
   "id": "inkling1-p025-q1",
   "source": "inkling1",
   "sourceTitle": "Inkling Part 1",
   "page": 25,
   "domain": "Client-Side Scripting",
   "image": "assets/pages/inkling1-p025.jpg",
   "stem": "Which type of error CAN the Syntax Checker find versus what it CANNOT?",
   "options": [
    "It finds typos in variable names but not missing semicolons",
    "It finds basic errors (missing braces, missing semicolons, incomplete for-loop arguments) but NOT typos in variable/function/method names",
    "It finds all logic errors",
    "It guarantees the script works as intended"
   ],
   "answer": 1,
   "explanation": "The Syntax Checker finds basic JavaScript errors (missing characters like } or ], missing semicolons, incomplete for-loop arguments, bad function calls) but does NOT find typos in variable, function, or method names. Valid JavaScript passes even if it does not do what you intended."
  },
  {
   "id": "inkling1-p026-q1",
   "source": "inkling1",
   "sourceTitle": "Inkling Part 1",
   "page": 26,
   "domain": "Client-Side Scripting",
   "image": "assets/pages/inkling1-p026.jpg",
   "stem": "What is a key difference in how Client Scripts versus server-side scripts handle saving with syntax errors?",
   "options": [
    "Neither can save with errors",
    "Client-side scripts will save with errors; server-side scripts do not save when a syntax error is present",
    "Server-side scripts save with errors; client scripts do not",
    "Both always refuse to save"
   ],
   "answer": 1,
   "explanation": "Syntax is checked automatically as you type (red = errors, orange/yellow = warnings). Some script types save with syntax errors (Client Scripts) and others do not (server-side scripts) — a server-side save attempt shows a compile error and blocks saving."
  },
  {
   "id": "inkling1-p028-q1",
   "source": "inkling1",
   "sourceTitle": "Inkling Part 1",
   "page": 28,
   "domain": "Client-Side Scripting",
   "image": "assets/pages/inkling1-p028.jpg",
   "stem": "In the Application Navigator, which system property controls how many records appear under 'Your history', and what is the baseline value?",
   "options": [
    "glide.ui.nav.history_length; 30",
    "glide.history.max; 100",
    "glide.ui.history.count; 10",
    "It cannot be changed"
   ],
   "answer": 0,
   "explanation": "The Application Navigator's history shows recently accessed items. Administrators set glide.ui.nav.history_length to increase/decrease the number of records; the baseline value is 30. Favorites are configured per user via the star icon."
  },
  {
   "id": "inkling1-p029-q1",
   "source": "inkling1",
   "sourceTitle": "Inkling Part 1",
   "page": 29,
   "domain": "Client-Side Scripting",
   "image": "assets/pages/inkling1-p029.jpg",
   "stem": "What does typing 'incident.config' in the Application Navigator's filter do?",
   "options": [
    "Opens the Incident form",
    "Displays all the configuration changes/business logic (Business Rules, Client Scripts, ACLs, etc.) made to the incident table",
    "Creates a new incident",
    "Runs a background script"
   ],
   "answer": 1,
   "explanation": "Appending .config after a table name (e.g., incident.config) displays all configuration for that table — Business Rules, Client Scripts, Dictionary Entries, Access Controls, UI Policies, etc. The same is achievable via Configure > All from a form's context menu, but the filter command works without being on the form."
  },
  {
   "id": "inkling1-p033-q1",
   "source": "inkling1",
   "sourceTitle": "Inkling Part 1",
   "page": 33,
   "domain": "Client-Side Scripting",
   "image": "assets/pages/inkling1-p033.jpg",
   "stem": "Which statement about application scope is correct?",
   "options": [
    "An application's scope can be changed at any time",
    "Once scope is assigned to an application it cannot be changed, and there is no migration path to a different scope",
    "Baseline apps like Incident are privately scoped",
    "Global scope easily isolates application data"
   ],
   "answer": 1,
   "explanation": "Every application has a scope that determines which resources are available to other apps. Once assigned, scope cannot be changed and there is no migration path. Baseline apps (Incident, Service Catalog) and pre-scoping custom apps are in global scope, where isolating data is difficult."
  },
  {
   "id": "inkling1-p034-q1",
   "source": "inkling1",
   "sourceTitle": "Inkling Part 1",
   "page": 34,
   "domain": "Client-Side Scripting",
   "image": "assets/pages/inkling1-p034.jpg",
   "stem": "What happens when you try to edit an artifact (e.g., a Client Script) that is in a different scope than your current application scope?",
   "options": [
    "It is editable with no warning",
    "Out-of-scope scripts are read-only; built-in limitations prevent updating artifacts while in a different scope (you can click 'here' to temporarily switch scope)",
    "The artifact is deleted",
    "The scope changes automatically"
   ],
   "answer": 1,
   "explanation": "Out-of-scope scripts are read-only. Built-in limitations prevent developers from updating artifacts while in a different scope, protecting apps from inadvertent modification. You can select the 'here' link to temporarily switch scopes."
  },
  {
   "id": "inkling1-p035-q1",
   "source": "inkling1",
   "sourceTitle": "Inkling Part 1",
   "page": 35,
   "domain": "Client-Side Scripting",
   "image": "assets/pages/inkling1-p035.jpg",
   "stem": "What is true about the namespace identifier prefixed to scoped application artifacts?",
   "options": [
    "It can be changed after creation",
    "It always begins with x_, is set when the app is created, cannot be changed/removed, and global-scope apps do NOT get one",
    "It is optional for scoped apps",
    "Global apps also get an x_ prefix"
   ],
   "answer": 1,
   "explanation": "The system automatically prefixes a namespace identifier (always starting with x_) to scoped application artifacts; it is set at creation and cannot be changed or removed, ensuring artifacts stay tied to their app. Applications in the Global scope do not append a unique namespace identifier."
  },
  {
   "id": "inkling1-p037-q1",
   "source": "inkling1",
   "sourceTitle": "Inkling Part 1",
   "page": 37,
   "domain": "Client-Side Scripting",
   "image": "assets/pages/inkling1-p037.jpg",
   "stem": "Why must you know whether you are using a scoped or global instance when reading ServiceNow API documentation?",
   "options": [
    "Documentation is the same for all scopes",
    "You cannot call a Global Glide API in a scoped application; APIs are documented as Server Scoped or Server Global and may behave differently",
    "Scoped APIs only work in global apps",
    "API behavior never depends on scope"
   ],
   "answer": 1,
   "explanation": "API documentation is presented as Server Scoped (for scoped apps) or Server Global (legacy global apps). You cannot call a global Glide API in a scoped application, so understand your scope. Also verify the docs match your instance version."
  },
  {
   "id": "inkling1-p038-q1",
   "source": "inkling1",
   "sourceTitle": "Inkling Part 1",
   "page": 38,
   "domain": "Client-Side Scripting",
   "image": "assets/pages/inkling1-p038.jpg",
   "stem": "The ServiceNow JavaScript engine has three modes. Which set is correct?",
   "options": [
    "ES3, ES5, ES6",
    "Compatibility Mode, ES5 Standards Mode, and ECMAScript 2021 (ES12)",
    "Strict Mode, Loose Mode, and Debug Mode",
    "Client Mode, Server Mode, and MID Mode"
   ],
   "answer": 1,
   "explanation": "To support existing and new scripts, the engine has three modes: Compatibility Mode, ES5 Standards Mode, and ECMAScript 2021 (ES12). ES2021 is the default for new scoped apps and enables modern syntax like const/let."
  },
  {
   "id": "inkling1-p039-q1",
   "source": "inkling1",
   "sourceTitle": "Inkling Part 1",
   "page": 39,
   "domain": "Client-Side Scripting",
   "image": "assets/pages/inkling1-p039.jpg",
   "stem": "What happens if you use ECMAScript 2021 syntax (e.g., const) while the application's ES2021 mode is turned OFF?",
   "options": [
    "The syntax works the same as with it on",
    "Using ES2021 syntax/features causes errors; var works but const does not",
    "const works but var does not",
    "Nothing changes"
   ],
   "answer": 1,
   "explanation": "With ES2021 mode turned on, you can use ES2021 syntax and features (var and const both work). With it turned off, var works but using ES2021 features like const causes errors."
  },
  {
   "id": "inkling1-p046-q1",
   "source": "inkling1",
   "sourceTitle": "Inkling Part 1",
   "page": 46,
   "domain": "Client-Side Scripting",
   "image": "assets/pages/inkling1-p046.jpg",
   "stem": "What is a Client Script, and where does it execute?",
   "options": [
    "A server-side script that runs on insert; executes on the database",
    "A script that manages the behavior of forms, fields, and lists in real time; executes client-side (in the web browser)",
    "A scheduled job that runs nightly; executes on the MID Server",
    "A REST API; executes in the cloud"
   ],
   "answer": 1,
   "explanation": "Client Scripts manage the behavior of forms, fields, and lists in real time (make fields mandatory, set field values, modify choice lists, show/hide sections, display alerts). They execute client-side in the web browser, so browser-dependent behavior is possible."
  },
  {
   "id": "inkling1-p047-q1",
   "source": "inkling1",
   "sourceTitle": "Inkling Part 1",
   "page": 47,
   "domain": "Client-Side Scripting",
   "image": "assets/pages/inkling1-p047.jpg",
   "stem": "On a Client Script, what is the purpose of the Messages field?",
   "options": [
    "To store the script's execution order",
    "For internationalizing output to the user (strings used in the script are listed for translation via sys_ui_message)",
    "To document who wrote the script",
    "To set the table the script applies to"
   ],
   "answer": 1,
   "explanation": "The Messages field is used to internationalize output — strings the script displays (e.g., 'Hello World') are entered there, one per line, so they can be translated. The Description field documents the script; the Script field holds the logic; the trigger fields depend on the script type."
  },
  {
   "id": "inkling1-p048-q1",
   "source": "inkling1",
   "sourceTitle": "Inkling Part 1",
   "page": 48,
   "domain": "Client-Side Scripting",
   "image": "assets/pages/inkling1-p048.jpg",
   "stem": "On the Client Script form, what does the UI Type field control?",
   "options": [
    "Whether the script is onLoad, onChange, or onSubmit",
    "Whether the script executes for Desktop only, Mobile/Service Portal only, or All environments",
    "The table the script applies to",
    "The execution order"
   ],
   "answer": 1,
   "explanation": "UI Type selects whether the Client Script runs for Desktop only, Mobile/Service Portal only, or All environments. Type selects when it runs (onChange, onLoad, onSubmit, onCellEdit); Table is the related table; Name should follow a standard naming scheme."
  },
  {
   "id": "inkling1-p049-q1",
   "source": "inkling1",
   "sourceTitle": "Inkling Part 1",
   "page": 49,
   "domain": "Client-Side Scripting",
   "image": "assets/pages/inkling1-p049.jpg",
   "stem": "When multiple Client Scripts for the same table have conflicting logic, what controls their execution sequence?",
   "options": [
    "Alphabetical order by name",
    "The Order field — they execute from lowest to highest (conventionally three-digit values like 100, 200)",
    "The creation date",
    "They cannot be ordered"
   ],
   "answer": 1,
   "explanation": "The Order field sets the execution sequence from lowest to highest when multiple Client Scripts for a table conflict. By convention Order uses three-digit numbers (100, 200, 300). The field does not appear on the form baseline — configure the form to add it."
  },
  {
   "id": "inkling1-p050-q1",
   "source": "inkling1",
   "sourceTitle": "Inkling Part 1",
   "page": 50,
   "domain": "Client-Side Scripting",
   "image": "assets/pages/inkling1-p050.jpg",
   "stem": "When does an onLoad() Client Script run, and what can the user do during its execution?",
   "options": [
    "When a field changes; the user can edit freely",
    "When a form loads and before control is given to the user; users cannot modify form fields while it executes",
    "When a record is saved; users can edit",
    "Only on mobile; users are locked out permanently"
   ],
   "answer": 1,
   "explanation": "An onLoad() Client Script runs when a form loads, before control is given to the user — typically to manipulate the form's appearance/content. Users cannot modify fields while it executes. The onLoad() function template (no arguments) is auto-inserted."
  },
  {
   "id": "inkling1-p051-q1",
   "source": "inkling1",
   "sourceTitle": "Inkling Part 1",
   "page": 51,
   "domain": "Client-Side Scripting",
   "image": "assets/pages/inkling1-p051.jpg",
   "stem": "How can an onSubmit() Client Script cancel a form submission?",
   "options": [
    "By calling g_form.abort()",
    "By returning a value of false",
    "By throwing an exception",
    "It cannot cancel submission"
   ],
   "answer": 1,
   "explanation": "An onSubmit() Client Script runs when a form is saved/updated/submitted and is typically used for field validation. It can prevent writing to the database by returning false, which cancels the submission and returns control to the user."
  },
  {
   "id": "inkling1-p052-q1",
   "source": "inkling1",
   "sourceTitle": "Inkling Part 1",
   "page": 52,
   "domain": "Client-Side Scripting",
   "image": "assets/pages/inkling1-p052.jpg",
   "stem": "How many fields does a single onChange() Client Script watch, and how many arguments does its template pass?",
   "options": [
    "All fields; 0 arguments",
    "One field; 5 arguments (control, oldValue, newValue, isLoading, isTemplate)",
    "Two fields; 3 arguments",
    "Any number of fields; 2 arguments"
   ],
   "answer": 1,
   "explanation": "An onChange() Client Script watches exactly ONE field (specified in the Field name field); to watch a second field you need a second Client Script. Its template passes 5 arguments: control, oldValue, newValue, isLoading, and isTemplate."
  },
  {
   "id": "inkling1-p053-q1",
   "source": "inkling1",
   "sourceTitle": "Inkling Part 1",
   "page": 53,
   "domain": "Client-Side Scripting",
   "image": "assets/pages/inkling1-p053.jpg",
   "stem": "Why does the onChange() template begin with 'if (isLoading || newValue === ...) return;'?",
   "options": [
    "To always run the script on load",
    "Because ALL field values change when a form loads — the guard aborts execution during a form load or when newValue has no value",
    "To make the field mandatory",
    "To validate the data type"
   ],
   "answer": 1,
   "explanation": "All field values 'change' when a form loads, which would falsely trigger onChange logic. The leading if statement aborts the script when the change is due to a form load (isLoading) or newValue is empty. You can also check isTemplate to skip template loads."
  },
  {
   "id": "inkling1-p054-q1",
   "source": "inkling1",
   "sourceTitle": "Inkling Part 1",
   "page": 54,
   "domain": "Client-Side Scripting",
   "image": "assets/pages/inkling1-p054.jpg",
   "stem": "What is the purpose of an onCellEdit() Client Script, and what must its callback return?",
   "options": [
    "It runs on a form load; the callback returns the record",
    "It runs when a field is edited directly in a LIST; the callback must return true (continue/commit) or false (stop)",
    "It runs on submit; the callback returns a sys_id",
    "It applies to homepage List Widgets; the callback returns a string"
   ],
   "answer": 1,
   "explanation": "An onCellEdit() Client Script runs when a particular field changes value in a list view. Parameters: sysIDs, table, oldValues, newValue (same for all edited items), and callback. You must pass true (run other scripts / commit the change) or false (stop) to the callback. It does NOT apply to homepage/dashboard List Widgets."
  },
  {
   "id": "inkling1-p055-q1",
   "source": "inkling1",
   "sourceTitle": "Inkling Part 1",
   "page": 55,
   "domain": "Client-Side Scripting",
   "image": "assets/pages/inkling1-p055.jpg",
   "stem": "On a Catalog Client Script, what does the 'Variable name' field do when the Type is onChange?",
   "options": [
    "Names the Catalog Client Script",
    "Identifies which variable (field) to watch for changes",
    "Sets the scope of the script",
    "Selects the catalog item"
   ],
   "answer": 1,
   "explanation": "On a Catalog Client Script, when Type is onChange, the Variable name field identifies which variable (field) to watch for changes. Other fields include Applies to (A Catalog Item or A Variable Set), UI Type, Application (scope), and Type (onChange/onLoad/onSubmit)."
  },
  {
   "id": "inkling1-p058-q1",
   "source": "inkling1",
   "sourceTitle": "Inkling Part 1",
   "page": 58,
   "domain": "Client-Side Scripting",
   "image": "assets/pages/inkling1-p058.jpg",
   "stem": "Which three predefined client-side global objects does ServiceNow provide for client scripting?",
   "options": [
    "gs, current, previous",
    "g_form (GlideForm), g_user (GlideUser), and g_scratchpad",
    "GlideRecord, GlideAggregate, GlideSystem",
    "g_list, g_menu, g_navigator"
   ],
   "answer": 1,
   "explanation": "ServiceNow provides g_form (methods to manage the form and its fields), g_user (session info about the logged-in user and roles), and g_scratchpad (an object passed to a Client Script from a Display Business Rule, whose properties are set server-side). You also have any local variables you declare."
  },
  {
   "id": "inkling1-p060-q1",
   "source": "inkling1",
   "sourceTitle": "Inkling Part 1",
   "page": 60,
   "domain": "Client-Side Scripting",
   "image": "assets/pages/inkling1-p060.jpg",
   "stem": "Which statement about GlideForm (g_form) methods is correct?",
   "options": [
    "They can be used server-side",
    "They are only used client-side and are accessed as g_form.<method>(parameters)",
    "They retrieve data directly from the database",
    "They require the admin role to run"
   ],
   "answer": 1,
   "explanation": "GlideForm methods are only used client-side, accessed via g_form.<method name>(parameters). Examples: getValue(), setValue()/clearValue(), addOption()/clearOptions(), flash()/showFieldMsg(), getSections(), isNewRecord(), addInfoMessage(), addErrorMessage()."
  },
  {
   "id": "inkling1-p061-q1",
   "source": "inkling1",
   "sourceTitle": "Inkling Part 1",
   "page": 61,
   "domain": "Client-Side Scripting",
   "image": "assets/pages/inkling1-p061.jpg",
   "stem": "When a g_form method references a field, does it use the field's label or its field name, and how can you find the field name quickly?",
   "options": [
    "The label; hover over the field",
    "The field name (not the label); right-click the field's label and the field name appears on the Context menu (Show – '<field_name>')",
    "The sys_id; open the dictionary",
    "The column number; check the list"
   ],
   "answer": 1,
   "explanation": "g_form methods refer to fields by their field name, not their label (e.g., caller_id, not 'Caller'). To find a field name, right-click the field's label — the field name appears on the context menu (Show – 'field_name'), which also shows a few field properties."
  },
  {
   "id": "inkling1-p063-q1",
   "source": "inkling1",
   "sourceTitle": "Inkling Part 1",
   "page": 63,
   "domain": "Client-Side Scripting",
   "image": "assets/pages/inkling1-p063.jpg",
   "stem": "What does g_form.getValue() return, and from where does it retrieve the value?",
   "options": [
    "A typed value (number/date) from the database",
    "Always a string, retrieved from the FORM (not the database) — even if the field is not visible",
    "An object from the server",
    "The field's label"
   ],
   "answer": 1,
   "explanation": "g_form.getValue('<field>') retrieves a value from the form (not the database) and ALWAYS returns a string regardless of field type. If you need a number, use getIntValue() or getDecimalValue(). It can read fields even if they are not visible in the current view."
  },
  {
   "id": "inkling1-p065-q1",
   "source": "inkling1",
   "sourceTitle": "Inkling Part 1",
   "page": 65,
   "domain": "Client-Side Scripting",
   "image": "assets/pages/inkling1-p065.jpg",
   "stem": "For a choice list field, what does g_form.getValue('impact') return?",
   "options": [
    "The user-friendly label (e.g., 'High')",
    "The underlying value of the selection (e.g., '1'), not the label",
    "The sys_id of the choice",
    "An array of all choices"
   ],
   "answer": 1,
   "explanation": "For a choice list, g_form.getValue() returns the value of the selection, not the user-friendly label — e.g., Impact returns '1' rather than 'High'. To see a choice list's values, right-click the field label and select Show Choice List."
  },
  {
   "id": "inkling1-p066-q1",
   "source": "inkling1",
   "sourceTitle": "Inkling Part 1",
   "page": 66,
   "domain": "Client-Side Scripting",
   "image": "assets/pages/inkling1-p066.jpg",
   "stem": "For a reference field such as Caller [caller_id], what does g_form.getValue('caller_id') return?",
   "options": [
    "The display value (e.g., the caller's name)",
    "The sys_id of the referenced record",
    "The table name of the reference",
    "The label 'Caller'"
   ],
   "answer": 1,
   "explanation": "For a reference field, g_form.getValue() returns the sys_id of the referenced record (the database's unique key). The form displays the record's display value, but the stored/returned value is the sys_id."
  },
  {
   "id": "inkling1-p068-q1",
   "source": "inkling1",
   "sourceTitle": "Inkling Part 1",
   "page": 68,
   "domain": "Client-Side Scripting",
   "image": "assets/pages/inkling1-p068.jpg",
   "stem": "Why should you NOT rely on g_user methods (like hasRole()) to enforce security?",
   "options": [
    "g_user methods do not exist",
    "Client-side security is easily defeated using browser developer tools; use Access Control or another server-side strategy instead",
    "g_user is too slow",
    "hasRole() always returns false"
   ],
   "answer": 1,
   "explanation": "g_user provides session info (firstName, lastName, userName, userID) and methods (hasRole(), hasRoleExactly(), hasRoleFromList(), hasRoles(), getFullName(), getClientData()). But do NOT rely on g_user for security — client-side checks are easily bypassed with browser dev tools. Enforce security server-side with ACLs."
  },
  {
   "id": "inkling1-p072-q1",
   "source": "inkling1",
   "sourceTitle": "Inkling Part 1",
   "page": 72,
   "domain": "Client-Side Scripting",
   "image": "assets/pages/inkling1-p072.jpg",
   "stem": "What is a drawback of using addInfoMessage()/addErrorMessage()/showFieldMsg() for debugging Client Scripts?",
   "options": [
    "They cannot display any output",
    "All users are affected — everyone sees the messages on the form, which can confuse a multi-developer environment; statements must be removed before migrating",
    "They only work server-side",
    "They permanently alter the record"
   ],
   "answer": 1,
   "explanation": "These methods conveniently show debug output on the form, but ALL users see the messages, which is confusing with multiple admins/developers, and the statements must be removed before moving to other instances. Tip: combine a g_user property with an IF statement to show the message only to yourself."
  },
  {
   "id": "inkling1-p073-q1",
   "source": "inkling1",
   "sourceTitle": "Inkling Part 1",
   "page": 73,
   "domain": "Client-Side Scripting",
   "image": "assets/pages/inkling1-p073.jpg",
   "stem": "What is the Response Time Indicator used for, and how can an admin disable it?",
   "options": [
    "Counting records; set glide.count to 0",
    "Locating the cause of slow page loads (times in milliseconds; click the clock icon for a breakdown); disable via the glide.ui.response_time property set to false",
    "Debugging server scripts; set glide.server.debug",
    "Formatting code; set glide.format"
   ],
   "answer": 1,
   "explanation": "The Response Time Indicator helps locate slow page loads — times are in milliseconds, and clicking the clock icon shows a breakdown of browser processing times. Administrators can disable it by setting the glide.ui.response_time property to false."
  },
  {
   "id": "inkling1-p074-q1",
   "source": "inkling1",
   "sourceTitle": "Inkling Part 1",
   "page": 74,
   "domain": "Client-Side Scripting",
   "image": "assets/pages/inkling1-p074.jpg",
   "stem": "What kind of errors does a JavaScript try/catch block trap in a Client Script, and what properties does the error object have?",
   "options": [
    "Compile errors only; properties: line, file",
    "Runtime errors; the err object has properties description, message, name, and number — and you can use throw() for your own errors",
    "Syntax errors only; no properties",
    "All errors including typos; property: stack"
   ],
   "answer": 1,
   "explanation": "try/catch traps runtime errors (it does not catch syntax errors caught at save time). The caught err is a JavaScript object with description, message, name, and number properties. Using throw() you can raise your own errors, e.g., to catch invalid user input."
  },
  {
   "id": "inkling1-p077-q1",
   "source": "inkling1",
   "sourceTitle": "Inkling Part 1",
   "page": 77,
   "domain": "Client-Side Scripting",
   "image": "assets/pages/inkling1-p077.jpg",
   "stem": "What is a Reference Object, and what is the access limitation from a Client Script?",
   "options": [
    "A record on the same table; fully accessible client-side",
    "A record on a table OTHER than the form's current table; its data is not loaded into the form, and client scripts only have access to data already on the form",
    "A copy of the current record; always cached",
    "A server-side only construct"
   ],
   "answer": 1,
   "explanation": "A Reference Object record exists on a table other than the form's currently loaded table. Its data is not loaded into the form, and client-side scripts only have access to data on the form — so you cannot directly read the referenced record's other fields without a server call."
  },
  {
   "id": "inkling1-p078-q1",
   "source": "inkling1",
   "sourceTitle": "Inkling Part 1",
   "page": 78,
   "domain": "Client-Side Scripting",
   "image": "assets/pages/inkling1-p078.jpg",
   "stem": "What does a reference field actually store, and what is the performance implication of reading the referenced record's fields from a Client Script?",
   "options": [
    "The full record; no performance cost",
    "Only the referenced record's sys_id; retrieving its other fields requires a trip to the server and back, so make as few trips as possible",
    "The display value; reads are instant",
    "Nothing; reference fields are empty client-side"
   ],
   "answer": 1,
   "explanation": "A reference field stores only the sys_id of the referenced record (the form shows its display value). Reference Object fields can't be read directly client-side — retrieving them requires a server round-trip, which takes time, so minimize server trips (e.g., use GlideAjax sparingly)."
  },
  {
   "id": "inkling1-p079-q1",
   "source": "inkling1",
   "sourceTitle": "Inkling Part 1",
   "page": 79,
   "domain": "Client-Side Scripting",
   "image": "assets/pages/inkling1-p079.jpg",
   "stem": "What is true about Script Versions and Update Sets?",
   "options": [
    "Update Sets include every version of a script",
    "A version is created each time a script is saved; you can compare/revert versions, but an Update Set includes only the most recent version when migrating",
    "Versions are unique to Client Scripts",
    "You cannot revert to a previous version"
   ],
   "answer": 1,
   "explanation": "Script versions are created automatically each time a script is saved/submitted/updated; you can compare them and revert to a previous version. Versions exist for many script types, not just Client Scripts. However, Update Sets do not include every version — only the most recent version migrates."
  },
  {
   "id": "inkling1-p081-q1",
   "source": "inkling1",
   "sourceTitle": "Inkling Part 1",
   "page": 81,
   "domain": "Client-Side Scripting",
   "image": "assets/pages/inkling1-p081.jpg",
   "stem": "On the Compare to Current page for script versions, what does the 'Revert to Selected Version' button do?",
   "options": [
    "Deletes both versions",
    "Overwrites the Current Version record with the Selected Version record",
    "Merges all versions into one",
    "Creates a new branch"
   ],
   "answer": 1,
   "explanation": "On the Compare to Current page, 'Revert to Selected Version' overwrites the Current Version record with the Selected Version record. 'Save Merge' saves edits made to the Current Version while comparing. The Versions related list is visible baseline."
  },
  {
   "id": "inkling1-p084-q1",
   "source": "inkling1",
   "sourceTitle": "Inkling Part 1",
   "page": 84,
   "domain": "Client-Side Scripting",
   "image": "assets/pages/inkling1-p084.jpg",
   "stem": "Which is a stated Client Script best practice?",
   "options": [
    "Make as many server calls as possible for accuracy",
    "Make as few calls to the server as possible, use try/catch to find runtime errors, design for the correct UI type, and comment your scripts",
    "Never comment scripts to keep them short",
    "Use g_user for all security checks"
   ],
   "answer": 1,
   "explanation": "Client Script best practices: use g_form to manage the form, g_user for user info, make as few server calls as possible, use try/catch for runtime errors, design for Desktop/Mobile/All as appropriate, and comment your scripts."
  },
  {
   "id": "inkling1-p087-q1",
   "source": "inkling1",
   "sourceTitle": "Inkling Part 1",
   "page": 87,
   "domain": "Client-Side Scripting",
   "image": "assets/pages/inkling1-p087.jpg",
   "stem": "What is a UI Policy, and how does it relate to Client Scripts in execution and preference?",
   "options": [
    "A server-side rule that runs before Client Scripts",
    "Defines field behavior/visibility on a form; its condition must be true to execute, it executes AFTER Client Scripts, and you should prefer it over a Client Script when possible for faster load and easier maintenance",
    "A scheduled job that runs after forms close",
    "An ACL that controls record access"
   ],
   "answer": 1,
   "explanation": "A UI Policy defines the behavior and visibility of fields on a form (read-only, mandatory, visible). Its condition must be true to execute, and it executes AFTER Client Scripts. In the basic case no scripting is needed — prefer a UI Policy over a Client Script for faster load times and easier maintenance. UI Policies with no condition run every time."
  },
  {
   "id": "inkling1-p088-q1",
   "source": "inkling1",
   "sourceTitle": "Inkling Part 1",
   "page": 88,
   "domain": "Client-Side Scripting",
   "image": "assets/pages/inkling1-p088.jpg",
   "stem": "What does UI Policy scripting (advanced behavior) let you do, and where does it execute?",
   "options": [
    "Run server-side queries; executes on the server",
    "Script complex conditions and advanced behavior (show/hide sections, add/change/validate field data) using the full power of JavaScript; executes client-side",
    "Modify ACLs; executes during login",
    "Send emails; executes asynchronously"
   ],
   "answer": 1,
   "explanation": "UI Policy scripts add the ability to script complex conditions and advanced behavior — show/hide sections (tabs), remove/add/change/validate field data — using the full power of JavaScript. UI Policy scripts execute client-side (e.g., making Comments mandatory when an approval is rejected)."
  },
  {
   "id": "inkling1-p089-q1",
   "source": "inkling1",
   "sourceTitle": "Inkling Part 1",
   "page": 89,
   "domain": "Client-Side Scripting",
   "image": "assets/pages/inkling1-p089.jpg",
   "stem": "Which statement about UI Policies is correct?",
   "options": [
    "UI Policies have a Name field like Client Scripts",
    "UI Policies do not have a Name field — use the Short description as a pseudo name; every field in the record can be evaluated even if not on the form",
    "UI Policies can only evaluate visible fields",
    "UI Policies always require scripting"
   ],
   "answer": 1,
   "explanation": "UI Policies do not have a Name field, so the Short description is used as a pseudo name. Every field in the record can be evaluated even if not visible on the form. Not all UI Policies require scripting. The four-step strategy: configure the trigger (Table, Application, conditions), then add UI Policy Actions and optional scripts."
  },
  {
   "id": "inkling1-p090-q1",
   "source": "inkling1",
   "sourceTitle": "Inkling Part 1",
   "page": 90,
   "domain": "Client-Side Scripting",
   "image": "assets/pages/inkling1-p090.jpg",
   "stem": "On a UI Policy, what does the 'Reverse if false' option do, and what happens if its condition is left blank?",
   "options": [
    "It deletes the UI Policy; blank means it never runs",
    "When true, UI Policy actions are reversed and the 'Execute if false' script runs when conditions evaluate to false; if the condition is left blank, the UI Policy logic always executes",
    "It runs the policy only on submit; blank disables it",
    "It applies only to lists; blank means default view only"
   ],
   "answer": 1,
   "explanation": "'Reverse if false' causes UI Policy actions to be reversed and the 'Execute if false' script to run when conditions are false. If the condition is left blank, the logic always executes. 'On load' runs on form load and form change; Global applies to all views; build conditions with the Condition Builder for performance."
  },
  {
   "id": "inkling1-p091-q1",
   "source": "inkling1",
   "sourceTitle": "Inkling Part 1",
   "page": 91,
   "domain": "Client-Side Scripting",
   "image": "assets/pages/inkling1-p091.jpg",
   "stem": "On a UI Policy with 'Run scripts' enabled, what is the relationship between the Execute if true/false fields and the onCondition() function?",
   "options": [
    "onCondition() runs only on submit",
    "The onCondition() function in the appropriate script field is automatically called when the condition returns true or false; Execute if true runs when the condition is true, Execute if false when it is false",
    "Execute if true runs server-side",
    "There is no onCondition() function"
   ],
   "answer": 1,
   "explanation": "Selecting 'Run scripts' exposes the scripting fields. 'Execute if true' runs JavaScript when the UI Policy condition tests true; 'Execute if false' runs when it tests false. The onCondition() function in the appropriate field is automatically called when the condition returns true or false. 'Run scripts in UI type' selects Desktop/Mobile/All."
  },
  {
   "id": "inkling1-p092-q1",
   "source": "inkling1",
   "sourceTitle": "Inkling Part 1",
   "page": 92,
   "domain": "Client-Side Scripting",
   "image": "assets/pages/inkling1-p092.jpg",
   "stem": "What data can a UI Policy script access on the client side?",
   "options": [
    "Database records via GlideRecord",
    "Local variables and predefined client-side globals: g_form, g_user, and g_scratchpad (from a Display Business Rule)",
    "Only the current record's sys_id",
    "Server-side gs methods"
   ],
   "answer": 1,
   "explanation": "A UI Policy script (client-side) can access local variables it declares plus the predefined client-side globals: g_form (manage the form/fields), g_user (logged-in user session info), and g_scratchpad (passed from a server-side Display Business Rule)."
  },
  {
   "id": "inkling1-p093-q1",
   "source": "inkling1",
   "sourceTitle": "Inkling Part 1",
   "page": 93,
   "domain": "Client-Side Scripting",
   "image": "assets/pages/inkling1-p093.jpg",
   "stem": "Which tool lets you see, in the browser's JavaScript console, that a UI Policy action executed and how its condition evaluated (true/false)?",
   "options": [
    "Script Debugger",
    "Debug UI Policies (session debug)",
    "Field Watcher",
    "gs.log()"
   ],
   "answer": 1,
   "explanation": "Use 'Debug UI Policies' together with the browser's JavaScript console to see which UI Policy action executed (A) and how the condition evaluated (T/F). The console output shows the running policy and whether its condition value evaluated to TRUE or FALSE."
  },
  {
   "id": "inkling1-p094-q1",
   "source": "inkling1",
   "sourceTitle": "Inkling Part 1",
   "page": 94,
   "domain": "Client-Side Scripting",
   "image": "assets/pages/inkling1-p094.jpg",
   "stem": "How are Catalog UI Policies similar to and different from standard UI Policies?",
   "options": [
    "They are identical in every way",
    "Like standard UI Policies but they dynamically change variables that are part of a catalog item; actions apply only when the policy is Active and the When-to-Apply conditions are true; Applies to is a Catalog Item or Variable Set",
    "They only run server-side",
    "They cannot use the Condition Builder"
   ],
   "answer": 1,
   "explanation": "Catalog UI Policies are similar to standard UI Policies but dynamically change variables on a catalog item (or variables in Requested Item/Catalog Task). Actions apply only when the Catalog UI Policy is Active and the When-to-Apply conditions are true. Applies to selects A Catalog Item or A Variable Set; Order sequences multiple policies low to high; Short description is the pseudo name."
  },
  {
   "id": "inkling1-p099-q1",
   "source": "inkling1",
   "sourceTitle": "Inkling Part 1",
   "page": 99,
   "domain": "Client-Side Scripting",
   "image": "assets/pages/inkling1-p099.jpg",
   "stem": "Which is a UI Policy best practice?",
   "options": [
    "Create as many UI Policies as possible",
    "Use as few UI Policies as possible to avoid long page loads, set On load to false when not needed, and apply conditions with the Condition Builder so unnecessary scripts don't load",
    "Always script conditions instead of using the Condition Builder",
    "Never document UI Policies"
   ],
   "answer": 1,
   "explanation": "UI Policy best practices: use as few as possible to avoid long page loads, add the Description field to document them, set On load to false if you don't need on-load execution, apply conditions via the Condition Builder whenever possible (so unnecessary scripts don't load), and comment your scripts."
  },
  {
   "id": "inklingpart2-p002-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 2,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p002.jpg",
   "stem": "What is a Business Rule, and where does it execute?",
   "options": [
    "A client-side script that monitors forms and lists; executes in the browser",
    "A server-side JavaScript that runs when a record is displayed, inserted, updated, deleted, or a table is queried; executes server-side and responds to all record access (forms, lists, web services)",
    "A scheduled job that runs only at night",
    "A UI Policy that runs before Client Scripts"
   ],
   "answer": 1,
   "explanation": "A Business Rule is server-side JavaScript that runs when a record is displayed, inserted, updated, deleted, or when a table is queried. It executes server-side, does NOT monitor forms or lists, and responds to all record access regardless of method — forms, lists, or web services."
  },
  {
   "id": "inklingpart2-p004-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 4,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p004.jpg",
   "stem": "On a Business Rule's 'When to run' tab, what is the purpose of the Filter Conditions and Role conditions?",
   "options": [
    "Filter Conditions set field values; Role conditions display messages",
    "Filter Conditions must return true for the logic to execute; Role conditions require the modifying user to have the selected role(s)",
    "Both abort the transaction",
    "Both are only used for Display rules"
   ],
   "answer": 1,
   "explanation": "On the When to run tab, Insert/Update checkboxes set when it runs; Filter Conditions must return true for the Business Rule logic to execute; and Role conditions specify roles the user modifying the record must have. The Advanced checkbox exposes scripting fields."
  },
  {
   "id": "inklingpart2-p006-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 6,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p006.jpg",
   "stem": "What is the distinctive characteristic of a 'Before Query' Business Rule?",
   "options": [
    "It executes after the form is presented",
    "It executes before a query is sent to the database (e.g., to restrict which records a user can see, acting like an ACL) and runs synchronously",
    "It runs asynchronously as a scheduled job",
    "It populates g_scratchpad"
   ],
   "answer": 1,
   "explanation": "A Before Query Business Rule executes before a query is sent to the database — for example, to prevent users at one location from seeing CIs from another. It runs synchronously and acts like an ACL, but unlike an ACL it does NOT show the 'Number of rows removed by security constraints' message."
  },
  {
   "id": "inklingpart2-p007-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 7,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p007.jpg",
   "stem": "What is the primary purpose of a Display Business Rule?",
   "options": [
    "To abort a database transaction",
    "To populate the g_scratchpad object with server data before the form is presented, so Client Scripts can read it without a server call",
    "To run asynchronously after insert",
    "To delete related records"
   ],
   "answer": 1,
   "explanation": "A Display Business Rule executes after data is read from the database and before the form is presented. Its primary purpose is to populate the g_scratchpad global object, giving Client Scripts access to data from other records (e.g., sys_created_by) without an expensive server round-trip."
  },
  {
   "id": "inklingpart2-p008-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 8,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p008.jpg",
   "stem": "When does a 'Before' Business Rule execute, and how does it run relative to other Business Rules?",
   "options": [
    "After the record is committed; asynchronously",
    "After form submission but BEFORE the record is updated in the database; synchronously (each finishes before the next runs)",
    "Before the form loads; in parallel",
    "Only on query; randomly"
   ],
   "answer": 1,
   "explanation": "A Before Business Rule executes after form submission and before the record is updated in the database (e.g., populate closed_by with the current user). Before Business Rules run synchronously — the current rule must finish before the next runs."
  },
  {
   "id": "inklingpart2-p009-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 9,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p009.jpg",
   "stem": "When does an 'After' Business Rule execute?",
   "options": [
    "Before the record is read",
    "After form submission AND after the record is updated in the database (e.g., cascade approval changes to requested items)",
    "Before any query",
    "Only during an upgrade"
   ],
   "answer": 1,
   "explanation": "An After Business Rule executes after form submission and after the record update is committed to the database — for example, cascading changes made to a Service Catalog request's approval field to its requested items. After rules run synchronously."
  },
  {
   "id": "inklingpart2-p010-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 10,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p010.jpg",
   "stem": "Which statement is TRUE about Async Business Rules?",
   "options": [
    "They run synchronously before the transaction completes",
    "They run asynchronously as scheduled jobs after the transaction, do NOT have access to the previous object, and let the current transaction finish without waiting",
    "They have full access to the previous record version",
    "They cannot be used for SLA calculations"
   ],
   "answer": 1,
   "explanation": "Async Business Rules execute after records are inserted/modified/queried, queued by the scheduler to run as soon as possible so the current transaction finishes without waiting. They do NOT have access to the previous version of a record. Examples: SLA calculations, notifying subscribers. Use the newer 'async' (runs during upgrade) over the deprecated one."
  },
  {
   "id": "inklingpart2-p011-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 11,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p011.jpg",
   "stem": "On a Business Rule, what does selecting the 'Abort action' checkbox do?",
   "options": [
    "It sends an email",
    "It aborts the current database transaction; no additional actions can be performed on the record (though you can still display a message)",
    "It runs the rule asynchronously",
    "It sets field values automatically"
   ],
   "answer": 1,
   "explanation": "In the Actions section (no scripting required), you can Set field values and Add message. 'Abort action' aborts the current database transaction — once selected you cannot perform additional actions on the record, though you can still show a message via Add message."
  },
  {
   "id": "inklingpart2-p012-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 12,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p012.jpg",
   "stem": "On a Business Rule's Advanced tab, what does the Condition field return when left blank, and what is its purpose?",
   "options": [
    "It returns false; it disables the rule",
    "It returns true when blank; it is a JavaScript statement specifying when the rule should execute (e.g., evaluating the previous value of a field)",
    "It returns the current record; it sets field values",
    "It returns the scope name"
   ],
   "answer": 1,
   "explanation": "On the Advanced tab, the Condition field is a JavaScript statement specifying when the rule executes and returns TRUE when left blank. The Script field holds server-side JavaScript that runs when both the When-to-run criteria and the Condition are met. Use these for complex logic like evaluating previous values."
  },
  {
   "id": "inklingpart2-p013-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 13,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p013.jpg",
   "stem": "In a Business Rule, what is the difference between the 'current' and 'previous' objects, and where is 'previous' unavailable?",
   "options": [
    "current holds original values; previous holds new values; previous works everywhere",
    "current stores the record's most recent (new/modified) field values; previous stores the original values from when the form loaded; previous is NOT available in Async Business Rules",
    "They are identical",
    "previous is only available in Display rules"
   ],
   "answer": 1,
   "explanation": "current stores the current record's fields with the most recent values (a script can change a value many times; current holds the latest). previous stores the record's original values before any changes. Important: the previous object is NOT available in Async Business Rules."
  },
  {
   "id": "inklingpart2-p014-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 14,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p014.jpg",
   "stem": "What is dot-walking in a server-side script, and what relationship is it intended for?",
   "options": [
    "Iterating an array; one-to-many",
    "Traversing from a record to fields on a related (referenced) record by chaining references, e.g., current.caller_id.department.name; intended for one-to-one relationships, not one-to-many",
    "Querying multiple tables with OR; many-to-many",
    "Aborting a transaction; self-referencing"
   ],
   "answer": 1,
   "explanation": "Dot-walking lets server-side scripts directly access fields on related (reference) records by hopping table to table, e.g., current.caller_id.department.name jumps from Incident to the related sys_user record and then to its department's name. Dot-walking is for one-to-one relationships, not one-to-many (related lists)."
  },
  {
   "id": "inklingpart2-p017-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 17,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p017.jpg",
   "stem": "Which GlideSystem logging method should be used in BOTH scoped applications and the global scope, and which is legacy/global-only?",
   "options": [
    "gs.log() for both; gs.info() is legacy",
    "gs.info() works in scoped and global scopes (use it); gs.log() always logs but is global-only and legacy",
    "gs.print() for both; gs.debug() is legacy",
    "gs.addInfoMessage() for both; gs.error() is legacy"
   ],
   "answer": 1,
   "explanation": "gs.info(), gs.error(), gs.warn(), and gs.debug() send messages to the system log (viewable via System Logs > System Log). gs.info() works in scoped apps and global scope, so use it. gs.log() always logs but is global-scope only and considered legacy — use gs.info() instead. gs.debug() logs only in debug mode."
  },
  {
   "id": "inklingpart2-p018-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 18,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p018.jpg",
   "stem": "What does the Script Debugger let you do, and what role is required?",
   "options": [
    "Edit scripts inline; no role needed",
    "Step through server-side JavaScript line-by-line, set breakpoints, view variable values and the call stack in real time; requires the script_debugger or admin role",
    "Debug client scripts only; requires itil",
    "Run async scripts; requires no role"
   ],
   "answer": 1,
   "explanation": "The Script Debugger (Diagnostics menu, or Studio File > Script Debugger) debugs server-side JavaScript: step line-by-line, set/remove breakpoints, pause at breakpoints, step into/out of calls, view local/global/closure variable values and the call stack in real time. It opens in a new window and requires the script_debugger or admin role."
  },
  {
   "id": "inklingpart2-p019-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 19,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p019.jpg",
   "stem": "How does the Script Debugger behave with respect to users and sessions?",
   "options": [
    "It is shared across all users simultaneously",
    "It is session specific — no other users are impacted, and each user can have only one Script Debugger console open and executing at a time",
    "It debugs all sessions at once",
    "It requires every developer to share one console"
   ],
   "answer": 1,
   "explanation": "The Script Debugger is session specific, so other users are not impacted, and each user can have only one console open and executing at a time. Admins can debug while impersonating a user only if that user has admin/script_debugger and read access to the script; step actions then use the impersonated user's read access."
  },
  {
   "id": "inklingpart2-p020-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 20,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p020.jpg",
   "stem": "What kind of scripts can the Script Debugger step through?",
   "options": [
    "Any script including asynchronous ones",
    "Only server-side SYNCHRONOUS scripts — it cannot step through asynchronous scripts (Async Business Rules, Workflow scripts, inbound email actions) because they don't run in the user's session",
    "Only client-side scripts",
    "Only scheduled jobs"
   ],
   "answer": 1,
   "explanation": "The Script Debugger only debugs server-side synchronous scripts. It cannot step through asynchronous scripts (Async Business Rules, Workflow scripts, inbound email actions) because they don't run in the same interactive session as the logged-in user. The debugger must be open, a breakpoint set, and the script must run in the same session."
  },
  {
   "id": "inklingpart2-p022-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 22,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p022.jpg",
   "stem": "What are Log Points in the Script Debugger, and what property must be enabled to use them?",
   "options": [
    "Breakpoints that stop execution; glide.debug.breakpoint",
    "Injected logging at specific lines that logs to the console without stopping or restarting the service; requires glide.debug.log_point set to true",
    "Email logs; glide.email.log",
    "System property logs; no property needed"
   ],
   "answer": 1,
   "explanation": "Log Points inject logging into running scripts at specific lines without restarting or interfering with the service. As admin/script_debugger, set the glide.debug.log_point system property to true. Log points belong to the developer who sets them. At a given line you can set either a log point OR a breakpoint, but not both."
  },
  {
   "id": "inklingpart2-p024-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 24,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p024.jpg",
   "stem": "What is a limitation of the Console Debugger when displaying an object?",
   "options": [
    "It shows the full object with all properties and values",
    "Only the string value of the object is displayed (object properties/values are not shown); gs.info()/print() and the 'this' keyword are not supported",
    "It cannot evaluate any expressions",
    "It requires no role"
   ],
   "answer": 1,
   "explanation": "The Console Debugger evaluates expressions while a script is paused (admin/script_debugger role). Limitations: trying to display an object shows only its string value (not its properties/values); GlideSystem printing methods like info()/print() are unsupported; the 'this' keyword is unsupported; and a debugger timeout can occur during evaluation."
  },
  {
   "id": "inklingpart2-p026-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 26,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p026.jpg",
   "stem": "In the Script Debugger controls, what does 'Step Over Next Function Call' (F8) do compared to 'Step Into' (F7)?",
   "options": [
    "Step Over enters the function; Step Into skips it",
    "Step Over advances to the next evaluated line (skipping into method bodies, and skipping lines whose conditions aren't met); Step Into advances to the first line inside a method when paused on its call",
    "They are identical",
    "Both run the script to completion"
   ],
   "answer": 1,
   "explanation": "Step Over Next Function Call (F8) advances to the next evaluated line based on current conditions, skipping code that doesn't run. Step Into Next Function Call (F7) advances into the first line of a method when paused on its call. Resume (F9) runs to the next breakpoint; Start/Pause Debugging is F2."
  },
  {
   "id": "inklingpart2-p027-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 27,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p027.jpg",
   "stem": "When are a script's variable values visible in the Script Debugger, and what does the 'Closures' panel show?",
   "options": [
    "Always; it shows imported modules",
    "Only when the debugger is paused on a breakpoint; Closures displays global-scope variable names/values set by a function closure (Local shows local variables, Global shows global variables)",
    "Only after the script completes; it shows the call stack",
    "Never; variables aren't supported"
   ],
   "answer": 1,
   "explanation": "Variable values are only visible when the Script Debugger pauses on a breakpoint. Local shows local-scope variables (yours and baseline-declared); Global shows global-scope variables; Closures shows global-scope variable values set by a function closure."
  },
  {
   "id": "inklingpart2-p031-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 31,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p031.jpg",
   "stem": "What does the Script Tracer do once enabled?",
   "options": [
    "It permanently logs every transaction to the database",
    "After you execute a UI transaction, it searches through all the scripts being executed and presents the changes for you to examine (filterable by File type and Table)",
    "It steps through scripts line by line",
    "It only traces client scripts"
   ],
   "answer": 1,
   "explanation": "Once you enable Script Tracer and execute a UI transaction (e.g., create/update an Incident), it searches through all executing scripts and presents changes in a list. Filters include File type and Table. Tabs show State (old vs. new), the Script, error location, and the Transaction's records."
  },
  {
   "id": "inklingpart2-p038-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 38,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p038.jpg",
   "stem": "Which is a stated Business Rule best practice?",
   "options": [
    "Always write conditions inside the script, never the Condition field",
    "Put condition statements in the Condition field (not the script) so unnecessary scripts don't run, use Async Business Rules where possible, and use Display Business Rules with g_scratchpad to pass server data to the client",
    "Avoid Async Business Rules entirely",
    "Never document Business Rules"
   ],
   "answer": 1,
   "explanation": "Business Rule best practices: use Async Business Rules whenever possible; use Display Business Rules with g_scratchpad to pass data server-to-client on form load; write conditions in the Condition field (not the script) so unnecessary scripts don't run; document with the Description field; choose appropriate debugging; and comment your scripts."
  },
  {
   "id": "inklingpart2-p041-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 41,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p041.jpg",
   "stem": "What is the GlideSystem API, and what prefix do its methods use?",
   "options": [
    "A client-side API; methods begin with g_",
    "A server-side API (collection of methods) for accessing system-level information; all its methods begin with gs. (e.g., gs.addInfoMessage())",
    "A database API; methods begin with gr.",
    "A flow API; methods begin with flow."
   ],
   "answer": 1,
   "explanation": "GlideSystem is a server-side API — a collection of methods that access system-level information and write debugging info. All GlideSystem methods begin with gs. (for example, gs.addInfoMessage() displays a message at the top of a form/list). Once learned, these methods can be used in any server-side script."
  },
  {
   "id": "inklingpart2-p044-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 44,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p044.jpg",
   "stem": "What does the GlideSystem method gs.nil() do?",
   "options": [
    "Deletes a record",
    "Returns true if a field's value is null or an empty string ('')",
    "Queues an event for the Event Manager",
    "Logs a message to the syslog table"
   ],
   "answer": 1,
   "explanation": "gs.nil() returns true if a field's value is null or an empty string (''). Other examples: gs.eventQueue() queues an event for the Event Manager, gs.print() writes to the system log, and gs.log() logs and saves to the syslog table."
  },
  {
   "id": "inklingpart2-p062-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 62,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p062.jpg",
   "stem": "What is the first step of a GlideRecord query, and what is the only parameter to the GlideRecord constructor?",
   "options": [
    "Execute the query; the parameter is a sys_id",
    "Create a GlideRecord object for the table of interest; the only parameter is the table name (e.g., new GlideRecord('change_request'))",
    "Build conditions; the parameter is an encoded query",
    "Process records; the parameter is a field name"
   ],
   "answer": 1,
   "explanation": "Step 1 of a GlideRecord query is to create a GlideRecord object for the table you want to query. The only constructor parameter is the table name — e.g., var myObj = new GlideRecord('change_request'); creates an object for the Change Request table."
  },
  {
   "id": "inklingpart2-p063-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 63,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p063.jpg",
   "stem": "What does each addQuery() call add, and what happens by default when a field name in a query is invalid?",
   "options": [
    "It executes the query; invalid fields throw an error and stop",
    "It adds a 'WHERE' clause (multiple addQuery calls are ANDed); by default an invalid field name runs but the invalid condition is IGNORED — set glide.invalid_query.returns_no_rows to true to instead return no rows",
    "It deletes records; invalid fields are auto-corrected",
    "It sorts results; invalid fields are skipped silently with no option to change"
   ],
   "answer": 1,
   "explanation": "Each addQuery() adds a 'WHERE' clause to the generated SQL select; multiple calls are ANDed together. By default, queries with invalid field names run but ignore the invalid condition (potentially returning more records than expected). Adding the system property glide.invalid_query.returns_no_rows = true makes invalid queries return no rows instead."
  },
  {
   "id": "inklingpart2-p064-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 64,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p064.jpg",
   "stem": "In a GlideRecord addQuery() call, what is assumed when no operator is supplied?",
   "options": [
    "CONTAINS",
    "Equality (=) — the condition tests that the field equals the value",
    "Greater than (>)",
    "STARTSWITH"
   ],
   "answer": 1,
   "explanation": "In the absence of an operator, addQuery() assumes the condition is equality, so addQuery('category','Hardware') is the same as addQuery('category','=','Hardware'). Operators include >, >=, <, <=, =, != and string operators STARTSWITH, ENDSWITH, CONTAINS, DOES NOT CONTAIN."
  },
  {
   "id": "inklingpart2-p065-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 65,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p065.jpg",
   "stem": "Which method executes a GlideRecord query, and why does the _query() variant exist?",
   "options": [
    "run(); _run() is for async",
    "query(); the _query() variant exists for tables that have a column named 'query' which would otherwise conflict",
    "execute(); _execute() is for scoped apps",
    "select(); _select() is for client scripts"
   ],
   "answer": 1,
   "explanation": "Step 3 is to execute with the query() method, which returns zero or more records. The _query() method provides the same functionality and exists for use on tables that have a column literally named 'query', which would interfere with calling query()."
  },
  {
   "id": "inklingpart2-p066-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 66,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p066.jpg",
   "stem": "In processing GlideRecord results, what is the difference between next() and hasNext()?",
   "options": [
    "They are identical",
    "next() moves to and loads the next record for processing; hasNext() returns true if another record exists but does NOT load it (use when you only need to know a record exists)",
    "hasNext() loads the record; next() only checks existence",
    "Both delete the current record"
   ],
   "answer": 1,
   "explanation": "while() iterates all returned records; if() processes only the first. next() moves to the next record and loads it for processing. hasNext() returns true when a next record exists but does not load it — use it when you only need to know a record exists. _next() exists for tables with a 'next' column."
  },
  {
   "id": "inklingpart2-p067-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 67,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p067.jpg",
   "stem": "What does the GlideRecord update() method do?",
   "options": [
    "Deletes the current record",
    "Saves changes to the records in the GlideRecord; if the record does not exist, it is inserted",
    "Only updates the first record and ignores the rest",
    "Refreshes the query results"
   ],
   "answer": 1,
   "explanation": "The update() method saves changes to records in the GlideRecord; if the record does not exist, it is inserted. For example, looping with while(incGR.next()) and setting fields then calling incGR.update() saves each modified record."
  },
  {
   "id": "inklingpart2-p068-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 68,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p068.jpg",
   "stem": "Which Syntax Editor macro inserts standard GlideRecord syntax with an addQuery(), and what should you usually change?",
   "options": [
    "forgr; change while() to if()",
    "vargr; it inserts an if() at the end of the stub — usually change it to a while() so logic runs on all returned rows, not just the first",
    "newgr; change query() to get()",
    "grquery; change addQuery to addEncodedQuery"
   ],
   "answer": 1,
   "explanation": "The vargr Syntax Editor macro inserts the standard GlideRecord syntax containing an addQuery(). It inserts an if() at the end of the stub; in most cases you should change this to a while() so the script logic executes on all returned rows, not just the first."
  },
  {
   "id": "inklingpart2-p069-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 69,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p069.jpg",
   "stem": "How do you add an OR condition to a GlideRecord query, and what does grouping create?",
   "options": [
    "Use a second addQuery(); grouping is impossible",
    "Use addQuery() for the first condition and addOrCondition() for the OR; each 'group' (built with an object variable per addQuery) becomes its own object, enabling logic like (A OR B) AND (C OR D)",
    "Use addEncodedQuery() only; no grouping",
    "Use update(); grouping merges records"
   ],
   "answer": 1,
   "explanation": "Use addQuery() for the first condition and addOrCondition() to add an OR. Assigning addQuery() to an object variable and calling addOrCondition() on it creates a 'group'; multiple groups produce logic such as (state<3 OR state>5) AND (priority=1 OR impact=1). The vargror macro inserts this syntax."
  },
  {
   "id": "inklingpart2-p070-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 70,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p070.jpg",
   "stem": "What does the GlideRecord get() method do?",
   "options": [
    "Returns all matching records",
    "Queries for a SINGLE record (performing a next() before returning); returns true if found, false if not. get(name) treats name as sys_id, or get(field, value) matches that field",
    "Inserts a new record",
    "Counts the rows"
   ],
   "answer": 1,
   "explanation": "get() queries for a single record and returns true if found, false if not. get(name) uses the expression sys_id = name; get(name, value) uses field = value. It performs a next() before returning. Tip: if unsure a record will be returned, wrap it in an if() to handle the not-found case."
  },
  {
   "id": "inklingpart2-p071-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 71,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p071.jpg",
   "stem": "To count rows, why is GlideAggregate preferred over getRowCount() on large tables?",
   "options": [
    "getRowCount() is more accurate",
    "getRowCount() retrieves rows one by one and increments a counter (large performance impact); GlideAggregate with addAggregate('COUNT') runs a true SELECT COUNT(*) and executes faster",
    "GlideAggregate cannot count",
    "They have identical performance"
   ],
   "answer": 1,
   "explanation": "Both return the number of rows meeting the criteria. getRowCount() is less code but has a significantly larger performance impact (it retrieves rows one by one), so it's not recommended on large tables. GlideAggregate with addAggregate('COUNT') is more code but executes a true SELECT COUNT(*) and runs faster."
  },
  {
   "id": "inklingpart2-p072-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 72,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p072.jpg",
   "stem": "What is addEncodedQuery(), and what is the easiest way to build the encoded string?",
   "options": [
    "A method to insert records; type it manually",
    "A method that passes all query 'WHERE' clauses as a single string argument; build it easily by constructing the query with the list Condition Builder, then right-click the breadcrumbs and select Copy query",
    "A way to count rows; use GlideAggregate",
    "A client-side query; use g_form"
   ],
   "answer": 1,
   "explanation": "addEncodedQuery('where clauses') passes all WHERE clauses as a single argument — the best option when in a hurry. Build it by opening the table's list, using the Condition Builder, running the query, then right-clicking the breadcrumbs and selecting Copy query. Tip: <table>.list opens a list quickly. Copy query copies the parts from the clicked breadcrumb leftward."
  },
  {
   "id": "inklingpart2-p073-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 73,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p073.jpg",
   "stem": "In a Business Rule, can the table in a GlideRecord query differ from the table the Business Rule is triggered on?",
   "options": [
    "No, they must always match",
    "Yes — the GlideRecord table can be different from the Business Rule's table (e.g., the SNC - ITIL - Close Related rule triggers on Problem but uses GlideRecord to close related Incident records)",
    "Only if both extend Task",
    "Only in Async rules"
   ],
   "answer": 1,
   "explanation": "The table specified in a GlideRecord object can differ from the table identified in the Business Rule. For example, the baseline 'SNC - ITIL - Close Related' Business Rule is triggered on the Problem table but uses a GlideRecord query to close all related Incident records when a Problem closes."
  },
  {
   "id": "inklingpart2-p075-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 75,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p075.jpg",
   "stem": "For scoped application development, which GlideRecord guidance applies, and why test encoded queries on a sub-production instance first?",
   "options": [
    "Use only global GlideRecord; encoded queries can't fail",
    "Use Scoped GlideRecord methods for database operations; an incorrectly constructed encoded query (e.g., an invalid field name) silently drops the invalid part and may return unexpected records — risking data loss on insert/update/delete",
    "Encoded queries are always validated; no testing needed",
    "Scoped apps cannot use GlideRecord"
   ],
   "answer": 1,
   "explanation": "For scoped apps, use Scoped GlideRecord (Reference > APIs > Server Scoped). Always test queries on a sub-production instance before deploying, because an incorrectly constructed encoded query drops the invalid condition and bases results on the rest — which can return more records than intended and, with update/delete, cause data loss. Set glide.invalid_query... to return no rows for safety."
  },
  {
   "id": "inklingpart2-p076-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 76,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p076.jpg",
   "stem": "What is GlideRecordSecure, and how does it behave when an ACL restricts access?",
   "options": [
    "A faster GlideRecord with no security",
    "A class inherited from GlideRecord that performs the same functions AND enforces ACL rules; non-readable fields return NULL and non-writable fields are set to NULL on write — so you don't manually check access each query",
    "A client-side query API",
    "A class that ignores ACLs entirely"
   ],
   "answer": 1,
   "explanation": "GlideRecordSecure is inherited from GlideRecord, performs the same functions, and enforces ACL rules. If an element can't be read due to an ACL, a NULL is returned for it; on write, canWrite() failures set the value to NULL. This avoids manually adding canRead()/canWrite() checks every query (the manual approach with plain GlideRecord is not best practice)."
  },
  {
   "id": "inklingpart2-p079-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 79,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p079.jpg",
   "stem": "In a Business Rule Condition, what does current.state.changesTo(IncidentState.CLOSED) evaluate?",
   "options": [
    "Whether state currently equals Closed at any time",
    "Whether the state field is changing TO Closed in this transaction (true only on the transition into Closed)",
    "Whether state was previously Closed",
    "Whether any field changed"
   ],
   "answer": 1,
   "explanation": "changesTo(value) returns true only when the field transitions TO the specified value in the current update (not when it merely equals it). Using current.state.changesTo(IncidentState.CLOSED) ensures the rule fires only when state changes to Closed — and using the IncidentState constant rather than the raw value (7) is best practice."
  },
  {
   "id": "inklingpart2-p081-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 81,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p081.jpg",
   "stem": "What is GlideQuery?",
   "options": [
    "A client-side replacement for g_form",
    "A server-side API for querying data, written in 100% JavaScript (a global Script Include) that uses GlideRecord behind the scenes, designed to fail fast, be expressive (do more with less), and behave like normal JavaScript",
    "A database table",
    "A Flow Designer action"
   ],
   "answer": 1,
   "explanation": "GlideQuery is a server-side API for querying data, written in 100% JavaScript as a global Script Include and using GlideRecord behind the scenes. Its three guiding principles: improve the feedback loop (fail fast / errors as soon as possible), be JavaScript (isolated from Java), and do more with less code with a fluent style."
  },
  {
   "id": "inklingpart2-p082-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 82,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p082.jpg",
   "stem": "How does GlideQuery improve the feedback loop compared to GlideRecord when a field name is wrong?",
   "options": [
    "It silently ignores the bad field like GlideRecord",
    "GlideRecord with a wrong field may run and (e.g., on delete) affect all records; GlideQuery 'fails fast' — it throws a NiceError showing 'Unknown field' and the known fields",
    "Both crash the instance",
    "GlideQuery returns all records"
   ],
   "answer": 1,
   "explanation": "With GlideRecord, a wrong field name (e.g., in a delete query) may run anyway and affect all records. GlideQuery fails fast: it immediately raises a NiceError such as 'Unknown field closed_date', showing the problem and the known fields — catching mistakes before damage occurs."
  },
  {
   "id": "inklingpart2-p085-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 85,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p085.jpg",
   "stem": "In GlideQuery, what does selectOne() return and when is it preferable to select()?",
   "options": [
    "A Stream of all records; always",
    "An Optional that may contain a single record — more efficient than select() when you only need one record or want to test whether a record exists",
    "An array of sys_ids; never",
    "The row count; for large tables"
   ],
   "answer": 1,
   "explanation": "GlideQuery methods include insert() (returns an Optional of the new record), select(...fields) (returns a Stream of results), selectOne(...fields) (returns an Optional with a single record), update() (returns an Optional), and deleteMultiple(). selectOne() is more efficient than select() when you only need one record or want to test existence."
  },
  {
   "id": "inklingpart2-p086-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 86,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p086.jpg",
   "stem": "GlideQuery reads data using which two classes, and what are they used for?",
   "options": [
    "Array and Object; both for multiple records",
    "Stream (multiple records, returned by select(), lazily evaluated like a JS array) and Optional (single record, returned by selectOne()/insert()/update(), 'empty' if not found)",
    "List and Map; for sorting",
    "Cursor and Row; for pagination"
   ],
   "answer": 1,
   "explanation": "GlideQuery reads with Stream or Optional. Stream is for multiple records (returned by select()), behaves like a JS array, and is lazily evaluated (so millions of records can be queried without allocating them all). Optional is for a single record (returned by selectOne(), insert(), update()) and is 'empty' if no record is found."
  },
  {
   "id": "inklingpart2-p089-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 89,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p089.jpg",
   "stem": "Why does GlideQuery sometimes take slightly longer than GlideRecord, and why is it still recommended?",
   "options": [
    "It uses a slower database; it isn't recommended",
    "GlideQuery is an API over GlideRecord that converts values to JavaScript types and does type checking (small overhead), but the productivity gains and avoidance of poorly written GlideRecord far outweigh the minimal cost",
    "It runs client-side; it's faster always",
    "It has no overhead at all"
   ],
   "answer": 1,
   "explanation": "GlideQuery is an API for GlideRecord, so record values must be converted to JavaScript types, and insert/update add type-checking overhead. Benchmarks show only a small overhead (e.g., reading 1 record 2ms vs 3ms). The overhead is minimal compared to the productivity gains, and GlideQuery's efficient syntax helps avoid poorly written GlideRecord queries."
  },
  {
   "id": "inklingpart2-p096-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 96,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p096.jpg",
   "stem": "What is a Script Include, and what is a key performance characteristic?",
   "options": [
    "A client-side script that runs on form load",
    "Reusable server-side JavaScript that must be called to run (can be client-callable); Script Includes load only on demand, so they do not impact performance",
    "A scheduled job that always runs",
    "A UI Policy action"
   ],
   "answer": 1,
   "explanation": "A Script Include stores reusable JavaScript for execution on the server; it must be called to run and can be client-callable. Script Includes load only on demand, so they do not impact performance. You should NOT modify the behavior of baseline Script Includes."
  },
  {
   "id": "inklingpart2-p097-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 97,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p097.jpg",
   "stem": "On a Script Include, what does the 'Accessible from' field control, and what does 'Glide AJAX enabled' (Client callable) mean?",
   "options": [
    "The execution order; whether it runs on insert",
    "Accessible from sets scope visibility (All application scopes = public, This application scope only = private); Glide AJAX enabled means client-side scripts can call the Script Include",
    "The table; whether it's a Business Rule",
    "The trigger condition; whether it logs"
   ],
   "answer": 1,
   "explanation": "Accessible from sets the Script Include's accessibility: 'All application scopes' (public, callable from any scope) or 'This application scope only' (private). 'Glide AJAX enabled' (Client callable) allows client-side scripts to call it. The Name has no spaces/special characters; API Name includes the scope and script name."
  },
  {
   "id": "inklingpart2-p099-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 99,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p099.jpg",
   "stem": "Can a classless (on-demand) Script Include be called from the client side?",
   "options": [
    "Yes, always",
    "No — classless/on-demand Script Includes are NOT callable from the client side, even if 'Glide AJAX enabled' is selected; for a classless include, the Script Include name must be identical to the function name",
    "Only if it extends AbstractAjaxProcessor",
    "Only with the admin role"
   ],
   "answer": 1,
   "explanation": "Classless/on-demand Script Includes store one function and are NOT callable from the client side even if Glide AJAX enabled is checked. The Script Include name must be identical to the function name. Including a second function is possible but not best practice."
  },
  {
   "id": "inklingpart2-p104-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 104,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p104.jpg",
   "stem": "When creating a class-based Script Include, what is required of the Script Include Name relative to the Class?",
   "options": [
    "The name can be anything",
    "The Script Include name must be an EXACT match to the Class name; once named, a Script Editor Macro is inserted and the Name is propagated through the script (changing the Name auto-updates the script)",
    "The name must include spaces",
    "The name must start with x_"
   ],
   "answer": 1,
   "explanation": "For a class-based Script Include (storing multiple functions), the Script Include Name must exactly match the Class name. Once named, a Script Editor Macro is inserted into the Script field and the Name propagates throughout (var ClassName = Class.create(); ClassName.prototype = {...}). Names often include a table name (e.g., IncidentUtils) to group functions."
  },
  {
   "id": "inklingpart2-p110-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 110,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p110.jpg",
   "stem": "What does extending a class with Object.extendsObject() accomplish?",
   "options": [
    "It deletes the parent class",
    "It creates a new Script Include/Class that includes all the functionality of an existing class PLUS new logic, without modifying the original script",
    "It makes the class client-callable automatically",
    "It converts a class to classless"
   ],
   "answer": 1,
   "explanation": "Extending a class adds functionality (typically methods) to an existing class without modifying the original script. You create a new Script Include/Class and reference the existing class via Object.extendsObject(ExistingClassName, {...}); the new class includes all the parent's functionality plus your new logic. Commonly extended: AbstractAjaxProcessor, LDAPUtils, Catalog* classes."
  },
  {
   "id": "inklingpart2-p111-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 111,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p111.jpg",
   "stem": "Why do client-callable Script Includes commonly extend the AbstractAjaxProcessor class?",
   "options": [
    "It makes them run faster",
    "AbstractAjaxProcessor is the baseline AJAX processor class that executes server-side but is called client-side, enabling the Script Include to handle GlideAjax calls from Client Scripts",
    "It enforces ACLs",
    "It schedules the script"
   ],
   "answer": 1,
   "explanation": "AbstractAjaxProcessor is the baseline AJAX processor class; it executes server-side but is called client-side, so extending it lets a Script Include respond to client GlideAjax calls. Note: the base system includes no ACLs for client-callable Script Includes — they honor the STAR (*) ACL rule if no more specific rule exists."
  },
  {
   "id": "inklingpart2-p112-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 112,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p112.jpg",
   "stem": "Which client-side class lets Client Scripts and UI Policies call server-side Script Includes, and what reserved parameter identifies the method to run?",
   "options": [
    "GlideRecord; sysparm_table",
    "GlideAjax; the reserved parameter sysparm_name identifies the Script Include method (all parameters begin with sysparm_)",
    "GlideForm; g_method",
    "GlideSystem; gs_name"
   ],
   "answer": 1,
   "explanation": "The GlideAjax class enables Client Scripts and UI Policies to call server-side code in Script Includes, pass parameters, and use the returned data. Steps: create a GlideAjax object for the Script Include, addParam() to pass params (all begin with sysparm_; the reserved sysparm_name identifies the method), make an async call (getXML), and process results in a callback."
  },
  {
   "id": "inklingpart2-p113-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 113,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p113.jpg",
   "stem": "When a client-callable Script Include returns data via GlideAjax getXML, in what format is the result returned to the client?",
   "options": [
    "A JavaScript object",
    "XML — the callback reads it via response.responseXML.documentElement.getAttribute('answer')",
    "A CSV file",
    "A GlideRecord"
   ],
   "answer": 1,
   "explanation": "A Script Include called via GlideAjax getXML returns XML to the client. The callback parses it, e.g., var answer = response.responseXML.documentElement.getAttribute('answer'); to read the value returned by the server-side method."
  },
  {
   "id": "inklingpart2-p119-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 119,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p119.jpg",
   "stem": "What is JSON, and why is it used in ServiceNow scripting?",
   "options": [
    "A query language for databases",
    "A data-exchange format that is a low-overhead alternative to XML, used to serialize and pass data between server and client (objects as {name:value} pairs, arrays as [value, value])",
    "A client-side UI framework",
    "A type of Business Rule"
   ],
   "answer": 1,
   "explanation": "JSON (JavaScript Object Notation) is a data-exchange format and a low-overhead alternative to XML. It serializes and passes data between server and client. It represents ordered lists as arrays [value, value] and collections of name/value pairs as objects {name:value}. JSON.stringify() converts an object to a string to pass back to a calling script."
  },
  {
   "id": "inklingpart2-p125-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 125,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p125.jpg",
   "stem": "Why do some baseline Script Includes have 'SNC' in their name (e.g., IncidentStateSNC), and how do you override one of their functions?",
   "options": [
    "SNC means client-callable; you edit them directly",
    "SNC-named Script Includes are meant to be read-only (so they update during upgrades); to override a function, copy it into the paired non-SNC version (e.g., IncidentState) and customize it there",
    "SNC means scoped; you delete them",
    "SNC means asynchronous; you can't override them"
   ],
   "answer": 1,
   "explanation": "Script Includes with SNC in the name are meant to be read-only, ensuring they're updated during upgrades. To override a function defined in an SNC Script Include, copy it to the paired non-SNC version (e.g., IncidentState) and customize there. Best practice: reference states with constants like IncidentState.CLOSED rather than raw values (7)."
  },
  {
   "id": "inklingpart2-p127-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 127,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p127.jpg",
   "stem": "On a Script Include, what is the effect of setting 'Accessible from' to 'This application scope only' versus 'All application scopes'?",
   "options": [
    "No difference",
    "'This application scope only' makes it private (accessible only to artifacts in the same scope); 'All application scopes' makes it public (accessible from any scope)",
    "'This application scope only' makes it client-callable",
    "Both make it global"
   ],
   "answer": 1,
   "explanation": "The Accessible from field controls Script Include scope visibility: 'This application scope only' = Private (only artifacts in the same scope can access it); 'All application scopes' = Public (accessible from any scope). The API Name reflects the scope, e.g., global.UserProfileUtils."
  },
  {
   "id": "inklingpart2-p128-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 128,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p128.jpg",
   "stem": "How does the syntax to instantiate a Script Include differ when calling it from another scope?",
   "options": [
    "It is identical regardless of scope",
    "No prefix is needed in the same scope (new ItineraryConflict()); to call one in another scope, prepend its scope namespace (new x_cld_travel.ItineraryConflict() or new global.ArraysUtils())",
    "You must use GlideAjax across scopes",
    "Cross-scope calls are impossible"
   ],
   "answer": 1,
   "explanation": "A scope prefix is not required to call a Script Include in the same scope (var c = new ItineraryConflict();). To call one in another scope, prepend its unique scope namespace to distinguish it from same-named includes — e.g., new x_cld_travel.ItineraryConflict() or new global.ArraysUtils()."
  },
  {
   "id": "inklingpart2-p133-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 133,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p133.jpg",
   "stem": "Which statement about Script Includes is correct?",
   "options": [
    "Classless Script Includes can be called from the client side",
    "Classless Script Includes are callable only from server-side; privately scoped Script Includes can only be called by other scripts in the same scope; use GlideAjax to call from client-side",
    "All Script Includes run automatically",
    "Script Includes cannot be reused"
   ],
   "answer": 1,
   "explanation": "Script Includes contain reusable code that executes only when called. Classless Script Includes are callable only from server-side. Privately scoped Script Includes can only be called by scripts in the same scope. Use GlideAjax when passing data between client and server, and JSON/delimited strings to pass multiple values."
  },
  {
   "id": "inklingpart2-p137-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 137,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p137.jpg",
   "stem": "What does a Flow consist of, and which role controls permission to use Flow Designer?",
   "options": [
    "Only a trigger; the admin role only",
    "A trigger plus at least one action (triggers start a flow; actions automate processes/record operations; subflows are reusable action sequences); the flow_designer role grants permission",
    "Only actions; the itil role",
    "Only subflows; no role needed"
   ],
   "answer": 1,
   "explanation": "Flow Designer is a Now Platform feature for process automation. A Flow consists of a trigger and at least one action — triggers start a flow, actions automate processes or record operations, and subflows are reusable action sequences. The flow_designer role grants permission to use Flow Designer (it gives broad access to tables/database operations)."
  },
  {
   "id": "inklingpart2-p136-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 136,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p136.jpg",
   "stem": "According to the course, when should you use Flow Designer versus the Workflow Editor?",
   "options": [
    "Always use Workflow Editor for everything",
    "Use Flow Designer to develop new flows or for a major redesign of an existing Workflow; use the Workflow Editor to maintain existing Workflows still functioning as expected (both can be used in the same instance)",
    "Flow Designer cannot coexist with Workflow",
    "Use Workflow Editor only for new development"
   ],
   "answer": 1,
   "explanation": "Use Flow Designer for new flows or major redesigns of existing Workflows. Use the Workflow Editor to manage existing Workflows that still function as expected. Both can be used at the same time in an instance, so familiarity with Workflow basics is still useful for fixes."
  },
  {
   "id": "inklingpart2-p140-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 140,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p140.jpg",
   "stem": "What does configuring a Flow trigger require, and what does the Record trigger type do?",
   "options": [
    "Only a schedule; it runs once daily",
    "Configuring When to start, Where to monitor for changes, and What conditions must be met; the Record trigger type starts the flow when a record is created, updated, or both and the transaction meets the condition filter",
    "Only a table; it triggers on delete",
    "Only a script; it triggers on login"
   ],
   "answer": 1,
   "explanation": "Creating a trigger requires configuring When to start the flow, Where to monitor for changes, and What conditions must be met. The Record trigger type fires when a record is created, updated, or both (and meets the filter); the Date/Scheduled trigger type fires at a specific time and can Run Once or on intervals."
  },
  {
   "id": "inklingpart2-p141-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 141,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p141.jpg",
   "stem": "In Flow Designer, what is the difference between an Action, Flow Logic, and a Subflow?",
   "options": [
    "They are the same thing",
    "Actions add functionality (create tasks, look up records, send email); Flow Logic controls whether actions run (If statements, For Each loops); Subflows automate generic, reusable business logic across applications",
    "Actions control loops; Flow Logic sends email; Subflows are triggers",
    "Only Actions exist in Flow Designer"
   ],
   "answer": 1,
   "explanation": "Actions add functionality to a flow (create tasks, look up records, send email) — core actions are ServiceNow-provided (not editable in Action Designer), custom actions are editable. Flow Logic controls which action steps run via If statements and For Each loops. Subflows automate generic business logic reusable across multiple applications/processes."
  },
  {
   "id": "inklingpart2-p143-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 143,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p143.jpg",
   "stem": "What are Pills in Flow Designer?",
   "options": [
    "Error messages",
    "Trigger/action data stored as variables in the Data panel that can be dragged and dropped onto Actions, Flow Logic, and Subflows (more are created as you add actions)",
    "Scheduled jobs",
    "Security roles"
   ],
   "answer": 1,
   "explanation": "Flows store trigger data gathered or generated as variables (Pills) in the Data panel. These Pills can be dragged and dropped onto Actions, Flow Logic, and Subflows. As you add more actions, additional Pills are created — e.g., a Trigger Record Pill used in an If condition to check the incident's priority."
  },
  {
   "id": "inklingpart2-p144-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 144,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p144.jpg",
   "stem": "In Flow Designer, when should you use an inline script versus an Action or Subflow, and what must an inline script do?",
   "options": [
    "Use inline scripts for all reusable logic; they need not return values",
    "Use inline scripts for small, NON-reusable logic (admins/developers or those with Allow Scripting permission) to modify input values; for reusable code create an Action or Subflow; inline scripts must return values",
    "Inline scripts can only delete records; they never return values",
    "Inline scripts replace all actions"
   ],
   "answer": 1,
   "explanation": "Inline scripts let authorized users (admins, developers, or those with the Allow Scripting delegated-development permission) modify input values (small format conversions, transformations, math). Use them for small, non-reusable logic; for reusable code, create an Action or Subflow. Importantly, inline scripts must return values."
  },
  {
   "id": "inklingpart2-p146-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 146,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p146.jpg",
   "stem": "What does the Flow Designer Error Handler do?",
   "options": [
    "It deletes failed flows",
    "It enables flows to catch errors and run a sequence of actions/subflows to identify and correct issues; Error status captures Code (Integer) and Message (String), and it changes the states reported in execution details",
    "It disables logging",
    "It only works in subflows"
   ],
   "answer": 1,
   "explanation": "The Error Handler enables a flow to catch errors and run a recovery sequence. The Error Handler switch enables it; the Error status holds Code (Integer) and Message (String). It changes flow execution states: 'Completed (error caught)', 'Completed (error skipped)', and 'Error' (uncaught)."
  },
  {
   "id": "inklingpart2-p147-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 147,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p147.jpg",
   "stem": "Which Flow Designer scripting API is available ONLY inside Flow Designer for executing actions/flows/subflows in server-side scripts?",
   "options": [
    "GlideRecord",
    "FlowAPI; (the FlowScriptAPI object gives access to Flow Designer context from script steps/inline scripts and cannot be instantiated manually)",
    "GlideForm",
    "g_scratchpad"
   ],
   "answer": 1,
   "explanation": "FlowAPI methods are available only inside Flow Designer to execute actions, flows, or subflows in server-side scripts (blocking or non-blocking). The FlowScriptAPI object provides access to Flow Designer context details from script steps and inline scripts; you cannot instantiate it — objects are created automatically and accessible only in those contexts. (ScriptableFlowRunner runs flows from outside Flow Designer.)"
  },
  {
   "id": "inklingpart2-p150-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 150,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p150.jpg",
   "stem": "What is GlideFlow, and what special ACL is required when a client-side script executes a Flow/Subflow/Action?",
   "options": [
    "A server-side query API; no ACL needed",
    "A client-side API (GlideFlow.startFlow/startSubflow/startAction) that returns JavaScript promises; a 'client_callable_flow_object' ACL type must be assigned or access is denied by default",
    "A Business Rule API; the admin role",
    "A database connector; a STAR rule"
   ],
   "answer": 1,
   "explanation": "GlideFlow is the client-side API for interacting with Flows, Subflows, and Actions (startFlow/startSubflow/startAction). It returns JavaScript promise objects (results are not immediate). When client-side script executes a flow object, a 'client_callable_flow_object' ACL type must be assigned to it or access is denied by default; ACLs are managed via the Manage Security menu in Flow Designer."
  },
  {
   "id": "inklingpart2-p153-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 153,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p153.jpg",
   "stem": "How does a Subflow differ from a Flow regarding triggers, and what are inputs/outputs used for?",
   "options": [
    "Subflows require a trigger like flows",
    "Subflows are reusable action sequences that do NOT require a trigger and can be started from a Flow, Subflow, or Script; Inputs pass data into the subflow's actions and Outputs return data to the caller",
    "Subflows cannot accept inputs",
    "Subflows can only run on a schedule"
   ],
   "answer": 1,
   "explanation": "A Subflow is a container of reusable automated steps started from a Flow, Subflow, or Script. Unlike flows, subflows do NOT require a trigger. Inputs make data available to the subflow's actions; Output data can be returned to the module that called the subflow. Subflows promote modular, reusable design across flows."
  },
  {
   "id": "inklingpart2-p154-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 154,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p154.jpg",
   "stem": "What is required before a Subflow can be called from a script, and what helps generate the calling code?",
   "options": [
    "Nothing; any subflow can be called",
    "The subflow must be created before the calling script AND must be PUBLISHED (unpublished subflows don't appear in actions and can't be called); the Code Snippet Generator helps produce the correct API call",
    "The subflow must be private; use GlideRecord",
    "The subflow must be inactive; write the code manually"
   ],
   "answer": 1,
   "explanation": "Server scripts (Business Rules, UI Actions, Script Includes) and Client Scripts can call a published subflow. Requirements: create the subflow before the calling script, and publish it — unpublished subflows don't show in the actions section and can't be called. Server-side APIs run Non-Blocking or Blocking-with-Timeout; the client GlideFlow library uses promises. Use the Code Snippet Generator to get the right API."
  },
  {
   "id": "inklingpart2-p160-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 160,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p160.jpg",
   "stem": "When should a Script Action Step be used in Action Designer, and what plugin is needed for third-party integrations?",
   "options": [
    "Always script every action; no plugin needed",
    "Only when core Action Steps (or a combination of them) cannot achieve the result, writing reusable JavaScript; integrations with third-party systems via the Script step require the IntegrationHub plugin",
    "Never use scripting in actions",
    "Script steps require the admin role only"
   ],
   "answer": 1,
   "explanation": "Before scripting, verify that core Action Steps (or a combination) cannot produce the desired result; the JavaScript you write should be reusable. The Script step can create integrations with third-party systems, but that requires the IntegrationHub plugin to be activated (not required for instance-only scripts)."
  },
  {
   "id": "inklingpart2-p161-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 161,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p161.jpg",
   "stem": "In an Action Designer Script step, how are the step's Input and Output variables referenced within the script?",
   "options": [
    "With g_form and gs prefixes",
    "With the prefixes 'inputs' and 'outputs' (e.g., inputs.<name> and outputs.<name>)",
    "With current and previous",
    "With sysparm_ prefixes"
   ],
   "answer": 1,
   "explanation": "A Script step has separate Input and Output variables. An Input variable is created/named and an Action Input data pill is added to its Value to make the data accessible. In the script, the Script Step Input and Output variables are referenced with the 'inputs' and 'outputs' prefixes."
  },
  {
   "id": "inklingpart2-p167-q1",
   "source": "inklingpart2",
   "sourceTitle": "Inkling Part 2",
   "page": 167,
   "domain": "Server-Side Scripting & Flow",
   "image": "assets/pages/inklingpart2-p167.jpg",
   "stem": "What is the recommended guidance about Flow Designer versus Workflow for new development?",
   "options": [
    "Workflow should be used for all new work",
    "Flow Designer has reached parity with Workflow and should be used for all new development and major redesigns; evaluate core actions before scripting a custom action, and use actions/subflows for reusable logic",
    "Flow Designer cannot do what Workflow does",
    "Always script custom actions first"
   ],
   "answer": 1,
   "explanation": "Flow Designer has reached parity with Workflow and should be used for all new development and major redesigns. Actions and subflows provide reusable business logic across flows. Best practice: evaluate the core actions before scripting a custom action; the natural-language, low-code approach makes flow creation accessible to many roles."
  }
 ]
};
