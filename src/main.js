import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  // h means createElement => createElement
  render: h => h(App),
}).$mount('#app')
