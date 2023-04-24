<template>
  <div class="article-list">
    <van-pull-refresh v-model="isFreshLoading"
                      :success-text = refreshSuccessText
                      :success-duration="1500"
                      @refresh="onRefresh"
    >
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        :error="error"
        error-text="请求失败，点击重新加载"
        @load="onLoad"
      >
        <!--      <van-cell v-for="item in list" :key="item" :title="item" />-->
<!--        <van-cell v-for="( article, index) in list" :key="index" :title="article.title" />-->
        <!-- ：article将遍历项传到ArticleItem中-->
        <ArticleItem
          v-for="( article, index) in list"
          :key="index"
          :article="article"
        />
      </van-list>
    </van-pull-refresh>
  </div>

</template>

<script>
import { getArticles } from '@/api/article'
import ArticleItem from '@/components/article-item'
export default {
  name: 'article-list',
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      timestamp: null,
      error: false,
      isFreshLoading: false,
      refreshSuccessText: '刷新成功'
    }
  },
  components: {
    ArticleItem
  },
  methods: {
    async onLoad () {
      try {
        const { data } = await getArticles({
          channel_id: this.channel.id,
          timestamp: this.timestamp || Date.now(),
          with_top: 1
        })
        const { results } = data.data
        // ...数组的展开操作符,他会把数组的元素一个一个得拿出来
        this.list.push(...results)
        // 加载结束
        this.loading = false
        // 判断是否加载完成
        if (results.length) {
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
    },
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
    // },
    async onRefresh () {
      try {
        // 1、请求获取数据
        const { data } = await getArticles({
          channel_id: this.channel.id,
          timestamp: Date.now(),
          with_top: 1
        })
        // 2、将数据追加到列表的顶端
        const { results } = data.data
        this.list.unshift(...results)
        // 3、关闭下拉列表的 loading状态
        this.isFreshLoading = false
        // 更新刷新提示文本
        this.refreshSuccessText = '刷新成功,更新了' + results.length + '条数据'
      } catch (err) {
        this.isFreshLoading = false
        this.refreshSuccessText = '刷新失败'
      }
    }
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
.article-list {
  height: 79vh;
  overflow-y: auto;
}
</style>
