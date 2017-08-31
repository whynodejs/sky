<template>
  
</template>
<script>
export default{
  name: 'TabPanel',
  props: {
    label: String,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    console.log(this.$parent)
    this.$parent.getNavList()
  }
}
</script>