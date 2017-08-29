<template>
  <div :class='wrapClass' :style='styles'>
    <div class='sky-card-header' v-if='showHeader'>
      <slot name='header'></slot>
    </div>
    <div class='sky-card-content'>
      <slot name='content'></slot>
    </div>
    <slot></slot>
  </div>
</template>
<script>
const prefix = 'sky-card'
export default{
  name: 'Card',
  props: {
    shadow: {
      type: Boolean,
      default: true
    },
    height: Number
  },
  data () {
    return {
      showHeader: false
    }
  },
  mounted () {

  },
  computed: {
    wrapClass () {
      return [
        `${prefix}`, {
          [`${prefix}-shadow`]: this.shadow
        }
      ]
    },
    styles () {
      return this.height ? {'height': this.height} : ''
    }
  }
}
</script>