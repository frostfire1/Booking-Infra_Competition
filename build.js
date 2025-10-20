// build-next.js
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const nextBuild = require("next/dist/build").default;

console.log("🏗️ Building Next.js project (Bun-compatible mode)…");

const dir = process.cwd();
nextBuild(dir, { turbo: false })
  .then(() => console.log("✅ Build complete!"))
  .catch((err) => {
    console.error("❌ Build failed:", err);
    process.exit(1);
  });
