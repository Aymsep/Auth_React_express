import React,{useState} from 'react'
import {LoginUser,Test} from '../Api/UserApi'
import {UserC} from '../Context/UserContext'
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const [dataform, setdataform] = useState()
    const {username,setusername} = UserC()
    const Navigate = useNavigate()


    const handlechange = e=>{
        setdataform({...dataform,[e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        LoginUser(dataform).then((response)=>{
            localStorage.setItem('jwt_info', JSON.stringify(response.data.token))
            setusername(response.data.user.username)
            Navigate('/dashboard')

        }).catch(()=>{
            console.log('failed')
        })
    }

  return (
    <div>
     <form onSubmit={handleSubmit}>
            <input type="email" onChange={handlechange} name="email" placeholder="Email" /><br />
            <input type="password" name="password" onChange={handlechange} placeholder="Password" /><br />
            <button type="submit">login</button>
     </form>

    </div>
  )
}

export default Login