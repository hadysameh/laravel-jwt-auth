import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth.js'

// const requireContext = require.context('./modules', false, /.*\.js$/)

// const modules = requireContext.keys()
//   .map(file =>
//     [file.replace(/(^.\/)|(\.js$)/g, ''), requireContext(file)]
//   )
//   .reduce((modules, [name, module]) => {
//     if (module.namespaced === undefined) {
//       module.namespaced = true
//     }

//     return { ...modules, [name]: module }
//   }, {})

Vue.use(Vuex)

const store = new Vuex.Store({
    debug:false,
    modules:{
      auth
    }
})

export default store;