<template>
  <div >
    <van-cell title="danyuge">
      <template v-slot:title>{{ article.title }}</template>
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
