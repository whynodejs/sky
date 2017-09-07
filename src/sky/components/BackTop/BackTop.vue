<template>
  <div  :class="[prefix]" :style='styles' v-show='showBack' @click='handleClick'>
    <slot>
      <div :class="[prefix + '-wrap']">
        返回顶部
      </div>
    </slot>
  </div>
</template>
<script>
export default{
  name: 'BackTop',
  props: {
    bottom: {
      type: Number,
      default: 30
    },
    right: {
      type: Number,
      default: 30
    },
    height: {
      type: Number,
      default: 100
    },
    time: {
      type: Number,
      default: 1000
    }
  },
  data () {
    return {
      prefix: 'sky-backTop',
      showBack: false
    }
  },
  created () {
    // 注册事件
    document.addEventListener('scroll', this.handleChange, false)
    document.addEventListener('resize', this.handleChange, false)
  },
  destroyed () {
    // 移除事件
    document.removeEventListener('scroll', this.handleChange)
    document.removeEventListener('resize', this.handleChange)
  },
  computed: {
    styles () {
      let style = {}
      style.bottom = `${this.bottom}px`
      style.right = `${this.right}px`
      return style 
    }
  },
  methods: {
    handleChange () {
      this.showBack = window.pageYOffset >= this.height
    },
    handleClick ($event) {
      $event.stopPropagation()
      //window.scrollTo(window.innerWidth - this.right, 0)
      this.scrollTop()
      this.$emit('click', $event)
    },
    scrollTop (left) {
      let y = window.pageYOffset
      let len = this.time / 4
      for (let i = 0; i < len; i++) {
        window.setTimeout(function (){
          window.scrollTo(0, )
        }, len)
      }
    }
  }
}  
</script>
<style scoped>
.sky-backTop{
  z-index: 900;
  position: fixed;
  cursor: pointer;
  outline: none;
}
.sky-backTop-wrap{
  padding: 14px 16px;
  background-color: #2d8cf0;
  color: #fff;
  border-radius: 5px;
  outline: none;
}
</style>
