import 'prismjs/themes/prism-tomorrow.css'

import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Mui from 'mui'

import store from './store'
import App from './App.vue'
import router from './router'
import Demo from '@/components/Demo'
import Page from '@/components/Page'

import CN from '@/docs/zh-CN/messages'
import EN from '@/docs/en-US/messages'

Vue.component(Demo.name, Demo)
Vue.component(Page.name, Page)
Vue.config.productionTip = false

const messages = {
  'zh-CN': CN,
  'en-US': EN
}

console.log(Mui)

// console.log(Mui)
// Vue.use(Mui)

if (process.env.NODE_ENV === 'development') {
  import('../../mui/src/index').then(Mui => {
    Vue.use(Mui.default)
    Vue.use(VueI18n)

    const i18n = new VueI18n({
      locale: store.state.locale,
      messages
    })

    new Vue({
      i18n,
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  })
} else {
  import('mui').then(Mui => {
    Vue.use(Mui.default)
    Vue.use(VueI18n)

    const i18n = new VueI18n({
      locale: store.state.locale,
      messages
    })

    new Vue({
      i18n,
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  })
}
