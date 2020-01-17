# happymock

[中文文档](https://github.com/heguichuan/happymock/blob/master/README.md)

A simple mock server based on [json-server](https://www.npmjs.com/package/json-server).

## usage

### local

```bash
npm install -D happymock
# Way 1. Execute happymock directly in the root directory

# Way 2. Combine concurrently
npm install -D concurrently
# package.json scripts
"dev-mock": "concurrently \"happymock\" \"npm run dev\""

# Start local development with a mock server
npm run dev-mock
```

### global

```bash
npm install -g happymock
happymock
# You can execute happymock in any directory. By default, a mock folder is created in the current directory.
# You can execute commands at the root directory of each project to achieve a corresponding mock directory for each project.
# You can also execute commands in a unified directory, which can provide different projects with one service.
```

### 可选配置

`--path`: Mock data storage directory, default `. / mock` of the root directory

`--port`: Mock server listening port, default `6031` port

### 模拟接口

Write the data in `mock/db/index.js`, and the property name is the interface path.

> You can also rewrite your routes in `mock/route/index.js`,**This step is not necessary**.

Support the use of `mockjs` to quickly generate mock data.
