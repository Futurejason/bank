<template>
  <div class="Message-list">
        <div class="Message-list-title">
            <van-icon name="bullhorn-o" color="rgb(252, 0, 0)" size="20px"/>
            <span>{{newname.title}}</span>
        </div>
        <h5></h5>
        <p>{{newname.news}}</p>
        <div>1021-5-31 15:47:12</div>
    </div>
</template>

<script>
export default {
  props: {
    newname: Object
  },
  created () {
  }
}
</script>

<style lang="less" scoped>
.Message-list{
    margin-top: 20px;
    background-color: #fff;
    padding: 20px 30px;
    height: 250px;
    .Message-list-title{
        display: flex;
        align-items: center;
        span{
            color: #000;
            font-size: 40px;
            margin-left: 15px;
        }
    }
    h5{
        height: 0px;
        margin: 20px 0;
        border-bottom: 2px dashed rgb(63, 126, 207);
    }
    p{
        margin: 10px 0;
        font-size: 35px;
        color: #666;
        width: 80%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    div{
        margin-top: 30px;
        text-align: right;
        font-size: 35px;
        color: #666;
    }
}
</style>
