<template>
  <div class="login-container-search">
    <van-nav-bar :title="titles" fixed left-text="返回" left-arrow @click-left="onClickLeft">
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  props: ['titles'],
  methods: {
    init () {
      this.news = this.$route.query.datanews
      console.log(this.news)
    },
    onClickLeft () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
.login-container-search{
    ::v-deep .van-nav-bar{
      background-color: #219ae0;
      height: 120px;
      .van-nav-bar__content{
        height: 120px;
        .van-nav-bar__title{
          line-height: 120px;
          color: #fff;
          font-size: 45px;
        }
        .van-nav-bar__left{
          color: #fff;
          font-size: 30px;
          margin-right: 20px;
        }
      }
    }
}
::v-deep .van-nav-bar .van-icon{
    color: #ddd;
    font-size: 50px;
}
::v-deep .van-nav-bar__text{
    color: #fff;
    font-size: 35px;
}
</style>
