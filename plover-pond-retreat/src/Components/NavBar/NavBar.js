import React from 'react';
import {Link} from 'react-router-dom';

import './NavBar.css'

function NavBar() {
    return (
        <div className="navbar">
            <div className="link-container">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/details">Details</Link>
                <Link className="nav-link" to="/availabilities">Availabilities</Link>
                <Link className="nav-link" to="/photo-gallery">Photo Gallery</Link>
            </div>
            <div className="link-container">
                <Link className="nav-link" to="/contact">Contact</Link>
            </div>
        </div>
    );
}

export default NavBar