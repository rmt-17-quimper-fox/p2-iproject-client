import Vue from 'vue'
import VueSweetalert2 from 'vue-sweetalert2';
import GAuth from 'vue-google-oauth2'
import App from './App.vue'
import router from './router'
import store from './store'

import 'sweetalert2/dist/sweetalert2.min.css';


const gauthOption = {
    clientId: '482474325735-e6spfop5c31uen0d7d6jaq1ogqu52d45.apps.googleusercontent.com',
    scope: 'profile email',
    prompt: 'select_account'
}

Vue.config.productionTip = false
Vue.use(VueSweetalert2);
Vue.use(GAuth, gauthOption);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

