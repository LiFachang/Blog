<template>
  <div class="search-box">
    <div class="container">
      <div class="input-box">
        <iconfont :id="'icon-icon_search'"></iconfont>
        <input class="search-input" type="text" placeholder="搜索内容">
        <span class="search-btn">搜索</span>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
  .search-box {
    height: 60px;
    background: dodgerblue;
    overflow: hidden;
    padding: 0 30px;
  }
  .input-box{
    height: 40px;
    margin-top: 10px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .search-input{
    display: block;
    flex: 1;
    height: 40px;
    background: dodgerblue;
    color: #fff;
    font-size: 16px;
    padding: 0 20px;
  }
  .search-input::placeholder{
    color: #fff;
  }
  .search-btn{
    font-size: 16px;
    color: #fff;
    padding: 4px 10px;
    border: 1px solid #fff;
    border-radius: 4px;
    cursor: pointer;
  }
</style>
