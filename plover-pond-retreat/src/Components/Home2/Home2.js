import React from 'react';
import NavBar from './../NavBar/NavBar'

import './Home2.css'

function Home2() {
    return (
        <div>
            <NavBar/>
            <div className='home2-image'>
                <div className='home2-title'>Plover Pond Retreat</div>
                <div className='home2-subtitle'>"A home away from home"</div>
                <div className='home2-overlay'></div>
            </div>
            <div className='home2-divider'></div>
            <div className='home2-footer'>
                <div className='home2-footer-wrapper'>
                    <div className='home2-footer-header'>Travel</div>
                    <div className='home2-footer-content'>
                        <div className='home2-body'>Spend your dream vacation in the heart of Georgia. This home offers 3 bedrooms, 3 bathrooms, and enough amenities to meet your needs. Enjoy fishing off of the docks and make memories you won’t forget. Let Plover Pond Retreat be your home for the holidays.</div>
                        <div className='home2-primary-btn'>Plan Your Stay</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home2