import React, { Component } from 'react';
import '../css/sidebar.css';

class Sidebar extends Component {

    render() {
        return (
            <div className="sidebar">
                {
                    this.props.userType==="broker" ? (
                        <ul>
                            <li className={ this.props.activePage === "dashboard" ? "active" : "" }><a href={"/"+this.props.userType+"/dashboard"}><i className="fa fa-lg fa-bar-chart" aria-hidden="true"></i> <h4>Dashboard</h4></a></li>
                            <li className={ this.props.activePage === "policies" ? "active" : "" }><a href={"/"+this.props.userType+"/policies"}><i className="fa fa-lg fa-file-text" aria-hidden="true"></i> <h4>Policies</h4></a></li>
                            <li className={ this.props.activePage === "claims" ? "active" : "" }><a href={"/"+this.props.userType+"/claims"}><i className="fa fa-lg fa-medkit" aria-hidden="true"></i> <h4>Claims</h4></a></li>
                            <li className={ this.props.activePage === "chat" ? "active" : "" }><a href={"/"+this.props.userType+"/chat"}><i className="fa fa-lg fa-comments" aria-hidden="true"></i> <h4>Chat</h4></a></li>
                            <li className={ this.props.activePage === "logout" ? "active" : "" }><a href={"/"}><i className="fa fa-lg fa-power-off" aria-hidden="true"></i> <h4>Logout</h4></a></li>
                        </ul>
                        ) : (
                        <ul>
                            <li className={ this.props.activePage === "dashboard" ? "active" : "" }><a href={"/"+this.props.userType+"/dashboard"}><i className="fa fa-lg fa-bar-chart" aria-hidden="true"></i> <h4>Dashboard</h4></a></li>
                            <li className={ this.props.activePage === "chat" ? "active" : "" }><a href={"/"+this.props.userType+"/chat"}><i className="fa fa-lg fa-comments" aria-hidden="true"></i> <h4>Chat</h4></a></li>
                        </ul>
                    )
                }
            <img className="sidebar-image" src="../img/network.png" alt=""/>
            </div>
        );
    }
}

export default Sidebar;