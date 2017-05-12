<template>
  <div class="op-wrapper">
    <div class="opactiy-md-bg">
        <div class="lottery">
          <div class="lottery-head">
            现场抽奖
            <div class="lottery-head-person">参与抽奖人数&emsp;<span>1000</span></div>
          </div>
          <div class="lottery-choose">
            <img src="../../assets/images/avatar.jpg" class="lottery-choose-headpic">   
          </div>
          
          <div class="lottery-btnarea clearfloat">
            <div class="btn-color j-game">开始抽奖</div>
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
          <div class="blue2-item clearfloat">
            <div class="width-50 fl" style="font-size: 0;">
              <span class="num-sm">1</span>
              <img src="../../assets/images/avatar.jpg" class="blue2-headpic">
            </div>
            <div class="width-50 fl">夏天</div>
          </div>
        </div>
        <div class="blue2-btnarea">
          <div class="blue2-btn j-reset">清空列表</div>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
      handleHide() {
        this.maskActive = false;
      }
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
