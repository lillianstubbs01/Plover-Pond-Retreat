'use client'

import { Suspense } from 'react';
import Image from 'next/Image';
import { usePathname, useSearchParams, useRouter } from 'next/Navigation';


import './photo-tile.css'


function PhotoTile(props) {
    let searchParams = useSearchParams();
    const path = usePathname();
    const { replace } = useRouter();

    function handleParams(photoId) {
        let params = new URLSearchParams(searchParams);
        if (photoId >= 0) {
            params.set('photoId', photoId);
        }
        replace(`${path}?${params}`, {scroll: false});
    }

    return <Suspense fallback={<p>Loading...</p>}>
            <button className='image' disabled={props.view} tabIndex={props.view ? -1 : 0} onClick={() => {
            props.setOpenView(true);
            handleParams(props.photoNumber);
            props.setOpenImage(props.photoNumber);
        }}>
            <Image className='image-raw'
                src={props.source}
                alt={props.altText}
                height="20vw"
            />
        </button>
    </Suspense>
}

export default PhotoTile;