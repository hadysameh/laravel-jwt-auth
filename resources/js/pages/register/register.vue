<template>
  <div>
      
  <div class="grid align__item">

    <div class="register">

      <svg xmlns="http://www.w3.org/2000/svg" class="site__logo" width="56" height="84" viewBox="77.7 214.9 274.7 412"><defs><linearGradient id="a" x1="0%" y1="0%" y2="0%"><stop offset="0%" stop-color="#8ceabb"/><stop offset="100%" stop-color="#378f7b"/></linearGradient></defs><path fill="url(#a)" d="M215 214.9c-83.6 123.5-137.3 200.8-137.3 275.9 0 75.2 61.4 136.1 137.3 136.1s137.3-60.9 137.3-136.1c0-75.1-53.7-152.4-137.3-275.9z"/></svg>

      <h2>SGN UP</h2>

      <form action=""  @submit.prevent="onSignUp" method="" class="form">

        <div class="form__field">
          <input type="" v-model="name" placeholder="user name" style="color:#fff">
        </div>

        <div class="form__field">
          <input type="email" v-model="email" placeholder="Email" style="color:#fff">
        </div>

        <div class="form__field">
          <input type="password" v-model="password" placeholder="password" style="color:#fff">
        </div>

        <div class="form__field">
          <input type="password" v-model="password_confirmation" placeholder="confirm password" style="color:#fff">
        </div>

        <div class="form__field" v-if="error">
          <p style="color:#fff">something went wrong please try again</p>
        </div>



        <div class="form__field">
          
          <input type="submit"  value="Sign up">
        </div>

      </form>

      <p>Don't have an accout? <router-link :to="{ name: 'login' }" class="nav-link" active-class="active">log in</router-link></p>
      

    </div>

  </div>

  </div>
</template>

<script>
  export default {
    mounted() {
      
    },
    data(){
        return {
            name:'',
            email:'',
            password:'',
            password_confirmation:'',
            isError:false
        }
    },
    methods:{
      
      onSignUp(){
        axios.post('/api/auth/register',{
            name:this.name,            
            email:this.email,
            password:this.password,
            password_confirmation:this.password_confirmation
        })
        .then(res=>{
           
            
            if(res.status==200){
                let user =res.data.user;
                this.$store.commit('setUser',user)
                
                let token= res.data.access_token;
                let expires_in = res.data.expires_in; 

                this.$store.commit('saveToken',{token,expires_in})
            }
            else{
                

            }
            this.$router.push({ name: 'welcome' });
        })
        .catch(e=>{
            console.log(e)
            this.isError=true
        })
      }
    },
    computed:{
        error(){
            return this.isError
        }
    }
  };
</script>