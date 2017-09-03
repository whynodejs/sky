<template>
<div>
  <div :class='[prefix + "-wrap"]'>
    <div 
          v-for='(nav, index) of navList' 
          :class='navClass(index)'
          :key='nav.name'
          @click='updatePanel(index)'>
          <Icon v-if='nav.icon' :type='nav.icon'></Icon>
          <span>{{nav.label}}</span>
    </div>
  </div>
  <div :style='styles'>
    <slot></slot>
  </div>
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
  computed: {
    styles () {
      let style = {}
      style.transform = 'translateX'
    }
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
      if (!this.navList) return
      return [
        `${prefix}-nav`,
        {
          [`${prefix}-nav-disabled`]: this.navList[index].disabled,
          [`${prefix}-nav-active`]: this.navList[index].name === this.activePanel
        }
      ]
    },
    updateActivePanel () {
      for (let item of this.navList) {
        if (!item.disabled) {
          this.activePanel = item.name
          return
        }
      }
    },
    userfulPanel () {
      if (!this.activePanel) {
        this.updateActivePanel()
      } else {
        for (let item of this.navList) {
          if (item.name === this.activePanel) {
            if (item.disabled) {
              this.updateActivePanel()
              return true
            }
            return false
          }
          this.updateActivePanel()
        }
      }
      return false
    },
    getNavList () {
      this.navList = this.$children.filter(item => item.$options.name === 'TabPanel')
      this.userfulPanel()
    },
    updatePanel (index) {
      let item = this.navList[index]
      if (item.disabled) return
      this.activePanel = item.name
    }
  },
  watch: {
    value: function (value) {
      let flag = this.userfulPanel()
      if (!flag) this.activePanel = value
    },
    activePanel: function (value) {
      this.navList.forEach(item => item.activePanel = value)
    }
  }
}
</script>