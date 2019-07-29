const fs = require("fs-extra");
const path = require("path");

const checkFile = function(p) {
    if (fs.existsSync(path.join(p, "./index.js")) || fs.existsSync(p + ".js")) {
        return;
    }

    mkFile(p);
};

const mkFile = async function(p) {
    let fpath = path.join(p, "./index.js");
    try {
        await fs.ensureFile(fpath);
    } catch (error) {
        console.error(error);
    }
    // let writeStream = fs.createWriteStream(path.join(p, "./index.js"));
    // writeStream.write("abc");
};

module.exports = {
    checkFile,
    mkFile
};
