import React, { Component } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import './css/l1-dashboard.css';
import Sidebar from './components/sidebar';
import ActivePolicyCard from './components/l1-active-policy-card';
import ActiveClaimCard from './components/l1-active-claim-card';


class L2Dash extends Component {
    
    render() {
        return (
            <div className="container-fluid" id="dashboard-container">
            <Navbar navbarLight bgLight fixedTop fluid>
                <Navbar.Brand><h4>GTech Dashboard</h4></Navbar.Brand>
                <Nav pullRight>
                    <Navbar.Text>l2emailaddress@mailprovider.com</Navbar.Text>
                </Nav>
            </Navbar>
            <Sidebar userType="broker" activePage="claims"/>
                <div className="content">
                    <div style = {{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                        <h4>Currently Active Claims</h4>
                        <div>
                            <Button className="small" bsStyle="primary" id="all-claims" href="/broker/claims"> View All Claims</Button>
                            <span style={{paddingLeft: "15px"}}></span>
                            <Button className="small" bsStyle="primary" id="new-claim"> Create New Claim</Button>
                        </div>
                    </div>
                    <br/>
                    <div className="active-claims">
                        <ActiveClaimCard 
                            PolicyName="Apollo Munich Health Insurance"
                            PolicyNo="23109-4233-452335"
                            ClaimCurr="₹"
                            ClaimAmt="213414.00"
                        />
                        <ActiveClaimCard 
                            PolicyName="Apollo Munich Health Insurance"
                            PolicyNo="23109-4233-452335"
                            ClaimCurr="₹"
                            ClaimAmt="213414.00"
                        />
                    </div>
                    <br/>
                    <div style = {{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                        <h4>Past Claims</h4>
                    </div>
                    <br/>
                    <div className="active-claims">
                        <ActiveClaimCard 
                            PolicyName="Apollo Munich Health Insurance"
                            PolicyNo="23109-4233-452335"
                            ClaimCurr="₹"
                            ClaimAmt="213414.00"
                        />
                        <ActiveClaimCard 
                            PolicyName="Apollo Munich Health Insurance"
                            PolicyNo="23109-4233-452335"
                            ClaimCurr="₹"
                            ClaimAmt="213414.00"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default L2Dash;