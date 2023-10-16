import { createContext,useContext ,useEffect, useState } from "react";
import axios from "axios";



const UserContext = createContext()

export const UserState = ({children}) =>{
    const [username, setusername] = useState('')
    const [role, setrole] = useState('')
    const [loading,setloading] = useState(false)
    useEffect(()=>{ 
        fetch("http://localhost:5000/profile",
        {
            withCredentials:'include',
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('jwt_info')===null?null:JSON.parse(localStorage.getItem('jwt_info'))}`
            }
        },
        )
        .then(res=>res.json())
        .then(data =>{
            // setid(data.userId);
            // setusername(data.name);
            // setloading(true)
            // setimage(data.image);
            console.log(data)
        })
    },[])
    return(
        <UserContext.Provider value={{
            username,
            setusername,
            role,
            setrole,
            loading
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