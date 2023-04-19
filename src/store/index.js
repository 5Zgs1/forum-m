import { createStore } from 'vuex'
import { getItem, setItem } from '@/utils/storage'

const TOKEN_KEY = 'token'
export default createStore({
  state: {
    // 一个对象，存储当前登陆用户信息（包括token）
    user: getItem(TOKEN_KEY)
    // user: null
  },
  getters: {
  },
  mutations: {
    // 创建用户成功后去调用这个mutations
    setUser (state, data) {
      state.user = data
      // 为了防止刷新丢失，将数据备份到本地存储
      // window.localStorage.setItem(TOKEN_KEY, JSON.stringify(state.user))
      setItem(TOKEN_KEY, state.user)
    }
  },
  actions: {
  },
  modules: {
  }
})
