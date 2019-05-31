<template>
  <div class="edit-article">
    <div class="top">
      <div class="author-info">
        <headPhoto :src="''" :size="'40px'" :iconFontColor="'#fff'"></headPhoto>
        <span>我的用户名</span>
      </div>
      <span class="submit-btn" @click="submitArticle">确认发布</span>
    </div>

    <!--文章标题-->
    <div class="edit-box">
      <p class="edit-tips">文章标题：</p>
      <textarea class="textarea-title" placeholder="这里是文章标题" v-model="title" :maxlength="maxLengthOfTitle"></textarea>
      <div class="length-tips">{{titleLength}}/{{maxLengthOfTitle}}</div>
    </div>

    <!--文章内容-->
    <div class="edit-box">
      <p class="edit-tips">文章内容：</p>
      <textarea class="textarea-content" placeholder="这里是文章内容" v-model="content" :maxlength="maxLengthOfContent"></textarea>
      <div class="length-tips">{{contentLength}}/{{maxLengthOfContent}}</div>
    </div>

    <!--管理按钮-->
    <manageBtn></manageBtn>

    <alert :alertMsg="alertMsg" @alertClick="alertClick"></alert>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        title: '', // 文章标题
        content: '', // 文章内容
        maxLengthOfTitle: 50,
        maxLengthOfContent: 300,
        alertMsg: {
          msg: ''
        },
        articleId: '' // 刚发布的文章的ID
      }
    },
    mounted() {
    },
    methods: {
      alertClick () {
        if (this.alertMsg.msg.indexOf('成功') >= 0) {
          this.$router.push({
            name: 'article',
            query: { id: this.articleId }
          })
        }
        this.alertMsg.msg = '';
      },
      submitArticle () {
        if (this.title.trim() === '' || this.content.trim() === '') {
          this.alertMsg.msg = '文章标题或文章内容不能为空'
          return
        }
        let params = {
          type: 1,
          title: this.title,
          content: this.content
        }
        this.$post('/addArticle', params).then(res => {
          console.log(res)
          if (res.code !== 0) {
            this.alertMsg.msg = res.message
          } else {
            this.articleId = res.articleId
            this.alertMsg.msg = res.message
          }
        }).catch(err => {
          console.log('error', err)
        })
      }
    },
    computed: {
      titleLength () {
        return this.title.length
      },
      contentLength () {
        return this.content.length
      }
    }
  }
</script>
<style scoped>
  .edit-article{
    padding-top: 60px;
    overflow: hidden;
  }
  .top{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    background: dodgerblue;
    color: #fff;
  }
  .author-info{
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .author-info>span{
    margin-left: 10px;
  }
  .submit-btn{
    display: inline-block;
    padding: 4px 10px;
    border-radius: 4px;
    border: 1px solid #fff;
    cursor: pointer;
  }
  .edit-box{
    overflow: hidden;
    padding: 10px 20px;
  }
  .edit-tips{
    margin: 4px 0;
  }
  .textarea-title, .textarea-content{
    border: 1px solid #ececec;
    border-radius: 4px;
    padding: 8px 10px 0;
    width: 100%;
    min-height: 100px;
    resize: vertical;
    font-size: 16px;
  }
  .textarea-content{
    min-height: 350px;
  }
  .length-tips{
    text-align: right;
    font-size: 14px;
    color: #999;
  }
</style>
