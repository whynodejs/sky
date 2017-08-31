<template>
  <div>
    <!-- 普通Card -->
    <div :class='wrapClass' :style='styles' v-if='!title'>
      <!-- 头部 -->
      <div class='sky-card-header' v-if='showHeader'>
        <slot name='header'></slot>
      </div>
      <!-- 主体部分 -->
      <div class='sky-card-content' v-if='showContent'>
        <slot name='content'></slot>
      </div>
      <slot></slot>
    </div>
    <!-- 存在title时使用fieleset -->
    <fieldset :class='wrapClass' :style='styles' v-else>
      <legend>{{title}}</legend>
      <div class='sky-card-header' v-if='showHeader'>
        <slot name='header'></slot>
      </div>
      <div class='sky-card-content' v-if='showContent'>
        <slot name='content'></slot>
      </div>
      <slot></slot>
    </fieldset>
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
    height: Number,
    title: String
  },
  data () {
    return {
      showHeader: false,
      showContent: false
    }
  },
  mounted () {
    const slot = this.$slots
    this.showHeader = slot['header'] !== undefined
    this.showContent = slot['content'] !== undefined
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