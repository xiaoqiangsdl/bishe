<template>
  <div class="wall-wrapper">
		<img src="../../assets/images/baoyu.png" alt="" class="wall-desc">
		<textarea class="wall-textarea j-textarea" placeholder="点击这里开始发射" v-model="comment"></textarea>
			
		<div class="wall-btns">
			<a class="wall-btng j-cancel" @click="handleClean">清空</a>
			<a class="wall-btnb j-wall" @click="handleComment">上墙</a>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';

  export default {
  	data() {
  		return {
  			comment: ''
  		}
  	},
  	methods: {
  		handleComment() {
  			console.log(typeof this.comment);
  			let tempName = sessionStorage.getItem("name") || '';
  			if (tempName === ''){
	    		alert('请先签到！');
	    		window.location.href = "/#/sign";
	    		return;
	    	}
  			if (this.comments == '') {
  				alert('输入文字不得为空！');
  				return;
  			}
  			axios.get('http://localhost:3000/data/write/comments',{
			    params: {
			      name: tempName,
			      comment: this.comment
			    }
			  }).then(res => {
	        if (res.status === 200 && res.data.status === 200){
	          alert('上墙成功！');
	          this.comment = '';
	          return;
	        }
	        alert(res.data.info);
	      })
  		},
  		handleClean() {
  			this.comment = ''
  		}
  	}
  }
</script>

<style>

</style>
