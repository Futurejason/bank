<template>
  <div class="login-container components">
    <van-nav-bar
    title="登录"
    left-text="返回"
    right-text="注册"
     left-arrow
    @click-left="onClickLeft"
     @click-right="onClickRight"
     size="30"
  />
  <van-form @submit="onSubmit">
  <van-field
    v-model="username"
    name="登录号"
    label="登录号 :"
    placeholder="请输入登录账号"
  />
  <van-field
    v-model="password"
    type="password"
    name="密码"
    label="密 码 :"
    placeholder="请输入登录密码"
  />
  <div class="logingl">
    <van-checkbox v-model="checkeda" icon-size="16px"> 记住我</van-checkbox>
    <van-checkbox v-model="checkedb" checked-color="#33ff00" icon-size="16px"> 我同意</van-checkbox>
    <div class="logintext">
      <a href=".#/login">服务协议</a>
      <a href=".#/login">忘记密码</a>
    </div>
  </div>
  <div style="margin: 30px;" class="btns">
    <van-button round block type="info" native-type="submit">登录</van-button>
  </div>
</van-form>
  </div>
</template>

<script>
import Vue from 'vue'
import { Form, Checkbox, CheckboxGroup } from 'vant'

Vue.use(Form)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data () {
    return {
      active: 0,
      username: '',
      password: '',
      checkeda: false,
      checkedb: false,
      checkboxGroup: []
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    onClickLeft () {
      this.$router.push({ path: '/my' })
    },
    onClickRight () {
      this.$router.push({ path: '/registered' })
    },
    onSubmit (values) {
      console.log('submit', values)
    }
  }
}
</script>

<style scoped lang="less">
  .logingl{
    display: flex;
    margin: 20px 0px;
    .van-checkbox{
      display: flex;
      width: 200px;
      justify-content: space-around;
      .van-checkbox__label{
        margin-left: 20px;
      }
    }
    .logintext{
      flex: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;
      a{
      color: #219ae0;

      }
    }
  }
  .van-form{
      .btns{
        margin-top: 100px;
        .van-button--normal{
          margin-top: 100px;
        height: 80px;
         border-radius: 20px;
         background-color: #219ae0;
         font-size: 40px;
        }
      }
    }
</style>
