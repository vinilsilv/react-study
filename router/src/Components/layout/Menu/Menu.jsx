import React from "react";
import './Menu.css';

export default props => {
    return (
        <aside className="menu">
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}