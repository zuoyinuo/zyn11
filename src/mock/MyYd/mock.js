let Mock = require("mockjs")
let arrs = [
    {
        "imgSrc":"http://www.bjjfr.com/data/upload/image/20210924/1632470692619740.jpg",
        "title":"Name",
        "title1":"茜茜公主",
        "date":"Date",
        "heat":"Heat",
        "num":0,
        "but":"WATCH THE COMPLETE WORKS"
    },
    {
        "imgSrc":"http://www.bjjfr.com/data/upload/image/20210924/1632467901147046.jpg",
        "title":"Name",
        "title1":"琼楼",
        "date":"Date",
        "heat":"Heat",
        "num":0,
        "but":"WATCH THE COMPLETE WORKS"
    },
    {
        "imgSrc":"http://www.bjjfr.com/data/upload/image/20210929/1632895245401861.jpg",
        "title":"Name",
        "title1":"原色新森",
        "date":"Date",
        "heat":"Heat",
        "num":0,
        "but":"WATCH THE COMPLETE WORKS"
    },
    {
        "imgSrc":"http://www.bjjfr.com/data/upload/image/20210924/1632473504991858.jpg",
        "title":"Name",
        "title1":"茶旅时光",
        "date":"Date",
        "heat":"Heat",
        "num":0,
        "but":"WATCH THE COMPLETE WORKS"
    },
    {
        "imgSrc":"http://www.bjjfr.com/data/upload/image/20210809/1628496984309876.jpg",
        "title":"Name",
        "title1":"游园似梦",
        "date":"Date",
        "heat":"Heat",
        "num":0,
        "but":"WATCH THE COMPLETE WORKS"
    },
]
Mock.mock("/api/MyYd","get",(config) => {
    console.log(config)
    return arrs
})