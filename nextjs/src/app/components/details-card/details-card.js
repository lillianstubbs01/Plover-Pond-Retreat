import React from 'react';
import './details-card.css';

function DetailsCard(props) {
    return (
        <div className={props.isWhite ? 'card-background white-background' : 'card-background brown-background'}>
            <div className='card-content'>
                <h1>{props.title}</h1>
                <div className='sub-content'>
                    <div className='left-content'>
                        {props.leftContent}
                    </div>
                    <div className='right-content'>
                        {props.rightContent}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsCard
