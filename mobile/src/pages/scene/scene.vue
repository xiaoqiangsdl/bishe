<template>
  <div class="scene-wrapper">
		<div class="banner-wrapper">
			<img src="../../assets/images/banner.png" alt="">
		</div>
		<div class="index-list">
			<div class="index-item clearfix" v-for="(item, index) in cmtList">
				<img :src="item.avatar" class="index-avatar">
				<div class="index-item-text">
					<h2>{{ item.name }}</h2>
					<p>{{ item.comment }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
  
  export default {
  	data() {
  		return {
  			cmtList: []
  		}
  	},
  	mounted() {
  		axios.get('http://localhost:3000/data/read/comments').then(res => {
        // success callback
        if (res.status === 200 && res.data.status === 200){
          this.cmtList = res.data.data;
        }
      });
      var self = this;
      window.setInterval(function() {
        axios.get('http://localhost:3000/data/read/comments').then(res => {
          // success callback
          if (res.status === 200 && res.data.status === 200){
            if (self.cmtList.length !== res.data.data.length){
            	self.cmtList = res.data.data;
            	console.log(self.cmtList);
            }
          }
        });
      },1000);
  	}
  }
</script>

<style>

</style>
