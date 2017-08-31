<template>
  <div>
    <TreeNode
      v-for='node of data'
      :data='node'
      :key='node.label'
    ></TreeNode>
  </div>
</template>
<script>
const prefix = 'sky-tree'
import TreeNode from './TreeNode'
export default{
  name: 'Tree',
  components: {TreeNode},
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  methods: {
    handleChildClick (data) {
      this.$emit('child', data)
    },
    handleParentClick (data) {
      this.$emit('parent', data)
    }
  }
}
</script>