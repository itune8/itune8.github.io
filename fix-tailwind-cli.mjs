// fix-tailwind-cli.mjs
// Run with: node fix-tailwind-cli.mjs

import { execSync } from "node:child_process";
import { existsSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import process from "node:process"; // ✅ fix for 'process not defined'

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const tailwindBin = path.join(__dirname, "node_modules", ".bin", "tailwindcss");

try {
  // 1️⃣ Verify Tailwind binary exists
  if (!existsSync(tailwindBin)) {
    console.error("❌ Tailwind CLI not found. Reinstall it first:\n  npm install -D tailwindcss");
    process.exit(1);
  }

  // 2️⃣ Generate Tailwind config
  if (!existsSync(path.join(__dirname, "tailwind.config.js"))) {
    console.log("✨ Creating tailwind.config.js ...");
    execSync(`node ${tailwindBin} init`, { stdio: "inherit" });
  } else {
    console.log("✅ tailwind.config.js already exists");
  }

  // 3️⃣ Generate PostCSS config
  const postcssPath = path.join(__dirname, "postcss.config.js");
  if (!existsSync(postcssPath)) {
    console.log("✨ Creating postcss.config.js ...");
    const content = `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};\n`;
    writeFileSync(postcssPath, content);
  } else {
    console.log("✅ postcss.config.js already exists");
  }

  console.log("✅ Tailwind CLI patch complete!");
} catch (err) {
  console.error("❌ Error running Tailwind CLI manually:", err.message);
  process.exit(1);
}
