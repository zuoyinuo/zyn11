<template>
  <div id="mytitle">
    <div class="mybiaoti">
      <div class="minao">
        <div>欢迎访问 北京金夫人婚纱摄影官方网站</div>
        <div>
          微信&nbsp;&nbsp;/&nbsp;&nbsp;微博&nbsp;&nbsp;/&nbsp;&nbsp;在线支付&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;全球服务热线:&nbsp;&nbsp;<b
            >4006919066</b
          >
        </div>
      </div>
    </div>
    <div class="img">
      <img src="http://www.bjjfr.com/static/logo.jpg" alt="" />
    </div>
    <ul class="titwid">
      <li>
        <router-link to="/" tag="span">
          <div>首页</div>
          <div class="yiwen">HOME</div>
        </router-link>
      </li>
      <li>
        <router-link to="/MyYd" tag="span">
          <div>样品赏析</div>
          <div class="yiwen">ORIGINAL WORKS</div>
        </router-link>
      </li>
      <li>
        <router-link to="" tag="span">
          <div>客片赏析</div>
          <div class="yiwen">GUEST PHOTO</div>
        </router-link>
      </li>
      <li>
        <router-link to="/WeiDian" tag="span">
          <div>微电影</div>
          <div class="yiwen">MICRO FILM</div>
        </router-link>
      </li>
      <li>
        <router-link to="" tag="span">
          <div>全球旅拍</div>
          <div class="yiwen">IRAVEL PHOTO</div>
        </router-link>
      </li>
      <li>
        <router-link to="" tag="span">
          <div>品牌介绍</div>
          <div class="yiwen">BRAND INTRODUCE</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "MyTitle",
};
</script>
<style scoped>
#mytitle {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
}
.mybiaoti {
  width: 100%;
  height: 30px;
  line-height: 30px;
  background: #f7f7f7;
  border-bottom: 1px solid #dddddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #333;
}
.minao {
  width: 1180px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
}
.img img {
  padding: 25px 0;
  width: 256px;
}
.titwid {
  width: 1000px;
  height: 76px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.titwid li {
  text-align: center;
  font-size: 18px;
  padding: 0 8px 8px;
}
.yiwen{
    font-size: 12px;
}
</style>
