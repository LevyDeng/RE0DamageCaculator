import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import './registerServiceWorker'
import router from "./router.js"
import store from './store'
import rules from './scripts/rules.js'
import tools from './scripts/tools.js'

Vue.config.productionTip = false
Vue.prototype.rules = rules
Vue.prototype.tools = tools

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
