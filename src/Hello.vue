<template>
  <div>
    <img src="./assets/logo.png">
    <Button @click='handleClick'>吴超</Button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '姜传波'
    }
  },
  methods: {
    handleClick (event) {
      console.log(event.target.innerHTML)
    }
  }
}
</script>
