<template>
 	<div class="menu-wrapper no-bot pgbg">
		<div class="prog-title">
			主办方：毕业设计
		</div>

		<div class="prog-text-wrapper">
			<div class="prog-text-item clearfix" v-for="(item, index) in menuList">
				<span class="prog-text-name">{{item.name}}</span>
				<br>
				<span class="prog-text-author">表演者：{{item.artist}}</span>
			</div>
		</div>

		<img src="./dengl.png" alt="" class="proghua-lt">
		<img src="./dengr.png" alt="" class="proghua-rt">
		<img src="./rbot.png" alt="" class="proghua-bot">
	</div>
</template>

<script>
	import axios from 'axios';

	export default {
		data () {
	      return {
	        menuList: []
	      }
	    },
	    mounted() {
	      axios.get('http://localhost:3000/data/read/menu').then(res => {
	          // success callback
	        if (res.status === 200 && res.data.status === 200){
	          this.menuList = res.data.data;
	        }
	      })
	    }
	}
</script>

<style>
	.menu-wrapper{
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.pgbg{
		border: .25rem solid #e60012;
		background: #fff url(./pgbg.png) center center;
		-webkit-background-size: 100% 100%;
		background-size: 100% 100%;
		overflow: hidden;
	}

	.proghua-bot{
		position: absolute;
		left: -.25rem;
		right: -.25rem;
		bottom: -.25rem;
		width: 10rem;
	}

	.proghua-lt{
		position: absolute;
		top: -.05rem;
		left: -.05rem;
		width: 2.35rem;
	}

	.proghua-rt{
		position: absolute;
		top: -.05rem;
		right: -.05rem;
		width: 2.35rem;
	}

	.prog-title{
		width: 8.75rem;
		height: 2.6rem;
		margin: .82rem auto;
		padding-top: 1.68rem; 	
		text-align: center;
		font-size: 14px;
		background: url(./pgtitle.png) center bottom no-repeat;
		-webkit-background-size: 100%;
		background-size: 100%;
	}

	.prog-text-wrapper{
		position: absolute;
		top: 3.65rem;
		bottom: 3.35rem;
		left: 0;
		right: 0;
		margin: 0 auto;
		width: 8rem;
		overflow: auto;
	}

	.prog-text-item{
		padding: .2rem 0;
		line-height: .6rem;
		font-size: 14px;
	}

	.prog-text-xh{
		display: inline-block;
		width: .5rem;
	}

	.prog-text-name{
	}

	.prog-text-author{
		float: right;
	}
</style>
