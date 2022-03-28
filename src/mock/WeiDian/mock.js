let Mock = require("mockjs")
let arrs = [
    {
        "name":"Moore Manor 2.0 debut",
        "name1":"摩尔庄园2.0耀世首发",
        "title":" “世界上最好的事， 就是你在想的人 也在想你 你爱的人也刚好爱你有人惦记，有人爱，有所期待。” ",
        "title1":" The best thing in the world, Even the person you re thinking about is thinking about you The person you love just loves you Someone cares, someone loves and looks forward to.  ",
        "imgSrc":"http://www.bjjfr.com/data/upload/image/20210906/1630914250863567.jpg"
    },
    {
        "name":"Rhyme of Jiangnan",
        "name1":"江南之韵",
        "title":"森极简色彩的点缀，组成一幅幅干净又纯粹的时尚画报， 甜蜜的爱情在风中飘荡，浪漫被长久定格。",
        "title1":"The integration and collision of ancient and modern China and foreign countries have achieved the elegant beauty of New Oriental wedding photos; The gentle freehand brushwork of Jiangnan gardens is integrated into the western style of the Republic of China, and the works show a romantic vision across the times.",
        "imgSrc":"http://www.bjjfr.com/data/upload/image/20210801/1627810955943932.jpg"
    },
    {
        "name":"Deep in the forest",
        "name1":"森林深处",
        "title":"森林深处，树木葱郁，光束稀薄的倾泻下来。每个女孩都有这样一个爱丽丝般的美妙梦境，自然梦幻的森林，带来纯粹的美和快乐。",
        "title1":"Deep in the forest, the trees are lush, and the light beams pour down thinly. Every girl has such a wonderful Alice like dream, a natural dream forest, which brings pure beauty and happiness.",
        "imgSrc":"http://www.bjjfr.com/data/upload/image/20210801/1627810775806465.jpg"
    },
    {
        "name":"Timeless love",
        "name1":"时光恋人",
        "title":"老城区的静谧街角，午后的阳光温柔，咖啡店的缱绻故事。我们截取生活的某刻片段，随意而真实，一个午后便是一段甜蜜。",
        "title1":"The quiet corner of the old city, the gentle afternoon sun and the love story of the coffee shop. We intercept a moment of life, casual and real, and an afternoon is a sweet one.",
        "imgSrc":"http://www.bjjfr.com/data/upload/image/20210801/1627810544759133.jpg"
    },
    {
        "name":"Street diary",
        "name1":"街旁日记",
        "title":"在熟悉的街市，发掘视觉与灵感，一半浪漫，一半时尚。在城市的街旁日记，陪你共赴一场烟火的浪漫之约。",
        "title1":"Explore vision and inspiration in familiar markets, half romantic and half fashionable. In the city's street diary, accompany you to a romantic appointment of fireworks.",
        "imgSrc":"http://www.bjjfr.com/data/upload/image/20210801/1627810289277280.jpg"
    }
]

/* let arr1 = [
    {
        "name":"Rhyme of Jiangnan",
        "name1":"江南之韵",
        "title":" 极简色彩的点缀，组成一幅幅干净又纯粹的时尚画报， 甜蜜的爱情在风中飘荡，浪漫被长久定格。",
        "title1":" The integration and collision of ancient and modern China and foreign countries have achieved the elegant beauty of New Oriental wedding photos; The gentle freehand brushwork of Jiangnan gardens is integrated into the western style of the Republic of China, and the works show a romantic vision across the times. ",
        "imgSrc":"http://www.bjjfr.com/data/upload/image/20210801/1627810955943932.jpg"
    },
] */
Mock.mock("/api/WeiDian","get",(config) => {
    console.log(config)
    return arrs
})

/* Mock.mock("/api/WeiDian","get",(config) => {
    console.log(config)
    return arr1
}) */