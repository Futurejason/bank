<template>
  <div class="login-container">
    <div class="login-container-title">
      <div class="login-container-title-tab">存款</div>
      <van-dropdown-menu active-color="#aaa">
        <van-dropdown-item title="利率区间" ref="item">
          <div class="van-dropdown-item-select">利率范围{{value[0]}}%~{{value[1]}}%</div>
          <van-slider v-model="value" range bar-height="2px" button-size="20px" button-color="#eee"/>
          <div class="van-dropdown-item-submit">
            <van-button type="danger" block round @click="onConfirm" color="#219ae0">确认</van-button>
          </div>
        </van-dropdown-item>
        <van-dropdown-item v-model="value2" :options="option" />
      </van-dropdown-menu>
    </div>
    <div class="login-container-content">
      <div class="login-container-content-item" v-for="(item, index) in contentItem" :key="index" v-show="item.rate>value[0]&&item.rate<value[1] ? true:false">
        <div class="item-title">
          <van-icon name="underway" color="#219ae0" /> {{item.title}}
        </div>
        <div class="item-content">
          <div class="item-content-rate">
            <span>{{item.rate}}%</span>
            <span>年利率</span>
          </div>
          <div class="item-content-term">
            <p>存款期限 <span>{{item.term}}</span></p>
            <p>起存金额 {{item.num}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { DropdownMenu, DropdownItem } from 'vant'

Vue.use(DropdownMenu)
Vue.use(DropdownItem)
export default {
  name: 'DepositIndex',
  components: {},
  props: {},
  data () {
    return {
      value: [0, 100],
      value2: 'a',
      option: [
        { text: '默认排序', value: 'a' },
        { text: '好评优先', value: 'b' },
        { text: '销量优先', value: 'c' }
      ],
      contentItem: [
        { title: '月月返', rate: 3.3, term: '1*3年', num: '100' },
        { title: '天天利', rate: 18, term: '活期', num: '10' },
        { title: '节节高测试', rate: 24, term: '1*5年', num: '10' },
        { title: '岁岁安', rate: 41.5, term: '1*3年', num: '10' }
      ]
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    onConfirm () {
      this.$refs.item.toggle()
    }
  }
}
</script>

<style scoped lang="less">
  .login-container{
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background-color: #eee;
    margin-bottom: 150px;
  }
  .login-container-content{
    background-color: #eee;
  }
  .login-container-title{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #219ae0;
    color: #fff;
    .login-container-title-tab{
      width: 100%;
      height: 120px;
      line-height: 120px;
      text-align: center;
      font-size: 45px;
      border-bottom: 1px solid #fff;
    }
    .van-dropdown-menu{
      width: 100%;
      height: 100px;
      ::v-deep .van-dropdown-menu__bar{
        display: flex;
        justify-content: space-around;
        background-color: #219ae0;
        color: #fff;
        height: 100px;
        font-size: 40px;
      }
    }
    ::v-deep .van-dropdown-menu__title{
      color: #fff;
    }
    ::v-deep .van-dropdown-menu__title{
      line-height: 100px;
      font-size: 35px;
    }
    ::v-deep .van-dropdown-menu__title::after{
      position: absolute;
      top: 50%;
      left: -30px;
      right: 400px;
    }
    ::v-deep .van-popup--top{
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 240px;
      .van-dropdown-item__option{
        flex: 1;
        .van-cell__title{
          line-height: 60px;
          font-size: 30px;
        }
      }
    }
    ::v-deep .van-slider{
      margin-top: 30px;
    }
    .van-dropdown-item-select{
      color: #219ae0;
      margin-top: 30px;
      text-align: center;
    }
    .van-dropdown-item-submit{
      margin: 30px 100px;
    }
    ::v-deep .van-button--normal{
      padding: 30px;
      font-size: 40px;
    }
  }
  .login-container-content-item{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 30px;
    background-color: #fff;
    font-size: 40px;
    border-bottom: 2px solid #ddd;
    .item-title{
      padding: 20px;
      font-size: 40px;
      font-weight: 600;
      border-bottom: 2px solid #eee;
      .van-icon{
        font-size: 40px;
      }
    }
    .item-content{
      display: flex;
      .item-content-rate{
        margin: 30px;
        width: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-right: 2px solid #eee;
        span:first-child{
          color: rgb(238, 144, 56);
          font-size: 60px;
          margin-bottom: 15px;
        }
      }
      .item-content-term{
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 30px 0;
        p{
          margin: 0;
          margin-bottom: 20px;
          span{
            color: rgb(96, 204, 54);
          }
        }
        p:last-child{
          padding: 10px;
          font-size: 45px;
          color: rgb(238, 144, 56);
          border: 2px solid rgb(238, 144, 56);
          border-radius: 10px;
        }
      }
    }
  }
  .login-container-content-item:last-child{
    margin-bottom: 200px;
  }
</style>
