<template>
  <div class="manages-btn-box">
    <!--开关按钮-->
    <div class="main manage-btn" @click="changeManageStatus" :style="manageStyle">
      <iconfont :id="'icon-icon_roundadd'" :size="'50px'"></iconfont>
    </div>

    <!--个人中心按钮-->
    <div class="main my-center" :style="managesBtnStyle" @click="navTo('myCenter')">
      <iconfont :id="'icon-icon_signal'" :size="'25px'"></iconfont>
    </div>

    <!--添加按钮-->
    <div class="main add-article" :style="managesBtnStyle" @click="changeTypeStatus">
      <iconfont :id="'icon-icon_add'" :size="'25px'"></iconfont>
    </div>

    <!--添加按钮子项-->
    <div class="add-article-type" :style="typeBtnStyle">
      <span @click="navTo('editArticle')">发布文章</span>
      <span>发布图文</span>
    </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        status: 0, // 0:关闭状态  1：打开状态
        typeStatus: 0 // 0:发布按钮关闭 1：发布按钮打开
      }
    },
    methods: {
      changeManageStatus () {
        this.status === 0 ? this.status = 1 : this.status = this.typeStatus = 0 ;
      },
      changeTypeStatus () {
        this.typeStatus === 0 ? this.typeStatus = 1 : this.typeStatus = 0
      },
      navTo(name) {
        if (name === 'myCenter') {
          let w = document.documentElement.clientWidth;
          let routerName = '';
          w < 1024 ? routerName = 'myCenterMobile' : routerName = 'myCenterPc';
          console.log(w, routerName);
          this.$router.push({
            name: routerName
          })
        } else {
          this.$router.push({ name: name })
        }
      }
    },
    computed: {
      manageStyle () {
        if (this.status === 0) {
          return { transform: 'translate(50%, 0)', opacity: 0.5 }
        } else {
          return { transform: 'translate(-50%, 0) scale(1.8) rotate(225deg)', opacity: 1 }
        }
      },
      managesBtnStyle () {
        let w = document.documentElement.clientWidth + 'px';
        if (this.status === 0) {
          return { transform: `translate(${w}, 0) rotate(360deg)`, opacity: 0 }
        } else {
          return { transform: 'translate(0px, 0) rotate(0deg)', opacity: 1 }
        }
      },
      typeBtnStyle () {
        let w = document.documentElement.clientWidth + 'px';
        if (this.status === 0 || this.typeStatus === 0) {
          return { transform: `translate(${w}, 0)`, opacity: 0 }
        }
        if (this.status === 1 && this.typeStatus === 1) {
          return { transform: `translate(0, 0)`, opacity: 1 }
        }
      }
    }
  }
</script>

<style scoped>
  .manages-btn-box>.main{
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    background: dodgerblue;
    border-radius: 100%;
    cursor: pointer;
    transition: all .3s ease;
    z-index: 999;
    overflow: hidden;
  }
  .manage-btn{
    bottom: 13%;
    right: 0;
  }
  .my-center{
    bottom: 13%;
    /*right: 27%;*/
    right: 120px;
  }
  .add-article{
    bottom: 13%;
    /*right: 44%;*/
    right: 200px;
  }
  .manages-btn-box>.main:hover{
    background: darkblue;
  }
  .add-article-type{
    position: fixed;
    border-radius: 0;
    bottom: 23%;
    right: 120px;
    transition: all .3s ease;
  }
  .add-article-type>span{
    display: inline-block;
    color: #fff;
    background: dodgerblue;
    cursor: pointer;
    padding: 4px 10px;
    margin: 0 10px;
    border-radius: 4px;
  }
  .add-article-type>span:hover{
    background: darkblue;
  }
</style>
