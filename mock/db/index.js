var Mock = require("mockjs");

module.exports = {
    getComment: Mock.mock({
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
    addComment: Mock.mock({
        "error": 0,
        "message": "success",
        "result": []
    }),

    getscode: {
        code: 0,
        msg: "success2",
        data: null
    },
    login: {
        code: 50112,
        msg: "数据库异常",
        data: null
    },
    "GetUpgradeBagList": {
        "code": 0,
        "msg": "succ",
        "data": {
            "items": [
                {
                    "title": "biaoti1",
                    "fid": 80,
                    "soft_id": 65,
                    "target": "1.3",
                    "pid": 83,
                    "wait": 316,
                    "updating": 76290,
                    "finish": 0,
                    "failed": 1000
                },
                {
                    "fid": 31,
                    "soft_id": 51,
                    "target": "1.3",
                    "pid": 1,
                    "wait": 114,
                    "updating": 75894,
                    "finish": 0,
                    "failed": 1000
                },
                {
                    "fid": 92,
                    "soft_id": 53,
                    "target": "1.2",
                    "pid": 57,
                    "wait": 350,
                    "updating": 99698,
                    "finish": 0,
                    "failed": 998
                },
                {
                    "fid": 84,
                    "soft_id": 16,
                    "target": "1.4",
                    "pid": 21,
                    "wait": 833,
                    "updating": 28552,
                    "finish": 0,
                    "failed": 1000
                },
                {
                    "fid": 63,
                    "soft_id": 108,
                    "target": "1.1",
                    "pid": 98,
                    "wait": 425,
                    "updating": 92340,
                    "finish": 0,
                    "failed": 1000
                },
                {
                    "fid": 17,
                    "soft_id": 77,
                    "target": "1.4",
                    "pid": 102,
                    "wait": 803,
                    "updating": 27477,
                    "finish": 0,
                    "failed": 1000
                },
                {
                    "fid": 68,
                    "soft_id": 30,
                    "target": "1.1",
                    "pid": 78,
                    "wait": 847,
                    "updating": 35874,
                    "finish": 0,
                    "failed": 998
                },
                {
                    "fid": 18,
                    "soft_id": 97,
                    "target": "1.2",
                    "pid": 38,
                    "wait": 480,
                    "updating": 55645,
                    "finish": 0,
                    "failed": 1000
                },
                {
                    "fid": 43,
                    "soft_id": 54,
                    "target": "1.2",
                    "pid": 79,
                    "wait": 834,
                    "updating": 65039,
                    "finish": 0,
                    "failed": 1000
                },
                {
                    "fid": 83,
                    "soft_id": 103,
                    "target": "1.3",
                    "pid": 97,
                    "wait": 108,
                    "updating": 50614,
                    "finish": 0,
                    "failed": 999
                }
            ],
            "total_count": 39
        }
    },
    "GetUserProductList": Mock.mock({
        code: 0,
        msg: "succ",
        data: {
            total_count: 400,
            "items|30": [
                {
                    "pid|+1": 1,
                    "title": "@title"
                }
            ]
        }
    }),
    "GetOtaModule": {
        "code": 0,
        "data": [
            {
                "code": "001",
                "modules": [
                    { "mcode": "00101", "type": "M5330-A" },
                    { "mcode": "00102", "type": "M5330" },
                    { "mcode": "00103", "type": "M5312" },
                    { "mcode": "00104", "type": "M5313" },
                    { "mcode": "00105", "type": "S5601" },
                    { "mcode": "00106", "type": "M5310-A" },
                    { "mcode": "00107", "type": "M5310" },
                    { "mcode": "00108", "type": "M5311" },
                    { "mcode": "00109", "type": "M5330-GNSS" },
                    { "mcode": "00110", "type": "M5330-STD" }
                ],
                "name": "中国移动"
            },
            {
                "code": "002",
                "modules": [{ "mcode": "00201", "type": "N256" }],
                "name": "零零智能"
            },
            {
                "code": "003",
                "modules": [
                    { "mcode": "00301", "type": "NB86-G" },
                    { "mcode": "00302", "type": "NB08-01" }
                ],
                "name": "利尔达"
            },
            {
                "code": "004",
                "modules": [{ "mcode": "00401", "type": "SARA-N200" }],
                "name": "u-blox"
            },
            {
                "code": "005",
                "modules": [
                    { "mcode": "00501", "type": "RG-NB6118" },
                    { "mcode": "00502", "type": "RG-NB6210" }
                ],
                "name": "锐捷网络"
            },
            {
                "code": "006",
                "modules": [
                    { "mcode": "00601", "type": "WH-NB71" },
                    { "mcode": "00602", "type": "WH-NB73" }
                ],
                "name": "上海稳恒"
            },
            {
                "code": "007",
                "modules": [{ "mcode": "00701", "type": "SN12_B8" }],
                "name": "信位通讯"
            },
            {
                "code": "008",
                "modules": [
                    { "mcode": "00801", "type": "ZM8300" },
                    { "mcode": "00802", "type": "ZM8301" }
                ],
                "name": "中兴通讯"
            },
            {
                "code": "009",
                "modules": [{ "mcode": "00901", "type": "N20" }],
                "name": "有方科技"
            },
            {
                "code": "010",
                "modules": [
                    { "mcode": "01001", "type": "T1" },
                    { "mcode": "01002", "type": "T101" },
                    { "mcode": "01003", "type": "T106" }
                ],
                "name": "普创天信"
            },
            {
                "code": "011",
                "modules": [{ "mcode": "01101", "type": "NH01A" }],
                "name": "桑锐电子"
            },
            {
                "code": "012",
                "modules": [
                    { "mcode": "01201", "type": "SIM7000C" },
                    { "mcode": "01202", "type": "SIM7000C-N" },
                    { "mcode": "01203", "type": "SIM7020C" },
                    { "mcode": "01204", "type": "SIM7030" }
                ],
                "name": "芯讯通"
            },
            {
                "code": "013",
                "modules": [{ "mcode": "01301", "type": "L620" }],
                "name": "移柯通信"
            },
            {
                "code": "014",
                "modules": [
                    { "mcode": "01401", "type": "BC28" },
                    { "mcode": "01402", "type": "BC68" },
                    { "mcode": "01403", "type": "BC35-G" },
                    { "mcode": "01404", "type": "BC95-G" },
                    { "mcode": "01405", "type": "BC26" },
                    { "mcode": "01406", "type": "BC95-B8" }
                ],
                "name": "移远通信"
            },
            {
                "code": "015",
                "modules": [
                    { "mcode": "01501", "type": "CFB-608-B8" },
                    { "mcode": "01502", "type": "CFB-609" }
                ],
                "name": "云程科技"
            },
            {
                "code": "016",
                "modules": [{ "mcode": "01601", "type": "ML5530" }],
                "name": "骐俊物联"
            },
            {
                "code": "017",
                "modules": [{ "mcode": "01701", "type": "N700-CN" }],
                "name": "广和通"
            },
            {
                "code": "018",
                "modules": [{ "mcode": "01801", "type": "NBM20" }],
                "name": "东信和平"
            },
            {
                "code": "019",
                "modules": [{ "mcode": "01901", "type": "WT208" }],
                "name": "吴通集团"
            },
            {
                "code": "020",
                "modules": [{ "mcode": "02001", "type": "ME3616" }],
                "name": "高新兴物联"
            },
            {
                "code": "021",
                "modules": [{ "mcode": "02101", "type": "IM2209" }],
                "name": "新华三"
            },
            {
                "code": "022",
                "modules": [
                    { "mcode": "02201", "type": "CT-M201" },
                    { "mcode": "02202", "type": "CT-M202" }
                ],
                "name": "中科联合"
            },
            {
                "code": "023",
                "modules": [{ "mcode": "02301", "type": "AI-NB15" }],
                "name": "四川爱联"
            },
            {
                "code": "024",
                "modules": [{ "mcode": "02401", "type": "UNB100-G" }],
                "name": "九联科技"
            },
            {
                "code": "025",
                "modules": [{ "mcode": "02501", "type": "S-ModNB00A" }],
                "name": "朝歌科技"
            },
            {
                "code": "026",
                "modules": [{ "mcode": "02601", "type": "N100" }],
                "name": "小瑞科技"
            },
            {
                "code": "027",
                "modules": [
                    { "mcode": "02701", "type": "TPB23" },
                    { "mcode": "02702", "type": "TPB40-8" },
                    { "mcode": "02703", "type": "TPB41" }
                ],
                "name": "中怡数宽"
            },
            {
                "code": "028",
                "modules": [{ "mcode": "02801", "type": "WNB301H" }],
                "name": "光宝科技"
            },
            {
                "code": "029",
                "modules": [{ "mcode": "02901", "type": "3115F-R" }],
                "name": "欧智通"
            },
            {
                "code": "030",
                "modules": [{ "mcode": "03001", "type": "A9600-R2" }],
                "name": "龙尚科技"
            },
            {
                "code": "031",
                "modules": [{ "mcode": "03101", "type": "LT150" }],
                "name": "灵慧科技"
            },
            {
                "code": "000",
                "modules": [{ "mcode": "00001", "type": "其他" }],
                "name": "其他"
            }
        ],
        "msg": "success"
    }
};
