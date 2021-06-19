<template>
  <div class="layout-container">
    <!-- 子路由出口 -->
    <router-view />
    <!-- /子路由出口 -->
    <!-- 底部导航栏 -->
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="balance-o" to="/deposit">存款</van-tabbar-item>
      <van-tabbar-item icon="shop-o" to="/service">服务站</van-tabbar-item>
      <van-tabbar-item icon="manager-o" to="/my">我的</van-tabbar-item>
    </van-tabbar>
    <!-- /底部导航栏 -->
  </div>
</template>

<script>
export default {
  name: 'LayoutIndex',
  components: {},
  props: {},
  data () {
    return {
      active: 0
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="less">
.van-tabbar{
  height: 150px;
}
.van-tabbar--fixed{
  border-top: 1px solid #999;
}
.van-tabbar-item{
  font-size: 40px;
}
::v-deep .van-tabbar-item__icon{
  font-size: 45px;
}
</style>
