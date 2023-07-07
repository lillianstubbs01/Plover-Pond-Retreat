import React from 'react';
import './DetailsCard.css'

function DetailsCard(props) {
    return (
        <div>
            <div className="details-header">{props.detailsHeader}</div>
            <div>{props.detailsBody}</div>
        </div>
    );
}

export default DetailsCard
