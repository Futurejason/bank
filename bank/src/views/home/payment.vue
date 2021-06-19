<template>
  <div class="homeloan">
      <Card titles="收款二维码"></Card>
      <div class="loan" @touchmove.prevent @mousewheel.prevent>
        <div class="homeloan-img">
          <div class="homeloan-img-title">
            <van-icon name="cash-on-deliver"  size="25px"/>
            <h5>我要收款</h5>
          </div>
          <h5>扫码向(刘晓)付款</h5>
          <vue-qr :logoSrc="imageUrl" text="xxx" :logoScale="0.4" :margin="0" colorDark="#000" colorLight="#fff" :size="200"></vue-qr>
          <p>设置金额</p>
        </div>
      </div>
  </div>
</template>

<script>
import Card from '../../components/home/labelleft'
import vueQr from 'vue-qr'

export default {
  name: 'homeloan',
  data () {
    return {
      imageUrl: require('../../assets/a.png')
    }
  },
  components: {
    Card,
    vueQr
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>
.loan{
  margin-top: 120px;
  text-align: center;
  background-color: #eee;
  padding: 150px 100px;
  .homeloan-img{
    border-radius: 20px;
    background-color: #fff;
    .homeloan-img-title{
      font-size: 40px;
      color: #44b15f;
      display: flex;
      align-items: center;
      padding: 30px 20px 30px;
      border-bottom: 2px solid #219ae0;
      h5{
        font-size: 45px;
        margin: 0 10px;
      }
    }
    img{
      width: 500px;
      height: 500px;
    }
    h5{
      font-size: 40px;
      margin: 20px;
      color: #219ae0;
    }
    p{
      font-size: 40px;
      margin-top: 20px;
      padding-bottom: 50px;
      color: #219ae0;
    }
  }
}

</style>
