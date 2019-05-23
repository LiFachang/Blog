<template>
  <div class="author-info">
    <div class="container">
      <div class="author-info-box">
        <headPhoto :src="''" :size="'50px'"></headPhoto>
        <span class="author-name">作者姓名</span>
      </div>
      <div class="number-box">
        <span>发布时间</span>
        <span class="read-num">阅读<span>5473</span></span>
        <span class="comment-num">评论<span>73</span></span>
        <span class="fabulous-num">赞<span>20</span></span>
      </div>
    </div>
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
  .author-info{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 998;
    height: 60px;
    background: dodgerblue;
    padding: 0 10px;
  }
  .author-info>.container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
  }
  .author-info-box, .number-box{
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .author-name{
    font-size: 18px;
    margin-left: 10px;
  }
  .number-box>span{
    margin-left: 20px;
  }
  @media screen and (max-width: 1024px){
    .read-num, .comment-num, .fabulous-num{
      display: none;
    }
  }
</style>
