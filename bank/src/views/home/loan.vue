<template>
  <div class="homeloan">
    <Card titles="贷款"></Card>
    <div class="loan">
      <div class="loan-title">
        <div class="loan-title-icon">
          <van-icon name="manager" color="#219ae0" size="40px" />
          <span>个人贷款</span>
        </div>
        <div class="loan-conent">
          <div>还款方式： 等额本息</div>
          <div>利率区间： <span>1%至10%</span></div>
          <div>还款期限： 1天</div>
        </div>
      </div>
      <div class="loan-button">
        <span @click="goloaninfrom">立即申请</span>
      </div>
    </div>
    <div class="loan">
      <div class="loan-title">
        <div class="loan-title-icon">
          <van-icon name="friends" color="rgb(212, 31, 1)" size="40px" />
          <span>企业贷款</span>
        </div>
        <div class="loan-conent">
          <div>还款方式： 等额本息</div>
          <div>利率区间： <span>1%至10%</span></div>
          <div>还款期限： 1天</div>
        </div>
      </div>
      <div class="loan-button">
        <span @click="goloaninfrom">立即申请</span>
      </div>
    </div>
    <div class="prompt">
      <van-dialog v-model="show" title="提示" @confirm="confirms">
        <div>您的账号未登录，请登录账号</div>
      </van-dialog>
    </div>
  </div>
</template>

<script>
import Card from '../../components/home/labelleft'

export default {
  name: 'homeloan',
  components: {
    Card
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    goloaninfrom () {
      if (!this.$store.state.login) {
        this.show = true
      } else {
        this.$router.push('/home/loaninfrom')
      }
    },
    confirms () {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
.homeloan {
  padding-top: 150px;
  .loan {
    padding: 10px 20px;
    margin: 10px 20px 30px;
    background-color: #fff;
    border-radius: 20px;
    .loan-title {
      display: flex;
      border-bottom: 1px dashed #ddd;
      .loan-title-icon {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px;
        font-size: 35px;
        span {
          margin-top: 10px;
        }
      }
      .loan-conent {
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 35px;
        div {
          padding: 8px 20px;
          span {
            color: rgb(245, 124, 53);
          }
        }
      }
    }
    .loan-button {
      padding: 15px 20px;
      text-align: right;
      span {
        padding: 5px 15px;
        color: rgb(91, 184, 95);
        font-size: 30px;
        border: 1px solid rgb(91, 184, 95);
        border-radius: 10px;
      }
    }
  }
}
</style>
