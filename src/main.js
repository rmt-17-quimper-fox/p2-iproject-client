import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueGeolocation from 'vue-browser-geolocation';
import VueSpeech from 'vue-speech'

Vue.config.productionTip = false
Vue.use(VueGeolocation);
Vue.use(VueSpeech)
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    // key: '',
    key: 'AIzaSyAtuMDiL4nK2YKt7a7zxUk02gMIIXiHH44',
    
  },
  installComponents: true,
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
