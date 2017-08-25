<template>
  <i :class='classes' :style='styles'></i>  
</template>
<script>
const prefix = 'sky-icon'
export default{
  name: 'Icon',
  props: {
    type: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      default: 14
    },
    color: String
  },
  computed: {
    classes () {
      return `${prefix} ${prefix}-${this.type}`
    },
    styles () {
      let styles = {}
      styles['font-size'] = this.size + 'px'
      styles['color'] = this.color
      return styles
    }
  }
}  
</script>
