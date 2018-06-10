import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld' // @表示src文件夹
import duanzi from '@/components/duanzi' // @表示src文件夹

// 使用路由
Vue.use(Router)
// 配置路由
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      // 指定组件
      component: HelloWorld
    },
    {
      path: '/duanzi',
      name: 'duanzi',
      component: duanzi
    }
  ]
})
