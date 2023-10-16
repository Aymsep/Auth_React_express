import isAuth from './Utils/isAuth'
import { Route, Navigate , Outlet } from 'react-router-dom'

const PrivateRoute = () => {
    return (
        isAuth() 
          ? <Outlet /> 
          :<> 
              <Navigate to='/login' />
          </> 
    )
  }
  
export default PrivateRoute

export const UserRoute = () => {
  return (
    isAuth() ?  <> <Navigate to='/dashboard' />  </> : <Outlet />
  )
}