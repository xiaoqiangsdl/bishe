<template>
  <div class="opactiy-bg">
    <div class="cmt-wrap">
      <ul class="cmt-list">
        <li class="cmt-item clearfloat" v-for="(item, index) in cmtList">
          <div class="cmt-avatar">
            <img :src="item.avatar" class="headpic">
          </div>
          <div class="cmt-right">
            <div class="cmt-dialog">
              <div class="cmt-dialog-text">
                <b>{{ item.name }}</b>: {{ item.comment }}
              </div>
            </div>
          </div>
        </li>
      </ul>
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

<style >
  /*评论内容*/
  .cmt-wrap{
    padding: 20px 0;
    height: 100%;
    width: 100%;
  }

  .cmt-list{
    position: relative;
    display: block;
    height: 100%;
    padding-left: 30px;
    padding-right: 123px;
    padding-left: 90px;
    overflow-y: auto;
    overflow-x: visible;
  }

  .cmt-item{
    position: relative;
    padding-left: 30px;
    padding-bottom: 32px;
    border-left: 3px solid #18c6e1;
  }

  .cmt-item:before{
    content: "";
    position: absolute;
    top: 32px;
    left: -9.5px;
    width: 16px;
    height: 16px;
    border-radius: 8px;
    background: #18c6e1;
  }

  .cmt-item .cmt-avatar{
    float: left;
    width: 80px;
    height: 80px;
    border-radius: 40px;
  }

  .cmt-avatar>img{
    width: 100%;
    height: 100%;
  }

  .cmt-right{
    margin-left: 115px;
  }

  .cmt-dialog{
    position: relative;
    display: inline-block;
    min-height: 78px;
    padding: 15px;
    background: #18c6e1;
    border-radius: 5px;
    font-size: 40px;
    line-height: 1.2;
  }

  .cmt-dialog:before{
    content: "";
    position: absolute;
    top: 26px;
    left: -24px;
    border: 12px solid transparent;
    border-right: 12px solid #18c6e1;
  }

  .cmt-dialog-imgs{
    padding: 10px 0;
  }

  .cmt-dialog-img{
    float: left;
    width: 175px;
    height: 175px;
    margin-right: 12px;
  }

  .cmt-dialog-text b{
    font-size: 35px;
  }
</style>
