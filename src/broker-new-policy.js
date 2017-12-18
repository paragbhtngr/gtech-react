import React, { Component } from 'react';
import { Navbar, Nav, Button, FormControl } from 'react-bootstrap';
import './css/l1-dashboard.css';
import Sidebar from './components/sidebar';
import ActivePolicyCard from './components/l1-active-policy-card';
import ActiveClaimCard from './components/l1-active-claim-card';


class L1Dash extends Component {
    
    render() {
        return (
            <div className="container-fluid" id="dashboard-container">
                <Navbar navbarLight bgLight fixedTop fluid>
                    <Navbar.Brand><h4>GTech Dashboard</h4></Navbar.Brand>
                    <Nav pullRight>
                        <Navbar.Text>l1emailaddress@mailprovider.com</Navbar.Text>
                    </Nav>
                </Navbar>
                <Sidebar userType="broker" activePage="dashboard"/>
                <div className="content">
                    <div style = {{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                        <h4>Create a New Policy</h4>
                    </div>
                    <br/>
                    <div className="card">
                        <h4>General Policy Details</h4>
                        <span>Policy Name:</span><FormControl/>
                        <span>Policy Validity Dates:</span>

                    </div>
                </div>
            </div>
        );
    }
}

export default L1Dash;