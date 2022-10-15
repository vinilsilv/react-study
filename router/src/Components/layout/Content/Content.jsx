import React from "react";
import { Routes, Route } from 'react-router-dom'

import Home from '../../../Views/examples/Home';
import About from '../../../Views/examples/About';

import './Content.css';

export default props => {
    return (
        <main className="content">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </main>
    )
}