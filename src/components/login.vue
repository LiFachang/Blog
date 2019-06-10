<template>
  <div class="container">
    <h2>{{title}}</h2>
    <table>
      <tr>
        <td width="30%">用户名：</td>
        <td><input type="text" placeholder="请输入用户名" v-model="userName"></td>
      </tr>
      <tr>
        <td>密码：</td>
        <td><input type="password" placeholder="请输入密码" v-model="userPwd"></td>
      </tr>
      <tr v-if="title === '注册'">
        <td>确认密码：</td>
        <td><input type="password" placeholder="请确认密码" v-model="repeatPwd"></td>
      </tr>
    </table>
    <div class="btn btn-active" v-if="title === '登录'" @click="login">登录</div>
    <router-link v-if="title === '登录'" tag="div" class="btn" :to="{name: 'register'}">注册</router-link>

    <div class="btn btn-active" v-if="title === '注册'" @click="register">注册</div>
    <router-link v-if="title === '注册'" tag="div" class="btn" :to="{name: 'login'}">已有账号，去登录</router-link>

    <alert :alert="alert" @alertClick="alertClick"></alert>
    <tips :tips="tips"></tips>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        title: '',
        userName: '',
        userPwd: '',
        repeatPwd: '',
        alert: {
          msg: ''
        },
        tips: {
          msg: '',
          showImg: 0
        }
      }
    },
    mounted() {
      switch (this.$route.name) {
        case 'login':
          this.title = '登录'
          break
        case 'register':
          this.title = '注册'
          break
      }
    },
    methods: {
      login () {
        if (this.userName.trim() === '' || this.userPwd.trim() === '') {
          this.alert.msg = '用户名或密码不能为空，请重新输入';
          return
        }
        let params = {
          name: this.userName,
          password: this.userPwd
        }
        this.$post('/login', params).then(res => {
          if (res.code === 0) {
            this.$router.push({
              name: 'home'
            })
          } else {
            this.alert.msg = res.message
          }
        }).catch(err => console.log(err))
      },
      register () {
        if (this.userName.trim() === '' || this.userPwd.trim() === '') {
          this.alert.msg = '用户名或密码不能为空，请重新输入';
          return
        }

        if (this.userPwd === this.repeatPwd) {
          this.toRegister();
        } else {
          this.alert.msg = '两次密码不一致，请重新输入';
          return
        }
      },
      alertClick () {
        if (this.alert.msg.indexOf('成功') >= 0) {
          this.alert.msg = '';
          this.$router.push({
            name: 'login'
          })
        } else {
          this.alert.msg = '';
        }
      },
      toRegister() {
        let params = {
          userName: this.userName,
          userPwd: this.userPwd
        }
        this.$post('/register', params).then(res => {
          if (res.code === 0) {
            this.alert.title = ''
          } else {
            this.alert.title = '错误'
          }
          this.alert.msg = res.message;
        }).catch(err => console.log(err));
      }
    }
  }
</script>
<style scoped>
  .container{
    padding: 0 30px 30px;
  }
  h2{
    font-size: 20px;
    font-weight: normal;
    text-align: center;
    margin: 10px 0;
  }
  table{
    width: 100%;
  }
  td{
    padding-top: 20px;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px dashed #ccc;
  }
  input{
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    text-align: left;
  }
  .btn{
    width: 100%;
    margin: 20px 0;
    text-align: center;
    height: 50px;
    line-height: 48px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .btn-active{
    background: dodgerblue;
    color: #fff;
    border-color: dodgerblue;
  }
</style>
