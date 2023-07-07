import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import HomeImage from './Components/HomeImage/HomeImage.js';
import DetailsPage from "./Components/Details/DetailsPage";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeImage/>}/>
                <Route path="/details" element={<DetailsPage/>}/>
                <Route path="/availabilities" element={<HomeImage/>}/>
                <Route path="/photo-gallery" element={<HomeImage/>}/>
                <Route path="*" element={<HomeImage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router
