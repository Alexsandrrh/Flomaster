import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import './assets/sass/main.scss';

ReactDOM.render(
    <Router>
        <Route path='/' component={App}/>
    </Router>,
    document.getElementById('root')
);
