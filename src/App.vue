
<!--模板-->
<template>
  <div id="app">
    <img src="./assets/p1.png">
    <!--路由渲染组件,设置路径，与index.js的路径保持一致-->
    <a>
      <!--设置链接，直接跳转至指定的路径-->
      <router-link to="/">HelloWorld</router-link>
    </a>
    <a>
      <router-link to="/duanzi">duanzi</router-link>
    </a>
    <!--渲染视图-->
    <router-view/>
  </div>
</template>

<!--js-->
<script>
export default {
  name: 'App'
}
</script>

<!--css-->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  a{
    display: block;
  }
</style>
