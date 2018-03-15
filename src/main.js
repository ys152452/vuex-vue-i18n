// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'

Vue.config.productionTip = false
Vue.use(VueI18n)
const messages = {
  'cn': require('./assets/lang/cn'),   // 中文语言包
  'en': require('./assets/lang/en')    // 英文语言包
}
const i18n = new VueI18n({
  locale: 'en',    // 语言标识
  messages
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store: store,
  components: { App },
  template: '<App/>'
})
