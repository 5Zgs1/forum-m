<template>
  <div >
    <van-cell title="danyuge" class="article-item">
      <template v-slot:title >{{ article.title }}
        <slot class="title" >
          <div class="cover-wrap" v-if="article.cover.type ===3">
            <div class="cover-item"
                 v-for="(img, index) in article.cover.images"
            :key="index">
              <van-image
                width="100"
                height="100"
                :src="img"
              />
            </div>
          </div>
          <div>
            <span>{{article.aut_name}}</span>
            <span>{{article.comm_count}}条评论</span>
            <span>{{article.pubdate}}</span>
          </div>
        </slot>
      </template>
        <van-image
          v-if="article.cover.type === 1"
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

</style>
