<template>
<div>
  <div v-if='type != "textarea"'>
    <input
          :class='classes'
          :type='type'
          :value='pre_value'
          :disabled='disabled'
          :readonly='readonly'
          :placeholder='placeholder'
          :maxlength='length'
          @input='handleChange'
          @blur='handleBlur'
          @focus='handleFocus'/>
  </div>
  <div v-else>
    <textarea
      ref='textarea'
      :class='classes'
      :value='pre_value'
      :disabled='disabled'
      :readonly='readonly'
      :placeholder='placeholder'
      @input='handleChange'
    />
  </div>
</div>
</template>
<script>
let prefix = 'sky-ui-'
import Icon from '../Icon'
export default{
  name: 'Input',
  components: {Icon},
  props: {
    value: [String, Number],
    type: {
      type: String,
      default: 'text'
    },
    length: Number,
    placeholder: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    regexp: {
      type: String,
      default: ''
    },
    icon: String,
    placement: {
      type: String,
      default: 'front'
    }
  },
  data () {
    return {
      pre_value: this.value
    }
  },
  computed: {
    classes () {
      // 区分输入框和输入域
      let prefixClass = prefix + (this.type === 'textarea' ? 'textarea' : 'input')
      let classes = [`${prefixClass}`]
      // 是否不可操作
      if (this.disabled) {
        classes.push(`${prefixClass}-disabled`)
      }
      return classes
    }
  },
  methods: {
    // 对于blur失去焦点事件
    handleBlur (event) {
      this.$emit('blur', event)
    },
    // 对应获得焦点事件
    handleFocus (event) {
      this.$emit('focus', event)
    },
    // 对应input事件
    handleChange (event) {
      if (this.type === 'textarea') {
        let target = event.target
        if (target.scrollHeight > target.offsetHeight) {
          this.$refs['textarea'].style.height = target.scrollHeight + 'px'
        } 
      }
      let value = event.target.value
      // 正则表达式存在的情况下进行验证
      if (this.regexp === ''  || this.regexp.test(value)) {
        this.pre_value = value
      }
      this.$emit('input', this.pre_value)    
    }
  }
}
</script>
