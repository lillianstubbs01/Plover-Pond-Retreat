import React from 'react';
import NavBar from './../NavBar/NavBar';

import { Link } from 'react-router-dom';

import './HomeImage.css';

function HomeImage() {
    return (
        <div>
            <NavBar />
            <div className="home-image">
                <div className="home-image-overlay"></div>
                <div className="home-image-img"></div>
                <div className="home-image-title">Plover Pond Retreat</div>
                <div className="home-footer">
                    {/*<div className="home-footer-item">*/}
                    {/*    <div className="home-footer-header">Header 1 Test</div>*/}
                    {/*    <div className="home-footer-body">Lorem Ipsum Dolores Lorem Ipsum Dolores Lorem Ipsum Dolores Lorem Ipsum Dolores Lorem Ipsum Dolores </div>*/}
                    {/*    <Link to="/" className="home-secondary-btn">*/}
                    {/*        <button>Go Now</button>*/}
                    {/*    </Link>*/}
                    {/*</div>*/}
                    {/*<div className="home-footer-item">Header 2 Test</div>*/}
                </div>
            </div>
        </div>

    );
}

export default HomeImage