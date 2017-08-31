<template>
<div>
  <div :class='[prefix + "-wrap"]'>
    <div 
          v-for='(nav, index) of navList' 
          :class='navClass(index)'
          :key='nav.label'>
          {{nav.label}}
    </div>
  </div>
  <slot></slot>
</div>
</template>
<script>
import Card from '../Card'
const prefix = 'sky-tabs'
export default{
  name: 'Tab',
  components: {Card},
  props: {
    value: {
      type: String,
      default: ''
    },
    type: String
  },
  data () {
    return {
      prefix: prefix,
      activePanel: this.value,
      navList: []
    }
  },
  methods: {
    navClass (index) {
      return [
        `${prefix}-nav`,
        {
          [`${prefix}-nav-disabled`]: this.navList[index].disabled
        }
      ]
    },
    getNavList () {
      this.navList = this.$children.map(item => {
        return {label: item.label, disabled: item.disabled}
      })
    }
  },
  mounted () {
    // this.getNavList()
  }
}
</script>