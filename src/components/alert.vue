<template>
  <transition name="alert">
    <div v-if="alertMsg.msg !== ''" class="alert">
      <div>
        <p class="title">{{alertMsg.title ? alertMsg.title : '提示'}}</p>
        <p class="txt">{{alertMsg.msg}}</p>
        <div class="btn" @click="alertClick">{{alertMsg.btnTxt ? alertMsg.btnTxt : '确定'}}</div>
      </div>
    </div>
  </transition>
</template>
<script>
  export default {
    props: {
      alertMsg: { type: Object } //title msg btnTxt
    },
    data() {
      return {}
    },
    mounted() {
    },
    methods: {
      alertClick () {
        this.$emit('alertClick')
      }
    }
  }
</script>
<style scoped>
  .alert{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0,0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
  }
  .alert>div{
    width: 80%;
    background: #fff;
    border-radius: 8px;
    text-align: center;
    position: relative;
    padding-bottom: 50px;
  }
  .title{
    font-size: 18px;
    font-weight: bold;
    padding: 10px 0;
  }
  .txt{
    font-size: 18px;
    padding: 0 30px 20px;
  }
  .btn{
    color: dodgerblue;
    height: 50px;
    line-height: 49px;
    border-top: 1px solid #ccc;
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
  }
</style>
