import React from "react";
import Content from "../Components/layout/Content/Content";
import Menu from "../Components/layout/Menu/Menu";
import './App.css';

export default props => {
    return (
        <div className="app">
            <Menu />
            <Content />
        </div>
    )
}