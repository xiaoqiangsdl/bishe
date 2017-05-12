<template>
  <div class="content-wrapper no-bot sgbg">
		<div class="sign-form">
			<h2>签到</h2>
			<input type="text" class="sign-input" placeholder="姓名" v-model="name">
			<input type="tel" class="sign-input" placeholder="手机号" v-model="tel">
			<a class="btn-sign" @click="handleSubmit">签到</a>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';

  export default {
  	data() {
  		return {
  			name: '',
  			tel: ''
  		}
  	},
  	methods: {
  		handleSubmit() {
  			if( this.name === '' || this.tel ===''){
  				alert('数据不得为空！');
  				return;
  			}
  			if(!(/^1[3|4|5|8][0-9]\d{8}$/.test(this.tel))){
  				alert('手机号格式错误！');
  				return;
  			}
	      axios.get('http://localhost:3000/data/write/user',{
			    params: {
			      name: this.name,
			      tel: this.tel
			    }
			  }).then(res => {
	        if (res.status === 200 && res.data.status === 200){
	          window.sessionStorage.setItem("name", this.name);
	          window.sessionStorage.setItem("tel", this.tel);
	          alert('签到成功');
	          window.history.go(-1);
	          return;
	        }
	        alert(res.data.info);
	      })
		}
    },
    mounted() {
    	let tempName = sessionStorage.getItem("name") || '';
    	if (tempName !== ''){
    		alert(tempName + " 您已签到");
    		window.history.go(-1);
    	}
    }
  }
</script>

<style>
	/* 签到 */
	.sgbg{
		-webkit-background-size: 100% 100%;
		background-size: 100% 100%;
		overflow: hidden;
	}

	.sign-form{
		position: absolute;
		top: 50%;
		left: 50%;
		width: 8.55rem;
		padding-bottom: 2rem;
		transform: translate(-50%,-50%);
	}

	.sign-form h2{
		margin-bottom: 2rem;
		font-size: 36px;
		color: #cfa01b;
		font-weight: bold;
		text-align: center;
	}

	.sign-input{
		display: block;
		width: 100%;
		height: 1.4rem;
		padding: .4rem;
		margin-top: .4rem;
		line-height: .6rem;	
		font-size: 16px;
		background: url(./inputk.png);
		-webkit-background-size: 100% 100%;
		background-size: 100% 100%;
	}

	.btn-sign{
		display: block;
		width: 100%;
		margin-top: .8rem;
		line-height: 1.4rem;
		color: #fff;
		font-size: 16px;
		text-align: center;
		background: #cfa01b;
		border-radius: .1rem;
	}

</style>
