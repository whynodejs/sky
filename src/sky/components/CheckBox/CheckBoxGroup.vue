<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
export default{
  name: 'CheckBoxGroup',
  props: {
    value: {
      type: Array,
      default: []
    }
  },
  mounted () {
    this.updateChildren(this.value)
  },
  methods: {
    handleChange (data) {
      if (data.value) {
        // 元素被选中时添加该元素
        let temp = Array.from(this.value)
        temp.push(data.label)
        this.$emit('input', temp)
      } else {
        let temp = []
        // 元素取消选中时要删除该元素
        for (let i = 0; i < this.value.length; i++) {
          if (this.value[i] !== data.label) {
            temp.push(this.value[i])
          }
        }
        this.$emit('input', temp)
      }
    },
    updateChildren (data) {
      let set = new Set(data)
      this.$children.forEach(item => {
        // 各个CheckBox子元素根据被选中状态需要被重新渲染
        if (item.$options.name === 'CheckBox') {
          item.checked = set.has(item.label)
        }
      })
    }
  },
  watch: {
    value: function (value) {
      this.updateChildren(value)
    }
  }
}  
</script>