'use client'

import React from 'react';
import Navbar from "../components/navbar/navbar";
import AirbnbCard from "../components/airbnb-card/airbnb-card";
import BrownBg from "../components/brown-bg/brown-bg";

import './availabilities.css'

function Availabilities() {
    return (
        <div>
            <Navbar/>
            <div className="availabilities-page">
                <BrownBg
                         header="Availabilities"
                         message="At this time we are only accepting reservations through Airbnb. You can view our availabilities
                 on our calendar to find a date right for you. Then head to this link to reserve your stay."
                         content={<AirbnbCard/>}
                />
            </div>
        </div>
    )
}

export default Availabilities