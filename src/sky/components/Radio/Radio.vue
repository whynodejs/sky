<template>
  <div :class='wrapClass'>
    <span :class='innerClass'></span>
    <input 
           :class='[prefix + "-input"]'
           type='radio' 
           :checked='checked'
           :value='label'
           @change='handleChange'/>
           <slot>{{label}}</slot>
  </div> 
</template>
<script>
const prefix = 'sky-radio'
export default{
  name: 'Radio',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    label: [Number, String],
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      checked: this.value,
      prefix: prefix
    }
  },
  computed: {
    wrapClass () {
      return [
        `${prefix}`,
        {
          [`${prefix}-checked`]: this.checked,
          [`${prefix}-disabled`]: this.disabled
        }
      ]
    },
    innerClass () {
      return [
        `${prefix}-inner`,
        {
          [`${prefix}-inner-disabled`]: this.disabled
        }
      ]
    },
    group () {
      return this.$parent.$options.name === 'RadioGroup'
    }
  },
  created () {
  },
  methods: {
    handleChange (event) {
      // 不可选择
      if (this.disabled) {
        return
      }
      // 组元素要确认选择项
      if (this.group) {
        this.$parent.handleChange({label: this.label})
        return
      }
      this.$emit('input', event.target.checked)
    }
  },
  watch: {
    value: function (value) {
      this.checked = value
    }
  }
}
</script>
