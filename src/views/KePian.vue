<template>
    <div class="kepian">
        <div class="head">
        </div>
        <div class="head-title">
            <p>〈金夫人婚纱摄影〉客片赏析</p>
        </div>
        <div class="floor">
            <ul>
                <li v-for="(item,index) in arrs" :key="index">
                    <img :src="item.image" alt="">
                    <div class="info">
                        <div class="info-item">
                            <span class="small">Name</span>
                            <span class="strong">{{item.name}}</span>
                        </div>
                        <div class="info-item">
                            <span class="small">Date</span>
                            <span class="strong">{{item.data}}</span>
                        </div>
                        <div class="info-item">
                            <span class="small">Heat</span>
                            <span class="strong">{{item.heat}}</span>
                        </div>
                        <div class="info-item">
                            <p>WATCH THE COMPLETE WORKS</p> 
                        </div>
                    </div>
                </li>
            </ul>
        </div>

        <div class="fenyi-box">
            <ul>
                <li class="action">1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
            </ul>
        </div>

        <div class="bmtitle"></div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'KePian',
    data(){
        return{
            arrs : null
        }
    },
    methods:{
        async getdata(){
            let {data} = await axios.get('/api/kepian')
            this.arrs = data
        }
    },
    created(){
        this.getdata()
    }
}
</script>

<style scoped>
    .head{
        height: 680px;
        background: url('../../public/img/headbg.jpg');
    }
    .head-title{
        width: 1582px;
        padding: 28px 0 0 0;
        font-size: 46px;
        margin: 40px auto 62px;
        height: 162px;
        background: url('../../public/img/headbg1.jpg');
    }
    .floor{
        width: 1582px;
        margin: 0 auto;
    }
    li{
        list-style: none;
    }
    .floor ul li img{
        width: 1580px;
        height: 800px;
    }
    .info{
        padding: 26px 0 26px 0;
        display: flex;
    }
    .info .info-item{
        padding: 10px 0 0 100px;
        width: 25%;
        height: 65px;
        /* padding-top: 10px; */
        border-left: 1px solid #c2c2c2;
        display: flex;
        flex-direction: column;
    }
    .info .info-item span.small{
        font-size: 12px;
        color: #1a1414;
        line-height: 14px;
        margin-bottom: 6px;
    }
    .info .info-item span.strong{
        font-weight: bold;
        font-size: 26px;
        line-height: 32px;
        color: #1c1314;
    }
    .info .info-item:last-child p{
        width: 72%;
        height: 40px;
        font-size: 12px;
        line-height: 40px;
        text-align: center;
        border: 1px solid #b4b4b4;
        background-color: #f5f5f5;
        color: #1c1c1c;
    }
    .info .info-item:first-child{
        border: none;
        padding-left: 0px;
    }
    .fenyi-box{
        padding: 52px 0;
        width: 1582px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
    }
    .fenyi-box ul{
        display: flex;
    }
    .fenyi-box ul li{
        font-size: 16px;
        height: 32px;
        line-height: 32px;
        border-radius: 3px;
        border: 1px solid #ccc;
        margin: 0 5px;
        padding: 0 12px;
    }
    .fenyi-box ul li.action{
        color: #fff;
        background-color: #D4B07B;
        border-color: #D4B07B;
    }
    .bmtitle{
        width: 833px;
        height: 170px;
        margin: 69px auto 78px;
        background: url('../../public/img/youth2.png');
    }
</style>
