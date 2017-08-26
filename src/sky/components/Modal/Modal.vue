<template>
  <transition name='fade'>
    <div v-show='show' class='sky-modal-parent'>
      <div class='sky-modal' v-clickOutSide='closeShadow'>
        <div class='sky-modal-header'>
            <slot name='header'>
              <span class='sky-modal-title'>{{title}}</span>
              <div class='sky-modal-close' v-if='showCloseBtn'
                   @click='closeModal'>
                <Icon type='close'/>
              </div>
            </slot>
        </div>
        <div class='sky-modal-content'>
          <slot></slot>
        </div>
        <div class='sky-modal-footer'>
          <slot name='footer'>
            <sButton type='text' @click='closeModal'>{{cancelText}}</sButton>
            &nbsp;
            <sButton type='success' @click='confirm' :loading='load'>{{confirmText}}</sButton>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import Icon from '../Icon'
import sButton from '../Button'
import clickOutSide from '../../directive/clickOutSide'
export default{
  name: 'Modal',
  components: {sButton, Icon},
  directives: {clickOutSide},
  props: {
    value: {
      type: Boolean,
      default: true
    },
    // 显示关闭按钮
    showCloseBtn: {
      type: Boolean,
      default: true
    },
    // 点击遮罩关闭
    closeByShadow: {
      type: Boolean,
      default: true
    },
    // 确定文字
    confirmText: {
      type: String,
      default: '确定'
    },
    // 取消文字
    cancelText: {
      type: String,
      default: '取消'
    },
    // 标题
    title: {
      type: String,
      default: '请输入标题'
    },
    // 点击确定后是否延迟关闭
    loading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    show () {
      return this.value
    }
  },
  data () {
    return {
      load: false
    }
  },
  methods: {
    // 点击遮罩
    closeShadow () {
      if (this.closeByShadow) {
        this.closeModal(true)
      }
    },
    // 关闭模态框
    closeModal (event) {
      this.$emit('input', false)
      this.$emit('close', event)
    },
    confirm (event) {
      if (this.loading) {
        this.load = true
        return
      }
      this.$emit('input', false)
      this.$emit('confirm', event)
    }
  },
  watch: {
    value:  function (seen) {
      if (!seen) {
        //  弹出框关闭后清楚按钮的加载状态
        this.load = false
      }
    }
  }
}
</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .8s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
</style>
