<template>
  <div class="loaninfrom">
    <Card titles="个人贷款申请"></Card>
    <div class="loaninfrom-list">
      <h3>基本信息 1/5</h3>
      <van-form @submit="onSubmit(fromid)" class="loaninfrom-list-from">
        <van-field v-model="fromid.names" label="姓名：" />
        <van-field v-model="fromid.gender" label="性别：" />
        <van-field v-model="fromid.age" type="number" label="年龄：" />
        <van-field v-model="fromid.culturallevel" label="文化水平：" />
        <van-field v-model="fromid.idcard" type="number" label="身份证号：" />
        <van-field v-model="fromid.place" label="现居住地址：" />
        <van-field v-model="fromid.number" type="number" label="手机号码：" />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">提交</van-button>
        </div>
      </van-form>
    </div>
    <div class="prompt">
      <van-dialog v-model="show" title="提示" show-cancel-button @confirm="confirms" @cancel="cancels">
        <div>你是否同意并授权我进行本人的征信查询？</div>
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
  name: 'loaninfrom',
  components: {
    Card
  },
  data () {
    return {
      show: false,
      fromid: {
        names: '',
        gender: '',
        age: '',
        culturallevel: '',
        idcard: '',
        place: '',
        number: ''
      }
    }
  },
  methods: {
    onSubmit (values) {
      this.show = true
    },
    confirms () {
      // console.log(1)
      this.$router.push({ path: '/commit', query: { information: JSON.stringify(this.fromid) } })
    },
    cancels () {
      this.show = false
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
        text-align: left;
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
