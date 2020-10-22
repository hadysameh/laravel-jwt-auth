const path = '../pages/';
import login from '../pages/login/login.vue';
import register from '../pages/register/register.vue';
import welcome from '../pages/welcome/welcome.vue';
import auth from '../middleware/auth';
import guest from '../middleware/guest';
// import axios from 'Axios'


export default [
    { path: '/',

     name: 'welcome',
     beforeEnter:auth,
     component:welcome,
    },

    { path: '/login',
     name: 'login',
     beforeEnter:guest,
     component: login
    },

    { path: '/register',
     name: 'register',
     beforeEnter:guest,
     component: register
    },

]