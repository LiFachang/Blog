<template>
  <div class="manage-btn" @click="changeManageStatus" :style="manageStyle">
    <!--开关按钮-->
    <iconfont :id="iconfontId" :size="'50px'"></iconfont>

    <!--个人中心按钮-->
    <!--<iconfont :id="'icon-icon_signal'" :size="'50px'"></iconfont>-->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        status: 0, // 0:隐藏状态  1：显示状态  2：打开状态
        iconfontId: 'icon-icon_roundadd'
      }
    },
    methods: {
      changeManageStatus () {
        if (this.status === 0) {
          this.status = 1
        } else if (this.status === 1) {
          this.status = 2
        } else {
          this.status = 0;
        }
      }
    },
    computed: {
      manageStyle () {
        if (this.status === 0) {
          return { transform: 'translate(50%, 0)', opacity: 0.5 }
        } else if (this.status === 1) {
          return { transform: 'translate(-10%, 0)', opacity: 1 }
        } else {
          return { transform: 'translate(-50%, 0) scale(1.8) rotate(225deg)', opacity: 1 }
        }
      }
    }
  }
</script>

<style scoped>
.manage-btn{
  position: fixed;
  bottom: 13%;
  right: 0;
  background: dodgerblue;
  border-radius: 100%;
  cursor: pointer;
  transition: all .3s ease;
  z-index: 999;
}
</style>
