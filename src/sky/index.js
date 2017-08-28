import Button from './components/Button'
import Icon from './components/Icon'
import Input from './components/Input'
import Modal from './components/Modal'
import {Row, Col} from './components/layout'
import './styles/index.less'

let sky = {
  Button,
  Icon,
  Input,
  Modal,
  Row,
  Col
}

const install = function (Vue) {
  // 注册所有的组件
  Object.keys(sky).forEach(key => Vue.component(key, sky[key]))
  Vue.prototype.$Modal = Modal
}

export default Object.assign(sky, {install})
