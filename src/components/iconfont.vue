<template>
  <svg class="icon" aria-hidden="true" :style="useSize" v-html="useHtml"></svg>
</template>

<script>
  export default {
    props: ['id', 'size'],
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
      }
    }
  }
</script>
