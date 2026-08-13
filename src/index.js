import { createServer } from "http";

const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from CI/CD Docker\n");
});

server.listen(3000, () => console.log("Server on :3000"));
