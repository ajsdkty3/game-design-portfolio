import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const dist = resolve(root, "dist");

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });

const filesToCopy = ["index.html", "styles.css", "script.js"];

for (const file of filesToCopy) {
  cpSync(resolve(root, file), resolve(dist, file));
}

if (existsSync(resolve(root, "public"))) {
  cpSync(resolve(root, "public"), resolve(dist, "public"), { recursive: true });
}

console.log("Built static portfolio into dist/");
