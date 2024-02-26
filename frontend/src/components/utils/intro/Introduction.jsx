import React from 'react'
import "./intro.css"
import trophyImage from "../../../asserts/1.png"
import groupImage from "../../../asserts/2.png"
const Introduction = () => {
    return (
        <div className='intro-container'>
            <div className='left-div'>
                <img className='trophy-img' src={trophyImage} alt="trophy-image" />
            </div>
            <div className='right-div'>
            <h4>
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.
            </h4>
            <div>
                <ul>
                    <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                    <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
                </ul>
                <img className='group-image' src={groupImage} alt="group-image" />
                
            </div>
            <p>Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
            </div>
        </div>
    )
}

export default Introduction