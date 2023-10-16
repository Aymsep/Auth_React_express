import React,{useMemo} from 'react'
import {UserC} from '../Context/UserContext'

const Dashboard = () => {
  const {username,setusername,loading} = UserC()
  console.log(loading)


  return (
    <div>
     {
      loading?<h1>hello {username} </h1> : <h1> loading ...</h1>
     }
    </div>
  )
}

export default React.memo(Dashboard)