import Button from './components/Button'
import Icon from './components/Icon'
import Input from './components/Input'
import Modal from './components/Modal'
import {Row, Col} from './components/layout'
import {CheckBox, CheckBoxGroup} from './components/CheckBox'
import {Radio, RadioGroup} from './components/Radio'
import SSwitch from './components/Switch'
import Card from './components/Card'
import Rate from './components/Rate'
import Tree from './components/Tree'
import './styles/index.less'

let sky = {
  Button,
  Icon,
  Input,
  Modal,
  Row,
  Col,
  CheckBox,
  CheckBoxGroup,
  Radio,
  RadioGroup,
  SSwitch,
  Card,
  Rate,
  Tree
}

const install = function (Vue) {
  // 注册所有的组件
  Object.keys(sky).forEach(key => Vue.component(key, sky[key]))
  Vue.prototype.$Modal = Modal
}

export default Object.assign(sky, {install})
