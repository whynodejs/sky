<template>
  <div>
      <label>{{label}}</label>
      <slot></slot>
      <!-- 错误信息显示区域 -->
      <div :class='[prefix + "-wrap"]' v-if="name">{{errorMessage}}</div>
  </div>
</template>
<script>
let prefix = 'sky-form'
import locale from '../../mixins/locale'
export default{
  name: 'Form',
  props: {
    label: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  mixins: [locale],
  data () {
    return {
      prefix: prefix,
      rule: null,
      errorMessage: ''
    }
  },
  created () {
    // 获取验证规则
    if (this.name) {
      let parent = this.findParent()
      console.log(parent)
      if (parent) {
        this.rule = parent.rules[this.name]
        console.log(this.rule)
        if (this.rule) {
          // 存储当前元素
          parent.$emit('insertChildren', this)
        }
      }
    }
  },
  methods: {
    validate () {
      let value = this.$children[0].value
      let result = new RegExp(this.rule.validator).test(value)
      this.errorMessage = result ? '' : this.rule.message
      return result
    },
    findParent () {
      return this.findParentByName(this, 'Form')
    }
  }
}
</script>
<style scoped>
  .sky-form-wrap{
    width: 100%;
    height: 20px;
    line-height: 15px;
    padding: 3px 3px;
    text-align: center;
    color: red;
  }
</style>
