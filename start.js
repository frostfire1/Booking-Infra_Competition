// start-next.js
import { createRequire } from "module";
import http from "http";

const require = createRequire(import.meta.url);
const next = require("next");

const port = process.env.PORT || 3000;
const dev = false; // production mode
const app = next({ dev });
const handle = app.getRequestHandler();

console.log("🚀 Starting Next.js (Bun-compatible mode)…");

app.prepare().then(() => {
  http
    .createServer((req, res) => {
      handle(req, res, req.url);
    })
    .listen(port, () => {
      console.log(`✅ Server ready on http://localhost:${port}`);
    });
});
