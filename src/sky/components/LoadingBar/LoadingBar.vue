<template>
  <div :style='styles' class='sky-loading'></div>  
</template>
<script>
const prefix = 'sky-loading'
export default{
  name: 'LoadingBar',
  props: {
    color: {
      type: String,
      default: '#2d8cf0'
    },
    height: {
      type: [String,Number],
      default: 2
    },
    percent: {
      type: [String, Number],
      default: 0
    }
  },
  computed: {
    styles () {
      let style = {}
      style['width'] = `${this.percent}%`
      style['background-color'] = `${this.color}`
      style['height'] = `${this.height}px`
      return style
    }
  }
}
</script>
<style>
.sky-loading{
  position: fixed;
  top: 0;
  transition: width .3s ease-in-out;
}
</style>
