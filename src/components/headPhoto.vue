<template>
  <div class="head-photo" :style="headPhotoSize">
    <img v-if="src" :src="headPhotoSrc" alt="">
    <iconfont v-if="!src" :id="'icon-icon_im_face'" :size="'40px'" :color="'currentColor'"></iconfont>
  </div>
</template>
<script>
  export default {
    props: ['src', 'size'],
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
