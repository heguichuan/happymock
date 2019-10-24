#!/usr/bin/env node

const nodemon = require("nodemon");
const path = require("path");
const commander = require("../lib/argv-define");
const { ensureDirSync } = require("../lib/file-operate");

let p = commander.path ? path.resolve(commander.path) : path.resolve("./mock"); //工作空间路径

// 检查目录是否存在，不存在则创建
ensureDirSync(p);

// 加 --cwd参数是为了指定nodemon的工作目录，默认监听启动入口文件的目录
nodemon(
    [
        path.resolve(__dirname, "../lib/server.js"),
        "--cwd",
        p,
        "--path",
        p,
        commander.port ? `--port ${commander.port}` : ""
    ].join(" ")
);
