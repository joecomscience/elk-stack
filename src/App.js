import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';

import Books from "./pages/Books";
import AddBook from "./pages/AddBook";
import BookDetail from "./pages/BookDetail";

function App() {
    return (
        <div>
            <Route exact path="/" component={Books}/>
            <Route path="/book/add" component={AddBook}/>
            <Route path="/book/detail/:id" component={BookDetail}/>
        </div>
    );
}

export default App;
