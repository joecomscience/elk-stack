import React from 'react';
import './Menu.css'

const Menu = () => {
    return (
        <aside className="menu">
            {/*<p className="menu-label">*/}
            {/*    General*/}
            {/*</p>*/}
            <ul className="menu-list">
                <li><a>Dashboard</a></li>
                <li><a>Customers</a></li>
            </ul>
        </aside>
    );
};

export default Menu;
