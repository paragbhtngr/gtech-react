import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../css/theme.css';


class DashNav extends Component {

    render() {
        return (
            <Navbar navbarLight bgLight fixedTop fluid>
                <Navbar.Brand><h4>GTech Dashboard</h4></Navbar.Brand>
                <Nav pullRight>
                    <Navbar.Text>l2emailaddress@mailprovider.com</Navbar.Text>
                </Nav>
            </Navbar>
        );
    }
}

export default DashNav;