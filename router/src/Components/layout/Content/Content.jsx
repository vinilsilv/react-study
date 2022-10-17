import React from "react";
import { Routes, Route } from 'react-router-dom'

import Home from '../../../Views/examples/Home';
import About from '../../../Views/examples/About';
import Param from "../../../Views/examples/Param";

import './Content.css';
import NotFound from "../../../Views/examples/NotFound";

export default props => {
    return (
        <main className="content">
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/param/:id" element={<Param />} />
                <Route path="/param/:id/:test" element={<Param />} />
                <Route path="/" element={<Home />} /> 
                <Route path="*" element={<NotFound />} /> 
            </Routes>
        </main>
    )
}