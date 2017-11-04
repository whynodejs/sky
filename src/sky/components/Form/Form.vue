<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
export default{
  name: 'Form',
  props: {
    rules: {
      type: Object,
      default: () => {}
    },
    labelwith: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      inputs: []
    }
  },
  created () {
    this.$on('insertChildren', function (obj) {
      // 得到所有的form-item子元素用于验证
      this.inputs.push(obj)
    })
    this.$on('removeChildren', function (obj) {
      let index = this.inputs.findIndex(obj)
      this.inputs.splice(index, 1)
    })
  },
  destroyed () {
    // 移除组件的自定义监听器
    this.$off()
  },
  methods: {
    validateAll (cb) {
      let valid = true
      this.inputs.forEach(childItem => {
        let flag = childItem.validate()
        valid &= flag
      })
      cb(valid)
    }
  },
  watch: {
    rules: function (rs) {
      this.rules = rs
    }
  }
}
</script>
