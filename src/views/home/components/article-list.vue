<template>
  <div class="article-list">
    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      v-model:error="error"
      error-text="请求失败，点击重新加载"
      @load="onLoad"
    >
<!--      <van-cell v-for="item in list" :key="item" :title="item" />-->
      <van-cell v-for="( article, index) in list" :key="index" :title="article.title" />
    </van-list>

  </div>

</template>

<script>
import { getArticles } from '@/api/article'

export default {
  name: 'article-list',
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      timestamp: null,
      error: false
    }
  },
  components: {},
  methods: {
    async onLoad () {
      try {
        const { data } = await getArticles({
          channel_id: this.channel.id,
          timestamp: this.timestamp || Date.now(),
          with_top: 1
        })
        const { result } = data.data
        // ...数组的展开操作符,他会把数组的元素一个一个得拿出来
        this.list.push(...result)
        // 加载结束
        this.loading = false
        // 判断是否加载完成
        if (result.length) {
          // 更新获取下一页得时间戳
          this.timestamp = data.data.pre_timestamp
        } else {
          // 将 finished 设置为true ，不再load 加载
          this.finished = true
        }
      } catch (err) {
        this.error = true
        this.loading = false
      }
    }
    // onLoad () {
    //   setTimeout(() => {
    //     if (this.refreshing) {
    //       this.list = []
    //       this.refreshing = false
    //     }
    //
    //     for (let i = 0; i < 10; i++) {
    //       this.list.push(this.list.length + 1)
    //     }
    //     this.loading = false
    //
    //     if (this.list.length >= 40) {
    //       this.finished = true
    //     }
    //   }, 1000)
    // },
    // onRefresh () {
    //   // 清空列表数据
    //   this.finished = false
    //
    //   // 重新加载数据
    //   // 将 loading 设置为 true，表示处于加载状态
    //   this.loading = true
    //   this.onLoad()
    // }
  },
  props: {
    channel: {
      type: Object,
      required: true
    }
  },
  computed: {},
  watch: {}
}
</script>

<style scoped lang="less">

</style>
