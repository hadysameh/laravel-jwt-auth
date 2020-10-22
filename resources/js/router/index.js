import Vue from 'vue'
import store from '../store/index.js'
import routes from './routes.js'
import Router from 'vue-router'
// import { sync } from 'vuex-router-sync'

Vue.use(Router)

const router = new Router({
    
    mode: 'history',
    routes    
  });

// sync(store,router)

export default router;
