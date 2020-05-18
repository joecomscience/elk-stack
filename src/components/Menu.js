import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux'

import './Menu.css'
// import {getBooks} from "../actions";
import {useSelector} from "react-redux";
import {LOAD_BOOKS} from "../constants/action-types";

export const Menu = () => {
    const dispatch = useDispatch();
    const books = useSelector(state => state.books);

    useEffect(() => {
        dispatch({type: LOAD_BOOKS});
    }, []);
    
    if (books.length !== 0) {
        return (
            <aside className="menu">
                <p className="menu-label">
                    General {books[0].title}
                </p>
                <ul className="menu-list">
                    <li><a>Dashboard</a></li>
                    <li><a>Customers</a></li>
                </ul>
            </aside>
        );
    }
    return 'loading';
};

export default Menu;
