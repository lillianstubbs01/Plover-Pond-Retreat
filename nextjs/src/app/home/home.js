import Link from 'next/link';

import NavBar from "../components/navbar/navbar";
import './home.css'

function HomePage() {
    return (
        <div className='home'>
            <NavBar></NavBar>
            <div className='home-page'>
                <div className='home-image'>
                    <div className='home-title'>Plover Pond Retreat</div>
                    <div className='home-subtitle'>&quot;A home away from home&quot;</div>
                    <div className='home-overlay'></div>
                </div>
                <div className='home-divider' />
                <div className='home-footer'>
                    <div className='home-footer-container'>
                        <div className='home-summary'>
                            <div className='home-summary-title'>TRAVEL</div>
                            <div className='home-summary-body'>
                                Spend your dream vacation in the heart of Georgia. This home offers 3 bedrooms, 3 bathrooms, and enough amenities to meet your needs. Enjoy fishing off of the docks and make memories you won’t forget. Let Plover Pond Retreat be your home for the holidays.
                            </div>
                        </div>
                        <Link href='/availabilities' className='home-primary-btn'>
                            Plan Your Stay
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage