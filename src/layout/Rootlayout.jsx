import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Rootlayout() {
  return (
    <div>
        <Navbar />
        <div className="container">
            <Outlet /> 
        </div>
    </div>
  )
}

export default Rootlayout