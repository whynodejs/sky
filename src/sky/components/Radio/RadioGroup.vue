<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
export default{
  name: 'RadioGroup',
  props: {
    value: [Number, String]
  },
  data () {
    return {
      currentValue: this.value
    }
  },
  mounted () {
    // 初始化数据
    this.updateChildren({label: this.currentValue})
  },
  methods: {
    handleChange (attr) {
      this.updateChildren(attr)
      // 响应双向绑定数据
      this.$emit('input', attr.label)
    },
    updateChildren (attr) {
      this.$children.forEach(item => {
        // 遍历单选框子节点
        if (item.$options.name === 'Radio' && !item.disabled) {
          item.checked = attr.label === item.label
        }
      })
    }
  },
  watch: {
    value: function (value) {
      this.currentValue = value
      // 属性变化时动态更新子节点
      this.updateChildren({label: value})
    }
  }
}
</script>