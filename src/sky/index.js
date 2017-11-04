import Button from './components/Button'
import Icon from './components/Icon'
import Input from './components/Input'
import Modal from './components/Modal'
import {Row, Col} from './components/layout'
import {CheckBox, CheckBoxGroup} from './components/CheckBox'
import {Form, FormItem} from './components/Form'
import {Radio, RadioGroup} from './components/Radio'
import SSwitch from './components/Switch'
import Card from './components/Card'
import Rate from './components/Rate'
import Tree from './components/Tree'
import {Tab, TabPanel} from './components/Tabs'
import LoadingBar from './components/LoadingBar'
import BackTop from './components/BackTop'
import './styles/index.less'

let sky = {
  BackTop,
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
  Tree,
  Tab,
  TabPanel,
  Form,
  FormItem
}

const install = function (Vue) {
  // 注册所有的组件
  Object.keys(sky).forEach(key => Vue.component(key, sky[key]))
  Vue.prototype.$Modal = Modal
  Vue.prototype.$Loading = LoadingBar
}

export default Object.assign(sky, {install})
