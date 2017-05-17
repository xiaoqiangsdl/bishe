<template>
  <div class="op-wrapper">
    <div class="opactiy-md-bg">
        <div class="lottery">
          <div class="lottery-head">
            现场抽奖
            <div class="lottery-head-person">参与抽奖人数&emsp;<span>{{ usernum }}</span></div>
          </div>
          <div class="lottery-choose">
            <img :src="gameInfo.avatar" class="lottery-choose-headpic">
            <p class="lottery-choose-name">{{ gameInfo.name }}</p>
          </div>
          
          <div class="lottery-btnarea clearfloat">
            <div class="btn-color" @click="handleLottery">{{ btnText }}</div>
          </div>
        </div>
      </div>

      <div class="blue2-bg">
        <div class="blue2-head">
          获奖名单
        </div>
        <div class="blue2-th clearfloat">
          <div class="width-50 fl">获奖序号</div>
          <div class="width-50 fl">用户昵称</div>
        </div>
        <div class="blue2-list">
          <div class="blue2-item clearfloat" v-for="(item, index) in lotList">
            <div class="width-50 fl" style="font-size: 0;">
              <span class="num-sm">{{index + 1}}</span>
              <img :src="item.avatar" class="blue2-headpic">
            </div>
            <div class="width-50 fl">{{item.name}}</div>
          </div>
        </div>
        <div class="blue2-btnarea">
          <div class="blue2-btn j-reset" @click="handleClear">清空列表</div>
        </div>
      </div>
  </div>
</template>

<script>
  import axios from 'axios';

  let timer;
  export default {
    props: {
      usernum: {
        type:  Number
      }
    },
    data() {
      return {
        userList: [],
        lotList: [],
        lotIdList: [], // 可抽到观众ID
        lotPic: [], // 动画的观众信息组
        gameInfo: {
          name: "幸运观众",
          avatar: "http://localhost:3000/static/images/avatar.jpg"
        }, // 游戏中的观众信息 - 默认头像
        btnClick: false,
        btnText: '开始抽奖'
      }
    },
    methods: {
      handleHide() {
        this.maskActive = false;
      },
      handleLottery() {
        
        if (!this.btnClick){
          if (this.lotIdList.length >= this.usernum) {
            alert("抽奖人数不足");
            return;
          }
          let self = this;
          this.btnText = '停止抽奖';
          this.btnClick = !this.btnClick;
          timer = window.setInterval(function() {
            var nonum = Math.floor(Math.random()*6);
            self.gameInfo = self.lotPic[nonum];
          },80);
        } else {
          clearInterval(timer);
          this.btnText = '开始抽奖';
          this.btnClick = !this.btnClick;
          var id = this.handleGetId();
          console.log(id);
          this.gameInfo = this.userList[id];
          this.lotList.push(this.userList[id]);
          this.lotIdList.push(id);
          console.log(this.lotList)
        }
      },
      handleGetId() {
        let id;
        if (this.lotIdList.length >= this.usernum) {
          alert("抽奖人数不足");
          return;
        }
        while ( 1 == 1 ){
          var nonum = Math.floor(Math.random()*this.userList.length);
          console.log(nonum);
          var flag = true;
          for(let i = 0; i <this.lotIdList.length; i++){
            if (nonum == this.lotIdList[i]){
              flag = false;
              break;
            }
          }
          if (flag) {
            id = nonum;
            break;
          }
        }
        return id;
      },
      handleClear() {
        this.lotList = [];
        this.lotIdList = [];
      }
    },
    mounted() {
      axios.get('http://localhost:3000/data/read/user').then(res => {
        // success callback
        if (res.status === 200 && res.data.status === 200){
          this.usernum = res.data.data.length;
          this.userList = res.data.data;
          var self = this;

          this.userList.forEach(function(item, index) {
            if (index < 6)
              self.lotPic.push(item);
          })
        }
      });


      var self = this;
      window.setInterval(function() {
        axios.get('http://localhost:3000/data/read/user').then(res => {
          // success callback
          if (res.status === 200 && res.data.status === 200){
            var data = res.data.data;
            if (data.length != self.usernum)
              self.userList = data;
          }
        });
      },1000);
    }
  }
</script>

<style >
  .lottery-head{
    height: 85px;
    margin-top: 25px;
    padding: 20px 28px;
    font-size: 42px;
    line-height: 45px;
    background: rgba(0,21,64,.6);
    overflow: hidden;
  }

  .lottery-head-pic{
    float: left;
    height: 45px;
    margin-right: 15px;
  }

  .lottery-head-person{
    float: right;
    padding-top: 20px;
    font-size: 18px;
    line-height: 25px;
  }

  .lottery-head-person span{
    font-size: 26px;
  }

  .lottery-choose{
    padding: 60px 0;
    
  }

  .lottery-choose-headpic{
    display: block;
    width: 150px;
    height: 150px;
    margin: 0 auto;
    border-radius: 50%;
    box-shadow:0 0 8px rgba(255,255,255,.7);
  }

  .lottery-thing{
    padding: 0 60px;
    text-align: right;
    font-size: 16px;
  }

  .lottery-thing-img{
    display: inline-block;
    width: 42px;
    height: 42px;
    margin-bottom: -3px;
    border-radius: 2px;
  }

  .lottery-btnarea{
    padding: 0 60px;
    margin-top: 20px;
    font-size: 16px;
  }

  .lottery-choose-name{
    padding-top: 30px;
    margin-top: -10px;
    margin-bottom: -20px;
    font-size: 24px;
    text-align: center;
  }

  .numpic{
    display: inline-block;
    width: 72px;
    height: 27px;
    line-height: 25px;
    font-size: 0;
    border: 1px solid #18c6e1;
    border-radius: 2px;
    cursor: pointer;
  }

  .numpic-rdc,.numpic-add{
    display: inline-block;
    font-size: 16px;
    text-align: center;
    width: 20px;
  }

  .numpic-num{
    display: inline-block;
    font-size: 16px;
    height: 25px;
    width: 30px;
    border-left: 1px solid #18c6e1;
    border-right: 1px solid #18c6e1;
    text-align: center;
  }

  .btn-color{
    width: 160px;
    height: 50px;
    margin: 0 auto;
    background: #3873b9;
    border-radius: 3px;
    font-size: 22px;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
  }

  .blue2-bg{
    float: right;
    width: 368px;
    height: 100%;
    background: #5294dd;
    border-radius: 5px;
  }

  .blue2-head{
    padding: 12px 18px 0;
    line-height: 48px;
    font-size: 22px;
    border-bottom: 2px solid #3873b9;
  }

  .blue2-personsum{
    float: right;
    font-size: 16px;
  }

  .blue2-personsum span{
    font-size: 23px;
  }

  .blue2-th{
    padding: 0 18px;
    line-height: 48px;
    font-size: 18px;
    border-bottom: 2px solid #3873b9;
  }

  .blue2-list{
    position: relative;
    height: 325px;
    overflow: auto;
  }

  .blue2-item{
    padding: 0 18px;
    line-height: 63px;
    font-size: 16px;
    border-bottom: 2px solid #3873b9;
  }

  .num-sm{
    display: inline-block;
    width: 20px;
    height: 20px;
    font-size: 12px;
    text-align: center;
    line-height: 16px;
    border-radius: 50%;
    border: 2px solid #fff;
    vertical-align: middle;
    margin-right: 20px;
  }

  .blue2-headpic{
    display: inline-block;
    width: 46px;
    height: 46px;
    border-radius: 50%;
    vertical-align: middle;
  }

  .blue2-btnarea{
    padding: 0 18px;
  }

  .blue2-btn{
    width: 105px;
    margin: 20px auto 0;
    line-height: 38px;
    font-size: 16px;
    text-align: center;
    background: #0158bc;
    border-radius: 3px;
    cursor: pointer;
  }
</style>
