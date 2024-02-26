import React from 'react'
import "./feature.css"
import featureImage from "../../../asserts/3.png"
const Featrue = () => {
  return (
    <div className='feature-container'>
        <img className='feature-img' src={featureImage} alt="feature-img" />
        <span className='feature-text'>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </span>
    </div>
  )
}

export default Featrue