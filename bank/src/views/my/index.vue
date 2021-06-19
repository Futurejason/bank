<template>
  <div class="login-container">
    <div class="login-container-search">
      <van-nav-bar title="我的" fixed @click-right="onClickRight">
        <template #right>
          <span class="login-container-search-set">设置</span>
        </template>
      </van-nav-bar>
    </div>
    <div class="my-account">
      <div class="my-account-personal">
        <div class="login-container-Service-item" @click="toinformation">
          <img src="https://img01.yzcdn.cn/vant/apple-1.jpg">
          <div class="login-container-Service-item-position">
            <div>{{account.name}}</div>
            {{account.number}}
          </div>
          <div class="login-container-Service-item-phone">
            <van-icon name="arrow" color="#ddd"/>
          </div>
        </div>
      </div>
      <div class="my-account-electronic">
        <div class="my-account-electronic-Balance" @click="tomymoney">
          <div>
            <van-icon name="user-o" size="25px" color="#219ae0" />
            <span>电子账户余额</span>
          </div>
          <div>
            {{account.balance.toFixed(2)}}
          </div>
        </div>
        <div class="my-account-electronic-Features">
          <van-grid :column-num="2" direction="horizontal" icon-size="30px">
             <van-grid-item>
              <van-icon name="refund-o" size="30px" color="rgb(56, 201, 75)"/>
               银行资金转入
            </van-grid-item>
            <van-grid-item>
              <van-icon name="cash-back-record" size="30px" color="rgb(223, 132, 47)" />
               平台资金转出
            </van-grid-item>
            <van-grid-item>
              <van-icon name="after-sale" size="30px" color="rgb(184, 61, 52)"/>
               平台内转账
            </van-grid-item>
            <van-grid-item>
              <van-icon name="records" size="30px" color="rgb(33, 84, 196)" />
               账户明细
            </van-grid-item>
          </van-grid>
        </div>
      </div>
      <div class="my-account-product my-account-electronic">
        <div class="my-account-electronic-Balance">
          <div>
            <van-icon name="user-o" size="25px" color="#219ae0"  />
            <span>我的产品</span>
          </div>
        </div>
        <div class="my-account-electronic-Features my-account-product-Features">
          <van-grid :column-num="2" direction="horizontal" icon-size="30px">
             <van-grid-item>
              <van-icon name="refund-o" size="30px" color="rgb(56, 201, 75)"/>
              <div><span>我的存款</span><span>{{account.deposit.toFixed(2)}}</span></div>
            </van-grid-item>
            <van-grid-item>
              <van-icon name="cash-back-record" size="30px" color="rgb(223, 132, 47)" />
              <div><span>昨日收益</span><span>{{account.income.toFixed(2)}}</span></div>
            </van-grid-item>
            <van-grid-item>
              <van-icon name="after-sale" size="30px" color="rgb(184, 61, 52)"/>
              <div><span>我的借款</span><span>{{account.loanamount.toFixed(2)}}</span></div>
            </van-grid-item>
            <van-grid-item>
              <van-icon name="records" size="30px" color="rgb(33, 84, 196)" />
              <div><span>我的红包</span><span>{{account.redenvelope}}</span></div>
            </van-grid-item>
          </van-grid>
        </div>
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
export default {
  name: 'MyIndex',
  components: {},
  props: {},
  data () {
    return {
      show: false,
      account: {
        name: '未登录',
        age: '',
        idcard: '',
        number: '',
        funds: 0,
        buyin: [],
        buyout: [],
        balance: 0,
        deposit: 0,
        income: 0,
        loan: 0,
        loanamount: 0,
        redenvelope: 0
      }
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {
    this.login()
  },
  methods: {
    // 进入设置界面
    onClickRight () {
      this.getstatus('/my/mysetup')
    },
    login () {
      if (this.$store.state.login) {
        this.account = this.$store.state.account.account
        // 检测是否为登录状态
      } else {
        this.$store.commit('changeaccount', this.account)
      }
    },
    // 检测账号是否登录
    getstatus (urls) {
      if (this.$store.state.login) {
        this.$router.push(urls)
      } else {
        this.show = true
      }
    },
    // 个人信息详情页
    toinformation () {
      // this.$router.push('/my/information')
      this.getstatus('/my/information')
    },
    // 点击确认跳转到登录页面
    confirms () {
      this.$router.push('/login')
    },
    // 账户余额详情页
    tomymoney () {
      this.getstatus('/my/mymoney')
    }
  }
}
</script>

<style scoped lang="less">
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
        .login-container-search-set{
          color: #fff;
          font-size: 30px;
          margin-right: 20px;
        }
      }
    }
  }
  .my-account{
    padding-top: 120px;
  }
  .login-container-Service-item{
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #fff;
      padding: 30px;
      margin-bottom: 20px;
      img{
        width: 150px;
        height: 150px;
        border-radius: 75px;
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
        padding: 10px;
        line-height: 60px;
        text-align: center;
        font-size: 40px;
      }
  }
  .my-account-electronic{
    background-color: #fff;
    margin-top: 30px;
  }
  .my-account-electronic-Balance{
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 10px 20px 20px;
    div{
      color: rgb(247, 153, 46);
      font-size: 40px;
      display: flex;
      align-items: center;
      span{
        color: #000;
      }
    }
  }
  ::v-deep .van-grid-item__content{
    padding: 50px;
  }
  .my-account-product-Features{
    .van-grid{
      .van-grid-item{
        ::v-deep .van-grid-item__content{
          display: flex;
          align-items: center;
          padding: 30px;
          div{
            display: flex;
            flex-direction: column;
            justify-content: center;
            span{
              padding: 10px 20px;
            }
            span:last-child{
              color: rgb(247, 153, 46);
              font-size: 50px;
            }
          }
        }
      }
    }
  }
</style>
