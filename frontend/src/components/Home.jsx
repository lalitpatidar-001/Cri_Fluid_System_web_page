import React from 'react'
import "./home.css"
import Logo from './utils/logo/Logo'
import Introduction from './utils/intro/Introduction'
import Featrue from './utils/feature/Featrue'
import Contact from './utils/contact/Contact'
const Home = () => {
    return (
        <div
            className='container'
        >
            {/* logo */}
            <Logo />
            {/* intro */}
            <Introduction />
            {/* work */}
            <h5 className='middle-detail'>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
            </h5>
            {/* feature */}
            <Featrue />
            {/* divider */}
            <div className='divider' />

            {/*  */}
            <div className='details'>
                <h4 className='details-heading'>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
                <span className='details-span'>CHEMICALS & PROCESS <span className='break'>|</span> POWER <span className='break'>|</span> WATER & WASTE WATER <span className='break'>|</span> OILS & GAS <span className='break'>|</span> PHARMA <span className='break'>|</span> SUGARS & DISTILLERIES <span className='break'>|</span> PAPER & PULP <span className='break'>|</span> MARINE & DEFENCE <span className='break'>|</span> METAL & MINING <span className='break'>|</span> FOOD & BEVERAGE <span className='break'>|</span> PETROCHEMICAL & REFINERIES <span className='break'>|</span> SOLAR <span className='break'>|</span> BUILDING <span className='break'>|</span> HVAC <span className='break'>|</span> FIRE FIGHTING <span className='break'>|</span> AGRICULTURE & RESIDENTIAL</span>
            </div>
            {/* contact */}
            <Contact/>
        </div>
    )
}

export default Home