<template>
  <div class="article">
    <!--作者信息-->
    <authorInfo></authorInfo>

    <div class="container">
      <div class="detail">
        <p class="title">文章标题文章标题文章标题文章标题，文章标题文章标题</p>
        <p class="content">文章内容,文章内容文章内容文章内容文章内容文章内容,文章内容文章内容文章内容文章，文章内容,文章内容文章内容文章内容文章内容文章内容,文章内容文章内容文章内容文章内容，文章内容,文章内容文章内容文章内容文章内容文章内容,文章内容文章内容文章内容文章内容，文章内容,文章内容文章内容文章内容文章内容文章内容,文章内容文章内容文章内容文章内容，文章内容,文章内容文章内容文章内容文章内容文章内容,文章内容文章内容文章内容文章内容，文章内容,文章内容文章内容文章内容文章内容文章内容,文章内容文章内容文章内容文章内容内容</p>
      </div>

      <!--评论区-->
      <comment></comment>
    </div>


    <!--管理按钮-->
    <manageBtn></manageBtn>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    mounted() {
    },
    methods: {}
  }
</script>
<style scoped>
  .article{
    padding-top: 60px;
  }
  .detail{
    overflow: hidden;
    padding: 20px;
  }
  .title{
    font-size: 20px;
    font-weight: bold;
  }
  .content{
    font-size: 16px;
    color: #666;
    padding: 10px 0;
  }
  .container{
    /*background: #efefef;*/
  }
</style>
