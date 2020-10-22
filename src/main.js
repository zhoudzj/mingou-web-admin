import Vue from 'vue';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import App from './App.vue'
import router from './router'
import VueAxios from 'vue-axios'
import axios from 'axios'

Vue.use(ViewUI);
Vue.use(VueAxios,axios);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
