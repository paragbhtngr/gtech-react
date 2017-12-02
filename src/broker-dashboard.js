import React, { Component } from 'react';
import './css/login.css';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

class Login extends Component {
    handleClick(e) {
        var company = document.getElementById('company').value;
        
        if (company === "L2") {
            console.log("LOGIN Company:", company);
            window.location = '/dashboard/l2';
        } 
        else if (company === "L1") {
            console.log("LOGIN Company:", company);
            window.location = '/dashboard/l1';
        }
        else if (company === "broker") {
            console.log("LOGIN Company:", company);
            window.location = '/dashboard/broker';
        }
        else {
            console.log("LOGIN Company: Invalid");
        }
    }

    render() {
        return (
            <div className="container" id="login-container">
                <div className="card" id="login-card">
                    <div className="card-body">
                        <h4 className="card-title">Volvox Login</h4>
                        
                        <InputGroup>
                            <InputGroup.Addon><i className="fa fa-briefcase" aria-hidden="true"></i></InputGroup.Addon>
                            <FormControl type="text" id="company" placeholder="Company" aria-label="company" />
                        </InputGroup>
                        <br/>
                        <InputGroup>
                            <InputGroup.Addon><i className="fa fa-envelope" aria-hidden="true"></i></InputGroup.Addon>
                            <FormControl type="text" placeholder="Email Address" aria-label="email" />
                        </InputGroup>
                        <br/>
                        <InputGroup>
                            <InputGroup.Addon><i className="fa fa-lock" aria-hidden="true"></i></InputGroup.Addon>
                            <FormControl type="password" placeholder="Password" aria-label="password" />
                        </InputGroup>
                        <br/>
                        <Button bsStyle="primary" onClick={(e) => this.handleClick(e)}> Login </Button>
                        <br/>
                        <br/>
                        <div className="login-info">
                            <span>Not registered? <a href="">Sign up</a></span>
                            <br/>
                            <span>Forgot Password? <a href="">Click here to reset it</a></span>            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;