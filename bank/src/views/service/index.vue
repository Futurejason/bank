<template>
  <div class="login-container">
    <div class="login-container-search">
      <van-nav-bar title="服务站" fixed @click-right="onClickRight">
        <template #right>
          <van-icon name="search" size="25" color="#fff"/>
        </template>
      </van-nav-bar>
    </div>
    <div class="login-container-Service">
      <van-search v-model="value" placeholder="请输入搜索关键词" v-show="shows" @search="onSearch"/>
      <div class="login-container-Service-item" v-for="(item,index) in Service" :key="index" v-show="filtername(item.names)">
        <img :src="item.imges">
        <div class="login-container-Service-item-position">
          <div>{{item.names}} <span>{{item.status}}</span></div>
          {{item.position}}
        </div>
        <div class="login-container-Service-item-phone">
          <van-icon name="phone" color="rgb(51, 170, 41)"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data () {
    return {
      shows: false,
      vals: '',
      value: '',
      num: 0,
      Service: [
        { imges: 'https://img01.yzcdn.cn/vant/apple-1.jpg', names: '六零服务站', status: '营业', position: '北京市东城区 774.0m' },
        { imges: 'https://img01.yzcdn.cn/vant/apple-2.jpg', names: '服务站23134', status: '营业', position: '北京市东城区 1.1km' },
        { imges: 'https://img01.yzcdn.cn/vant/apple-1.jpg', names: '九零服务站', status: '营业', position: '北京 100.0m' },
        { imges: 'https://img01.yzcdn.cn/vant/apple-2.jpg', names: '垃圾服务站', status: '营业', position: '北京市东城区' },
        { imges: 'https://img01.yzcdn.cn/vant/apple-1.jpg', names: '天天服务站', status: '营业', position: '北京市朝阳区 345.0m' },
        { imges: 'https://img01.yzcdn.cn/vant/apple-2.jpg', names: '不是服务站', status: '营业', position: '北京市海淀 2.3km' }
      ]
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    onClickRight () {
      this.shows = !this.shows
      this.value = ''
    },
    onSearch (val) {
      this.shows = false
      this.vals = val
    },
    filtername (value) {
      if (value.indexOf(this.vals) > -1) {
        return true
      } else {
        return false
      }
    },
    onCancel () {
      this.value = ''
      this.shows = false
    }
  }
}
</script>

<style scoped lang="less">
body{
  background-color: #eee;
}
  .login-container-search{
    ::v-deep .van-nav-bar{
      background-color: #219ae0;
      height: 120px;
      .van-nav-bar__content{
        height: 120px;
        .van-nav-bar__title{
          line-height: 120px;
          color: #fff;
          font-size: 40px;
        }
      }
    }
  }
  ::v-deep .van-nav-bar__right{
    padding: 0 30px;
  }
  .van-search{
    padding: 30px;
    background-color: #eee;
    ::v-deep .van-search__content{
      padding: 10px 20px;
      border-radius: 10px;
      background-color: #fff;
      .van-cell{
        font-size: 30px;
        line-height: 50px;
        .van-field__left-icon{
          margin-right: 30px;
          .van-icon{
            font-size: 40px;
          }
        }
      }
    }
  }
  .login-container-Service{
    margin-top: 120px;
    padding-bottom: 150px;
    .login-container-Service-item{
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #fff;
      padding: 30px;
      margin-bottom: 20px;
      img{
        width: 200px;
        height: 200px;
      }
      .login-container-Service-item-position{
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: left;
        align-items: left;
        padding-left: 30px;
        color: #999;
        font-size: 30px;
        div{
          font-size: 40px;
          color: #000;
          margin-bottom: 10px;
          span{
            font-size: 30px;
            padding: 5px 10px;
            color: #fff;
            background-color: rgb(238, 144, 56);
            border-radius: 10px;
          }
        }
      }
      .login-container-Service-item-phone{
        width: 50px;
        height: 50px;
        margin-right: 30px;
        padding: 10px;
        line-height: 60px;
        text-align: center;
        font-size: 40px;
        border: 1px solid rgb(51, 170, 41);
        border-radius: 60px;
      }
    }
  }
</style>
