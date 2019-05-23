<template>
  <div class="manages-btn-box">
    <!--开关按钮-->
    <div class="manage-btn" @click="changeManageStatus" :style="manageStyle">
      <iconfont :id="'icon-icon_roundadd'" :size="'50px'"></iconfont>
    </div>

    <!--个人中心按钮-->
    <div class="my-center" :style="managesBtnStyle" @click="navTo('myCenter')">
      <iconfont :id="'icon-icon_signal'" :size="'25px'"></iconfont>
    </div>

    <!--添加文章按钮-->
    <div class="add-article" :style="managesBtnStyle" @click="navTo('editArticle')">
      <iconfont :id="'icon-icon_add'" :size="'25px'"></iconfont>
    </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        status: 0 // 0:关闭状态  1：打开状态
      }
    },
    methods: {
      changeManageStatus () {
        this.status === 0 ? this.status = 1 : this.status = 0;
      },
      navTo(name) {
        this.$router.push({ name: name })
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
          return { transform: `translate(${w}, 0) rotate(360deg)`, opacity: 0.5 }
        } else {
          return { transform: 'translate(0px, 0) rotate(0deg)', opacity: 1 }
        }
      }
    }
  }
</script>

<style scoped>
  .manages-btn-box>div{
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
  .manages-btn-box>div:hover{
    background: darkblue;
  }
</style>
