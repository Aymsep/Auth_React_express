import React ,{useState} from 'react'
import {  register } from '../Api/userApi'
import {useNavigate} from 'react-router-dom'

const Register = () => {
    const Navigate = useNavigate()
    const [dataform, setdataform] = useState({})
    const [message, setmessage] = useState('')
    const onchangeHandler = (e)=>{
        setdataform({...dataform,[e.target.name]:e.target.value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        register(dataform).then((response)=>{
            Navigate('/login')
            // setmessage(response.data.message)
        }).catch((error)=>{
            console.log('erroe message ',error)
        })
        

    }

  return (
    <div>
        <form onSubmit={handleSubmit} action="" method=''>
            <input type="text" onChange={onchangeHandler} name='name' placeholder='enter ur username'/><br />
            <input type="email" onChange={onchangeHandler} name="email" placeholder="Enter ur email" /><br />
            <input type="password" onChange={onchangeHandler} name="password" placeholder="Enter ur password"/><br />
            <button type="submit" >Register</button>
            <h1>{message && message}</h1>
        </form>
    </div>
  )
}

export default Register