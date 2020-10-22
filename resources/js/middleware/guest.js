import axios from 'Axios'
export default async (to, from, next) => {
    axios.post('/api/auth/is_auth')
    .then(res=>{
        console.log()
        if(res.status ==200){
            next(from)
        }        
    })
    .catch(e=>{
        
        next();
    })
}
