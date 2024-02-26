import React from 'react'
import "./logo.css"
import logo from "../../../asserts/logo.png"
const Logo = () => {
  return (
    <div
    className='logo-container'
    >
    <img className='logo' src={logo} alt='logo'/>
    </div>
  )
}

export default Logo