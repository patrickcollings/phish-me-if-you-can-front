import React, { Component } from 'react';
import Link from 'next/link';

class About extends Component {
    render() {
        return (
          <section className="about-area pt-100 pb-100">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="about-img">
                    <img src="/images/about-img-three.png" alt="Image" />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="about-content">
                    <span>About Phish Me If You Can</span>
                    <h2>The free scam training game</h2>
                    <p>
                      Have you or someone you know ever been scammed? Thanks to
                      the pandemic, scammers are everywhere.
                    </p>
                    <p>
                      The sad truth is the public doesn't know how to protect
                      themselves. We aren't taught in school, and there seems to
                      be a taboo when talking about being scammed.
                    </p>
                    <p>
                      This quick game is designed to show you some of the latest
                      email scams floating around the internet, so that next
                      time you read something online you'll first question it.
                    </p>

                    <div className="row">
                      <div className="col-lg-6 col-sm-6">
                        <ul>
                          <li>
                            <i className="flaticon-checked"></i>
                            Free to play
                          </li>
                          <li>
                            <i className="flaticon-checked"></i>
                            No registration
                          </li>
                        </ul>
                      </div>

                      <div className="col-lg-6 col-sm-6">
                        <ul>
                          <li>
                            <i className="flaticon-checked"></i>
                            Real examples of phishing emails
                          </li>
                          <li>
                            <i className="flaticon-checked"></i>
                            Monthly challenges
                          </li>
                        </ul>
                      </div>
                    </div>

                    <Link href="https://play.phishmeifyoucan.com">
                      <a className="default-btn">Play the Game</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
    }
}

export default About;