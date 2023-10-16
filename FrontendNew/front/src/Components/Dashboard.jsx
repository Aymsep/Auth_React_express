import React from 'react'
import {UserC} from '../Context/userContext'


const Dashboard = () => {
  const {username,loading,setloading} = UserC()
  return (
    <div>
      {loading? (
        <h1>loading ....</h1>
      ):(
      <h1>heelo to ur dashboard M . {username}</h1>  
     )
    }
      
    </div>
  )
}

export default Dashboard