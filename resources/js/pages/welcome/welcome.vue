<template>
  <div>
    <div>Hello World form app.</div>
    <button @click="testapi">logout</button>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    mounted() {
      console.log("App component mounted");
    },
    methods:{
      testapi(){
        this.$store.dispatch('logout').then(res=>{
          console.log(res)
          this.$router.push({ name: 'login' })
        })
      }
    }
  };
</script>