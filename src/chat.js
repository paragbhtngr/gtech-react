import React, { Component } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import './css/chat.css';

import Nav from './components/navbar';
import Sidebar from './components/sidebar';


class L1Dash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userType: /broker|l1|l2/.exec(window.location.href)[0],
            userEmailAddress: 'user.emailaddress@fakeemail.com', 
            chats: [
                {
                    unread: true,
                    group: false,
                    chatID: 12049512502,
                    policyTitle: "Apollo Munich Health Insurance",
                    with: 'from.emailadress@fakeemail.com',
                    chatlog: [
                        {
                            from: 'from.emailadress@fakeemail.com',
                            time: 1513029366986,
                            type: 'text',
                            body: 'Hi! This is a text message',
                        },
                        {
                            from: 'user.emailadress@fakeemail.com',
                            time: 1513029366986,
                            type: 'text',
                            body: 'Hello. This is me',
                        },
                    ],
                },
                {
                    unread: false,
                    group: false,
                    chatID: 12049512501,
                    policyTitle: "Apollo Munich Health Insurance",
                    with: 'from.emailadress@fakeemail.com',
                    chatlog: [
                        {
                            unread: true,
                            from: 'from.emailadress@fakeemail.com',
                            time: 1513029366986,
                            type: 'text',
                            body: 'Hi! This is a text message',
                        },
                        {
                            unread: true,
                            from: 'user.emailadress@fakeemail.com',
                            time: 1513029366986,
                            type: 'text',
                            body: 'Hello. This is me',
                        },
                    ],
                },
            ],
            activeChat: null,
            activeChatlog: [],
        };

        this.getInitialState = () => { return this.state };

    }

    setActiveChat(id) {
        this.setState({
            activeChat: id
        })
    }

    handleMessageClick() {
        console.log("HANDLE MESSAGE CLICK: ",this);
    }

    getActiveChat(id) {
        this.state.chats.map((chat) => {
            if (id === chat.chatID) {
                console.log("GET ACTIVE CHAT: ", chat.chatlog[0].body);
                return chat.chatlog[0].body;  
            }
            return null;
        })   
    }

    componentDidMount() {
        this.setState({
            activeChat: this.state.chats[0].chatID,
        });
    }
    
    render() {    

        return (
            <div className="container-fluid" id="dashboard-container">
                <Nav/>
                <Sidebar userType={this.state.userType} activePage="dashboard"/>
                <div className="chat-content">
                    <div className="message-sidebar">
                        <div>
                        <InputGroup className="search">
                            <FormControl type="text" id="search" placeholder={this.state.activeChat} aria-label="search" />
                            <InputGroup.Addon><i className="fa fa-search" aria-hidden="true"></i></InputGroup.Addon>
                        </InputGroup>
                        </div>
                        {this.state.chats.map((chat) => {
                            return (
                                <div className={chat.chatID === this.state.activeChat? "active chat-list-item": "chat-list-item"}>
                                    <a onClick={this.handleMessageClick.bind(this)}>
                                        <h4 className={chat.unread? "unread chat-title": "chat-title"}>{chat.policyTitle}</h4>
                                        <h5 className={chat.unread? "unread chat-email": "chat-email"}>{chat.with}</h5>
                                        <p className={chat.unread? "unread chat-text": "chat-text"}>{chat.chatlog[0].body}</p>
                                        <p className={chat.unread? "unread chat-text": "chat-text"}>{chat.chatID}</p>
                                    </a>
                                </div>
                            )
                        })}
                    </div>
                    <div className="chat-window">
                        <p>BODY: {this.getActiveChat(this.state.activeChat)
                        }</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default L1Dash;