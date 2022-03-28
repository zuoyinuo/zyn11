<template>
  <div id="WeiDian">
    <div class="wcontent">
      <video
        class="video"
        width="100%"
        height="1080px"
        autoplay
        muted="true"
        style="margin-top: 0px; object-fit: fill"
      >
        <source
          src="https://cloud.video.taobao.com//play/u/2937693182/p/1/e/6/t/1/322289194724.mp4"
          type="video/mp4"
        />
      </video>
      <div class="wbox-i">
        <img src="http://www.bjjfr.com/static/images/video_title.jpg" alt="" />
      </div>
      <ul class="wlist">
        <li v-for="(item, index) in arrs" :key="index" >
          <div class="wlist-b">
            <p class="wlist-bp">{{ item.name }}</p>
            <h3>{{ item.name1 }}</h3>
            <p class="wlist-bp1">
              {{ item.title }}
            </p>
            <p class="wlist-bp2">
              {{ item.title1 }}
            </p>
          </div>
          <div class="wlist-b1">
            <img :src="item.imgSrc" alt="" />
          </div>
        </li>
      </ul>

      <!-- <ul class="wlist">
        <li v-for="(item, index) in arr1" :key="index">
          <div class="wlist-b">
            <p class="wlist-bp">{{item.name}}</p>
            <h3>{{item.name1}}</h3>
            <p class="wlist-bp1">
              {{item.title}}
            </p>
            <p class="wlist-bp2">
              {{item.title1}}
            </p>
          </div>
          <div class="wlist-b1">
            <img :src="item.imgSrc" alt="" />
          </div>
        </li>
      </ul> -->
      <ul class="wlist2">
        <li class="on"><span>1</span></li>
        <li><span>2</span></li>
        <li><span>3</span></li>
        <li><span>4</span></li>
        <li><span>5</span></li>
        <li><span>6</span></li>
        <li><span>最末页</span></li>
      </ul>
      <div class="wbox1">
        <img src="http://bj.121314.com/static/images/youth2.png" alt="" />
      </div>
      <div class="wfooter">
        <div class="wfooter-r">
          <h1>金夫人婚纱摄影华北总部</h1>
          <p class="r-p">GOLDENLADIES SINCE 1989</p>
          <div class="wl1">
            <img
              src="http://bj.121314.com/static/images/footer/wb_m.jpg"
              alt=""
            />
            <div class="xia">
              <img
                src="http://bj.121314.com/static/images/footer/wb_ico.png"
                alt=""
              />
              <span>官方微博</span>
            </div>
          </div>
          <div class="wl1">
            <img
              src="http://bj.121314.com/static/images/footer/wx_m.jpg"
              alt=""
            />
            <div class="xia">
              <img
                src="http://bj.121314.com/static/images/footer/wx_ico.png"
                alt=""
              />
              <span>官方微信</span>
            </div>
          </div>
          <div class="wl2">
            <img
              src="http://bj.121314.com/static/images/footer/wx_m.jpg"
              alt=""
              class="i1"
            />
            <div class="xia1">
              <img
                src="http://bj.121314.com/static/images/footer/kf_ico.png"
                alt=""
              />
              <span>官方客服</span>
            </div>
          </div>
          <div class="wl3">
            <p class="wl3-p">中国金夫人首都旗舰店</p>
            <p class="wl3-p1">
              <span>中国金夫人首都旗舰店</span>
              : 北京市东城区东单北大街3号
            </p>
            <p class="wl3-p1">
              <span>中国金夫人·维罗纳美学中心</span>
              : 北京市朝阳区豆各庄东村创意园区L-1
            </p>
            <p class="wl3-p1">
              <span>Bonita礼服中心</span>
              : 北京市朝阳区豆各庄东村创意园区L-1
            </p>
            <p class="wl3-p1">
              <span>法颂男装</span>
              : 北京市朝阳区豆各庄东村创意园区L-1
            </p>
            <p class="wl3-p1">
              <span>初心·永恒珠宝中心</span>
              : 北京市朝阳区豆各庄东村创意园区L-1
            </p>
          </div>
          <div class="wl4">
            <span class="s">投诉</span>
            <br />
            <span>4006919066</span>
          </div>
          <div class="wl4">
            <span>咨询</span>
            <br />
            <span class="s">13504020414</span>
          </div>
        </div>
        <div class="fl">
            <p class="f1p">©COPYRIGHT 2009-2021 版权归属 北京金夫人婚纱摄影有限公司</p>
            <p class="flp1">京ICP备13008516号-1</p>
            <p class="flp2">
              <span>京公网安备 11010102003578号</span>
              <img src="http://bj.121314.com/static/images/footer/beian.png" alt="">
            </p>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "WeiDian",
  data() {
    return {
      arrs: null,
      // arr1: null
    };
  },
  methods: {
    async getWei() {
      let { data } = await axios.get("/api/WeiDian");
      this.arrs = data;
    },

    /* async getWei1() {
      let { data } = await axios.get("/api/WeiDian");
      this.arr1 = data;
    }, */
  },
  created() {
    this.getWei();
    // this.getWei1();
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
ul,
li {
  list-style: none;
}
img {
  display: block;
  width: 100%;
  height: 100%;
}
.wbox-i {
  height: 146px;
  margin: 82px auto 48px;
}
.wlist li {
  display: flex;
  margin-bottom: 70px;
  border: 1px solid #323232;
}
.wlist-b {
  flex: 1;
  padding: 127px 90px 0;
  background: #fff url("http://www.bjjfr.com/static/images/video/mini_logo.png")
    82px 122px no-repeat;
  background-size: 240px auto;
}
.wlist-bp {
  color: #000;
  font-size: 16px;
  display: inline-block;
  padding-right: 72px;
  line-height: 26px;
  border-bottom: 1px solid #000;
  min-height: 26px;
  margin-top: 50px;
}
.wlist-b h3 {
  color: #a69476;
  font-size: 30px;
  font: bold 30px/56px STSong, SimSun, FangSong, "宋体";
  padding-bottom: 12px;
}
.wlist-bp1 {
  font-size: 20px;
  line-height: 30px;
  color: #313131;
  margin-bottom: 14px;
}
.wlist-bp2 {
  color: #717171;
  line-height: 22px;
}
.wlist-b1 {
  width: 1067px;
  height: 512px;
}
.wlist2 {
  display: flex;
  margin-left: 40%;
}
.wlist2 li {
  font-size: 16px;
  display: inline-block;
  height: 32px;
  line-height: 32px;
  border-radius: 3px;
  border: 1px solid #ccc;
  margin: 0 5px;
  padding: 0 12px;
}
.on {
  background: #d4b07b;
  color: #fff;
}
.wbox1 {
  overflow: hidden;
}
.wbox1 img {
  width: 833px;
  height: 170px;
  margin: 69px auto 78px;
}
.wfooter {
  width: 100%;
  height: 1028px;
  background: url("http://bj.121314.com/static/images/footer/f_bg.png") center
    center no-repeat;
  background-size: cover;
  overflow: hidden;
  position: relative;
}
.wfooter-r {
  float: right;
  position: relative;
  width: 38.5%;
  margin-top: 112px;
  border-left: 1px solid #b4b3b1;
  padding: 50px 0 46px 60px;
  color: #aaacab;
  box-sizing: border-box;
}
.wfooter-r h1 {
  color: #fff;
  margin: 0;
  font-size: 44px;
  font-weight: normal;
}
.r-p {
  color: #aaacab;
  font-size: 34px;
  margin-bottom: 45px;
}
.wl1 {
  display: inline-block !important;
  padding: 7px 7px 0;
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: 112px 137px;
  margin-right: 20px;
  box-sizing: border-box;
}
.xia {
  display: flex;
  margin-top: 10px;
  color: #fff;
}
.xia img {
  display: inline-block;
  width: 20px;
  height: 15px;
  margin-top: 5px;
  margin-right: 5px;
}
.wl2 {
  display: inline-block !important;
  padding: 7px 7px 0;
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: 112px 137px;
  margin-right: 20px;
  box-sizing: border-box;
}
.wl2 .i1 {
  width: 122px;
  height: 122px;
}
.xia1 {
  display: flex;
  margin-top: 10px;
  color: #fff;
}
.xia1 img {
  display: inline-block;
  width: 20px;
  height: 15px;
  margin-top: 5px;
  margin-right: 5px;
}
.wl3-p {
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  margin-top: 10px;
}
.wl3-p1 {
  font-size: 18px;
  color: #fff;
  margin-top: 10px;
}
.wl3-p1 span {
  color: #e6c985;
}
.wl4 {
  width: 100%;
  height: 43px;
  padding-left: 54px;
  margin-top: 20px;
  margin-bottom: 17px;
  font-size: 13px;
  color: #fff;
  background: url("http://bj.121314.com/static/images/footer/tel_i.png") no-repeat;
  background-size: 43px 43px;
  background-position: left;
  font-size: 16px;
  box-sizing: border-box;
}
.wl4 .s{
  margin-top: 10px;
}
.fl{
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translate(-50%);
  text-align: center;

}
.f1p{
    color: #999;
    font-size: 18px;
    height: 20px;
    line-height: 20px;
}
.flp1{
  color: #fff;
  margin-top: 10px;
}
.flp2{
  display: flex;
  color: #fff;
  margin-top: 10px;
  margin-left: 145px;
}
.flp2 img{
  display: inline-block;
  width: 20px;
  height: 20px;
}
</style>