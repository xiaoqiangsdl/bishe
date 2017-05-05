<template>
  <div id="app">
    <div class="main">
      <v-header></v-header>
      <tip></tip>
      <div class="content">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
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

  export default {
    name: 'app',
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

</style>
