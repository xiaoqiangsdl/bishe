<template>
  <div class="op-wrapper">
    <div class="opactiy-md-bg">
        <div class="lottery">
          <div class="lottery-head">
            对对碰
            <div class="lottery-head-person">参与抽奖人数&emsp;<span>1000</span></div>
          </div>
          <div class="duiduipeng-game clearfloat">
            <div class="duiduipeng-game-preson">
              <img src="../../assets/images/avatar.jpg" class="lottery-choose-headpic">
              <p>28位</p>
            </div>
            <div class="duiduipeng-game-preson">
              <img src="../../assets/images/avatar.jpg" class="lottery-choose-headpic">
              <p>32位</p>
            </div>
          </div>
          <div class="lottery-btnarea clearfloat">
            <div class="btn-color j-game">开始对对碰</div>
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
          <div class="blue2-item2 clearfloat">
            <span class="num-sm fl" style="margin-top: 13px">1</span>
            <span class="blue-ddp-person fl">
              <img src="../../assets/images/avatar.jpg" class="blue2-headpic">
              <p>阿里嘎多</p>
            </span>
            <img src="../../assets/images/aixin.png" class="blue2-aixin fl">
            <span class="blue-ddp-person fl">
              <img src="../../assets/images/avatar.jpg" class="blue2-headpic">
              <p>阿里嘎多</p>
            </span>
          </div>
          <div class="blue2-item2 clearfloat">
            <span class="num-sm fl" style="margin-top: 13px">2</span>
            <span class="blue-ddp-person fl">
              <img src="../../assets/images/avatar.jpg" class="blue2-headpic">
              <p>阿里嘎多</p>
            </span>
            <img src="../../assets/images/aixin.png" class="blue2-aixin fl">
            <span class="blue-ddp-person fl">
              <img src="../../assets/images/avatar.jpg" class="blue2-headpic">
              <p>阿里嘎多</p>
            </span>
          </div>
          <div class="blue2-item2 clearfloat">
            <span class="num-sm fl" style="margin-top: 13px">3</span>
            <span class="blue-ddp-person fl">
              <img src="../../assets/images/avatar.jpg" class="blue2-headpic">
              <p>阿里嘎多</p>
            </span>
            <img src="../../assets/images/aixin.png" class="blue2-aixin fl">
            <span class="blue-ddp-person fl">
              <img src="../../assets/images/avatar.jpg" class="blue2-headpic">
              <p>阿里嘎多</p>
            </span>
          </div>
          <div class="blue2-item2 clearfloat">
            <span class="num-sm fl" style="margin-top: 13px">4</span>
            <span class="blue-ddp-person fl">
              <img src="../../assets/images/avatar.jpg" class="blue2-headpic">
              <p>阿里嘎多</p>
            </span>
            <img src="../../assets/images/aixin.png" class="blue2-aixin fl">
            <span class="blue-ddp-person fl">
              <img src="../../assets/images/avatar.jpg" class="blue2-headpic">
              <p>阿里嘎多</p>
            </span>
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
