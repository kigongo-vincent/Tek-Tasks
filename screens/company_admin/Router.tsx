import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

// company pages 
import Dashboard from './Dashboard'

const Router = () => {
  return (
    <Routes>
      <Route Component={Dashboard} path='/'/>
    </Routes>
    
  )
}

export default Router
