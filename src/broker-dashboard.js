import React, { Component } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
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
                        <h4>Active Policies</h4>
                        <div>
                            <Button className="small" bsStyle="primary" id="all-policies" href="/broker/policies"> View All Active Policies</Button>
                            <span style={{paddingLeft: "15px"}}></span>
                            <Button className="small" bsStyle="primary" id="new-policy" href="/broker/newpolicy"> Create New Policy</Button>
                        </div>
                    </div>
                    <br/>
                    <div className="active-policies">
                        <ActivePolicyCard 
                            PolicyName="Apollo Munich Health Insurance"
                            PolicyNo="23109-4233-452335"
                            ClaimCurr="₹"
                            ClaimAmt="213414.00"
                            PercentClaimed="48"
                        />
                        <ActivePolicyCard 
                            PolicyName="HDFC Ergo Medisure Classic"
                            PolicyNo="21229-4211-012923"
                            ClaimCurr="₹"
                            ClaimAmt="12564.00"
                            PercentClaimed="24"
                        />
                        <ActivePolicyCard 
                            PolicyName="Apollo Munich Health Insurance"
                            PolicyNo="23109-4233-452335"
                            ClaimCurr="₹"
                            ClaimAmt="213414.00"
                            PercentClaimed="85"
                        />
                    </div>
                    <br/>
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

export default L1Dash;