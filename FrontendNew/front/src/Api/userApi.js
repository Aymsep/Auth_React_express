import axios from 'axios'

const api = axios.create({
    baseURL:"http://localhost:5000/",
    headers:{
        'Content-Type':"Application/json"
    }
})


export function register(user){
    return api.post('/register', user)
}

export function login(user){
    return api.post('/login', user)
}



export default api