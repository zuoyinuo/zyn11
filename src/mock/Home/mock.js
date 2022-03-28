let Mock = require("mockjs")
Mock.mock(
    "/api/home",
    [
        "http://www.bjjfr.com/data/upload/image/20211107/1636254625557552.jpg",
        "http://www.bjjfr.com/data/upload/image/20211122/1637573979617270.jpg",
        "http://www.bjjfr.com/data/upload/image/20210824/1629797011979856.jpg",
        "http://www.bjjfr.com/data/upload/image/20210828/1630117393406436.jpg",
        "http://www.bjjfr.com/data/upload/image/20210714/1626246559918144.jpg"
    ]
)