<template>
  <transition name="tips">
    <div class="tips" v-if="tips">
      <div>
        <div>
          <!--<iconfont :id="'icon-icon_refresh'" :size="'24px'" :color="'#fff'"></iconfont>-->
          <i></i>
        </div>
        <span>{{tips}}</span>
      </div>
    </div>
  </transition>
</template>
<script>
  export default {
    props: ['tips'],
    data() {
      return {}
    },
    mounted() {
    },
    methods: {
    }
  }
</script>
<style scoped>
  .tips{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .tips>div{
    padding: 10px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,0.7);
    border-radius: 4px;
    overflow: hidden;
    color: #fff;
  }
  .tips>div>span{
    font-size: 14px;
    letter-spacing: 1px;
  }
  i {
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    border: 2px dashed #fff;
  }
  .tips>div>div{
    margin-bottom: 4px;
    animation: rotate 1.4s linear infinite;
  }
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
