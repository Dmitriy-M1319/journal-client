import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VModal from 'vue-js-modal'
import 'bootstrap/dist/css/bootstrap.css';

Vue.config.productionTip = false;
Vue.prototype.$url = "http://193.233.18.42/api/v1/";

Vue.use(VModal)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
