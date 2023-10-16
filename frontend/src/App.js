import logo from './logo.svg';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Login from './Components/Login'
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';
import PrivateRoute,{UserRoute} from './utils/UserR'
import './App.css';
import {AuthM} from './utils/authM'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<PrivateRoute/>}>
            <Route path="/dashboard" element={<Dashboard/>} />
          </Route>

          <Route element={<UserRoute/>}>

            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            
          </Route>

        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
