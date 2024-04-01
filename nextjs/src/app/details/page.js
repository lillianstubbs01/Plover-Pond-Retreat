'use client'

import React, { useState} from 'react';
import NavBar from '../components/navbar/navbar';
import DetailsCard from '../components/details-card/details-card';
import Link from 'next/Link';
import Image from 'next/Image';
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
            <p>3 Bedroom, 2 Bathroom</p>
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
        <p>Welcome to your dream home! This one-of-a-kind property offers the perfect combination of waterfront living and craftsmanship. An impressive 21.127 private acres, partially fenced, with rolling pastures and two stocked ponds with fountains make this a truly special place for you to call home. </p>
        <p>Enjoy fishing off your back porch or deer hunting at its finest on your own land. Inside you will find top of line appliances paired with 2 huge gas burning fireplaces perfect for cozy nights at home. With vaulted ceilings this 3 bedroom 3 full bath home is sure to impress even the most discerning buyer. </p>
        <p>Additional features include a 3 car garage plus 2 car detached garage with shop as well as an upstairs man cave above the detached garage - perfect for weekend getaways without ever leaving home! And that's not all - this property also boasts 500 feet of creek along its property line making it ideal for those who love spending time outdoors or even a mini horse farm! Live life on the water in beautiful surroundings - don't miss out on this rare opportunity - schedule a showing today!</p>
    </div>


    // Constants for Location Card
    const api_key = "AIzaSyALgvI2svq7rRtxR-1yMkHxTTHn4eObOaM";
    const map_mode = "place";
    const map_params = "q=Homer,GA+United+States";
    const locationDescription = <div className='smaller-content details-text'>
        <p>Location Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Duis semper gravida ex, lacinia cursus sapien feugiat ac. Pellentesque eu ligula risus. Praesent in quam erat.
            Maecenas pharetra leo eget euismod pretium. In hac habitasse platea dictumst.</p>
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
        <p>Floor Plan Description:  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper gravida ex, lacinia cursus sapien feugiat ac. Pellentesque eu ligula risus. Praesent in quam erat. Maecenas pharetra leo eget euismod pretium. In hac habitasse platea dictumst.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper gravida ex, lacinia cursus sapien feugiat ac. Pellentesque eu ligula risus. Praesent in quam erat. Maecenas pharetra leo eget euismod pretium. In hac habitasse platea dictumst.
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