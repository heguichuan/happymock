var Mock = require('mockjs');
module.exports = {
getComment: Mock.mock({
"error": 1,
"message": "success3",
"result|40": [{
"author": "@name",
"comment": "@cparagraph",
"date": "@datetime"
}]
}),
addComment: Mock.mock({
"error": 0,
"message": "success",
"result": []
})
};