import Button from './components/Button'
import Icon from './components/Icon'
import './styles/index.less'

let sky = {
  Button,
  Icon
}

const install = function (Vue) {
  // 注册所有的组件
  Object.keys(sky).forEach(key => Vue.component(key, sky[key]))
}

export default Object.assign(sky, {install})
