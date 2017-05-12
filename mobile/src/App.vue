<template>
  <div id="app">
    <div class="content-wrapper">
    <router-view></router-view>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import footer from 'components/footer/footer';
  import sign from 'pages/sign/sign';

  export default {
    name: 'app',
    components: {
      'v-footer': footer,
      sign
    }
  }
</script>

<style>
  @import "assets/styles/style.css";
</style>
