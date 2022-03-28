<template>
  <div class="home">
    <LunBo :arrs="arrs"></LunBo>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import LunBo from '../components/LunBo.vue';
export default {
  name: 'HomeView',
  data(){
    return{
      arrs:null
    }
  },
  components: {
    LunBo
  },
  methods:{
    async fn(){
      let {data} = await axios.get("/api/home")
      this.arrs = data
      console.log(this.arrs)
    }
  },
  created(){
    this.fn()
  }
}
</script>
