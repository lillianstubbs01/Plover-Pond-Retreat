import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './Components/Home/Home.js';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/details" element={<Home/>}/>
                <Route path="/availabilities" element={<Home/>}/>
                <Route path="/photo-gallery" element={<Home/>}/>
                <Route path="*" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router
