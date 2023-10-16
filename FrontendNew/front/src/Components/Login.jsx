import React,{useState} from 'react'
import { login } from '../Api/userApi'
import {useNavigate} from 'react-router-dom'
import {UserC} from '../Context/userContext'
 
const Login = () => {
  const {setusername,setloading} = UserC()
  const Navigate = useNavigate()
  const [dataform, setdataform] = useState({})
  const [message, setmessage] = useState('')
  const onchangeHandler = (e)=>{
      setdataform({...dataform,[e.target.name]:e.target.value})
  }
  const handleSubmit = (e)=>{
      e.preventDefault()
      login(dataform).then((response)=>{
          // Navigate('/login')
          console.log(response)
          localStorage.setItem('token',response.data.token)
          // setmessage(response.data.message)
          setusername(response.data.data.username)
          setloading(false)
          // settoken(response.data.token)
          Navigate('/')
      }).catch((error)=>{
          console.log('erroe message ',error)
      })
      

  }
  return (
    <div>
      <form onSubmit={handleSubmit} >
        <input type="email" onChange={onchangeHandler} name="email" placeholder="entere ur email" /><br />
        <input type="password" onChange={onchangeHandler} name="password" placeholder="entere ur passw" /><br />
        <button>Login</button>
        {/* <h1>{message && message}</h1>
        <h1>{username && username}</h1>
        <h1>{token && token}</h1> */}
      </form>
    </div>
  )
}

export default Login