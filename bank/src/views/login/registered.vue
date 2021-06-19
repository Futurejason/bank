<template>
  <div class="registered components">
  <van-nav-bar
    title="标题"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
  />
  <van-form validate-first @failed="onFailed">
  <!-- 通过 pattern 进行正则校验 -->
  <van-field
    v-model="value1"
    name="pattern"
    placeholder="请输入您的账号"
    label="登录号"
    autocomplete="off"
    clearable
  />
  <!-- 通过 validator 进行函数校验 -->
  <van-field
    v-model="value2"
    name="validator"
    placeholder="请输入您的密码"
    type="password"
    label="登录密码"
    clearable
  />
  <!-- 通过 validator 进行异步函数校验 -->
  <van-field
    v-model="value3"
    name="asyncValidator"
    placeholder="确认密码"
    type="password"
    clearable
    label="确认密码"
  />
  <van-cell-group>
  <van-field
    v-model="phone"
    required
    clearable
    label="手机号"
    placeholder="请输入手机号"
  />
</van-cell-group>
  <van-field
  v-model="sms"
  center
  clearable
  label="短信验证码"
  placeholder="请输入短信验证码"
>
<template #button>
    <van-button size="small" type="primary" clearable>发送验证码</van-button>
  </template>
</van-field>
<van-field v-model="tel" type="tel" label="推荐人登录号" clearable/>
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit" @click=carryOut>立即注册</van-button>
  </div>
</van-form>
<van-overlay :show="show" @click="show = false">
    <van-loading size="40px" vertical>注册中...</van-loading>
</van-overlay>
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar, Toast, Overlay } from 'vant'

Vue.use(NavBar)
Vue.use(Overlay)
export default {
  data () {
    return {
      value1: '',
      value2: '',
      value3: '',
      pattern: /\d{6}/,
      phone: '',
      sms: '',
      tel: '',
      show: false
    }
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    // 校验函数返回 true 表示校验通过，false 表示不通过
    validator (val) {
      return /1\d{10}/.test(val)
    },
    // 异步校验函数返回 Promise
    asyncValidator (val) {
      return new Promise((resolve) => {
        Toast.loading('验证中...')
        setTimeout(() => {
          Toast.clear()
          resolve(/\d{6}/.test(val))
        }, 1000)
      })
    },
    onFailed (errorInfo) {
      console.log('failed', errorInfo)
    },
    carryOut () {
      this.show = true
    }
  }
}
</script>

<style lang="less">
  .registered{
    .van-form{
        margin: -50px 0;
        .van-cell{
          font-weight: 500;
          .van-field__label{
            color: #000;
          }
          .van-field__value{
              .van-field__body{
                  .van-field__control{
                      color: #666;
                      -webkit-text-fill-color: #666;
                  }
              }
              .van-field__error-message{
                line-height: 20px;
              }
          }
        }
        .van-field{
          .van-cell__value{
              .van-field__body{
                  .van-field__control{
                      width: 80%;
                      margin-left: 40px;
                  }
              }
          }
        }
    }
  }
  .van-button--small{
      padding: 40px 20px;
      margin-bottom: 10px;
  }
  .van-button--normal{
      padding: 40px 40px;
      font-size: 40px;
  }
  .van-button--round{
      border-radius: 20px;
  }
  .van-loading--vertical{
      margin-top: 600px;
  }
</style>>
