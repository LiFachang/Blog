<template>
  <svg class="icon" aria-hidden="true" :style="useStyle" v-html="useHtml"></svg>
</template>

<script>
  export default {
    props: ['id', 'size', 'color'],
    data() {
      return {}
    },
    computed: {
      useHtml () {
        return `<use xlink:href="#${this.id}"></use>`
      },
      useSize () {
        if (this.size) {
          return { fontSize : this.size}
        }
      },
      useStyle () {
        let styleObj = {};
        if (this.size) {
          styleObj.fontSize = this.size;
        }
        if (this.color) {
          styleObj.fill = this.color;
        }
        return styleObj
      }
    }
  }
</script>
