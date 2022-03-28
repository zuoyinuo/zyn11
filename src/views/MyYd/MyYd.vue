<template>
  <div class="MyYd">
    <div class="mx">
      <img src="http://www.bjjfr.com/data/upload/image/20210705/1625496399708133.jpg" alt="" />
    </div>
    <div class="post_wrap">
      <ul>
        <li>
          <p>ALL SERIES</p>
          <p>全部系列</p>
        </li>
        <li>
          <p>MOLE MANOR</p>
          <p>摩尔庄园</p>
        </li>
        <li>
          <p>STAR HIGH</p>
          <p>明星棚拍</p>
        </li>
        <li>
          <p>WEDDING</p>
          <p>婚礼仪式</p>
        </li>
        <li>
          <p>CITY TRAVEL</p>
          <p>城市旅行</p>
        </li>
        <li>
          <p>CHINESE BRIDES</p>
          <p>中国新娘</p>
        </li>
        <li>
          <p>BIG MOVIE</p>
          <p>大电影</p>
        </li>
      </ul>
    </div>
    <div class="sx">
      <div class="sx_content">
        <h2>《 金夫人婚纱摄影 》样片赏析</h2>
      </div>
    </div>
    <div class="BigContent" v-for="(item, index) in arrs" :key="index">
      <div class="xx">
        <img :src="item.imgSrc" alt="" />
      </div>
      <div class="guest">
        <ul class="guest_content">
          <li>
            <span>{{ item.title }}</span>
            <p>{{ item.title1 }}</p>
          </li>
          <li>
            <span>{{ item.date }}</span>
          </li>
          <li>
            <span>{{ item.heat }}</span>
            <p>{{ item.num }}</p>
          </li>
          <li>
            <button>{{ item.but }}</button>
          </li>
        </ul>
      </div>
    </div>
    <div class="logo">
      <img src="http://www.bjjfr.com/static/images/youth2.png" alt="" />
    </div>
    <div class="footer-bg">
      <div class="footer_right">
        <h1>金夫人婚纱摄影华北总部</h1>
        <h2>GOLDENLADIES SINCE 1989</h2>
        <ul class="r-img">
          <li>
            <img src="http://www.bjjfr.com/static/images/footer/wb_m.jpg" alt="">
            <p>官方微博</p>
          </li>
          <li>
            <img src="http://www.bjjfr.com/static/images/footer/wx_m.jpg" alt="">
            <p>官方微信</p>
          </li>
          <li>
            <img src="http://www.bjjfr.com/static/images/footer/kf_m.jpg" alt="">
            <p>官方客服</p>
          </li>
        </ul>
        <div class="txt">
          <h3>中国金夫人首都旗舰店</h3>
          <p><span>中国金夫人首都旗舰店:</span> 北京市东城区东单北大街3号</p>
          <p><span>中国金夫人·维罗纳美学中心:</span> 北京市朝阳区豆各庄东村创意园区L-1</p>
          <p><span>Bonita礼服中心:</span> 北京市朝阳区豆各庄东村创意园区L-1</p>
          <p><span>法颂男装:</span> 北京市朝阳区豆各庄东村创意园区L-1</p>
          <p><span>初心·永恒珠宝中心:</span> 北京市朝阳区豆各庄东村创意园区L-1</p>
        </div>
        <div class="Phone">
          <div class="phone">
            <img src="http://www.bjjfr.com/static/images/footer/tel_i.png" alt="">
            <div class="phone_txt">
              <p>投诉</p>
              <p>4006919066</p>
            </div>
          </div>
          <div class="phone">
            <img src="http://www.bjjfr.com/static/images/footer/tel_i.png" alt="">
            <div class="phone_txt">
              <p>咨询</p>
              <p>13504020414</p>
            </div>
          </div>
        </div>
      </div>
      <div class="footer_bottom">
        <p>©COPYRIGHT 2009-2021 版权归属 北京金夫人婚纱摄影有限公司</p>
        <p>京ICP备13008516号-1</p>
        <p>京公网安备 11010102003578号
          <img src="http://www.bjjfr.com/static/images/footer/beian.png" alt="">
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "MyYd",
  data() {
    return {
      arrs: null,
    };
  },
  methods: {
    async getMy() {
      let { data } = await axios.get("/api/MyYd");
      this.arrs = data;
    },
  },
  created() {
    this.getMy();
  },
};
</script>
<style scoped>
.BigContent{
  width:100%;
}
.footer_bottom{
  width:472px;
  height:86px;
  color:#fff;
  position: absolute;
  bottom:88px;
  left:39%;
  line-height: 2;
}
* {
  margin: 0;
  padding: 0;
}
ul li {
  float: left;
  list-style: none;
}
.mx {
  width: 100%;
  height: 680px;
  /* background: red;   */
}
.mx img {
  width: 1582px;
  display: block;
  margin:0 auto;
}
.post_wrap {
  width: 100%;
  height: 100px;
  /* background: red; */
}
.post_wrap ul {
  width: 1582px;
  height: 100px;
  /* background: #000; */
  margin: 0 auto;
}
.post_wrap ul li {
  height: 100px;
  padding: 20px 44px 0 44px;
  font-size: 22px;
  border-right: 1px solid #000;
}
.post_wrap ul li:last-child {
  border-right: 0;
}
.sx {
  width: 100%;
  height: 186px;
  /* background: red; */
  margin-top: 70px;
}
.sx_content {
  width: 1582px;
  height: 186px;
  margin: 0 auto;
  overflow: hidden;
  background: url("http://www.bjjfr.com/static/images/title_yp1.jpg") center
    no-repeat;
}
.sx_content h2 {
  font-size: 46px;
  float: left;
  margin-top: 20px;
}
.xx {
  width: 100%;
  height: 100%;
}
.xx img {
  width: 1582px;
  height: 100%;
  display: block;
  margin: 20px auto;
}
.guest {
  width: 100%;
  height: 70px;
  /* background: red; */
}
.guest .guest_content {
  width: 1582px;
  height: 70px;
  margin: 20px auto;
}
.guest .guest_content li {
  padding: 10px 190px 0 162px;
  border-left: 1px solid #000;
}
.guest .guest_content li:first-child {
  padding-left: 0;
  border-left: 0;
}
.guest .guest_content li:last-child {
  padding-right: 0;
}
.guest .guest_content li button {
  width: 286px;
  height: 40px;
}
.logo {
  width: 100%;
  height: 120px;
}
.logo img {
  width: 833px;
  display: block;
  margin: 0 auto;
}
.footer-bg {
  width: 100%;
  height: 1028px;
  background: url("http://www.bjjfr.com/static/images/footer/f_bg.png") center
    no-repeat;
  margin-top: 70px;
  overflow: hidden;
  position: relative;
}
.footer_right {
  float: right;
  position: relative;
  width: 38.5%;
  margin-top: 112px;
  border-left: 1px solid #b4b3b1;
  padding: 50px 0 46px 60px;
  color: #aaacab;
  font-family: "微软雅黑", "Helvetica Neue", "Hiragino Sans GB", "冬青黑体",
    "Microsoft YaHei", Helvetica, Arial, sans-serif;
}
.footer_right h1{
  font-size:43px;
  margin:-44px 0 20px 0;
}
.footer_right h2{
  font-size:28px;
  margin-bottom:20px;
}
.r-img li{
  padding:8px 0 0 87px
}
.r-img li:nth-child(1),.r-img li:nth-child(2){
  margin-top:28px;
}
.txt{
  width:470px;
  height:150px;
  margin-top:200px;
  text-align: left;
  color:#fff;
  line-height: 26px;
  margin-left:87px;
}
.txt span{
  color:#e6c985;
}
.Phone{
  width:300px;
  height:80px;
  margin:20px 0 0 90px;
  display: flex;
  flex-wrap:wrap
}
.phone{
  width:250px;
  margin-bottom:20px;
}
.phone img{
  float:left;
}
.phone_txt{
  float:left;
  text-align: left;
  margin-left:15px;
  color:#fff;
  font-size:14px;
}
</style>