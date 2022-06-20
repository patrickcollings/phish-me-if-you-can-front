import { useMutation } from "@apollo/client";
import { useState } from "react";
import { createUserQuery } from "../../utils/constants";
import RegisterForm from "./RegisterForm";

import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
console.log(publicRuntimeConfig.GAME_URL);

const MainBanner = () => {  
    return (
      <section className="main-banner-area main-banner-area-one">
        <div className="container-fluid">
          <div className="row align-items-center" style={{ padding: "0 1rem" }}>
            <div className="col-lg-6">
              <div className="banner-text">
                <h1>Phish Me If You Can
                </h1>
                <p>
                  The last line of defence is you. Train yourself to become more
                  aware of phishing scams with this free simulation.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              {/* <RegisterForm /> */}
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <a href={publicRuntimeConfig.GAME_URL}>
                  <button type="submit" className="default-btn btn-two" style={{fontSize: '33px'}}>
                    Start Test
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="over-shape">
          <img src="/images/home-one/shape/animate1.png" alt="Image" />
          <img src="/images/home-one/shape/animate2.png" alt="Image" />
          <img src="/images/home-one/shape/animate3.png" alt="Image" />
        </div>

        <div className="white-shape">
          <img src="/images/home-one/bottom-shape.png" alt="Image" />
        </div>
      </section>
    );
}

export default MainBanner;