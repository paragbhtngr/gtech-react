import React, { Component } from 'react';
import '../css/sidebar.css';

class Sidebar extends Component {

    render() {
        return (
            <div className="sidebar">
                <ul>
                    <li><a href={"/dashboard/"+this.props.userType}><i className="fa fa-lg fa-bar-chart" aria-hidden="true"></i> <h4>Dashboard</h4></a></li>
                    <li><a href={"/dashboard/"+this.props.userType+"/chat"}><i className="fa fa-lg fa-comments" aria-hidden="true"></i> <h4>Chat</h4></a></li>
                </ul>
            </div>
        );
    }
}

export default Sidebar;