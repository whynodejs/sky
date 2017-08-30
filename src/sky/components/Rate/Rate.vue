<template>
  <div style='display: inline-block'>
    <div 
        v-for='index of count'
        :class='innerClass(index)'
        @mouseenter.stop='handleOver(index)'
        @mouseleave.stop='handleLeave()'
        @click.stop='handleClick(index)'
    ></div>
  </div>
</template>
<script>
const prefix = 'sky-rate'
export default{
  name: 'Rate',
  props: {
    value: {
      type: Number,
      default: -1
    },
    count: {
      type: Number,
      default: 5
    },
    disabled: {
      type: Boolean,
      default: false
    },
    showTip: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      currentValue: this.value,
      activeValue: this.value,
      mouseEnter: false
    }
  },
  methods: {
    innerClass (index) {
      let value = this.mouseEnter ? this.activeValue : this.currentValue
      return [
        `${prefix}`,
        {
          [`${prefix}-light`]: index <= value,
          [`${prefix}-disabled`]: this.disabled
        }
      ]
    },
    handleOver (index) {
      if (this.disabled) return
      this.activeValue = index
      this.mouseEnter = true
    },
    handleLeave () {
      if (this.disabled) return
      this.activeValue = -1
      this.mouseEnter = false
    },
    handleClick (index) {
      if (this.disabled) return
      // 避免重复点击
      if (this.currentValue === index) return
      this.$emit('input', index)
    }
  },
  watch: {
    value: function (value) {
      this.currentValue = value
    }
  }
}  
</script>