<template>
  <div :class='[prefix + "-panel"]' v-if='!disabled' v-show='activePanel === name'>
    <slot></slot>
  </div>
</template>
<script>
export default{
  name: 'TabPanel',
  props: {
    name: {
      type: String,
      required: true
    },
    label: String,
    disabled: {
      type: Boolean,
      default: false
    },
    icon: String
  },
  data () {
    return {
      prefix: 'sky-tabs',
      activePanel: ''
    }
  },
  methods: {
  },
  mounted () {
    this.$parent.getNavList()
  }
}
</script>