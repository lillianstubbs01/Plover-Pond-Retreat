'use client'

import React from 'react';
import Image from 'next/image';

import './photo-tile.css'

function PhotoTile(props) {
    return <div className='image' onClick={() => props.view(true)}>
        <Image
            src={props.source}
            alt={props.altText}
            height="20vw"
        />
    </div>
}

export default PhotoTile;