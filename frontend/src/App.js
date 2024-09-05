import React from 'react'
import Login from './pages/login-page/Login'
import Signup from './pages/signup-page/Signup'
import { Route, Routes } from 'react-router'
import Home from './pages/home-page/Home'
import Logout from './components/logout/Logout'
import RewardPage from './pages/reward-page/RewardPage'
import Feedbackpage from './pages/feedback-page/Feedbackpage'
import ReportPage from './pages/report-page/ReportPage'
import NavigationBar from './components/Navbar/NavigationBar'
import Camera from './components/camera/camera'
const App = () => {
  return (
    <div>
       <NavigationBar/>
       <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/scan" element={<Camera/>}/>
          <Route path="/rewards" element={<RewardPage/>}/>
          <Route path="/feedbacks" element={<Feedbackpage/>}/>
          <Route path="/report" element={<ReportPage/>}/>
          <Route path="/logout" element={<Logout/>}/>
       </Routes>
    </div>
  )
}

export default App