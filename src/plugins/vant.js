// 自动注册vant组件
import { Button, Cell } from 'vant'

const components = [Button, Cell]

const registerVant = (Vue) => {
  components.forEach((component) => Vue.use(component))
}

export default registerVant
