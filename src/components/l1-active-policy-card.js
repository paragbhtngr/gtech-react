import React, { Component } from 'react';
import { Modal, Tabs, Tab } from 'react-bootstrap';
import { Chart, Doughnut } from 'react-chartjs-2';

var originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
  draw: function() {
    originalDoughnutDraw.apply(this, arguments);
    
    var chart = this.chart.chart;
    var ctx = chart.ctx;
    var width = chart.width;
    var height = chart.height;

    var fontSize = (height / 80).toFixed(2);
    ctx.font = fontSize + "em Open Sans";
    ctx.textBaseline = "middle";

    var text = chart.config.data.text,
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height / 2 + 6;

    ctx.fillText(text, textX, textY);
  }
});

class ActivePolicyCard extends Component {
    constructor(props) {
        super(props);
        this.state = {showModal: false};
        
        this.getInitialState = () => { return { showModal: false } };
        
        this.close = () => { 
            console.log("closing active policy card modal");
            this.setState({ showModal: false });
        };
        this.open = () => { 
            console.log("opening active policy card modal");
            this.setState({ showModal: true });
        };
    }
    
    render() {
        return ( 
            <div className="card active-policy">        
            <p style={{fontSize: "15px", marginBottom: "0px"}} >{ this.props.PolicyName }</p>
            <p style={{fontSize: "15px"}} >Policy No. { this.props.PolicyNo }</p>

            <p style={{marginBottom: "0px"}}>Claimable Amount</p>
            <h2 style={{marginTop: "0px"}} >{ this.props.ClaimCurr} { this.props.ClaimAmt }</h2>

            <Doughnut 
                data= {{
                    datasets: [{
                        label: '# of Votes',
                        data: [(this.props.PercentClaimed), (100 - this.props.PercentClaimed),0],
                        backgroundColor: [
                            '#2b5297',
                            '#cecece',
                            '#000000'
                        ],
                    }],
                    text: (this.props.PercentClaimed+'%')
                }}
                options={{
                    cutoutPercentage: 70
                }}
            />

            <a className="policy-more" onClick={this.open}>
            <span>
            <i className="fa fa-lg fa-plus-circle" aria-hidden="true"></i> 
            <p 
            style= {{
                display:'inline'
            }}
            >  View Policy Details</p>
            </span>
            </a>   
            
            <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
                <Modal.Title>{ this.props.PolicyName }</Modal.Title>
            </Modal.Header>
            
            <Modal.Body>
                <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                    <Tab eventKey={1} title="More Info">
                    <br/>
                    <div class="feature-grid">
                        <div class="feature-panel">
                            <h4>Must Have Features</h4>
                            <ul>
                                <li className="yes">Day Care Treatments</li>
                                <li className="yes">Benefits if you don't claim</li>
                                <li className="yes">Organ Donor</li>
                                <li className="yes">Expenses after discharge</li>
                                <li className="yes">Expenses before admission</li>
                                <li className="yes">Restore benefits</li>
                            </ul>
                        </div>
                        <div class="feature-panel">
                            <h4>Good-To-Have Features</h4>
                            <ul>
                                <li className="no">Regular Medical Expenses (OPD)</li>
                                <li className="yes">Daily Hospitalization Allowance</li>
                                <li className="no">Health Checkup</li>
                                <li className="yes">Emergency Ambulance</li>
                                <li className="yes">Home Hospitalization</li>
                                <li className="no">Ayurveda/Homeopathy</li>
                            </ul>
                        </div>
                        <div class="feature-panel">
                            <h4>Value Added Features</h4>
                            <ul>
                                <li className="no">Eye Cover</li>
                                <li className="no">Dental Cover</li>
                                <li className="no">Recovery Benefit</li>
                                <li className="no">Critical Illness Benefit</li>
                            </ul>
                        </div>
                    </div>     
                    </Tab>
                    <Tab eventKey={2} title="What is Covered">Tab 2 content</Tab>
                    <Tab eventKey={3} title="Projected Premiums">Tab 3 content</Tab>
                    <Tab eventKey={4} title="Policy Doc">Tab 3 content</Tab>
                </Tabs>       
            </Modal.Body>
            </Modal>
            </div>
            
        );
    }
}

export default ActivePolicyCard;