import React from 'react';
import "./brown-bg.css"

function BrownBg(props) {
    return <div className="brown-bg">
        <h1 className='brown-bg-title'>{props.header}</h1>
        <p className='brown-bg-message'>{props.message}</p>
        <div>{props.content}</div>
    </div>
}

export default BrownBg;