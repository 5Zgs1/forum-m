<template>
  <div >
    <van-cell  class="article-item">
      <template v-slot:title>
        <div class="van-multi-ellipsis--l2" >
          {{ article.title }}
        </div>
      </template>
      <template v-slot:label>
        <div class="cover-wrap" v-if="article.cover.type ===3">
          <div class="cover-item"
               v-for="(img, index) in article.cover.images"
               :key="index">
            <van-image
              class="cover-item-img"
              fit="cover"
              :src="img"
            />
          </div>
        </div>
        <div class="label-info-wrap">
          <span>{{article.aut_name}}</span>
          <span>{{article.comm_count}}评论</span>
          <span>{{$filter.timeLong(article.pubdate)}}</span>
        </div>
      </template>
      <!--fit 设置为不拉伸-->
      <van-image
        v-if="article.cover.type === 1"
        v-slot: default
        class="right-cover"
        fit="cover"
        width="100"
        height="100"
        :src="article.cover.images[0]"
      />
    </van-cell>
  </div>
</template>

<script>
export default {
  name: 'ArticleItem',
  data () {
    return {}
  },
  components: {},
  methods: {},
  props: {
    article: {
      type: Object,
      require: true
    }
  },
  computed: {},
  watch: {}
}
</script>

<style scoped lang="less">

.article-item {
  // 不参与页面占用
  // TODO:不起作用
  .van-cell__value {
    flex: unset;
    width: 232px;
    height: 146px;
    padding-left: 25px;
  }
  .title {
    font-size: 32px;
    color: #3a3a3a;
  }
  .right-cover {
    width: 232px;
    height: 146px;
  }
  .label-info-wrap span {
    font-size: 22px;
    color: #b4b4b4;
    margin-right: 25px;
  }
  .cover-wrap {
    display: flex;
    padding: 30px 0;
    .cover-item {
      flex: 1;
      height: 146px;
      .cover-item-img {
        width: 100%;
        height: 146px;
      }
    }
  }
}

</style>
