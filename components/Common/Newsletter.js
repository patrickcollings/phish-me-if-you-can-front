import React, { Component } from 'react';

class Newsletter extends Component {
    render() {
        return (
          <div className="newsletter-area ptb-100">
            <div className="container">
              <div
                className="row align-items-center"
                style={{ justifyContent: "center" }}
              >
                <div className="col-lg-5">
                  <div className="newsletter-wrap">
                    <h2>Thanks!</h2>

                    {/* <form
                      className="newsletter-form"
                      action="https://phishmeifyoucan.us7.list-manage.com/subscribe/post"
                      method="POST"
                      noValidate
                    >
                      <input
                        type="hidden"
                        name="u"
                        value="66b58fda85306ad2562755ec1"
                      />
                      <input type="hidden" name="id" value="88a5b5590b" />
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email"
                        name="EMAIL"
                        id="MERGE0"
                        autoCapitalize="off"
                        autoCorrect="off"
                        required
                      />
                      <button className="default-btn" type="submit">
                        Subscribe
                      </button>
                    </form> */}
                  </div>
                </div>

                <div className="col-lg-2">
                  <div className="newsletter-img">
                    <img src="/images/newsletter-img.png" alt="Image" />
                  </div>
                </div>
              </div>
            </div>

            <div className="newsletter-shape">
              <img src="/images/shape/newsletter-shape-one.png" alt="Image" />
              <img src="/images/shape/newsletter-shape-one.png" alt="Image" />
              <img src="/images/shape/newsletter-shape-two.png" alt="Image" />
            </div>
          </div>
        );
    }
}

export default Newsletter;