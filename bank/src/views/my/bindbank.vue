<template>
  <div class="bindbank">
    <Card titles="绑定银行卡"></Card>
    <div class="loaninfrom-list">
      <van-form  class="loaninfrom-list-from">
        <van-field v-model="fromids.man" label="持卡人姓名：" />
        <van-field v-model="fromids.number" label="手机号：" type="number" />
        <van-field v-model="fromids.idcard" type="number" label="身份证号：" />
        <van-field v-model="fromids.types" label="绑卡类型：" />
        <van-field v-model="fromids.id" type="number" label="卡号/存折号：" />
        <van-field v-model="fromids.name" label="所属银行：" />
        <van-field v-model="fromids.openline" type="number" label="开户行：" />
      </van-form>
    </div>
    <div class="dropout">
      <div class="dropout-btn" @click="bindif">
        绑定
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../../components/home/labelleft'
import Vue from 'vue'
import { Button, Toast } from 'vant'

Vue.use(Toast)
Vue.use(Button)
export default {
  components: {
    Card
  },
  data () {
    return {
      fromids: {
        name: '',
        number: '',
        id: '',
        man: '',
        idcard: '',
        types: '',
        openline: ''
      }
    }
  },
  mounted () {
  },
  methods: {
    bindif () {
      let i = 0
      let bol = true
      for (i in this.fromids) {
        if (this.fromids[i] !== '') {
          bol = true
        } else {
          bol = false
        }
      }
      if (bol) {
        this.$store.commit('addbank', this.fromids)
        this.$router.push('/my')
      } else {
        Toast('请填写个人信息')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.loaninfrom-list{
  padding-top: 120px;
  ::v-deep .van-form{
    padding: 0px 30px;
    background-color: #fff;
    .van-cell{
      padding: 30px 0;
      font-size: 35px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #000;
      .van-field__label{
        width: auto;
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
    font-size: 40px;
    border-radius: 20px;
    color: #fff;
  }
}
</style>
