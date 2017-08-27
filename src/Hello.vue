<template>
  <div>
    <Button @click='handleClick'>吴超</Button>
    <Modal v-model='seen'/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '姜传波',
      seen: true
    }
  },
  methods: {
    handleClick (event) {
      this.$Modal.error({
        content: 'Hello',
        onConfirm: () => {
        }
      })
    }
  }
}
</script>
