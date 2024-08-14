const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("database.json"); // Bạn cần có file db.json chứa dữ liệu
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use("/api", router); // Mọi request đến /api sẽ được chuyển hướng đến json-server

module.exports = server;
