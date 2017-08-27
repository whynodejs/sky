import Modal from './confirm.js'

Modal.newInstance = function (config) {
  // 初始化属性
  Modal.init(config)
}
// 确认
Modal.confirm = function (config) {
  config.showCancel = true
  // 图标和颜色
  config.type = 'help-circled'
  config.color = '#f90'
  Modal.newInstance(config)
}
// 成功 success
Modal.success = function (config) {
  config.type = 'checkmark-circled'
  config.color = '#19be6b'
  Modal.newInstance(config)
}
// 失败
Modal.error = function (config) {
  config.type = 'close-circled'
  config.color = '#e83108'
  Modal.newInstance(config)
}
// 警告
Modal.warning = function (config) {
  config.type = 'information-circled'
  config.color = '#f90'
  Modal.newInstance(config)
}

export default Modal
