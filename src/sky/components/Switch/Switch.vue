<template>
  <div :class='wrapClass' @click='switchStatus'>
    <div class='sky-switch-inner'>
      <div :class='textClass'>{{switchText}}</div>
    </div>
  </div>  
</template>
<script>
const prefix = 'sky-switch'
export default{
  name: 'Switch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    okText: {
      type: String,
      default: '开启'
    },
    notText: {
      type: String,
      default: '关闭'
    }
  },
  data () {
    return {
      currentValue: this.value
    }
  },
  computed: {
    wrapClass () {
      return [
        `${prefix}`,
        {
          [`${prefix}-on`]: this.currentValue,
          [`${prefix}-disabled`]: this.disabled,
        }
      ]
    },
    textClass () {
      return [
        `${prefix}-text`,
        {
          [`${prefix}-text-on`]: this.currentValue
        }
      ]
    },
    switchText () {
      return this.currentValue ?  this.okText : this.notText
    }
  },
  methods: {
    switchStatus (event) {
      this.$emit('input', !this.currentValue)
    }
  },
  watch: {
    value: function (value) {
      this.currentValue = value
    }
  }
}
</script>