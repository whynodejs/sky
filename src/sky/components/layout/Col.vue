<template>
  <div :class='classes' :style='styles'>
    <slot></slot>
  </div>
</template>
<script>
const prefix = 'sky-col'
export default{
  name: 'Col',
  props: {
    span: Number,
    xs: Number,
    sm: Number,
    md: Number,
    lg: Number,
    offset: Number,
    push: Number,
    pull: Number,
    align: {
      type: String,
      default: 'left'
    }
  },
  computed: {
    classes () {
      // 渲染生成对应的样式表
      let classList = [
        {
          [`${prefix}-span-${this.span}`]: this.span,
          [`${prefix}-offset-${this.offset}`]: this.offset,
          [`${prefix}-push-${this.push}`]: this.push,
          [`${prefix}-pull-${this.pull}`]: this.pull
        }
      ]
      // 自适应属性
      let array = ['xs', 'sm', 'md', 'lg']
      // 自适应属性
      array.forEach(key => {
        if (this[key]) {
          classList.push(`${prefix}-span-${key}-${this[key]}`)
        }
      })
      return classList
    },
    styles () {
      return {'text-align': this.align}
    }
  },
  methods: {
  }
}
</script>
