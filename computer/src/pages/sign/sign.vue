<template>
  <div class="opactiy-bg">
    <div class="sign-head">
      签到
    </div>
    <div class="sign-list">
      <div class="sign-item" v-for="(item, index) in userList" :key="item.id">
        <img :src="item.avatar" alt="">
        <p>{{item.name}}</p>
        <div class="sign-item-success">
          签到成功
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import axios from 'axios';
  export default {
    data () {
      return {
        userList: [],
        usernum: 0
      }
    },
    mounted() {
      axios.get('http://localhost:3000/data/read/user').then(res => {
        // success callback
        if (res.status === 200 && res.data.status === 200){
          this.usernum = res.data.data.length;
          this.userList = res.data.data;
          // console.log(this.user);
        }
      });
      var self = this;
      window.setInterval(function() {
        axios.get('http://localhost:3000/data/read/user').then(res => {
          // success callback
          if (res.status === 200 && res.data.status === 200){
            if (self.userList.length !== res.data.data.length){
              self.userList = res.data.data;
              console.log(self.userList);
            }
          }
        });
      },1000);
    }
  }
</script>

<style>
  .sign-head{
    padding: 20px 0;
    text-align: center;
    font-size: 35px;
    line-height: 1;
  }

  .sign-list{
    height: 400px;
    padding: 20px 50px;
    margin-right: -20px;
    font-size: 0;
    overflow: auto;
  }
  
  .sign-item{
    position: relative;
    display: inline-block;
    margin: 10px;
    font-size: 14px;
  }

  .sign-item>img{
    width: 80px;
    height: 80px;
    border: 3px solid #fff;
  }

  .sign-item>p{
    margin-top: 5px;
    text-align: center;
  }
  
  .sign-item-success{
    position: absolute;
    top: -20px;
    right: -20px;
    z-index: 2;
    width: 80px;
    height: 30px;
    background: #ddd;
    border-radius: 5px;

    color: #333;
    line-height: 30px;
    text-align: center;

    animation: sus 3s forwards;
  }

  .sign-item-success:after{
    content: '';
    display: block;
    position: absolute;
    right: 30px;

    border-top: 5px solid #ddd;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid transparent;
  }

  @keyframes sus {
    0%{
      transform: scale(0.8);
      opacity: 0;
    }
    30%{
      transform: scale(1);
      opacity: 1;
    }
    50%{
      transform: scale(1);
      opacity: 1;
    }
    100%{
      transform: scale(1);
      opacity: 0;
    }
  }
</style>
