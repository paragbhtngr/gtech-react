import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom'


ReactDOM.render(
    <Router>
        <div>
        <Route exact path="/" component={App}/>
        <Route path="/news" component={App}/>
        </div>
    </Router>
, document.getElementById('root'));
registerServiceWorker();
