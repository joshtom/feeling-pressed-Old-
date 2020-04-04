import React from "react";
import Header from "../../components/header";
import Footer from "../../components/Footer";

import "./about.styles.scss";

const AboutPage = () => (
  <>
    <Header />
    <main className="about-page">
      <section className="people-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 offset-lg-4 col-sm-12 ">
              <h2 className="h2 text-center">About Us</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="mission">
        <div className="container">
          <div className="row"></div>
        </div>
      </section>
      <section className="vision">
        <div className="container">
          <div className="row"></div>
        </div>
      </section>
      <section className="goal">
        <div className="container">
          <div className="row"></div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default AboutPage;
