<template>
  <div :class='wrapClass'>
    <span :class='innerClass'></span>
    <input 
           :class='[prefix + "-input"]'
           type='checkbox' 
           :checked='checked'
           :value='label'
           @change='handleChange'/>
    <span v-if='showLabel'><slot>{{label}}</slot></span>
  </div>  
</template>
<script>
const prefix = 'sky-checkbox'
export default{
  name: 'CheckBox',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    label: [Number, String],
    showLabel: {
      type: Boolean,
      default: true
    },
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
          [`${prefix}-checked`]: this.checked
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
      return this.$parent.$options.name === 'CheckBoxGroup'
    }
  },
  methods: {
    handleChange (event) {
      if (this.disabled) return
      let checked = event.target.checked
      if (this.group) {
        // 复选框组
        this.$parent.handleChange({label: this.label, value: checked})
      } else {
        this.$emit('input', checked)
      }
    }
  },
  watch: {
    value: function (value) {
      this.checked = value
    }
  }
}
</script>
