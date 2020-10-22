import axios from 'axios'
import Cookies from 'js-cookie'


export default {
    state:{
        user:null,
        token:Cookies.get('token')
    },
    
    getters:{
        getUser(state){
            return state.user
        },
        getToken(state){
            return state.token
        }
    },
    
    mutations:{
        setUser(state,user){
            console.log(user)
            state.user=user
        },
        saveToken(state,{token,expires_in}){
            
            state.token = token
            Cookies.set('token', token, { expires: expires_in })
        },
        logout(state){
            state.user=null;
            state.token=null;
            Cookies.remove('token')
        },
        failToFetchUser(state){
            //state.user=null;
            state.token=null;
            Cookies.remove('token')
        }
    },
    actions:{
        async isAuth({commit,state}){
            try{
                let user =await axios.post('/api/auth/is_auth')
                if(user){
                    return true;
                }

            }catch(e){
                failToFetchUser();
                return false;
            }
        },
        async logout({commit,state}){
            try{
                let res =await axios.post('/api/auth/logout');
                return res;
            }
            catch(e){

            }
            
        }
    }
    
}

