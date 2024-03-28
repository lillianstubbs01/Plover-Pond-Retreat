import React from 'react';
import "./brown-bg.css"

function BrownBg(props) {
    return <div className="brown-bg">
        <h1>{props.header}</h1>
        <p>{props.message}</p>
        <div>{props.content}</div>
    </div>
}

export default BrownBg;