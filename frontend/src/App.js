import React from 'react'
import Login from './pages/login-page/Login'
import Signup from './pages/signup-page/Signup'
import { Route, Routes } from 'react-router'
import Home from './pages/home-page/Home'
import Logout from './components/logout/Logout'
const App = () => {
  return (
    <div>
       <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/logout" element={<Logout/>}/>
       </Routes>
    </div>
  )
}

export default App