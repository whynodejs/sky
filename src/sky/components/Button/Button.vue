<template>
  <button @click='handleClick' :class='classes' :disabled='disabled'>
    <Icon v-if='loading' type='load-a' class='sky-button-load'/>
    <Icon v-else-if='icon' :type='icon'/>
    <slot>按钮</slot>
  </button>
</template>
<script>
import Icon from '../Icon'
const prefix = 'sky-button'
export default{
  name: 'Button',
  components: {Icon},
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      default: 'md'
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {}
  },
  computed: {
    classes () {
      let classes = []
      classes.push(`${prefix} ${prefix}-${this.size} `)
      if (this.disabled) {
        classes.push(`${prefix}-disabled `)
      } else {
        classes.push(`${prefix}-${this.type} `)
      }
      return classes
    }
  },
  methods: {
    handleClick (event) {
      event.stopPropagation()
      this.$emit('click', event)
    }
  }
}
</script>