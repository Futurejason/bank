<template>
  <div class="bankcard">
    <Card titles="我的银行卡"></Card>
    <div class="bankcard-type">
      <div class="bankcard-type-item" v-for="(item,index) in $store.state.account.bank" :key="index">
        <img src="https://img01.yzcdn.cn/vant/apple-1.jpg">
        <div>
          <div>{{item.name}}</div>
          <div>
            <span>村银通账户</span>
            <span>{{item.id}}</span>
          </div>
        </div>
        <p>
          <van-icon name="close"  @click="deletethis(index)"/>
        </p>
      </div>
    </div>
    <div class="dropout">
      <div class="dropout-btn" @click="tobindbank">
        <span>
          +
        </span>
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
    tobindbank () {
      this.$router.push('/my/mysetup/bankcard/bindbank')
    },
    deletethis (index) {
      this.$store.commit('deletebank', index)
    }
  }
}
</script>

<style lang="less" scoped>
.bankcard-type{
  padding-top: 120px;
  .bankcard-type-item{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0;
    background-color: #fff;
    font-size: 35px;
    img{
      width: 100px;
      height: 100px;
      margin: 20px;
    }
    div{
      margin-left: 20px;
      flex: 1;
      color: #999;
      div{
        span{
          font-size: 30px;
          margin-right: 30px;
          margin-bottom: 10px;
          color: #666;
        }
      }
    }
    p{
      margin-right: 30px;
      .van-icon{
        font-size: 40px;
        color: rgb(45, 228, 21);
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
    font-size: 60px;
    border-radius: 20px;
    color: #fff;
  }
}
</style>
