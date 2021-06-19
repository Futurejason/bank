<template>
  <div class="information">
    <Card titles="个人信息"></Card>
    <div class="information-type">
      <div class="information-type-item">
        <span>头像</span>
        <span>
          <img src="https://img01.yzcdn.cn/vant/apple-1.jpg">
        </span>
      </div>
      <div class="information-type-item">
        <span>手机号</span>
        <span>
          {{$store.state.account.number}}
        </span>
      </div>
      <div class="information-type-item">
        <span>姓名</span>
        <span>
          {{$store.state.account.name}}
        </span>
      </div>
      <div class="information-type-item">
        <span>省份证</span>
        <span>
          {{$store.state.account.idcard}}
        </span>
      </div>
      <div class="information-type-item">
        <span>注册时间</span>
        <span>
          {{$store.state.account.number}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../../components/home/labelleft'

export default {
  components: {
    Card
  }
}
</script>

<style lang="less" scoped>
.information-type{
  padding-top: 120px;
  background-color: #fff;
  .information-type-item{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 30px;
    padding: 30px 20px 30px 0;
    border-bottom: 1px solid #eee;
    font-size: 30px;
    span:last-child{
      color: #999;
      img{
        width: 150px;
        height: 150px;
        border-radius: 50%;
      }
    }
  }
}
</style>
