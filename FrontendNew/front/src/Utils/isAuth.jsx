export default function isAuth(){
    const jwt = localStorage.token
    if(!jwt){
        return false
    }
    return jwt
}

