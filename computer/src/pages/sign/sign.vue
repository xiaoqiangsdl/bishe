<template>
  <div class="opactiy-bg">
    <div class="menu-head">
      签到
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
