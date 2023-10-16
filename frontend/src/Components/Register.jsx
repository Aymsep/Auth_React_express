import React,{useState} from 'react'
import {RegisterUser,Test} from '../Api/UserApi'

const Register = () => {
  const [dataform, setdataform] = useState()

  const handlechange = e=>{
      setdataform({...dataform,[e.target.name]:e.target.value})
  }

  const handleSubmit = (e) => {
      e.preventDefault()
      RegisterUser(dataform).then((response)=>{
          console.log(response.data)
      }).catch(()=>{
          console.log('failed')
      })
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
            <input type="text" onChange={handlechange} name="name" placeholder="name" /><br />
            <input type="email" onChange={handlechange} name="email" placeholder="Email" /><br />
            <input type="password" name="password" onChange={handlechange} placeholder="Password" /><br />
            <button type="submit">login</button>
     </form>
    </div>
  )
}

export default Register