<template>
  <el-carousel :interval="5000" arrow="always" height="732px">
    <el-carousel-item v-for="(item,index) in arrs" :key="index">
      <img :src="item" alt="">
    </el-carousel-item>
  </el-carousel>
</template>
<script>

export default ({
    name:"LunBo",
    props:['arrs']
})
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>