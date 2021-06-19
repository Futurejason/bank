<template>
  <div class="mymoney">
    <Card titles="账户明细"></Card>
    <div class="mymoney-type">
      <div class="mymoney-type-title">
        <span>账户余额 (元)</span>
        <span>145.15</span>
      </div>
      <div class="mymoney-type-item">
        <div>
          <span>平台转出1.11元</span>
          <span>2017-10-30 17:02:23</span>
        </div>
        <div>
          <span>-1.11</span>
          <span>余额： 145.15</span>
        </div>
      </div>
      <div class="mymoney-type-item">
        <div>
          <span>平台转出1.11元</span>
          <span>2017-10-30 17:02:23</span>
        </div>
        <div>
          <span>-1.11</span>
          <span>余额： 145.15</span>
        </div>
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
.mymoney-type{
  padding-top: 120px;
  .mymoney-type-title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    padding: 30px;
    background-color: #219ae0;
    font-size: 38px;
  }
  .mymoney-type-item{
    font-size: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
    margin-top: 15px;
    font-size: 38px;
    background-color: #fff;
    div{
      display: flex;
      flex-direction: column;
      justify-content: center;
      span{
        padding: 10px 0;
      }
      span:last-child{
        color: #999;
        font-size: 30px;
      }
    }
    div:last-child{
      align-items: flex-end;
    }
  }
}
::v-deep .van-hairline--bottom::after{
  border-bottom-width: 0;
}
</style>
