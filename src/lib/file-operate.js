const fs = require("fs-extra");
const path = require("path");

const checkFile = function(p) {
    if (fs.existsSync(path.join(p, "./index.js")) || fs.existsSync(p + ".js")) {
        return;
    }

    mkFile(p);
};

const mkFile = function(p) {
    let fpath = path.join(p, "./index.js");
    fs.ensureFileSync(fpath);

    const tplMap = {
        db: path.resolve(__dirname, "../../template/db.js"),
        route: path.resolve(__dirname, "../../template/route.js")
    };
    switch (true) {
        case transToUnixPath(fpath).indexOf("/db/") !== -1:
            copyTemplate(tplMap.db, fpath);
            break;
        case transToUnixPath(fpath).indexOf("/route/") !== -1:
            copyTemplate(tplMap.route, fpath);
            break;
        default:
            break;
    }
};

const copyTemplate = function(from, to) {
    const content = fs.readFileSync(from, "utf8");
    fs.writeFileSync(to, content);
};

const ensureDirSync = function(...params) {
    fs.ensureDirSync(...params);
};

const transToUnixPath = function(p) {
    return p.replace(/\\/g, "/");
};

module.exports = {
    checkFile,
    mkFile,
    ensureDirSync
};
