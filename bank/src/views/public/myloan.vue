<template>
  <div class="myloan">
    <Card titles="我的借款"></Card>
    <div class="myloan-process">
      <van-tabs v-model="active" line-width="90" line-height="2" title-active-color="rgb(45, 200, 43)" color="rgb(45, 200, 43)">
        <van-tab title="申请中">
          <Stat></Stat>
        </van-tab>
        <van-tab title="审批中">内容 2</van-tab>
        <van-tab title="已批准">内容 3</van-tab>
        <van-tab title="已结束">内容 4</van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import Card from '../../components/home/labelleft'
import Stat from '../../components/my/status.vue'

export default {
  name: 'myloan',
  components: {
    Card,
    Stat
  },
  data () {
    return {
      time: this.$route.query.thistime,
      active: 0
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
.myloan-process{
    padding-top: 120px;
}
::v-deep .van-tabs--line .van-tabs__wrap{
    height: 100px;
    .van-tab__text--ellipsis{
      line-height: 100%;
      font-size: 32px;
    }
}
</style>
