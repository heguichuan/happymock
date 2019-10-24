const commander = require("commander");

commander
    .version(process.env.npm_package_version)
    .option("--path [path]", "mock workspace path")
    .option("--port [port]", "mock server port, default: 6031")
    .parse(process.argv);

module.exports = commander;
