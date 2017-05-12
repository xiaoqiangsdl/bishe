<template>
	<!-- 底部按钮开始 -->
  <div class="footer clearfloat">
  	<div class="iconlist-right clearfloat">
			<router-link to="/qrcode" class="icon-router iconfont icon-erweima"></router-link>
			<router-link to="/sign" class="icon-router iconfont icon-qiandao"></router-link>
			<router-link to="/menu" class="icon-router iconfont icon-jiemudan"></router-link>
			<a href="javascript:" class="icon-router iconfont icon-pifu"  @click="handleSkin" :class="{ active: maskActive }"></a>
			<a href="javascript:" class="icon-router iconfont icon-yingyong" :class="{ active: applyActive }" @click="handleMoreApply"></a>
			<a href="javascript:" class="icon-router iconfont icon-quanping" :class="{ active: screenActive }" @click="handleFullScreen"></a>
		</div>
		<transition name="fade">
		  <div class="iconlist-show" v-show="applyActive">
		    <router-link to="/wall" class="icon-router2 iconfont icon-xiaoxiqiang"></router-link>
		    <router-link to="/lottery" class="icon-router2 iconfont icon-choujiang"></router-link>
		    <router-link to="/collision" class="icon-router2 iconfont icon-duiduipeng"></router-link>
		    <!-- <router-link to="/vote" class="icon-router2 iconfont icon-toupiao"></router-link> -->
		    <!-- <router-link to="/reward" class="icon-router2 iconfont icon-dashang"></router-link> -->
	    </div>
	  </transition>
		<transition name="fade">
	    <div class="mask" @click="handleMaskHide" :class="{ active: maskActive }">
	      <div class="mask-cont" @click.stop.prevent="">
	        <div class="skin-item">
	          <img src="http://bpic.wotucdn.com/11/70/93/49bOOOPIC85_1024.jpg!/fw/780/quality/90/unsharp/true/compress/true" alt="">
	          <p>红色主题</p>
	        </div>
	        <div class="skin-item">
	          <img src="http://bpic.wotucdn.com/11/70/93/49bOOOPIC85_1024.jpg!/fw/780/quality/90/unsharp/true/compress/true" alt="">
	          <p>红色主题</p>
	        </div>
	        <div class="skin-item">
	          <img src="http://bpic.wotucdn.com/11/70/93/49bOOOPIC85_1024.jpg!/fw/780/quality/90/unsharp/true/compress/true" alt="">
	          <p>红色主题</p>
	        </div>
	        <div class="skin-item">
	          <img src="http://bpic.wotucdn.com/11/70/93/49bOOOPIC85_1024.jpg!/fw/780/quality/90/unsharp/true/compress/true" alt="">
	          <p>红色主题</p>
	        </div>
	      </div>
	    </div>
	  </transition>
  </div>
  <!-- 底部按钮结束 -->
</template>

<script type="text/ecmascript-6">

	export default {
		data() {
			return {
				applyActive: false,
				screenActive: false,
				maskActive: false
			};
		},
		methods: {
			// 更换皮肤
			handleSkin () {
				this.maskActive = true;
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
			},
			handleMaskHide() {
        this.maskActive = false;
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
	/* 皮肤 */
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
    padding: 3px;
    border: 1px solid #ccc;
  }

  .skin-item>p{
    font-size: 14px;
    color: #333;

    text-align: center;
  }
</style>
