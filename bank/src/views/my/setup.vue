<template>
  <div class="mysetup">
    <Card titles="设置"></Card>
    <div class="mysetup-type">
      <div class="mysetup-type-item">
        <div class="mysetup-type-item-card" @click="tobankcard">
          <div class="mysetup-type-item-left">
            银行卡
          </div>
          <div class="mysetup-type-item-right">
            <span>{{bankstatus() ? '已绑定': '未绑定'}}</span>
            <van-icon name="arrow" />
          </div>
        </div>
        <div class="mysetup-type-item-card">
          <div class="mysetup-type-item-left">
            转账功能
          </div>
          <div class="mysetup-type-item-right">
            <span>已开通</span>
            <van-icon name="arrow" />
          </div>
        </div>
        <div class="mysetup-type-item-card">
          <div class="mysetup-type-item-left">
            我的服务站
          </div>
          <div class="mysetup-type-item-right">
            <van-icon name="arrow" />
          </div>
        </div>
      </div>
      <div class="mysetup-type-item">
        <div class="mysetup-type-item-card">
          <div class="mysetup-type-item-left">
            修改支付密码
          </div>
          <div class="mysetup-type-item-right">
            <van-icon name="arrow" />
          </div>
        </div>
        <div class="mysetup-type-item-card">
          <div class="mysetup-type-item-left">
            找回支付密码
          </div>
          <div class="mysetup-type-item-right">
            <van-icon name="arrow" />
          </div>
        </div>
        <div class="mysetup-type-item-card">
          <div class="mysetup-type-item-left">
            修改登陆密码
          </div>
          <div class="mysetup-type-item-right">
            <van-icon name="arrow" />
          </div>
        </div>
      </div>
      <div class="mysetup-type-item">
        <div class="mysetup-type-item-card">
          <div class="mysetup-type-item-left">
            手机号
          </div>
          <div class="mysetup-type-item-right">
            <span>1234567890</span>
            <van-icon name="arrow" />
          </div>
        </div>
        <div class="mysetup-type-item-card">
          <div class="mysetup-type-item-left">
            关于
          </div>
          <div class="mysetup-type-item-right">
            <van-icon name="arrow" />
          </div>
        </div>
      </div>
    </div>
    <div class="dropout">
      <div class="dropout-btn">
        退出
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../../components/home/labelleft'
import Vue from 'vue'
import { Button } from 'vant'

Vue.use(Button)
export default {
  components: {
    Card
  },
  mounted () {
  },
  methods: {
    tobankcard () {
      this.$router.push('/my/mysetup/bankcard')
    },
    bankstatus () {
      if (this.$store.state.account.bank.length > 0) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="less" scoped>
.mysetup-type{
  padding-top: 120px;
  .mysetup-type-item{
    font-size: 35px;
    padding: 0 10px 0 30px;
    font-size: 38px;
    background-color: #fff;
    margin-bottom: 40px;
    .mysetup-type-item-card{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 30px 20px 30px 0;
      border-bottom: 1px solid #eee;
      font-size: 40px;
      .mysetup-type-item-right{
        display: flex;
        align-items: center;
        font-size: 35px;
        color: #999;
        .van-icon{
          margin-left: 10px;
        }
      }
    }
  }
}
.dropout{
  text-align: center;
  padding: 0px 50px;
  margin-top: 80px;
  .dropout-btn{
    height: 100px;
    background-color: #219ae0;
    line-height: 100px;
    font-size: 45px;
    color: #fff;
    border-radius: 20px;
  }
}
::v-deep .van-hairline--bottom::after{
  border-bottom-width: 0;
}
</style>
