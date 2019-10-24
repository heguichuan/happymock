# happy-mock

一个简单的数据`mock`服务器，提供`api`接口给前端返回模拟数据。

## 使用

### 安装

```bash
npm install -D happymock
```

### 启动

```bash
# package.json的scripts中
"dev-mock": "concurrently \"happymock\" \"npm run dev\""

# 启动带mock服务的本地开发
npm run dev-mock
```

### 可选配置

`--path`: mock 数据存放目录，默认根目录的`./mock`目录

`--port`: mock 服务器监听的端口，默认`6031`端口

### 模拟接口

在`mock/db/index.js`中写好数据，然后在`mock/route/index.js`中定义接口。可以使用`mockjs`快速生成模拟数据。
