export const isAuth = ()=>{
    const jwt = localStorage.jwt_info

    if(jwt){
        return JSON.parse(jwt)
    }

    return false
}