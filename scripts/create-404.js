
const fs = require("fs");
const path = require("path");

const buildDirectory = path.resolve(__dirname, "../build");

const indexFile = path.join(buildDirectory, "index.html");
const notFoundFile = path.join(buildDirectory, "404.html");

if (!fs.existsSync(indexFile)) {
  console.error("Build index.html was not found!");
  process.exit(1);
}

fs.copyFileSync(indexFile, notFoundFile);

console.log("404.html created successfully!");
