<template>
  <div class="comment">
    <p class="title">评论区</p>
    <ul>
      <li>
        <!--用户信息-->
        <div class="user-info">
          <div>
            <headPhoto :size="'40px'" :src="''"></headPhoto>
            <span class="user-name">用户名</span>
          </div>
          <span>评论发布时间</span>
        </div>

        <!--评论内容-->
        <div class="comment-content">评论内评论内容评论内容，评论内容评论内容，评论内容评论内容容，评论内评论内容评论内容，评论内容评论内容，评论内容评论内容容，评论内评论内容评论内容，评论内容评论内容，评论内容评论内容容，评论内评论内容评论内容，评论内容评论内容，评论内容评论内容容，</div>

        <!--给评论点赞-->
        <div class="fabulous-btn-box">
          <span>赞</span>
          <iconfont :id="'icon-icon_likegood'" :size="'18px'" :color="'#1e90ff'"></iconfont>
        </div>
      </li>

      <li>
        <!--用户信息-->
        <div class="user-info">
          <div>
            <headPhoto :size="'40px'" :src="''"></headPhoto>
            <span class="user-name">用户名</span>
          </div>
          <span>评论发布时间</span>
        </div>

        <!--评论内容-->
        <div class="comment-content">评论内评论内容评论内容，评论内容评论内容，评论内容评论内容容，评论内评论内容评论内容，评论内容评论内容，评论内容评论内容容，评论内评论内容评论内容，评论内容评论内容，评论内容评论内容容，评论内评论内容评论内容，评论内容评论内容，评论内容评论内容容，</div>

        <!--给评论点赞-->
        <div class="fabulous-btn-box">
          <span>赞</span>
          <iconfont :id="'icon-icon_likegood'" :size="'18px'" :color="'#1e90ff'"></iconfont>
        </div>
      </li>

      <li>
        <!--用户信息-->
        <div class="user-info">
          <div>
            <headPhoto :size="'40px'" :src="''"></headPhoto>
            <span class="user-name">用户名</span>
          </div>
          <span>评论发布时间</span>
        </div>

        <!--评论内容-->
        <div class="comment-content">评论内评论内容评论内容，评论内容评论内容，评论内容评论内容容，评论内评论内容评论内容，评论内容评论内容，评论内容评论内容容，评论内评论内容评论内容，评论内容评论内容，评论内容评论内容容，评论内评论内容评论内容，评论内容评论内容，评论内容评论内容容，</div>

        <!--给评论点赞-->
        <div class="fabulous-btn-box">
          <span>赞</span>
          <iconfont :id="'icon-icon_likegood'" :size="'18px'" :color="'#1e90ff'"></iconfont>
        </div>
      </li>
    </ul>
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
  .comment>ul{
    margin-bottom: 30px;
  }
  .comment>ul>li{
    padding: 10px 20px;
    border-bottom: 1px dashed #999;
  }
  .title{
    height: 50px;
    line-height: 50px;
    border-bottom: 1px dashed #999;
    padding: 0 20px;
    background: #ececec;
  }
  .fabulous-btn-box{
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .user-info{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .user-info>div{
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .comment-content{
    color: #666;
    margin: 10px 0;
    text-indent: 33px;
  }
  .user-name{
    margin-left: 10px;
  }
  .fabulous-btn-box>span{
    margin-right: 4px;
  }
  @media screen and (max-width: 1024px){
    .comment-content{
      font-size: 14px;
    }
  }
</style>
