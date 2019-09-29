import Vue from 'vue'
import Router from 'vue-router'
import Button from './docs/zh-CN/components/Button.md'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/zh-CN',
    //   name: 'zh-CN',
    // },
    {
      path: '/zh-CN/components/button',
      name: 'components/button',
      component: Button
    }
  ]
})
