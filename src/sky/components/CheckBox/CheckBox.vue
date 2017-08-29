<template>
  <div :class='classes'>
    <span :class='[prefix + "-inner"]'></span>
    <input 
           :class='[prefix + "-input"]'
           type='checkbox' 
           :checked='checked'
           :value='item'
           @change='handleChange'/>
           <slot>{{item}}</slot>
  </div>  
</template>
<script>
const prefix = 'sky-checkbox'
export default{
  name: 'CheckBox',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    item: [Number, String]
  },
  data () {
    return {
      checked: this.value,
      prefix: prefix
    }
  },
  computed: {
    classes () {
      return [
        `${prefix}`,
        {
          [`${prefix}-checked`]: this.checked
        }
      ]
    }
  },
  methods: {
    handleChange (event) {
      this.$emit('input', event.target.checked)
    }
  },
  watch: {
    value: function (value) {
      this.checked = value
    }
  }
}
</script>
