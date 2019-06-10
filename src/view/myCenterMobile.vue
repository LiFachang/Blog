<template>
  <div class="my-center">
    <div class="top">
      <img src="../assets/myCenter/bg.jpg" alt="">
      <label class="head-photo-box">
        <headPhoto :src="headPhoto" :size="'100px'"></headPhoto>
        <input class="head-photo-input" type="file" @change="inputHeadPhoto" accept="image/png,image/jpeg,image/jpg">
      </label>
    </div>
    <p class="user-name">
      <input type="text" v-model="name" placeholder="输入用户名">
    </p>
    <table>
      <tr>
        <td>年龄：</td>
        <td><input type="number" v-model="age" placeholder="输入年龄"></td>
      </tr>
      <tr>
        <td>性别：</td>
        <td>
          <label><input type="radio" v-model="sex" value="1">男</label>
          <label><input type="radio" v-model="sex" value="2">女</label>
          <label><input type="radio" v-model="sex" value="3">未知</label>
        </td>
      </tr>
      <tr>
        <td>手机：</td>
        <td><input type="tel" v-model="tel" placeholder="输入手机号"></td>
      </tr>
      <tr>
        <td>邮箱：</td>
        <td><input type="email" v-model="email" placeholder="输入邮箱"></td>
      </tr>
      <tr>
        <td>发表总数：</td>
        <td>{{articleNum}}</td>
      </tr>
      <tr>
        <td>被浏览：</td>
        <td>{{readNum}}</td>
      </tr>
      <tr>
        <td>被评论：</td>
        <td>{{commentNum}}</td>
      </tr>
      <tr>
        <td>被点赞：</td>
        <td>{{zanNum}}</td>
      </tr>
    </table>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        headPhoto: '',
        headPhotoInput: '',
        name: '',
        age: null,
        sex: null,
        tel: null,
        email: null,
        articleNum: 0,
        readNum: 0,
        commentNum: 0,
        zanNum: 0
      }
    },
    mounted() {

    },
    methods: {
      inputHeadPhoto (event) {
        let file = event.target.files[0]
        let r = new FileReader()
        r.readAsDataURL(file);
        r.onload = () => {
          this.headPhoto = r.result

//          上传图片
          let param = new FormData()
          param.append('file', file, '我的头像')
          param.append('chunk','11111')
          console.log(param)
          this.$uploadimg('/updateUserInfo', param).then(res => {
            console.log(res)
          }).catch(err => {
            console.error(err)
          })
        }
//        let src = null
//        if (window.createObjectURL !== undefined) { // basic
//          src = window.createObjectURL(file)
//        } else if (window.URL !== undefined) { // mozilla(firefox)
//          src = window.URL.createObjectURL(file)
//        } else if (window.webkitURL !== undefined) { // webkit or chrome
//          src = window.webkitURL.createObjectURL(file)
//        }
//        this.headPhoto = src
//
//        let oFormData = new FormData()
//        oFormData.append('head_photo', file)
//        console.log(oFormData)
      }
    }
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
  .head-photo-input{
    display: none;
    width: 0;
    height: 0;
    overflow: hidden;
  }
  .user-name input{
    display: block;
    width: 100%;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    margin: 10px 0;
  }
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
  td>input{
    display: block;
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    padding-right: 10px;
    appearance: none;
  }
</style>
