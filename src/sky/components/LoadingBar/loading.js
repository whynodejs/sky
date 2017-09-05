import Vue from 'vue'
import LoadingBar from './LoadingBar.vue'

LoadingBar.newInstance = function () {
  const defaultProps = {
    color: '#2d8cf0',
    height: 2,
    percent: 0
  }

  const loading = new Vue({
    data: defaultProps,
    render: (h) => {
      return h(LoadingBar, {
        props: defaultProps
      })
    }
  }).$mount()
  // 挂载元素
  document.body.appendChild(loading.$el)

  return {
    // 更新进度
    update (config) {
      if ('percent' in config) {
        loading.percent = config.percent
        if (config.percent >= 100) {
          window.setTimeout(this.destroy, 500)
        }
      }
      if ('status' in config) {
        if (config.status === 'error') {
          loading.color = 'red'
          loading.percent = 100
          window.setTimeout(this.destroy, 500)
        }
      }
    },
    // 移除进度条
    destroy () {
      let node = document.getElementsByClassName('sky-loading')[0]
      if (!node) return
      document.body.removeChild(node)
    }
  }
}
export default LoadingBar
