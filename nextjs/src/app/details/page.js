import React from 'react';
import NavBar from '../components/navbar/navbar';
import DetailsCard from '../components/details-card/details-card';
import Link from 'next/Link';

function Details() {
    // Constants for Property Details Card
    const propertyDetailsList = <ul>
        <li>Single Family Home</li>
        <li>3 Bedroom, 2 Bathroom</li>
        <li>8 Parking Spaces</li>
        <li>Dishwasher, Double Oven, Gas Water Heater</li>
        <li>Built in 2012</li>
    </ul>;
    const propertyDetailsDescription = <div>
        <p>Welcome to your dream home! This one-of-a-kind property offers the perfect combination of waterfront living and craftsmanship. An impressive 21.127 private acres, partially fenced, with rolling pastures and two stocked ponds with fountains make this a truly special place for you to call home. </p>
        <p>Enjoy fishing off your back porch or deer hunting at its finest on your own land. Inside you will find top of line appliances paired with 2 huge gas burning fireplaces perfect for cozy nights at home. With vaulted ceilings this 3 bedroom 3 full bath home is sure to impress even the most discerning buyer. </p>
        <p>Additional features include a 3 car garage plus 2 car detached garage with shop as well as an upstairs man cave above the detached garage - perfect for weekend getaways without ever leaving home! And that's not all - this property also boasts 500 feet of creek along its property line making it ideal for those who love spending time outdoors or even a mini horse farm! Live life on the water in beautiful surroundings - don't miss out on this rare opportunity - schedule a showing today!</p>
    </div>

    // Constants for Location Card
    const api_key = "AIzaSyALgvI2svq7rRtxR-1yMkHxTTHn4eObOaM";
    const map_mode = "place";
    const map_params = "q=Homer,GA+United+States";
    const locationDescription = <p>Location Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Duis semper gravida ex, lacinia cursus sapien feugiat ac. Pellentesque eu ligula risus. Praesent in quam erat.
        Maecenas pharetra leo eget euismod pretium. In hac habitasse platea dictumst.<b>Homer GA, 30547</b></p>;
    const map = <iframe
        width="450"
        height="250"
        frameBorder="0" style={{"border": "0"}}
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/${map_mode}?key=${api_key}&${map_params}`}
        allowFullScreen>
    </iframe>;

    // Constants for Floor Plan Card
    const floorPlan = <div>Insert Floor Plan</div>
    const floorPlanDescription = <p>Floor Plan Description:  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper gravida ex, lacinia cursus sapien feugiat ac. Pellentesque eu ligula risus. Praesent in quam erat. Maecenas pharetra leo eget euismod pretium. In hac habitasse platea dictumst.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper gravida ex, lacinia cursus sapien feugiat ac. Pellentesque eu ligula risus. Praesent in quam erat. Maecenas pharetra leo eget euismod pretium. In hac habitasse platea dictumst.
    </p>;

    // Constants for Jump Start Your Vacation Card
    const redirectButtons = <div>
        <p>To see our pricing check our availabilities. </p>
        <Link href='/availabilities'>
            <button>See Availabilities</button>
        </Link>
        <p>For more pictures of house try our photo gallery</p>
        <Link href='/photo-gallery'>
            <button>Go To Photo Gallery</button>
        </Link>
        <p>Have more questions? Get in touch with us. We are always happy to help.</p>
        <Link href='/contact'>
            <button>Contact Now</button>
        </Link>
    </div>;
    const vacationPhoto = <div>Insert Image Here</div>;

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