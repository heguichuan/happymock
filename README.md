# happymock

[English Docs](https://github.com/heguichuan/happymock/blob/master/README_EN.md)

一个简单的基于[json-server](https://www.npmjs.com/package/json-server)的数据`mock`服务器，提供`api`接口给前端返回模拟数据。

## 使用

### 本地安装启动

```bash
npm install -D happymock
# 方式1. 根目录直接执行happymock

# 方式2. 结合concurrently
npm install -D concurrently
# package.json的scripts中
"dev-mock": "concurrently \"happymock\" \"npm run dev\""

# 启动带mock服务的本地开发
npm run dev-mock
```

### 全局安装启动

```bash
npm install -g happymock
happymock
# 可以在任意目录执行happymock，默认会在当前目录下创建mock文件夹。
# 你可以在每个项目根目录执行命令，以实现每个项目对应一个各自的mock目录。
# 也可以在一个统一的目录执行命令，这样可以以一个服务供给不同的项目。
```

### 可选配置

`--path`: mock 数据存放目录，默认根目录的`./mock`目录

`--port`: mock 服务器监听的端口，默认`6031`端口

### 模拟接口

在`mock/db/index.js`中写好数据，属性名即为接口路径。

> 也可以在`mock/route/index.js`中rewrite你的路由，**这一步不是必须的**。

支持使用`mockjs`快速生成模拟数据。
