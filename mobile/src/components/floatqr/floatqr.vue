<template>
  <div class="ma-show">
		<div class="float-wrapper" @click="handleQrshow">
      <a class="float-btn">
        <span class="icon icon-ma"></span>
      </a>
    </div>
    <transition name="fade" mode="out-in">	
	    <div class="mask" v-show="maskShow" @click="handleQrhide">
	    	<img :src="qrimg" alt="" class="mask-ma">
	    </div>
    </transition>
	</div>
</template>

<script>
  import axios from 'axios';

  export default {
  	data() {
  		return {
  			maskShow: false,
        qrimg: ''
  		}
  	},
  	methods: {
  		handleQrshow() {
  			this.maskShow = true;
  		},
  		handleQrhide() {
  			this.maskShow = false;
  		}
  	},
    mounted() {
      axios.get('http://localhost:3000/data/img/qr.png').then(res => {
        // success callback
        if (res.status === 200 && res.data.status === 200){
          this.qrimg = res.data.data;
        }
      });
    }
  }
</script>

<style>
	.mask{
		display: block;
	}

  .mask-ma{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: block;
    width: 6rem;
    height: 6rem;

  }
</style>
