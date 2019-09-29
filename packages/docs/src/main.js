import 'prismjs/themes/prism-tomorrow.css'

import Vue from 'vue'
// import Mui from 'mui'
import store from './store'
import App from './App.vue'
import router from './router'
import Demo from '@/components/Demo'
import Page from '@/components/Page'

Vue.component(Demo.name, Demo)
Vue.component(Page.name, Page)
Vue.config.productionTip = false

if (process.env.NODE_ENV === 'development') {
  import('../../mui/src/index').then(Mui => {
    Vue.use(Mui.default)
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  })
} else {
  import('mui').then(Mui => {
    Vue.use(Mui.default)
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  })
}

// Vue.use(Mui)
