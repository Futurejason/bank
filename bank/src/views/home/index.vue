<template>
  <div class="login-container">
    <div class="login-container-swipe">
      <van-swipe :autoplay="3000" class="login-container-van-swipe">
        <van-swipe-item v-for="(image, index) in images" :key="index" class="login-container-van-swipe-item">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="login-container-news">
      <div class="login-container-news-icon">
        <van-icon name="volume" />
      </div>
      <van-swipe style="height: 100%;" vertical :touchable=false :autoplay="2000" :show-indicators=false class="login-container-news-item">
        <van-swipe-item v-for="(item,index) in news" :key="index" @click="goto()">
          {{item.title}}
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="login-container-features">
      <van-grid :border="false" :column-num="3" class="login-container-features-news">
        <van-grid-item v-for="(item, index) in features" :key="index" @longTap="show = true" @click="gosignin(item.classes)">
          <span class="login-container-features-news-item" :class="item.classes"><van-icon :name="item.iconname" /></span>
          <span>{{item.texts}}</span>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem, Lazyload, Overlay } from 'vant'

Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Lazyload)
Vue.use(Overlay)
export default {
  name: 'HomeIndex',
  components: {},
  props: {},
  data () {
    return {
      show: true,
      images: [
        'https://img01.yzcdn.cn/vant/apple-1.jpg',
        'https://img01.yzcdn.cn/vant/apple-2.jpg'
      ],
      news: [
        {
          title: '感谢广大用户的支持1',
          news: '为了庆祝村银通上线，现发红包派送，每个红包金额在10~100'
        },
        {
          title: '感谢广大用户的支持2',
          news: '为了庆祝村银通上线，现发红包派送，每个红包金额在10~100'
        },
        {
          title: '感谢广大用户的支持3',
          news: '为了庆祝村银通上线，现发红包派送，每个红包金额在10~100'
        },
        {
          title: '感谢广大用户的支持4',
          news: '为了庆祝村银通上线，现发红包派送，每个红包金额在10~100'
        }
      ],
      features: [
        {
          classes: ' backcolora',
          iconname: 'scan',
          texts: '扫一扫'
        },
        {
          classes: ' backcolorb',
          iconname: 'calendar-o',
          texts: '签到'
        },
        {
          classes: ' backcolorc',
          iconname: 'points',
          texts: '贷款'
        },
        {
          classes: ' backcolord',
          iconname: 'refund-o',
          texts: '资金转入'
        },
        {
          classes: ' backcolore',
          iconname: 'after-sale',
          texts: '资金转出'
        },
        {
          classes: ' backcolorf',
          iconname: 'balance-pay',
          texts: '收款'
        }
      ]
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    goto () {
      localStorage.setItem('news', JSON.stringify(this.news))
      this.$router.push('/homenews')
    },
    gosignin (cla) {
      switch (cla) {
        case this.features[0].classes:
          console.log(cla)
          break
        case this.features[1].classes:
          this.$router.push('/Signin')
          break
        case this.features[2].classes:
          this.$router.push('/home/loan')
          break
        case this.features[3].classes:
          console.log(cla)
          break
        case this.features[4].classes:
          console.log(cla)
          break
        case this.features[5].classes:
          this.$router.push('/home/payment')
          break
      }
    }
  }
}
</script>

<style scoped lang="less">
.login-container{
  width: 100%;
  height: 100vh;
  background-color: #eee;
}
.login-container-swipe{
  width: 100%;
  height: 400px;
  .login-container-van-swipe{
    width: 100%;
    height: 100%;
    .login-container-van-swipe-item{
      width: 100%;
      height: 100%;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
}
.login-container-news{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: #fff;
  margin-top: 20px;
  border-bottom: 2px solid #ddd;
  .login-container-news-icon{
    width: 150px;
    text-align: center;
    font-size: 45px;
    color: rgb(189, 13, 0);
    .van-icon-volume{
      margin-top: 10px;
    }
  }
  .login-container-news-item{
    flex: 1;
    line-height: 80px;
    color: #999;
  }
}
.login-container-features{
  width: 100%;
  height: 600px;
  .login-container-features-news{
    width: 100%;
    height: 100%;
    .van-grid-item{
      span{
        font-size: 40px;
        padding: 10px;
        color: rgb(255, 138, 4);
      }
      .login-container-features-news-item{
        width: 80px;
        height: 80px;
        font-size: 60px;
        color: #fff;
        text-align: center;
        margin-bottom: 20px;
        border-radius: 50%;
        .van-icon{
          margin-top: 10px;
        }
      }
    }
  }
}
.backcolora{
  background-color: rgb(76, 223, 166);
}
.backcolorb{
  background-color: rgb(243, 128, 218);
}
.backcolorc{
  background-color: rgb(113, 170, 101);
}
.backcolord{
  background-color: rgb(63, 126, 207);
}
.backcolore{
  background-color: rgb(204, 74, 57);
}
.backcolorf{
  background-color: rgb(157, 58, 196);
}
</style>
