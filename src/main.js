import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueJSModal from 'vue-js-modal'

Vue.config.productionTip = false

Vue.use(VueJSModal, {
  dialog: true,
  dynamicDefaults: {
    draggable: true
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
