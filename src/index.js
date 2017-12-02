import React from 'react';
import ReactDOM from 'react-dom';

import './css/index.css';
import './css/theme.css';

// import App from './App';
import Login from './login';
import L2Dash from './l2-dashboard';
import L1Dash from './l1-dashboard';
import BrokerDash from './broker-dashboard';

import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';


ReactDOM.render(
    <Router>
        <div>
        <Route exact path="/" component={Login}/>
        <Route path="/dashboard/l2" component={L2Dash}/>
        <Route path="/dashboard/l1" component={L1Dash}/>
        <Route path="/dashboard/broker" component={BrokerDash}/>
        </div>
    </Router>
, document.getElementById('root'));
registerServiceWorker();
