import React from "react";
import Header from "../../components/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import Footer from "../../components/Footer";
import "./contact.styles.scss";

const ContactPage = () => (
  <>
    <Header />
    <main className="contact-page">
      <section className="people-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 offset-lg-4 col-sm-12 ">
              <h2 className="h2 text-center">Contact Us</h2>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <section className="white-bg">
          <div className="row">
            <div className="col-lg-6 col-sm-12 ">
              <div className="right-col">
                <h3 className="r-col-h3">Let's get in touch</h3>
                <p className="grey-text">
                  Sed velit lectus, porttitor eu convallis sit amet, semper eget
                  mauris. Integer in pulvinar mauris. Donec facilisis placerat
                </p>
                <div className="contact-details m-top">
                  <div className="icon">
                    <FontAwesomeIcon icon={faPhone} className="icon mt-3" />
                  </div>
                  <div className="phone-no">
                    <span>+234 816 622 314 </span> <br />
                    <span>+234 816 622 314</span>
                  </div>
                </div>
                <div className="contact-details m-top">
                  <div className="icon">
                    <FontAwesomeIcon icon={faEnvelope} className="icon" />
                  </div>
                  <div className="phone-no">
                    <span>feelingpressed.com</span>
                  </div>
                </div>
                <section className="social-media">
                  <div className="media-handles mt">
                    <FontAwesomeIcon
                      icon={faFacebookF}
                      className="icon facebook"
                    />
                  </div>
                  <div className="media-handles mt">
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="icon twitter"
                    />
                  </div>

                  <div className="media-handles mt">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="icon envelope"
                    />
                  </div>
                  <div className="media-handles">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="icon instagram"
                    />
                  </div>
                </section>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="left-col">
                <form action="" className="contact-form">
                  <h3 className="form-h3 text-center">Send us a Message</h3>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="form-input"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="form-input"
                  />
                  <input
                    type="text"
                    placeholder="Email"
                    className="form-input"
                  />
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    id=""
                    cols="30"
                    rows="10"
                    className="message-input"
                  ></textarea>

                  <button className="btn-send" type="button">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
    <Footer />
  </>
);

export default ContactPage;
