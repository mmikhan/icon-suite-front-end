import 'prismjs'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'prismjs-material-theme/css/lighter.min.css'
import 'vue-prism-editor/dist/VuePrismEditor.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
