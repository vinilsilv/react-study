import React from "react";
import './Menu.css';

import { Link } from 'react-router-dom';

export default props => {
    return (
        <aside className="menu">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/param/123">Param #01</Link>
                    </li>
                    <li>
                        <Link to="/param/firstparam/secondparam">Param #02</Link>
                    </li>
                    <li>
                        <Link to="/notfound">Not Found</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}