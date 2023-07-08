import React from 'react';
import { HomeRegular, BedRegular, VehicleCarRegular, OvenRegular, CalendarLtrRegular } from "@fluentui/react-icons";

import './PropertyDetails.css'

function PropertyDetails() {
    return (
        <div className='property-details'>
            <div className='property-details-wrapper'>
                <div className='property-details-header'>Property Details</div>
                <div className='property-details-content'>
                    <div className='property-details-icon-col'>
                        <div className='property-details-icon-row'>
                            <HomeRegular className='property-details-icon'></HomeRegular>
                            <div>Single Family Home</div>
                        </div>
                        <div className='property-details-icon-row'>
                            <BedRegular className='property-details-icon'></BedRegular>
                            <div>3 Bedroom, 3 Bathroom</div>
                        </div>
                        <div className='property-details-icon-row'>
                            <VehicleCarRegular className='property-details-icon'></VehicleCarRegular>
                            <div>8 Parking Spaces</div>
                        </div>
                        <div className='property-details-icon-row'>
                            <OvenRegular className='property-details-icon'></OvenRegular>
                            <div>Dishwasher, Double Oven, Gas Water Heater</div>
                        </div>
                        <div className='property-details-icon-row'>
                            <CalendarLtrRegular className='property-details-icon'></CalendarLtrRegular>
                            <div>Built in 2012</div>
                        </div>
                    </div>
                    <div className='property-details-body'>
                        <p>Welcome to your dream home! This one-of-a-kind property offers the perfect combination of waterfront living and craftsmanship. An impressive 21.127 private acres, partially fenced, with rolling pastures and two stocked ponds with fountains make this a truly special place for you to call home.
                        </p>
                        <p>Enjoy fishing off your back porch or deer hunting at its finest on your own land. Inside you will find top of line appliances paired with 2 huge gas burning fireplaces perfect for cozy nights at home. With vaulted ceilings this 3 bedroom 3 full bath home is sure to impress even the most discerning buyer.
                        </p>
                        <p>Additional features include a 3 car garage plus 2 car detached garage with shop as well as an upstairs man cave above the detached garage - perfect for weekend getaways without ever leaving home! And that's not all - this property also boasts 500 feet of creek along its property line making it ideal for those who love spending time outdoors or even a mini horse farm! Live life on the water in beautiful surroundings - don't miss out on this rare opportunity - schedule a showing today!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default  PropertyDetails