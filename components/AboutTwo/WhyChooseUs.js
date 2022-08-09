import React, { Component } from 'react';

class WhyChooseUs extends Component {
    render() {
        return (
            <section className="choose-ue-area pt-100">
                <div className="container">
                    <div className="section-title">
                        <span>PhishMeIfYouCan</span>
                        <h2>So why should you play this game?</h2>
                        <p>It's simple.. So that you don't get scammed.</p>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="choose-content">
                                <ul>
                                    <li>
                                        <span>01 <i className="flaticon-technical-support"></i></span>
                                        <h3>Safe Security</h3>
                                        <p>Lorem ipsum dolor sit labore amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                    </li>
                                    <li className="ml">
                                        <span>02 <i className="flaticon-shield"></i></span>
                                        <h3>Technical Support</h3>
                                        <p>Lorem ipsum dolor sit labore amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                    </li>
                                    <li className="ml-25">
                                        <span>03 <i className="flaticon-support"></i></span>
                                        <h3>Live Support</h3>
                                        <p>Lorem ipsum dolor sit labore amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="choose-content">
                                <ul>
                                    <li>
                                        <span>04 <i className="flaticon-technical-support"></i></span>
                                        <h3>Free Try </h3>
                                        <p>Lorem ipsum dolor sit labore amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                    </li>

                                    <li className="ml">
                                        <span>05 <i className="flaticon-shield"></i></span>
                                        <h3>Advanced Tchnology</h3>
                                        <p>Lorem ipsum dolor sit labore amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                    </li>

                                    <li className="ml-25">
                                        <span>06 <i className="flaticon-support"></i></span>
                                        <h3>Competitive Pricing</h3>
                                        <p>Lorem ipsum dolor sit labore amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default WhyChooseUs;
