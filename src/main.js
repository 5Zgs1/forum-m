import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant, { Toast } from 'vant'

import 'vant/lib/index.css'
// 加载全局样式
import './styles/index.less'
// 加载动态设置 REM基准值
import 'amfe-flexible'
// 加载dayjs
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)
dayjs.locale('zh-cn') // 全局使用

const app = createApp(App)

app.use(store).use(router).use(Vant).use(Toast).mount('#app')
// 全局挂载
app.config.globalProperties.$filter = {

  timeLong (value) {
    return dayjs().to(dayjs(value))
  }
}
