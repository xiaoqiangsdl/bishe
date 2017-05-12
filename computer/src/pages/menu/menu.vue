<template>
  <div class="opactiy-bg">
    <div class="menu-head">
      节目单
    </div>
    <div class="menu-list">
      <ul>
        <li v-for="(item, index) in menuList">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import axios from 'axios';

  export default {
    data () {
      return {
        menuList: []
      }
    },
    mounted() {
      axios.get('http://localhost:3000/data/read/menu').then(res => {
          // success callback
        if (res.status === 200 && res.data.status === 200){
          this.menuList = res.data.data;
        }
      })
    }
  }
</script>

<style>
  .menu-head{
    padding: 20px 0;
    text-align: center;
    font-size: 35px;
    line-height: 1;
  }

  .menu-list{
    height: 400px;
    padding: 0 50px 20px;
    overflow: auto;
  }

  .menu-list ul{
    -moz-column-count:3; /* Firefox */
    -webkit-column-count:3; /* Safari and Chrome */
    column-count:3;
  }

  .menu-list ul li{
    display: block;
    text-align: left;
    font-size: 18px;
    line-height: 3;
  }

</style>
