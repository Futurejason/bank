<template>
  <div class="homenew">
    <Card titles="消息详情"></Card>
    <div class="homenew-content" @touchmove.prevent @mousewheel.prevent>
        <h4>{{news.title}}</h4>
        <h5></h5>
        <div>
          <p>2021-05-31 15:22:14</p>
        </div>
        <div>
          {{news.news}}
        </div>
    </div>
  </div>
</template>

<script>
import Card from '../../components/home/labelleft'

export default {
  name: 'HomeNew',
  components: {
    Card
  },
  props: {},
  data () {
    return {
      news: {}
    }
  },
  created () {
    this.init()
  },
  mounted () {
  },
  methods: {
    init () {
      this.news = this.$route.query.news
    },
    onClickLeft () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less">
  .homenew{
    height: 100%;
  }
  .homenew-content{
    height: 100%;
    padding-top: 150px;
    background-color: #fff;
    h4{
      font-size: 50px;
      text-align: center;
    }
    h5{
        height: 0px;
        margin: 20px 0;
        border-bottom: 4px dashed rgb(63, 126, 207);
        margin: 0 30px;
    }
    div{
      text-align: left;
      margin: 20px 50px 0;
      text-indent: 60px;
      font-size: 40px;
      p{
        font-size: 35px;
        text-align: right;
        color: #666;
      }
    }
  }
</style>
