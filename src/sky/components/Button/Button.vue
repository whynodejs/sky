<template>
  <button @click='handleClick' class='sky-ui-button'>
    <slot>按钮</slot>
  </button>
</template>
<script>
export default{
  data () {
    return {}
  },
  methods: {
    handleClick (event) {
      this.$emit('click', event)
    }
  }
}
</script>