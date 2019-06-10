<template>
  <div class="home">
    <!--搜索框-->
    <search></search>

    <!--文章列表-->
      <ul class="article-list-box container">
        <li v-for="(item, index) in articleList" :key="index">
          <p class="article-title" @click="navTo('article', item.article_id)">{{item.article_title}}</p>
          <p class="article-abstract">{{item.article_content}}</p>
          <div class="article-other-info">
            <div class="article-author">
              <div class="author-head-photo-box">
                <headPhoto :src="item.user_head_photo" :size="'40px'"></headPhoto>
              </div>
              <span class="color">{{item.user_name}}</span>
              <i>|</i>
              <span>{{item.article_createtime | parseTime}}</span>
            </div>

            <div class="article-degree">
              <span>阅读<span>{{item.article_read || 0}}</span></span>
              <i>|</i>
              <span>评论<span>{{item.article_comment || 0}}</span></span>
              <i>|</i>
              <span>赞<span>{{item.article_fabulous || 0}}</span></span>
            </div>
          </div>
        </li>
      </ul>

    <!--管理按钮-->
    <manageBtn></manageBtn>

    <alert :alert="alert" @alertClick="alertClick"></alert>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        articleList: [],
        alert: {
          msg: ''
        }
      }
    },
    mounted() {
      this.$post('/home/getArticleList').then(res => {
        if (res.code !== 0) {
          this.alert.msg = '获取文章列表失败!'
          return
        }
        this.articleList = res.data
      }).catch(err => {console.log(err)})
    },
    methods: {
      navTo(routerName, id) {
        this.$router.push({
          name: routerName,
          query: {id}
        })
      },
      alertClick () {
        this.alert.msg = ''
      }
    }
  }
</script>
<style scoped>
  .home{
    padding-top: 60px;
  }
  .article-list-box>li {
    padding: 10px 30px;
    border-bottom: 1px solid #ccc;
  }
  .article-list-box>li:hover{
    background: #ececec;
  }
  .article-title{
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
  }
  .article-abstract{
    color: #696969;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 10px 0;
  }
  .article-other-info{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .article-author{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
  }
  .article-author>span{
    display: inline-block;
    padding: 0 4px;
  }
  .article-other-info{color: #999;}
  .color{color: dodgerblue;}
  @media screen and (max-width: 768px) {
    .author-head-photo-box{
      display: none;
    }
    .article-other-info, .article-degree{
      font-size: 12px;
    }
  }

</style>
