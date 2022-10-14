import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Events from '../pages/Events';
import Market from '../pages/Market';
import Chats from '../pages/Chats';

function Header() {
    return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/events" element={<Events />}/>
        <Route path="/market" element={<Market />}/>
        <Route path="/chats" element={<Chats />}/>
    </Routes>
    );
};

export default Header