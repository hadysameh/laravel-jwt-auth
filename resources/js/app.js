require('./bootstrap');
import router from './router/index.js'
//import Vuex from 'vuex';
import store from './store/Index.js';
window.Vue = require('vue');


Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('app-component', require('./App.vue').default);
console.log(store)

const app = new Vue({
  el: '#app',
  store,
  router
});
