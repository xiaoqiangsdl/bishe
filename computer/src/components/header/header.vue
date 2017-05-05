<template>
  <!-- 头部开始 -->
  <div class="header">
    <div class="header-border-top"></div>
    <div class="header-cont clearfloat">
      <img src="./logo.png" class="header-logo">
      <img src="./ma.png" class="header-ma">
      <div class="header-text">
        <p>微信号：shantuimao</p>
        <p>关注后发送内容即可上墙</p>
      </div>
      <div class="header-tip">
        186条信息
      </div>
    </div>
    <div class="header-border-bot"></div>
  </div>
  <!-- 头部结束 -->
</template>

<script>
export default {
}
</script>

<style>
.header{
}

.header-border-top{
	width: 100%;
	height: 1px;
	background-image:-webkit-linear-gradient(360deg, #18c6e1, rgba(0,0,0,0));
}

.header-border-bot{
	width: 100%;
	height: 1px;
	background-image:-webkit-linear-gradient(180deg, #18c6e1, rgba(0,0,0,0));
}

.header-cont{
	height: 78px;
	padding: 9px 0;
}

.header-logo{
	float: left;
	height: 60px;
}

.header-ma{
	float: left;
	height: 54px;
	width: 54px;
	margin-top: 3px;
	margin-left: 115px;
}

.header-text{
	float: left;
	padding: 2px 0;
	margin-left: 28px;
	line-height: 28px;
	font-size: 19px;
}

.header-tip{
	float: right;
	width: 285px;	
	height: 54px;
	margin-top: 3px;
	padding-left: 35px;
	border-left: 1px solid #fff;
	font-size: 24px;
	line-height: 54px;
}

.tip{
	font-size: 16px;
	line-height: 40px;
}

.tip img{
	float: left;
	height: 18px;
	margin-top: 11px;
	margin-right: 10px;
	vertical-align: middle;
}
</style>
