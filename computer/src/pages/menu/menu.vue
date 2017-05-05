<template>
  <div class="opactiy-bg">
    <div class="menu-head">
      节目单
    </div>
    <div class="menu-list">
      <ul>
        <li>节目1： 极限表演</li>
        <li>节目2： 极限表演</li>
        <li>节目3： 极限表演</li>
        <li>节目4： 极限表演</li>
        <li>节目5： 极限表演</li>
        <li>节目6： 极限表演</li>
        <li>节目7： 极限表演</li>
        <li>节目8： 极限表演</li>
        <li>节目9： 极限表演</li>
        <li>节目1： 极限表演</li>
        <li>节目2： 极限表演</li>
        <li>节目3： 极限表演</li>
        <li>节目4： 极限表演</li>
        <li>节目8： 极限表演</li>
        <li>节目9： 极限表演</li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
    }
  }
}
</script>

<style>
.menu-head{
  padding: 20px 0;
  text-align: center;
  font-size: 35px;
  line-height: 1;
}

.menu-list{
  height: 400px;
  padding: 0 20px 20px;
  overflow: auto;
}

.menu-list ul{
  -moz-column-count:3; /* Firefox */
  -webkit-column-count:3; /* Safari and Chrome */
  column-count:3;
}

.menu-list ul li{
  display: block;
  text-align: center;
  font-size: 18px;
  line-height: 2;
}

</style>
