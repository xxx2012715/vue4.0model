import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/res/css/reset.css'
import './assets/res/css/border.css'

// fastclick
import FastClick from 'fastclick'
FastClick.attach(document.body)















// global variables
// Vue.prototype.$test = 'thi is the test text'
// Vue.prototype.$changeTest = function(str) {
//   Vue.prototype.$test = str
// }



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
