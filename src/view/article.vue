<template>
  <div class="article">
    <!--作者信息-->
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

    <div class="container">
      <div class="detail">
        <p class="title">文章标题文章标题文章标题文章标题，文章标题文章标题</p>
        <p class="content">文章内容,文章内容文章内容文章内容文章内容文章内容,文章内容文章内容文章内容文章，文章内容,文章内容文章内容文章内容文章内容文章内容,文章内容文章内容文章内容文章内容，文章内容,文章内容文章内容文章内容文章内容文章内容,文章内容文章内容文章内容文章内容，文章内容,文章内容文章内容文章内容文章内容文章内容,文章内容文章内容文章内容文章内容，文章内容,文章内容文章内容文章内容文章内容文章内容,文章内容文章内容文章内容文章内容，文章内容,文章内容文章内容文章内容文章内容文章内容,文章内容文章内容文章内容文章内容内容</p>
      </div>

      <!--评论区-->
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
      this.$post('/getArticle', { id: this.$route.query.id }).then(res => {
        console.log(res)
      }).catch(err => { console.log(err) })
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
  @media screen and (max-width: 768px){
    .read-num, .comment-num, .fabulous-num{
      display: none;
    }
  }
  .article{
    padding-top: 60px;
  }
  .detail{
    overflow: hidden;
  }
  .title{
    font-size: 20px;
    font-weight: bold;
    border-bottom: 1px dashed #999;
    padding: 10px 20px;
    background: #ececec;
  }
  .content{
    font-size: 16px;
    color: #666;
    padding: 10px 20px;
  }
  .container{
    /*background: #efefef;*/
  }
  .comment>ul{
    margin-bottom: 30px;
  }
  .comment>ul>li{
    padding: 10px 20px;
    border-bottom: 1px dashed #999;
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
  @media screen and (max-width: 768px){
    .comment-content{
      font-size: 14px;
    }
  }
</style>
