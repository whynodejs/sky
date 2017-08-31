<template>
  <ul :class='wrapClass'>
    <li @click='handleClick'>
      <Icon :type='getTypes'/>
      <span :class='innerClass' >{{data.label}}</span>
    </li>
    <TreeNode 
        v-for='node of data.children' 
        :data='node' 
        :key='node.label'
        v-show='data.expand'></TreeNode>
  </ul>
</template>
<script>
const prefix = 'sky-node'
import {CheckBox} from '../CheckBox'
import findParent from '../../mixins/locale.js'
export default{
  name: 'TreeNode',
  components: {CheckBox},
  mixins: [findParent],
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  computed: {
    wrapClass () {
      return [`${prefix}`]
    },
    getTypes () {
      if (this.data.icon && this.data.children)
        return this.data.icon
      if (!this.data.children) 
        return ''
      return this.data.expand ? 'minus-round' : 'plus-round'
    },
    innerClass () {
      return [
        `${prefix}-label`,
        {
          [`${prefix}-label-noIcon`]: !this.data.children
        }
      ]
    }
  },
  methods: {
    handleClick () {
      let parent = this.findParentByName(this, 'Tree')
      // 响应事件
      if (this.data.children) {
        this.data.expand = !this.data.expand
        parent.handleParentClick(this.data)
      } else {
        parent.handleChildClick(this.data)
      }
    }
  }
}
</script>