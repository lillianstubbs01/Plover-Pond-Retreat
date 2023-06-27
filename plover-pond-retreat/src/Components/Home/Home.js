import React from 'react';
import {Link} from 'react-router-dom';

import NavBar from "../NavBar/NavBar";

import './Home.css'

function Home() {
    return (
        <div>
            <NavBar/>
            {/*left container*/}
            <div>
                <div className="home-title">Plover Pond Retreat</div>
                <div className="home-descriptor">A 3 Bedroom 3 Bathroom getaway in the heart of Georgia. Enjoy, relax, and explore.</div>
                <Link to="/availabilities" style={{textDecoration: 'none'}}>
                    <button className="home-primary-btn">Plan Your Stay</button>
                </Link>
                <Link to="/contact" style={{textDecoration: 'none'}}>
                    <button className="home-secondary-btn">Contact Now</button>
                </Link>
            </div>
        </div>
    );
}

export default Home