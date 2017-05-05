<template>
	<!-- 底部按钮开始 -->
  <div class="footer clearfloat">
  	<div class="iconlist-right clearfloat">
			<router-link to="/qrcode" class="icon-router iconfont icon-erweima"></router-link>
			<router-link to="/sign" class="icon-router iconfont icon-qiandao"></router-link>
			<router-link to="/menu" class="icon-router iconfont icon-jiemudan"></router-link>
			<a href="javascript:" class="icon-router iconfont icon-pifu" :class="{ active: skinActive }"  @click="handleSkin"></a>
			<a href="javascript:" class="icon-router iconfont icon-yingyong" :class="{ active: applyActive }" @click="handleMoreApply"></a>
			<a href="javascript:" class="icon-router iconfont icon-quanping" :class="{ active: screenActive }" @click="handleFullScreen"></a>
		</div>
		<transition name="fade">
		  <div class="iconlist-show" v-show="applyActive">
		    <router-link to="/wall" class="icon-router2 iconfont icon-xiaoxiqiang"></router-link>
		    <router-link to="/lottery" class="icon-router2 iconfont icon-choujiang"></router-link>
		    <router-link to="/collision" class="icon-router2 iconfont icon-duiduipeng"></router-link>
		    <router-link to="/vote" class="icon-router2 iconfont icon-toupiao"></router-link>
		    <router-link to="/reward" class="icon-router2 iconfont icon-dashang"></router-link>
	    </div>
	  </transition>
  </div>
  <!-- 底部按钮结束 -->
</template>

<script type="text/ecmascript-6">
	export default {
		data() {
			return {
				skinActive: false,
				applyActive: false,
				screenActive: false,
			};
		},
		methods: {
			// 更换皮肤
			handleSkin () {
				this.skinActive = !this.skinActive;
			},
			// 更多应用
			handleMoreApply () {
				this.applyActive = !this.applyActive;
			},
			// 全屏功能
			handleFullScreen () {
				if ( !this.screenActive ){
					var docElm = document.documentElement;
					//W3C  
					if (docElm.requestFullscreen) {  
					    docElm.requestFullscreen();  
					}
					//FireFox  
					else if (docElm.mozRequestFullScreen) {  
					    docElm.mozRequestFullScreen();  
					}
					//Chrome等  
					else if (docElm.webkitRequestFullScreen) {  
					    docElm.webkitRequestFullScreen();  
					}
					//IE11
					else if (elem.msRequestFullscreen) {
					  elem.msRequestFullscreen();
					}
				} else {
					if (document.exitFullscreen) {  
					    document.exitFullscreen();  
					}  
					else if (document.mozCancelFullScreen) {  
					    document.mozCancelFullScreen();  
					}  
					else if (document.webkitCancelFullScreen) {  
					    document.webkitCancelFullScreen();  
					}
					else if (document.msExitFullscreen) {
					      document.msExitFullscreen();
					}
				}
				this.screenActive = !this.screenActive;
			}
		}
	}
</script>

<style>
	.footer{
		position: relative;
		margin-top: 25px;
	}

	.iconlist-right{
		float: right;
		height: 42px;
		padding: 0 10px;
		border: 1px solid #18c6e1;
		border-radius: 4px;
		line-height: 40px;
		text-align: center;
		vertical-align: middle;
	}

	.iconlist-right .icon-starcmt{
		width: 32px;
	}

	.iconlist-right .icon-cloth{
		width: 30px;
	}

	.iconlist-right .icon:last-child{
		margin-right: 0;
	}

	.iconlist-show{
		position: absolute;
		top: -65px;
		right: 0;
		padding: 10px;
		background: #18c6e1;
		border-radius: 2px;
	}

	.iconlist-show:after{
		content: "";
		position: absolute;
		bottom: -20px;
		right: 62px;
		text-align: center;
		border: 10px solid transparent;
		border-top: 10px solid #18c6e1;
	}

	.iconfont{
		display: inline-block;
		width: 40px;
		vertical-align: middle;
		font-size: 28px;
		line-height: 1;
		text-align: center;	
	}

	.icon-router:hover,.icon-router.active{
		color: #18c6e1;
		transition: .5s;
	}
	
	.icon-router2:hover,.icon-router2.active{
		color: #333;
		transition: .5s;
	}
</style>
