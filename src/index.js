import React from 'react';
import ReactDOM from 'react-dom';

import './css/index.css';
import './css/theme.css';

// import App from './App';
import Login from './login';
import L2Dash from './l2-dashboard';
import L1Dash from './l1-dashboard';
import BrokerDash from './broker-dashboard';
import BrokerPolicies from './broker-policies';
import BrokerClaims from './broker-claims';
import Chat from './chat';

import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';


ReactDOM.render(
    <Router>
        <div>
        <Route exact path="/" component={Login}/>
        <Route exact path="/l2/dashboard" component={L2Dash}/>
        <Route exact path="/l1/dashboard" component={L1Dash}/>
        <Route exact path="/broker/dashboard" component={BrokerDash}/>
        <Route exact path="/broker/policies" component={BrokerPolicies}/>
        <Route exact path="/broker/claims" component={BrokerClaims}/>
        <Route path="/:userType/chat" component={Chat}/>
        </div>
    </Router>
, document.getElementById('root'));
registerServiceWorker();
