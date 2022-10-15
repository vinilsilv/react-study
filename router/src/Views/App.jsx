import React from "react";
import { BrowserRouter } from 'react-router-dom'
import Menu from "../Components/layout/Menu/Menu";
import Content from "../Components/layout/Content/Content";
import './App.css';

export default props => {
    return (
        <div className="app">
            <BrowserRouter>
                <Menu />
                <Content />
            </BrowserRouter>
        </div>
    )
}