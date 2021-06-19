<template>
  <div class="loaninfrom">
    <Card titles="借款详情"></Card>
    <div class="loaninfrom-list">
      <h3>个人借款详情</h3>
      <van-form @submit="onSubmit(fromids)" class="loaninfrom-list-from">
        <van-field v-model="fromids.names" label="姓名："  readonly />
        <van-field v-model="fromids.gender" label="性别：" readonly />
        <van-field v-model="fromids.age" type="number" label="年龄：" readonly />
        <van-field v-model="fromids.culturallevel" label="文化水平：" readonly />
        <van-field v-model="fromids.idcard" type="number" label="身份证号：" readonly />
        <van-field v-model="fromids.place" label="现居住地址：" readonly />
        <van-field v-model="fromids.number" type="number" label="手机号码：" readonly />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">提交</van-button>
        </div>
      </van-form>
    </div>
    <div class="prompt">
      <van-dialog v-model="show" title="提示" @confirm="confirms">
        <div>尊敬的用户，您的贷款申请登记成功，敬请留意我行受理中心对您的电话回访（0753-2532666）</div>
      </van-dialog>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Card from '../../components/home/labelleft'
import { Dialog } from 'vant'

Vue.use(Dialog)
export default {
  name: 'commit',
  components: {
    Card
  },
  data () {
    return {
      show: false,
      fromids: JSON.parse(this.$route.query.information)
    }
  },
  methods: {
    onSubmit (values) {
      this.show = true
    },
    confirms () {
      const data = new Date()
      const times = data.getFullYear() + '-' + (data.getMonth() + 1) + '-' + data.getDate()
      console.log(times)
      this.$router.push({ path: '/my/loan', query: { thistime: times } })
    }
  }
}
</script>

<style lang="less" scoped>
.loaninfrom-list{
  padding-top: 150px;
  h3{
    text-align: center;
    color: rgb(28, 130, 205);
    font-size: 50px;
  }
  ::v-deep .van-form{
    padding: 0px 30px;
    background-color: #fff;
    .van-cell{
      padding: 30px 0;
      font-size: 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #000;
      input{
        text-align: right;
        color: #999;
      }
    }
  }
  ::v-deep .van-button--normal{
    padding: 40px 200px;
    border-radius: 20px;
    position: fixed;
    bottom: 20px;
    left: 5%;
    right: 5%;
    width: 90%;
  }
}
</style>
