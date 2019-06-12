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
          <label><input type="radio" v-model="sex" value="3">保密</label>
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
    <transition name="fade">
      <div class="btn" v-if="canUpdate" @click="updateUserInfo">更新</div>
    </transition>
    <alert :alert="alert" @alertClick="alertClick"></alert>
    <tips :tips="tips"></tips>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        headPhoto: '',
        headPhotoInput: '',
        name: '',
        age: '',
        sex: '',
        tel: '',
        email: '',
        articleNum: 0,
        readNum: 0,
        commentNum: 0,
        zanNum: 0,
        nowInfo: {}, // 当前用户信息
        alert: {
          msg: ''
        },
        tips: ''
      }
    },
    mounted() {
      this.$post('/getUserAllInfo').then(res => {
        console.log(res)
        if (res.code === 0) {
          let nowInfo = res.data[0]
          this.headPhoto = 'http://140.143.163.171:8888/' + nowInfo.user_head_photo
          this.nowInfo.name = this.name = nowInfo.user_name || ''
          this.nowInfo.age = this.age = nowInfo.user_age || ''
          this.nowInfo.sex = this.sex = nowInfo.user_sex || ''
          this.nowInfo.tel = this.tel = nowInfo.user_tel || ''
          this.nowInfo.email = this.email = nowInfo.user_email || ''
        }
      }).catch(err => {console.log(err)})
    },
    methods: {
      inputHeadPhoto (event) {
        let file = event.target.files[0]
        if (!file) {
          return
        }
        this.tips = '上传中...'
        let r = new FileReader()
        r.readAsDataURL(file);
        r.onload = () => {
//          上传图片
          let param = new FormData()
          param.append('file', file, '我的头像')
          param.append('dataType', 'photo')
          this.$uploadimg('/updateUserInfo', param).then(res => {
            console.log(res)
            this.tips = ''
            if (res.code === 0) {
              this.alert.msg = '头像上传成功'
              this.headPhoto = r.result
            } else {
              this.alert.msg = '头像上传失败'
              this.headPhoto = ''
            }
          }).catch(err => {
            console.error(err)
          })
        }
      },
      alertClick () {
        if (this.alert.msg.indexOf('成功') > -1) {
          this.alert.msg = ''
        }
      },
      updateUserInfo () {
        let params = {}
        this.name !== this.nowInfo.name ? params.name = this.name : null
        this.age !== this.nowInfo.age ? params.age = this.age : null
        this.sex !== this.nowInfo.sex ? params.sex = this.sex : null
        this.tel !== this.nowInfo.tel ? params.tel = this.tel : null
        this.email !== this.nowInfo.email ? params.email = this.email : null
        console.log(params)
        this.$post('/updateUserInfo', params).then(res => {
          console.log(res)
        }).catch(err => {console.log(err)})
      }
    },
    computed: {
      canUpdate () {
        return this.name !== this.nowInfo.name ||
          this.age !== this.nowInfo.age ||
          this.sex !== this.nowInfo.sex ||
          this.tel !== this.nowInfo.tel ||
          this.email !== this.nowInfo.email
          ? true : false
      }
    }
  }
</script>
<style scoped>
  .my-center{
    padding-bottom: 100px;
  }
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
  .btn{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: dodgerblue;
    color: #fff;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
</style>
