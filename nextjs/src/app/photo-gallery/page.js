'use client'

import React, { useState } from 'react';
import NavBar from '../components/navbar/navbar';
import PhotoTile from '../components/photo-tile/photo-tile';
import imageTest from '../assets/birds_eye.webp';
import image2 from '../assets/fence_walk_way.webp';
import image3 from '../assets/master_bedroom_narrow.webp'

import './photo-gallery.css'

const allPhotos = [
    {"key": 0, "source": imageTest, "altText": "This is image 1"},
    {"key": 1, "source": image2, "altText": "This is image 2"},
    {"key": 2, "source": image3, "altText": "This is image 3"},
    {"key": 3, "source": imageTest, "altText": "This is image 1"},
    {"key": 4, "source": image2, "altText": "This is image 2"},
    {"key": 5, "source": imageTest, "altText": "This is image 1"},
    {"key": 6, "source": image2, "altText": "This is image 2"}
];

function PhotoGallery() {
    const [openView, setOpenView] = useState(false);

    return (
        <div className='photo-gallery-page'>
            <NavBar/>
            <h1>Photo Gallery</h1>
            <div className='photo-tiles'>
                {allPhotos.map((photo) => {
                    return <PhotoTile
                        key={photo.key}
                        photoNumber={photo.key}
                        source={photo.source}
                        altText={photo.altText}
                        view={setOpenView}
                    />
                })}
            </div>
            <div className={openView ? 'photo-view' : 'hidden'}>
                <h1>HERE</h1>
            </div>
        </div>
    );
}

export default PhotoGallery