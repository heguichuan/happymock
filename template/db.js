var Mock = require("mockjs");

module.exports = {
    test: Mock.mock({
        "error": 1,
        "message": "success3",
        "result|40": [
            {
                "author": "@name",
                "comment": "@cparagraph",
                "date": "@datetime"
            }
        ]
    }),
    success: {
        code: 0,
        msg: "succ",
        data: null
    },
    fail: {
        code: 500,
        msg: "接口错误咯！",
        data: null
    }
};
