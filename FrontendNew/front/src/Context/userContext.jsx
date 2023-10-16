import { createContext,useContext ,useEffect, useState } from "react";
import axios from "axios";



const UserContext = createContext()

export const UserState = ({children}) =>{
    const [username, setusername] = useState('')
    const [loading,setloading] = useState(true)
    const [token, settoken] = useState('')
    useEffect(()=>{ 
        console.log(localStorage.getItem('token'))
        fetch("http://localhost:5000/profile",
        {
            withCredentials:'include',
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')===null?null:localStorage.getItem('token')}`
            }
        },
        )
        .then(res=>res.json())
        .then(data =>{
            // setid(data.userId);
            setusername(data.data.username);
            setloading(false)
            // setimage(data.image);
            console.log(data)
        })
    },[])
    return(
        <UserContext.Provider value={{
            username,
            setusername,
            loading,
            setloading,
            token,
            settoken
        }}>
            {children}
        </UserContext.Provider>
    )
}

export const UserC = ()=>{
    const Context = useContext(UserContext)
    if(!Context){
        throw new Error('no context provided')
    }
    return Context
}