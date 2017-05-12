<template>
  <div class="footer-wrapper">
		<div class="tab-btn">
			<router-link  to="/scene">
				<div class="icon icon-xc active"></div>
				<p class="active">现场</p>
			</router-link>
		</div>
		<div class="tab-btn">
			<router-link  to="/menu">
				<div class="icon icon-hd"></div>
				<p>节目单</p>
			</router-link>
		</div>
		<!-- <div class="tab-btn">
			<a href="./sign.html">
				<div class="tab-btn-center">
				</div>
			</a>
		</div> -->
		<div class="tab-btn">
			<router-link  to="/wall">
				<div class="icon icon-sq"></div>
				<p>上墙</p>
			</router-link >
		</div>
		<div class="tab-btn">
			<router-link  to="/sign">
				<div class="icon icon-wd"></div>
				<p>签到</p>
			</router-link>
		</div>
	</div>
</template>

<script>
  export default {

  }
</script>

<style>
	.footer-wrapper{
		position: absolute;
		display: flex;
		bottom: 0;
		width: 100%;
		height: 1.3rem;
		border-top: 1px solid #ccc;
		background: #fff;
	}

	.tab-btn{
		flex: 1;
		text-align: center;
	}

	.tab-btn p{
		margin-top: .14rem;
		font-size: 10px;
		color: #6a6a6a;
	}

	.tab-btn a.active p{
		color: #0088f5;
	}

	.tab-btn .icon{
		margin: .14rem auto 0;
		width: .6rem;
		height: .6rem;
	}

	.tab-btn .icon-xc{
		background-image: url(./xianchang.png);
	}
	.tab-btn a.active .icon-xc{
		background-image: url(./xianchang2.png);
	}
	.tab-btn .icon-hd{
		background-image: url(./hudong.png);
	}
	.tab-btn a.active .icon-hd{
		background-image: url(./hudong2.png);
	}
	.tab-btn .icon-sq{
		background-image: url(./shangqiang.png);
	}
	.tab-btn a.active .icon-sq{
		background-image: url(./shangqiang2.png);
	}
	.tab-btn .icon-wd{
		background-size: auto 100%;
		background-image: url(./wode.png);
	}
	.tab-btn a.active .icon-wd{
		background-image: url(./wode2.png);
	}

	.tab-btn-center{
		width: 1.2rem;
		height: 1.06rem;
		margin: .1rem auto 0;
		background: url(./qiandao.png) center center;
		-webkit-background-size: 100%;
		background-size: 100%;
	}
</style>
