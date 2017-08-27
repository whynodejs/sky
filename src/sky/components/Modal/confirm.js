import Modal from './Modal'
import Button from '../Button'
import Icon from '../Icon'
import Vue from 'Vue'
const prefix = 'sky-dialog'

Modal.init = function (config) {
  let mount = new Vue({
    data () {
      return Object.assign({
        showCancel: false,
        showFooter: false,
        showHeader: false,
        title: '提示框标题',
        content: '请输入内容',
        confirmText: '确认',
        cancelText: '取消',
        value: true
      }, config)
    },
    render (h) {
      // 头部内容
      let header = h('div', {
        attrs: {
          class: `${prefix}-header`
        }
      }, this.title)
      // 主题内容
      let body
      if (this.render) {
        body = this.render(h)
      } else {
        body = h('div', {
          attrs: {
            class: `${prefix}-content`
          }
        }, [
          h(Icon, {
            props: {
              type: this.type,
              size: 40,
              color: this.color
            }
          }),
          h('div', {
            attrs: {
              class: `${prefix}-content-word`
            }
          }, this.content)
        ])
      }
      // 底部按钮
      let footVNodes = []
      if (this.showCancel) {
        // 取消按钮
        footVNodes.push(h(Button, {
          props: {
            type: 'text'
          },
          on: {
            click: () => {
              this.cancel()
            }
          }
        }, this.cancelText))
        footVNodes.push(h('span'), ' ')
      }
      // 确定按钮
      footVNodes.push([h(Button, {
        props: {
          type: 'success'
        },
        on: {
          click: () => {
            this.confirm()
          }
        }
      }, this.confirmText)])
      // 底部
      let footer = h('div', {
        attrs: {
          class: `${prefix}-footer`
        }
      }, footVNodes)
      return h(Modal, {
        props: this.$data
      }, [header, body, footer])
    },
    methods: {
      // 确认回调
      confirm () {
        if (this.onConfirm) {
          this.onConfirm()
        }
        this.destroy()
      },
      // 取消回调
      cancel () {
        if (this.onCancel) {
          this.onCancel()
        }
        this.destroy()
      },
      destroy () {
        this.$children[0].show = false
        // 从DOM树中移除该元素
        document.body.removeChild(mount.$el)
      }
    }
  }).$mount()
  // 渲染元素进真实DOM树
  document.body.appendChild(mount.$el)
}

export default Modal
