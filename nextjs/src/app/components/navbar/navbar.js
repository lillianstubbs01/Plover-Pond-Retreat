'use client'

import Link from 'next/link';
import { useState } from 'react';
import { LineHorizontal3Filled, DismissFilled } from '@fluentui/react-icons';
import './navbar.css'

const links = [
    {'href': '/', 'name': 'Home'},
    {'href': '/details', 'name': 'Details'},
    {'href': '/availabilities', 'name': 'Availabilities'},
    {'href': '/photo-gallery', 'name': 'Photo Gallery'},
]

function NavBar() {

    const [navOpen, setNavOpen] = useState(false);

    const handleNavChange = (change) => {
        setNavOpen(change);
    } 

    return (
        <div className='navbar'onMouseLeave={() => {handleNavChange(false)}}>
            <div className='mobile-link-btn' onClick={() => {handleNavChange(!navOpen)}}>
                { !navOpen ?
                    <LineHorizontal3Filled fontSize={30} color='white'></LineHorizontal3Filled> :
                    <div style={{'display': 'none'}} />
                }
            </div>
            {navOpen ?
                <div className='mobile-link-container'>
                    <div className='mobile-nav-link dismiss'>
                        <DismissFilled fontSize={30} color='white' onClick={() => {handleNavChange(false)}}></DismissFilled>
                    </div>
                    {links.map((link) => (<Link href={link.href} className='mobile-nav-link'>
                        {link.name}
                    </Link>))}
                    <Link className='mobile-nav-link' href='/contact'>Contact</Link>
                </div> :
                <div style={{'display': 'none'}} />
            }
            <div className='link-container'>
                {links.map((link) => (<Link href={link.href} className='nav-link'>
                    {link.name}
                </Link>))}
            </div>
            <Link className='nav-link' href='/contact'>Contact</Link>
        </div>
    );
}

export default NavBar