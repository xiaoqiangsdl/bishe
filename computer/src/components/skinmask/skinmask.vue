<template>
  <transition name="fade">
    <div class="mask" @click="handleHide" :class="{ active: maskActive }">
      <div class="mask-cont" @click.stop.prevent="">
        <div class="skin-item" data-style="http://localhost:3000/static/stylesheets/theme1.css" @click="handleSwitchSkin">
          <img src="http://bpic.wotucdn.com/11/70/93/49bOOOPIC85_1024.jpg!/fw/780/quality/90/unsharp/true/compress/true" alt="">
          <p>红色主题</p>
        </div>
        <div class="skin-item" data-style="http://localhost:3000/static/stylesheets/theme1.css" @click="handleSwitchSkin">
          <img src="http://bpic.wotucdn.com/11/70/93/49bOOOPIC85_1024.jpg!/fw/780/quality/90/unsharp/true/compress/true" alt="">
          <p>红色主题</p>
        </div>
        <div class="skin-item" data-style="http://localhost:3000/static/stylesheets/theme1.css" @click="handleSwitchSkin">
          <img src="http://bpic.wotucdn.com/11/70/93/49bOOOPIC85_1024.jpg!/fw/780/quality/90/unsharp/true/compress/true" alt="">
          <p>红色主题</p>
        </div>
        <div class="skin-item" data-style="http://localhost:3000/static/stylesheets/theme1.css" @click="handleSwitchSkin">
          <img src="http://bpic.wotucdn.com/11/70/93/49bOOOPIC85_1024.jpg!/fw/780/quality/90/unsharp/true/compress/true" alt="">
          <p>红色主题</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import axios from 'axios';
  export default {
    props: {
      maskActive: {
        type:  Boolean
      }
    },
    data() {
      return (){
        skinList: []
      }
    },
    methods: {
      handleHide() {
        this.maskActive = false;
      },
      handleSwitchSkin() {

      }
    },
    mounted() {
      console.log(skinList)
      axios.get('http://localhost:3000/data/read/skin').then(res => {
        // success callback
        if (res.status === 200 && res.data.status === 200){
          this.skinList = res.data.data;
          console.log(skinList)
        }
      });
    }
  }
</script>

<style scoped>
  .mask{
    position: fixed;
    top: 0;
    left: 0;
    display: none;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.6);
    z-index: 3;
  }

  .mask.active{
    display: block;
  }

  .mask-cont{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 560px;
    height: 420px;
    padding: 20px;
    border-radius: 10px;
    background: #f0f0f0;
    font-size: 0;
  }

  .skin-item{
    display: inline-block;
    width: 100px;
    margin: 15px;
  }

  .skin-item>img{
    width: 100px;
    height: 80px;
    border: 3px solid #00CC00;
  }

  .skin-item>p{
    font-size: 14px;
    color: #333;

    text-align: center;
  }
</style>
