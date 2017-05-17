<template>
  <div id="app">
    <div class="content-wrapper">
    <router-view></router-view>
    </div>
    <v-footer></v-footer>
    <floatqr></floatqr>
  </div>
</template>

<script>
  import footer from 'components/footer/footer';
  import floatqr from 'components/floatqr/floatqr';
  import sign from 'pages/sign/sign';

  export default {
    name: 'app',
    components: {
      'v-footer': footer,
      sign,
      floatqr
    }
  }
</script>

<style>
  @import "assets/styles/style.css";
</style>
