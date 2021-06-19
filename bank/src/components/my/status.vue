<template>
  <div class="status">
    <div class="status-card">
      <div class="status-card-title">
        <span>各地啊</span>
        <span class="title-color">申请</span>
      </div>
      <div class="status-card-conent">
        <div>
          <span>申请时间：</span>
          <span class="conent-color">2017-10-24</span>
        </div>
        <div>
          <span>借款金额：</span>
          <span class="conent-color">10000</span>
        </div>
        <div>
          <span>年利率：</span>
          <span class="conent-color">10%</span>
        </div>
        <div>
          <span>借款通途：</span>
          <span class="conent-color">经营周转</span>
        </div>
      </div>
      <div class="status-card-footer">
          <van-button color="rgb(230, 67, 64)" click="thisto">撤销申请</van-button>
          <van-button color="rgb(26, 173, 25)">借款详情</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Button } from 'vant'

Vue.use(Button)
export default {
  data () {
    return {
      show: false
    }
  },
  methods: {
    thisto () {
      console.log(1)
    }
  }
}
</script>

<style lang="less" scoped>
.status-card{
    background-color: #fff;
    margin: 20px 30px;
    border-radius: 20px;
    padding: 0px 5px;
    font-weight: 600;
    .status-card-title{
        padding: 10px 25px;
        border-bottom: 1px dashed #ddd;
        display: flex;
        justify-content: space-between;
        font-size: 40px;
        .title-color{
            color: rgb(230, 67, 64);
        }
    }
    .status-card-conent{
        padding: 10px 25px;
        border-bottom: 1px dashed #ddd;
        div{
            margin: 15px 0;
            .conent-color{
                color: #888;
                font-weight: 400;
            }
        }
    }
    .status-card-footer{
        text-align: right;
        padding: 10px 20px;
        .van-button{
            margin: 10px;
            border-radius: 10px;
            font-weight: 400;
            font-size: 30px;
        }
        .van-button--normal{
            padding: 30px;
        }
    }
}
</style>
