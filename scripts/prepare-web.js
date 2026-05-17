const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const outDir = path.join(rootDir, "www");
const filesToCopy = ["index.html", "poster.html", "poster.png"];

fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });

for (const file of filesToCopy) {
  fs.copyFileSync(path.join(rootDir, file), path.join(outDir, file));
}

console.log(`Prepared web assets in ${outDir}`);
