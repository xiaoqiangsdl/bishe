<template>
  <div class="op-wrapper">
    <div class="opactiy-md-bg">
        <div class="lottery">
          <div class="lottery-head">
            对对碰
            <div class="lottery-head-person">参与抽奖人数&emsp;<span>{{ usernum }}</span></div>
          </div>
          <div class="duiduipeng-game clearfloat">
            <div class="duiduipeng-game-preson">
              <img :src="gameInfo1.avatar" class="lottery-choose-headpic">
              <p>{{ gameInfo1.name }}</p>
            </div>
            <div class="duiduipeng-game-preson">
              <img :src="gameInfo2.avatar" class="lottery-choose-headpic">
              <p>{{ gameInfo2.name }}</p>
            </div>
          </div>
          <div class="lottery-btnarea clearfloat">
            <div class="btn-color" @click="handleLottery">开始对对碰</div>
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
          <div class="blue2-item2 clearfloat"  v-for="(item, index) in lotList">
            <span class="num-sm fl" style="margin-top: 13px">{{index + 1}}</span>
            <span class="blue-ddp-person fl">
              <img :src="item[0].avatar" class="blue2-headpic">
              <p>{{item[0].name}}</p>
            </span>
            <img src="../../assets/images/aixin.png" class="blue2-aixin fl">
            <span class="blue-ddp-person fl">
              <img :src="item[1].avatar" class="blue2-headpic">
              <p>{{item[1].name}}</p>
            </span>
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
        gameInfo1: {
          name: "幸运观众1",
          avatar: "http://localhost:3000/static/images/avatar.jpg"
        }, // 游戏中的观众信息 - 默认头像
        gameInfo2: {
          name: "幸运观众2",
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
          if (this.usernum % 2 == 1 && this.lotIdList.length >= this.usernum - 1) {
            alert("抽奖人数不足");
            return;
          }
          if (this.lotIdList.length >= this.usernum) {
            alert("抽奖人数不足");
            return;
          }
          let self = this;
          this.btnText = '停止抽奖';
          this.btnClick = !this.btnClick;
          timer = window.setInterval(function() {
            var nonum1 = Math.floor(Math.random()*6);
            var nonum2 = Math.floor(Math.random()*6);
            self.gameInfo1 = self.lotPic[nonum1];
            self.gameInfo2 = self.lotPic[nonum2];
          },80);
        } else {
          clearInterval(timer);
          this.btnText = '开始抽奖';
          this.btnClick = !this.btnClick;
          var id1 = this.handleGetId();
          var id2 = this.handleGetId();
          while ( 1 == 1 ){ 
            if (id1 === id2)
              id2 = this.handleGetId();
            else
              break;
          }
          this.gameInfo1 = this.userList[id1];
          this.gameInfo2 = this.userList[id2];
          this.lotList.push([this.userList[id1],this.userList[id2]]);
          this.lotIdList.push(id1);
          this.lotIdList.push(id2);
          console.log(this.lotList)
        }
      },
      handleGetId() {
        let id;
        if (this.usernum % 2 == 1 && this.lotIdList.length >= this.usernum - 1) {
          alert("抽奖人数不足");
          return;
        }
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
</script>

<style>
  /* 对对碰 */
  .duiduipeng-game{
    padding: 60px 55px;
  }

  .duiduipeng-game-preson{
    float: left;
    width: 50%;
    text-align: center;
  }

  .duiduipeng-game-preson p{
    margin-top: 20px;
    font-size: 16px;
  }

  .duiduipeng-game-preson p img{
    height: 16px;
    margin-bottom: -3px;
    margin-right: 5px;
  }

  .blue2-item2 {
    padding: 15px 18px;
    font-size: 16px;
    border-bottom: 2px solid #3873b9;
  }

  .blue2-item2-top{
    padding-top: 15px;
    font-size: 0;
  }

  .blue2-item2-bot{
    color: #fff;
    padding: 10px 0;
    font-size: 16px;
  }

  .blue2-aixin{
    height: 15px;
    margin-top: 17px;
  }

  .blue-ddp-person{
    display: inline-block;
    width: 115px;
    text-align: center;
  }

  .blue-ddp-person p{
    padding-top: 10px;
  }
</style>
