import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

class ActiveClaimCard extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
        
        this.getInitialState = () => { return { open: false } };
        
        this.close = () => { 
            console.log("closing active policy card modal");
            this.setState({ open: false });
        };
        this.open = () => { 
            console.log("opening active policy card modal");
            this.setState({ open: true });
        };
    }
    
    render() {
        return ( 
            <div className="card active-claim-card">
                <div className="active-claim-card-inner">
                    <div>
                        <span>Claim ID: 2342352626</span> 
                        <span>Date filed: 12/09/2017</span>
                        <span>Filed under policy: { this.props.PolicyName }</span>
                        <span>Policy Number: { this.props.PolicyNo }</span>
                    </div>
                    <a className="claim-more" onClick={() => this.setState({ open: !this.state.open })}>
                        <span>
                            <i className="fa fa-lg fa-plus-circle" aria-hidden="true"></i> 
                            <p style= {{ display:'inline' }}>  View Policy Details</p>
                        </span>
                    </a>
                </div>  

                <Panel collapsible expanded={this.state.open}>
                    <div className="claim-timeline">
                        <div className="claim-event">
                            <i className="fa fa-check-circle fa-lg" aria-hidden="true" style={{color: "green", zIndex: "20", background: "white"}}></i> 
                            <div className="line" style={{
                                background: "grey",
                                width: "2px",
                                height: "calc(50% + 22.5px)",
                                top: "50%",
                                left: "7px",
                                zIndex: "1",
                                position: "absolute"
                            }}
                            ></div>
                            <div className="event-details">
                            <h5><b>Claim Inititation</b></h5>
                            <p>Completed on 12/3/2017</p>
                            </div>        
                        </div>
                        <br/>
                        <div className="claim-event">
                            <i className="fa fa-exclamation-circle fa-lg" aria-hidden="true" style={{color: "orange", zIndex: "20", background: "white"}}></i> 
                            <div className="line" style={{
                                background: "grey",
                                width: "2px",
                                height: "calc(100% + 22.5px)",
                                top: "0",
                                left: "7px",
                                zIndex: "1",
                                position: "absolute"
                            }}
                            ></div>
                            <div className="event-details">
                            <h5><b>Claim Processing</b></h5>
                            <p>Completed on 12/3/2017</p>
                            <p><span style={{color: "red"}}>Needs intervention: </span> <a>Click here to chat with broker</a></p>
                            </div>        
                        </div>
                        <br/>
                        <div className="claim-event">
                            <i className="fa fa-circle fa-lg" aria-hidden="true" style={{color: "silver", zIndex: "20", background: "white"}}></i> 
                            <div className="line" style={{
                                background: "grey",
                                width: "2px",
                                height: "calc(50% + 22.5px)",
                                bottom: "50%",
                                left: "7px",
                                zIndex: "1",
                                position: "absolute"
                            }}
                            ></div>
                            <div className="event-details">
                                <h5><b>Claim Payment</b></h5>
                                <p>Pending on completion of processing</p>
                            </div>        
                        </div>
                    </div>
                </Panel>   

            </div>
            
        );
    }
}

export default ActiveClaimCard;