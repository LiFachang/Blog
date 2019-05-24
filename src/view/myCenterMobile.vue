<template>
  <div class="my-center">
    <div class="top">
      <img v-if="w < 1024" src="../assets/myCenter/bg.jpg" alt="">
      <div class="head-photo-box">
        <headPhoto :src="''" :size="'100px'"></headPhoto>
      </div>
    </div>
    <p class="user-name">用户名</p>
    <table>
      <tr>
        <td>年龄：</td>
        <td>30</td>
      </tr>
      <tr>
        <td>性别：</td>
        <td>男</td>
      </tr>
      <tr>
        <td>手机：</td>
        <td>13000000000</td>
      </tr>
      <tr>
        <td>邮箱：</td>
        <td>000000000@qq.com</td>
      </tr>
      <tr>
        <td>发表总数：</td>
        <td>100</td>
      </tr>
      <tr>
        <td>被浏览：</td>
        <td>5600</td>
      </tr>
      <tr>
        <td>被评论：</td>
        <td>200</td>
      </tr>
      <tr>
        <td>被点赞：</td>
        <td>300</td>
      </tr>
    </table>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        w: document.documentElement.clientWidth
      }
    },
    mounted() {
      console.log(this.w)
    },
    methods: {}
  }
</script>
<style scoped>
  .top{
    overflow: hidden;
    position: relative;
    margin: 0 auto;
    padding-bottom: 50px;
  }
  .top>img{
    display: block;
    width: 100%;
    margin: 0 auto;
  }
  .head-photo-box{
    position: absolute;
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    margin-left: -50px;
    background: #ccc;
    border-radius: 100%;
    overflow: hidden;
  }
  .user-name{ font-size: 30px; font-weight: bold; text-align: center; margin: 8px 0; }
  table{
    width: 100%;
  }
  td{
    font-size: 18px;
    height: 40px;
    line-height: 40px;
  }
  table>tr>td:first-child{
    text-align: right;
  }
  td{
    border-bottom: 1px dashed #ececec;
  }
</style>
