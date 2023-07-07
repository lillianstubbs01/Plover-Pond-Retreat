import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home2 from './Components/Home2/Home2.js';
import DetailsPage from "./Components/Details/DetailsPage";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home2/>}/>
                <Route path="/details" element={<DetailsPage/>}/>
                <Route path="/availabilities" element={<Home2/>}/>
                <Route path="/photo-gallery" element={<Home2/>}/>
                <Route path="*" element={<Home2/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router
