<template>
  <div v-if="false" class="alert">
    <div>
      <p class="title">提示</p>
      <p class="txt">内内容内容内容内容内容内容内容内容内容内容容</p>
      <div class="btn">确定</div>
    </div>
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
