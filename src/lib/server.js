// server.js
const path = require("path");
const commander = require("./argv-define");
const jsonServer = require("json-server");
const { checkFile } = require("./file-operate");

// 拼接路径
let p = commander.path ? path.resolve(commander.path) : path.resolve("./mock");
let dbPath = path.join(p, "./db");
let routePath = path.join(p, "./route");

// 检查文件是否存在，不存在则创建
checkFile(dbPath);
checkFile(routePath);

const db = require(dbPath);
const routes = require(routePath);
const port = commander.port || 6031;
const server = jsonServer.create();
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();
const rewriter = jsonServer.rewriter(routes);
server.use(middlewares);
// 将 POST 请求转为 GET
server.use((request, res, next) => {
    request.method = "GET";
    next();
});
server.use(rewriter); // 注意：rewriter 的设置一定要在 router 设置之前
server.use(router);
server.listen(port, () => {
    console.log("open mock server at localhost:" + port);
});
