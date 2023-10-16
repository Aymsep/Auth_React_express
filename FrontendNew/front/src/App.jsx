import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Login from './Components/Login'
import Register from './Components/Register'
import PrivateRoute from './PrivateRoutes'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute/>}>

          <Route exact index element={<Dashboard/>} />

        </Route>
          <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App