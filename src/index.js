import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'

import 'bulma/css/bulma.css';
import './index.css';

import store from './stores'
import App from './App';
import Menu from "./components/Menu";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png"
                         alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112"
                         height="28"/>
                </a>
            </div>
        </nav>
        <div className="columns">
            <div className="column is-one-fifth">
                <Menu />
            </div>
            <div className="column">
                <div className="container">
                    <App/>
                </div>
            </div>
        </div>

    </Provider>
    ,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
