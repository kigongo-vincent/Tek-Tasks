import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

// auth pages 
import Login from "./Login"
import Activation from "./Activation"
import PasswordReset from "./Password_reset"

const Router = () => {
  return (
    <Routes>
      {/* base route  */}
      <Route element={<Navigate to={"/auth/login"}/>} path='/'/>
      
      {/* auth routes  */}
      <Route Component={Login} path='/login'/>
      <Route Component={Activation} path='/activation/:token'/>
      <Route Component={PasswordReset} path='/password_reset/:token'/>
    </Routes>
    
  )
}

export default Router
