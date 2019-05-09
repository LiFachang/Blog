<template>
  <div class="login">
    <div class="input-box">
      <span>用户名:</span>
      <input type="text" v-model="user.name">
    </div>
    <div class="input-box">
      <span>密码:</span>
      <input type="password" v-model="user.password">
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        user: {
          name: '',
          password: ''
        }
      }
    },
    mounted() {
    },
    methods: {}
  }
</script>
<style scoped>
  .login{
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow: hidden;
  }
  .input-box{
    width: 80%;
    height: 50px;
    line-height: 50px;
    border: 1px solid #ddd;
    margin: 30px 0 0;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 10px;
    overflow: hidden;
  }
  .input-box>span{
    width: 60px;
  }
  .input-box>input{
    flex: 1;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
  }
</style>
