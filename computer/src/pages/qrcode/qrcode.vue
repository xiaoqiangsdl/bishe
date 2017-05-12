<template>
  <div class="opactiy-bg">
    <div class="mashow">
      <img :src="qrimg" class="mashow-ma1">
      <img :src="qrimg" class="mashow-ma2">
      <img :src="qrimg" class="mashow-ma3">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      qrimg: {
        type:  String
      }
    },
  }
</script>

<style scoped>
  .mashow{
    height: 100%;
    width: 100%;
    padding: 37.5px 15px;
  }

  .mashow-ma1{
    width:440px;
    margin-right: 18px;
  }

  .mashow-ma2{
    width:285px;
    margin-right: 18px;
  }

  .mashow-ma3{
    width:200px;
}
</style>
