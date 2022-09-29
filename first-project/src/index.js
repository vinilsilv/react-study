import ReactDOM from "react-dom";
import React from 'react';
import './index.css';

import First from './components/base/First';

ReactDOM.render(
        <h1>
            <First></First>
            <First></First>
        </h1>,
        document.getElementById("root")
    );