import React, { Component } from 'react';
import './css/login.css';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import ParticleCanvas from './components/particle-canvas';

class Login extends Component {
    handleClick(e) {
        var company = document.getElementById('company').value;
        
        if (company === "L2" || company === "l2" ) {
            console.log("LOGIN Company:", company);
            window.location = '/l2/dashboard';
        } 
        else if (company === "L1" || company === "l1" ) {
            console.log("LOGIN Company:", company);
            window.location = '/l1/dashboard';
        }
        else if (company === "broker") {
            console.log("LOGIN Company:", company);
            window.location = '/broker/dashboard';
        }
        else {
            console.log("LOGIN Company: Invalid");
        }
    }

    render() {
        return (
            <div>
                <ParticleCanvas/>
                <div className="container" id="login-container">
                    
                    <div className="card animated fadeInUpBig" id="login-card">
                        <div className="card-body">
                            <img className="volvox-title-image" src="./img/volvox.png" alt=""/>
                            <h3 className="card-title volvox-title">Volvox</h3>
                            <br/>
                            <InputGroup>
                                <FormControl type="text" id="company" placeholder="Company" aria-label="company" />
                                <InputGroup.Addon><i className="fa fa-briefcase" aria-hidden="true"></i></InputGroup.Addon>
                            </InputGroup>
                            <br/>
                            <InputGroup>
                                <FormControl type="text" placeholder="Email Address" aria-label="email" />
                                <InputGroup.Addon><i className="fa fa-envelope" aria-hidden="true"></i></InputGroup.Addon>
                            </InputGroup>
                            <br/>
                            <InputGroup>
                                <FormControl type="password" placeholder="Password" aria-label="password" />
                                <InputGroup.Addon><i className="fa fa-lock" aria-hidden="true"></i></InputGroup.Addon>
                            </InputGroup>
                            <br/>
                            <Button bsStyle="primary" id="login-button" onClick={(e) => this.handleClick(e)}> Login </Button>
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
            </div>
        );
    }
}

export default Login;