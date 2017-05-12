<template>
  <div id="app">
    <div class="main">
      <v-header :qrimg="qrimg" :usernum="usernum"></v-header>
      <tip></tip>
      <div class="content">
        <transition name="fade" mode="out-in">
          <router-view :qrimg="qrimg" :usernum="usernum"></router-view>
        </transition>
      </div>
      <v-footer></v-footer>
    </div>
  </div>
</template>

<script>
  import header from 'components/header/header';
  import footer from 'components/footer/footer';
  import tip from 'components/tip/tip';

  import axios from 'axios';

  export default {
    name: 'app',
    data() {
      return {
        qrimg: '',
        usernum: 0,
      }
    },
    mounted() {
      axios.get('http://localhost:3000/data/img/qr.png').then(res => {
        // success callback
        if (res.status === 200 && res.data.status === 200){
          this.qrimg = res.data.data;
        }
      });
      var self = this;
      window.setInterval(function() {
        axios.get('http://localhost:3000/data/usernum').then(res => {
          // success callback
          if (res.status === 200 && res.data.status === 200){
            if (self.usernum !== res.data.data) self.usernum = res.data.data;
            console.log(res.data.data);
          }
        });
      },1000);
    },
    components: {
      'v-header': header,
      'v-footer': footer,
      tip
    }
  }
</script>

<style>
  @import "assets/styles/base.css";
  @import "assets/styles/iconfont.css";

  body{
    position: relative;
    width: 100%;
    height: 100%;
    background: url(assets/images/bg.jpg) top center;
    background-size: cover;
  }

  .main{
    width: 1000px;
    margin: 0 auto;
    padding: 30px 0;
  }


  .content{
    height: 515px;
    margin-top: 5px;
    /*background: rgba(255,255,255,.1);*/
  }

  .opactiy-bg{
    height: 100%;
    background: rgba(255,255,255,.1);
    border-radius: 5px;
  }

  .opactiy-md-bg{
    float: left;
    height: 100%;
    width:610px;
    background: rgba(255,255,255,.1);
    border-radius: 5px;
  }

  .op-wrapper{
    height: 100%;
  }
</style>
