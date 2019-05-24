<template>
  <div class="head-photo" :style="headPhotoSize">
    <img v-if="src" :src="headPhotoSrc" alt="">
    <iconfont v-if="!src" :id="'icon-icon_im_face'" :size="iconfontSize" :color="getIconFontColor"></iconfont>
  </div>
</template>
<script>
  export default {
    props: ['src', 'size', 'iconFontColor'], // src:头像地址   size:头像大小   iconFontColor:默认头像颜色
    data() {
      return {}
    },
    mounted() {
    },
    methods: {},
    computed: {
      headPhotoSrc () {
        return this.src
      },
      headPhotoSize () {
        return { width: this.size, height: this.size }
      },
      iconfontSize () {
        if (this.size) { return this.size }
        else { return '40px' }
      },
      getIconFontColor () {
        if (this.iconFontColor) { return this.iconFontColor }
        else { return 'currentColor' }
      }
    }
  }
</script>
<style scoped>
  .head-photo{
    border-radius: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .head-photo img{
    display: block;
    width: 100%;
    height: 100%;
  }
</style>
