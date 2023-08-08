import Vue from 'vue'
import router from './router'
import App from './App.vue'

// index.js
import microApp from '@micro-zoe/micro-app'

microApp.start()


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
