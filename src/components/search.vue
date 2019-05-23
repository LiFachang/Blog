<template>
  <div class="search-box" @click="searchResult = !searchResult">
    <div class="search-container container">
      <div class="input-box">
        <iconfont :id="'icon-icon_search'"></iconfont>
        <input class="search-input" type="text" placeholder="搜索内容">
        <span class="search-btn">搜索</span>
      </div>

    </div>
    <transition name="search-result">
      <ul v-if="searchResult" class="search-result-container container">
        <li>123</li>
        <li>123</li>
        <li>123</li>
      </ul>
    </transition>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        searchResult: false
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
  .search-box {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 998;
    height: 60px;
    background: dodgerblue;
    padding: 0 30px;
  }
  .search-container{
    padding-top: 10px;
  }
  .search-result-container{
    max-height: 100%;
    background: #ececec;
    position: fixed;
    top: 60px;
    right: 0;
    left: 0;
    z-index: 997;
    padding: 0 30px 60px;
    overflow-x: hidden;
    overflow-y: auto;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  .search-result-container>li{
    border-bottom: 1px solid #999;
    padding: 10px 30px;
    overflow: hidden;
    transition: all .3s ease;
    margin-top: 10px;
    cursor: pointer;
  }
  .search-result-container>li:hover{
    background: dodgerblue;
    color: #fff;
    border-bottom: 1px solid dodgerblue;
    border-radius: 4px;
  }
  .input-box{
    height: 40px;
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
