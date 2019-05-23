<template>
  <div class="home">
    <!--搜索框-->
    <search></search>

    <!--文章列表-->
      <ul class="article-list-box container">
        <li>
          <p class="article-title" @click="navTo('article')">一个经典面试题：如何保证缓存与数据库的双写一致性？</p>
          <p class="article-abstract">只要用缓存，就可能会涉及到缓存与数据库双存储双写，你只要是双写，就一定会有数据一致性的问题，那么你，只要用缓存，就可能会涉及到缓存与数据库双存储双写，你只要是双写，就一定会有数据一致性的问题，那么你，只要用缓存，就可能会涉及到缓存与数据库双存储双写，你只要是双写，就一定会有数据一致性的问题，那么你，只要用缓存，就可能会涉及到缓存与数据库双存储双写，你只要是双写，就一定会有数据一致性的问题，那么你</p>
          <div class="article-other-info">
            <div class="article-author">
              <div class="author-head-photo-box">
                <headPhoto :src="''" :size="'40px'"></headPhoto>
              </div>
              <span class="color">作者姓名</span>
              <i>|</i>
              <span>发布时间</span>
            </div>

            <div class="article-degree">
              <span>阅读<span>2550</span></span>
              <i>|</i>
              <span>评论<span>29</span></span>
              <i>|</i>
              <span>赞<span>99</span></span>
            </div>
          </div>
        </li>
      </ul>

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
    methods: {
      navTo(name) {
        this.$router.push({
          name: name
        })
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
  @media screen and (max-width: 1024px) {
    .author-head-photo-box{
      display: none;
    }
    .article-other-info, .article-degree{
      font-size: 12px;
    }
  }

</style>
