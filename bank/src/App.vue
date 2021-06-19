<template>
  <div id="app">
    <!--路由出口-->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
div{
  touch-action: none;//阻止触摸默认被动事件效果
}
</style>
