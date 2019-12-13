import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Mui, { Button } from '../../mui/src'

import store from './store'
import App from './App.vue'
import router from './router'
import Demo from '@docs/components/Demo'
import Page from '@docs/components/Page'

import CN from '@docs/docs/zh-CN/messages'
import EN from '@docs/docs/en-US/messages'

// import '@docs/assets/paper.css'
import '@docs/assets/prismjs/themes/prism.css'

Vue.use(Button)

Vue.component(Demo.name, Demo)
Vue.component(Page.name, Page)
Vue.config.productionTip = false

const messages = {
  'zh-CN': CN,
  'en-US': EN
}

Vue.use(Mui, { size: 'small' })
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
