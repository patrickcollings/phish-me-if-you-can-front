import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import baseUrl from "../../utils/baseUrl";
import { useMutation } from "@apollo/client";
import { createUserQuery } from "../../utils/constants";

const alertContent = () => {
  MySwal.fire({
    title: "Almost there!",
    text: "Verify your email address by opening the email we've just sent you.",
    icon: "success",
    showConfirmButton: true,
  });
};

// Form initial state
const INITIAL_STATE = {
  name: "",
  email: "",
  number: "",
  subject: "",
  text: "",
};

const RegisterForm = () => {
  const [contact, setContact] = useState(INITIAL_STATE);
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [register] = useMutation(createUserQuery, {
            variables: {
                email,
                firstName,
                lastName,
            },
            onCompleted: () => {
                    console.log("completed");
                    alertContent();
                },
            onError: (e) => console.log(e),
        });

  return (
    <section className="main-contact-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="contact-wrap contact-pages mb-0">
            <div className="contact-form">
              <form
                onSubmit={(e) => {
                    console.log('submit form');
                  e.preventDefault();
                  register();
                }}
              >
                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="First Name"
                        className="form-control"
                        onChange={(event) => setFirstName(event.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="surname"
                        placeholder="Surname"
                        className="form-control"
                        onChange={(event) => setLastName(event.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-sm-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        className="form-control"
                        onChange={(event) => setEmail(event.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-sm-12">
                    <button
                      type="submit"
                      className="default-btn btn-two"
                    >
                      Subscribe for free
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* <div className="col-lg-6 col-md-12">
            <div className="contact-img">
              <img src="/images/contact-img.png" alt="Image" />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
