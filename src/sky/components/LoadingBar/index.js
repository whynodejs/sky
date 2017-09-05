import Loadingbar from './loading.js'

var loading
var percent = 0
var interval
function instance () {
  loading = Loadingbar.newInstance()
}
function remove () {
  // 清除定时器
  window.clearInterval(interval)
}
export default{
  start () {
    if (!loading) instance()
    interval = window.setInterval(function () {
      if (percent >= 90) {
        // 默认情况下到达90%暂停
        remove()
      } else {
        // 自动更新进度条
        percent = percent + 10
        loading.update({percent: percent})
      }
    }, 300)
  },
  finish () {
    remove()
    loading.update({percent: 100})
    percent = 0
    loading = null
  },
  update (config) {
    if (!loading) instance()
    // 手动更新的进度条并不会注册定时器
    loading.update(config)
    if (config.percent >= 100 || config.status === 'error') loading = null
  }
}
