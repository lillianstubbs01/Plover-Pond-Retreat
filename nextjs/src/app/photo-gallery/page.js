'use client'

import React, { useState, useEffect } from 'react';
import { DismissRegular, ArrowRightRegular, ArrowLeftRegular } from '@fluentui/react-icons';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import NavBar from '../components/navbar/navbar';
import PhotoTile from '../components/photo-tile/photo-tile';
import imageTest from '../assets/birds_eye.webp';
import image2 from '../assets/fence_walk_way.webp';
import image3 from '../assets/master_bedroom_narrow.webp'

import './photo-gallery.css'

const allPhotos = [
    {"key": 0, "source": imageTest, "altText": "This is image 0. hallo"},
    {"key": 1, "source": image2, "altText": "This is image 1"},
    {"key": 2, "source": image3, "altText": "This is image 2"},
    {"key": 3, "source": imageTest, "altText": "This is image 3"},
    {"key": 4, "source": image2, "altText": "This is image 4"},
    {"key": 5, "source": imageTest, "altText": "This is image 5"},
    {"key": 6, "source": image2, "altText": "This is image 6"}
];

function PhotoGallery() {
    const [openView, setOpenView] = useState(false);
    const [openImage, setOpenImage] = useState(0);
    const photoCount = allPhotos.length;
    let searchParams = useSearchParams();
    const path = usePathname();
    const { replace } = useRouter();

    useEffect(() => {
        if (searchParams.get('photoId') !== null) {
            let photoId = Number(searchParams.get('photoId'));
            if (photoId >= 0 && photoId < allPhotos.length) {
                setOpenImage(photoId);
                setOpenView(true);
            }
        }
    }, [searchParams])

    function handleParams(photoId) {
        let params = new URLSearchParams(searchParams);
        if (photoId >= 0) {
            params.set('photoId', photoId);
        } else {
            params.delete('photoId');
        }
        replace(`${path}?${params}`);
    }

    function handleArrowRight(photoId) {
        if (photoId < photoCount - 1) {
            handleParams(photoId + 1);
        }
    }

    function handleArrowLeft(photoId) {
        if (photoId > 0) {
            handleParams(photoId - 1);
        }
    }

    function handleClose() {
        setOpenView(false);
        replace(`${path}`)
    }

    return (
        <div className='photo-gallery-page'>
            <NavBar/>
            <h1 className='photo-gallery-title'>Photo Gallery</h1>
            <div className='photo-tiles'>
                {allPhotos.map((photo) => {
                    return <PhotoTile
                        key={photo.key}
                        photoNumber={photo.key}
                        source={photo.source}
                        altText={photo.altText}
                        setOpenView={setOpenView}
                        view={openView}
                        setOpenImage={setOpenImage}

                    />
                })}
            </div>
            <div className={openView ? 'photo-view' : 'hidden'}>
                <button className="close photo-button" onClick={() => handleClose()}>
                    <DismissRegular className="photo-icon"/>
                </button>
                <button className="photo-button arrow-left" onClick={() => handleArrowLeft(openImage)}>
                    <ArrowLeftRegular className="photo-icon"/>
                </button>
                <Image className="open-image"
                       src={allPhotos[openImage].source}
                       alt={allPhotos[openImage].altText}
                />
                <button className="photo-button arrow-right" onClick={() => handleArrowRight(openImage)}>
                    <ArrowRightRegular className="photo-icon"/>
                </button>
                <p className="counter">{openImage + 1}/{photoCount}</p>
            </div>
        </div>
    );
}

export default PhotoGallery