import Vue from 'vue'
import App from './App.vue'

window.Vue = Vue;
window.VueRouter = VueRouter;
import VueRouter from 'vue-router';
import router from './router';


// CSS
import '../src/styles/global.scss'

import axios from 'axios';
Vue.prototype.axios=axios

// Bootstrap
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// jQuery for bootstrap
Vue.use({
  install: function(Vue){
      Vue.prototype.$jQuery = require('jquery');
  }
}); 

// Vue.prototype.axios = axios

Vue.use(VueRouter);

Vue.config.productionTip = false;

window.eventBus = new Vue();
new Vue({
  render: h => h(App),
  router
}).$mount('#app')