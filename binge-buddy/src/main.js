import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2';
import { PaginationPlugin } from 'vuex-pagination'

//CSS
import '@/assets/css/bootstrap.min.css'
import '@/assets/css/LineIcons.2.0.css'
import '@/assets/css/animate.css'
import '@/assets/css/tiny-slider.css'
import '@/assets/css/glightbox.min.css'
import '@/assets/css/main.css'
import 'sweetalert2/dist/sweetalert2.min.css'

Vue.config.productionTip = false
Vue.use(VueSweetalert2);
Vue.use(PaginationPlugin)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
