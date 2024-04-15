'use client'

import React, { useState} from 'react';
import NavBar from '../components/navbar/navbar';
import DetailsCard from '../components/details-card/details-card';
import Link from 'next/Link.js';
import Image from 'next/Image.js';
import { HomeRegular, BedRegular, VehicleCarRegular, OvenRegular, CalendarRegular, ArrowRightRegular } from '@fluentui/react-icons';
import walkWayWebpSrc from '../assets/fence_walk_way.webp';
import birdsEyeSrc from '../assets/birds_eye.webp';

import "./details.css"

function Details() {
    // Constants for Property Details Card
    const propertyDetailsList = <div className="property-details-list smaller-content">
        <div className="icon-row">
            <HomeRegular className='details-icon'/>
            <p>Single Family Home</p>
        </div>
        <div className="icon-row">
            <BedRegular className='details-icon'/>
            <p>3 Bedroom, 3 Bathroom</p>
        </div>
        <div className="icon-row">
            <VehicleCarRegular className='details-icon'/>
            <p>8 Parking Spaces</p>
        </div>
        <div className="icon-row">
            <CalendarRegular className='details-icon'/>
            <p>Built in 2012</p>
        </div>
        <div className="icon-row">
            <OvenRegular className='details-icon'/>
            <p>Dishwasher, Double Oven</p>
        </div>
    </div>;
    const propertyDetailsDescription = <div className='details-text larger-content'>
        <p>Welcome to Plover Ponds Retreat, a charming farm house nestled in the serene countryside of Homer,
            GA with 20 acre land and kayak access. This picturesque retreat offers rustic charm and modern comforts
            amidst rolling green pastures and two stocked ponds. Inside, you will find a spacious family room overlooking
            a pond with easy access to covered porch, well-appointed kitchen, and comfortable bedrooms. Escape to a
            tranquil countryside getaway at Plover Ponds Retreat and create cherished memories.</p>
        <p>Gas grill is connected to the main natural gas line and is located on porch. Please clean it after use.
        </p>
        <p>    Paddle boat, One-seat and two-seat kayaks are available for use in the big pond. You can bring your own canoes or kayaks.
        </p>
        <p>
            Enjoy the TVs with Roku, pull out some board games and puzzles. Look through the bookshelves and drawers for your favorite games. Cornhole games and 3 in 1 (Air Hockey, Foosball, and Billiards) game table are available in garage.
        </p>
    </div>


    // Constants for Location Card
    const api_key = "AIzaSyALgvI2svq7rRtxR-1yMkHxTTHn4eObOaM";
    const map_mode = "place";
    const map_params = "q=Homer,GA+United+States";
    const locationDescription = <div className='smaller-content details-text'>
        <p>Centrally located to Lake Lanier, Helen, Athens, Chateau Elan Golf Club, and a variety of wineries, this
            beautiful place is only 15 minutes away from the Atlanta Safari Park and Tanger Outlet Mall. Chimney
            Oaks Golf Club is across the street and 5 mile’s away.</p>
        <p><b>Homer GA, 30547</b></p>
    </div>;
    const map = <iframe
        className="larger-content"
        frameBorder="0" style={{"border": "0"}}
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/${map_mode}?key=${api_key}&${map_params}`}
        allowFullScreen>
    </iframe>;


    // Constants for Floor Plan Card
    const floorPlan = <div className='details-image-container'>
        <Image className='details-image'
               src={birdsEyeSrc}
               alt="The Image Plover Pond Retreat's large exterior with the affiliated farm land"
        />
    </div>;
    const floorPlanDescription = <div className='details-text smaller-content'>
        <p>The house has over 3800 square feet, 3 car garages, and plenty of parking on paved spaces. The scenery is perfect for special events or simply a relaxing time away from busy life.

            The master suite has a king bed and massive bathroom. It also has private access to a sunroom. Guest bedroom has queen bed. Upstairs is equipped with one full bed, one twin bed, and a twin over full bunk bed. Two twin air mattress beds are available to setup.

            All rooms are equipped with at least four pillows, two sets of towels, and additional comforters/blankets for your convenience.

            The sofa set is all recliners except the middle one in the 3-seats.

            The kitchen is fully stocked with pans, pots, and utensils. There is a formal dining room, bar area, living room, and a huge family room that is also a sunroom to meet your needs.
        </p>
    </div>;


    // Constants for Jump Start Your Vacation Card
    const redirectButtons = <div className='smaller-content'>
        <p>To see our pricing check our availabilities. </p>
        <Link href='/availabilities' className='link-decoration'>
            <div className='icon-row arrow-btn'>
                <div className='icon-text'>See Availabilities</div>
                <ArrowRightRegular fontSize={30} style={{"color": "#261813"}}/>
            </div>
        </Link>
        <p>For more pictures of house try our photo gallery</p>
        <Link href='/photo-gallery' className='link-decoration'>
            <div className='icon-row arrow-btn'>
                <div className='icon-text'>Go To Photo Gallery</div>
                <ArrowRightRegular fontSize={30} style={{"color": "#261813"}}/>
            </div>
        </Link>
        <p>Have more questions? Get in touch with us. We are always happy to help.</p>
        <Link href='/contact' className='link-decoration'>
            <div className='icon-row arrow-btn'>
                <div className='icon-text'>Contact Now</div>
                <ArrowRightRegular fontSize={30} style={{"color": "#261813"}}/>
            </div>
        </Link>
    </div>;
    const vacationPhoto = <div className='details-image-container'>
        <Image className='details-image'
               src={walkWayWebpSrc}
               alt="A view of the home from the drive up to the house. You can see the fence leading up to the house,
           the detached garage, and the pond with a fountain bursting out."
        />
    </div>;

    return (
        <div>
            <NavBar/>
            <DetailsCard isWhite={true}
                         title='Property Details'
                         leftContent={propertyDetailsList}
                         rightContent={propertyDetailsDescription}
            />
            <DetailsCard isWhite={false}
                         title='Location'
                         leftContent={locationDescription}
                         rightContent={map}
            />
            <DetailsCard isWhite={true}
                         title='Floor Plan'
                         leftContent={floorPlan}
                         rightContent={floorPlanDescription}
            />
            <DetailsCard isWhite={false}
                         title='Jump Start Your Vacation'
                         leftContent={redirectButtons}
                         rightContent={vacationPhoto}
            />
        </div>
    );
}

export default Details