'use client'

import React, { useState, useEffect } from 'react';
import { ArrowClockwiseRegular } from '@fluentui/react-icons';

import './airbnb-card.css';

function AirbnbCard() {

    useEffect(() => {
        const airbnbScript = document.createElement("script");
        airbnbScript.src = "https://www.airbnb.com/embeddable/airbnb_jssdk";
        airbnbScript.async = "";

        document.body.appendChild(airbnbScript);

        return () => {
            document.body.removeChild(airbnbScript)
        }
    }, []);

    return <div id="airbnb-card" className="airbnb-embed-frame" data-id="898714721319697343" data-view="home" data-hide-price="true"
            >
            <a href="https://www.airbnb.com/rooms/898714721319697343?check_in=2024-04-01&amp;check_out=2024-04-06&amp;guests=1&amp;adults=1&amp;s=66&amp;source=embed_widget">
                View On Airbnb
            </a>
            <a
                href="https://www.airbnb.com/rooms/898714721319697343?check_in=2024-04-01&amp;check_out=2024-04-06&amp;guests=1&amp;adults=1&amp;s=66&amp;source=embed_widget">
                Home in Homer · ★4.95 · 3 bedrooms · 6 beds · 3 baths
            </a>
        </div>
}

export default AirbnbCard