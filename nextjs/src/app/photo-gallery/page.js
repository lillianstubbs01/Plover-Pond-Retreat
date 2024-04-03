'use client'

import React, { useState, useEffect } from 'react';
import { DismissRegular, ArrowRightRegular, ArrowLeftRegular } from '@fluentui/react-icons';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import NavBar from '../components/navbar/navbar';
import PhotoTile from '../components/photo-tile/photo-tile';
import image1 from '../assets/birds_eye.webp';
import image2 from '../assets/1.webp';
import image3 from '../assets/2.webp';
import image4 from '../assets/4.webp';
import image5 from '../assets/5.webp';
import image6 from '../assets/6.webp';
import image7 from '../assets/7.webp';
import image8 from '../assets/8.webp';
import image9 from '../assets/9.webp';
import image10 from '../assets/10.webp';
import image11 from '../assets/11.webp';
import image12 from '../assets/12.webp';
import image13 from '../assets/13.webp';
import image14 from '../assets/14.webp';
import image15 from '../assets/15.webp';
import image16 from '../assets/16.webp';
import image17 from '../assets/17.webp';
import image18 from '../assets/18.webp';
import image19 from '../assets/19.webp';
import image20 from '../assets/20.webp';
import image21 from '../assets/21.webp';
import image22 from '../assets/22.webp';
import image23 from '../assets/23.webp';
import image24 from '../assets/24.webp';
import image25 from '../assets/25.webp';
import image26 from '../assets/26.webp';
import image27 from '../assets/27.webp';
import image28 from '../assets/28.webp';
import image29 from '../assets/29.webp';
import image30 from '../assets/30.webp';
import image31 from '../assets/31.webp';
import image32 from '../assets/32.webp';
import image33 from '../assets/33.webp';
import image34 from '../assets/34.webp';
import image35 from '../assets/35.webp';
import image36 from '../assets/36.webp';
import image37 from '../assets/37.webp';
import image38 from '../assets/38.webp';
import image39 from '../assets/39.webp';
import image40 from '../assets/40.webp';
import image41 from '../assets/41.webp';
import image42 from '../assets/42.webp';
import image43 from '../assets/43.webp';
import image44 from '../assets/44.webp';
import image45 from '../assets/45.webp';
import image46 from '../assets/46.webp';
import image47 from '../assets/47.webp';
import image48 from '../assets/48.webp';
import image49 from '../assets/49.webp';
import image50 from '../assets/50.webp';
import image51 from '../assets/51.webp';
import image52 from '../assets/52.webp';
import image53 from '../assets/53.webp';
import image54 from '../assets/54.webp';
import image55 from '../assets/55.webp';
import image56 from '../assets/56.webp';
import image57 from '../assets/57.webp';
import image58 from '../assets/58.webp';
import image59 from '../assets/59.webp';
import image60 from '../assets/60.webp';
import image61 from '../assets/61.webp';
import image62 from '../assets/62.webp';
import image63 from '../assets/63.webp';
import image64 from '../assets/64.webp';
import image65 from '../assets/65.webp';
import image66 from '../assets/66.webp';
import image67 from '../assets/67.webp';
import image68 from '../assets/68.webp';
import image69 from '../assets/69.webp';
import image70 from '../assets/70.webp';
import image71 from '../assets/71.webp';
import image72 from '../assets/72.webp';
import image73 from '../assets/73.webp';
import image74 from '../assets/74.webp';
import image75 from '../assets/75.webp';
import image76 from '../assets/76.webp';
import image77 from '../assets/77.webp';
import image78 from '../assets/78.webp';
import image79 from '../assets/79.webp';
import image80 from '../assets/80.webp';
import image81 from '../assets/81.webp';
import image82 from '../assets/82.webp';
import image83 from '../assets/83.webp';
import image84 from '../assets/84.webp';
import image85 from '../assets/85.webp';
import image86 from '../assets/86.webp';
import image87 from '../assets/87.webp';
import image88 from '../assets/88.webp';
import image89 from '../assets/89.webp';
import image90 from '../assets/90.webp';
import image91 from '../assets/91.webp';


import './photo-gallery.css'


const allPhotos = [
    {"key": 0, "source": image1, "altText": "This is image 1."},
    {"key": 1, "source": image2, "altText": "This is image 2"},
    {"key": 2, "source": image3, "altText": "This is image 3"},
    {"key": 3, "source": image4, "altText": "This is image 4"},
    {"key": 4, "source": image5, "altText": "This is image 5"},
    {"key": 5, "source": image6, "altText": "This is image 6"},
    {"key": 6, "source": image7, "altText": "This is image 7"},
    {"key": 7, "source": image8, "altText": "This is image 8"},
    {"key": 8, "source": image9, "altText": "This is image 9"},
    {"key": 9, "source": image10, "altText": "This is image 10"},
    {"key": 10, "source": image11, "altText": "This is image 11"},
    {"key": 11, "source": image12, "altText": "This is image 12"},
    {"key": 12, "source": image13, "altText": "This is image 13"},
    {"key": 13, "source": image14, "altText": "This is image 14"},
    {"key": 14, "source": image15, "altText": "This is image 15"},
    {"key": 15, "source": image16, "altText": "This is image 16"},
    {"key": 16, "source": image17, "altText": "This is image 17"},
    {"key": 17, "source": image18, "altText": "This is image 18"},
    {"key": 18, "source": image19, "altText": "This is image 19"},
    {"key": 19, "source": image20, "altText": "This is image 20"},
    {"key": 20, "source": image21, "altText": "This is image 21"},
    {"key": 21, "source": image22, "altText": "This is image 22"},
    {"key": 22, "source": image23, "altText": "This is image 23"},
    {"key": 23, "source": image24, "altText": "This is image 24"},
    {"key": 24, "source": image25, "altText": "This is image 25"},
    {"key": 25, "source": image26, "altText": "This is image 26"},
    {"key": 26, "source": image27, "altText": "This is image 27"},
    {"key": 27, "source": image28, "altText": "This is image 28"},
    {"key": 28, "source": image29, "altText": "This is image 29"},
    {"key": 29, "source": image30, "altText": "This is image 30"},
    {"key": 30, "source": image31, "altText": "This is image 31"},
    {"key": 31, "source": image32, "altText": "This is image 32"},
    {"key": 32, "source": image33, "altText": "This is image 33"},
    {"key": 33, "source": image34, "altText": "This is image 34"},
    {"key": 34, "source": image35, "altText": "This is image 35"},
    {"key": 35, "source": image36, "altText": "This is image 36"},
    {"key": 36, "source": image37, "altText": "This is image 37"},
    {"key": 37, "source": image38, "altText": "This is image 38"},
    {"key": 38, "source": image39, "altText": "This is image 39"},
    {"key": 39, "source": image40, "altText": "This is image 40"},
    {"key": 40, "source": image41, "altText": "This is image 41"},
    {"key": 41, "source": image42, "altText": "This is image 42"},
    {"key": 42, "source": image43, "altText": "This is image 43"},
    {"key": 43, "source": image44, "altText": "This is image 44"},
    {"key": 44, "source": image45, "altText": "This is image 45"},
    {"key": 45, "source": image46, "altText": "This is image 46"},
    {"key": 46, "source": image47, "altText": "This is image 47"},
    {"key": 47, "source": image48, "altText": "This is image 48"},
    {"key": 48, "source": image49, "altText": "This is image 49"},
    {"key": 49, "source": image50, "altText": "This is image 50"},
    {"key": 50, "source": image51, "altText": "This is image 51"},
    {"key": 51, "source": image52, "altText": "This is image 52"},
    {"key": 52, "source": image53, "altText": "This is image 53"},
    {"key": 53, "source": image54, "altText": "This is image 54"},
    {"key": 54, "source": image55, "altText": "This is image 55"},
    {"key": 55, "source": image56, "altText": "This is image 56"},
    {"key": 56, "source": image57, "altText": "This is image 57"},
    {"key": 57, "source": image58, "altText": "This is image 58"},
    {"key": 58, "source": image59, "altText": "This is image 59"},
    {"key": 59, "source": image60, "altText": "This is image 60"},
    {"key": 60, "source": image61, "altText": "This is image 61"},
    {"key": 61, "source": image62, "altText": "This is image 62"},
    {"key": 62, "source": image63, "altText": "This is image 63"},
    {"key": 63, "source": image64, "altText": "This is image 64"},
    {"key": 64, "source": image65, "altText": "This is image 65"},
    {"key": 65, "source": image66, "altText": "This is image 66"},
    {"key": 66, "source": image67, "altText": "This is image 67"},
    {"key": 67, "source": image68, "altText": "This is image 68"},
    {"key": 68, "source": image69, "altText": "This is image 69"},
    {"key": 69, "source": image70, "altText": "This is image 70"},
    {"key": 70, "source": image71, "altText": "This is image 71"},
    {"key": 71, "source": image72, "altText": "This is image 72"},
    {"key": 72, "source": image73, "altText": "This is image 73"},
    {"key": 73, "source": image74, "altText": "This is image 74"},
    {"key": 74, "source": image75, "altText": "This is image 75"},
    {"key": 75, "source": image76, "altText": "This is image 76"},
    {"key": 76, "source": image77, "altText": "This is image 77"},
    {"key": 77, "source": image78, "altText": "This is image 78"},
    {"key": 78, "source": image79, "altText": "This is image 79"},
    {"key": 79, "source": image80, "altText": "This is image 80"},
    {"key": 80, "source": image81, "altText": "This is image 81"},
    {"key": 81, "source": image82, "altText": "This is image 82"},
    {"key": 82, "source": image83, "altText": "This is image 83"},
    {"key": 83, "source": image84, "altText": "This is image 84"},
    {"key": 84, "source": image85, "altText": "This is image 85"},
    {"key": 85, "source": image86, "altText": "This is image 86"},
    {"key": 86, "source": image87, "altText": "This is image 87"},
    {"key": 87, "source": image88, "altText": "This is image 88"},
    {"key": 88, "source": image89, "altText": "This is image 89"},
    {"key": 89, "source": image90, "altText": "This is image 90"},
    {"key": 90, "source": image91, "altText": "This is image 91"},
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
            <div className={openView ? 'photo-view' : 'photo-hidden'}>
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