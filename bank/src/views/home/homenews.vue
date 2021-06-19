<template>
  <div class="homenews">
    <Card titles="最新消息"></Card>
    <div class="news">
      <div v-for="(item,index) in news" :key="index" @click="goto(index)">
        <News :newname="news[index]" ></News>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../../components/home/labelleft'
import News from '../../components/home/news'

export default {
  name: 'HomeNews',
  components: {
    Card,
    News
  },
  props: {},
  data () {
    return {
      num: 0,
      news: []
    }
  },
  created () {
    this.init()
  },
  mounted () {
  },
  methods: {
    init () {
      this.news = JSON.parse(localStorage.getItem('news'))
      console.log(this.news)
    },
    onClickLeft () {
      this.$router.go(-1)
    },
    goto (index) {
      this.$router.push({ path: '/homenews/homenew', query: { news: this.news[index] } })
    }
  }
}
</script>

<style lang="less" scoped>
.news{
    padding-top: 120px;
}
</style>
