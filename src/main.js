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

createApp(App).use(store).use(router).use(Vant).use(Toast).mount('#app')
