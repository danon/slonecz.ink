import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function Contact() {
  return <>
    <Navbar/>

    <div className="page-title-area item-bg1">
      <div className="container">
        <h1>Contact Me</h1>
        <ul>
          <li>
            <Link to="/">
              <a>Home</a>
            </Link>
          </li>
          <li>Contact Me</li>
        </ul>
      </div>
    </div>

    <section className="contact-info-area pt-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="contact-info-box">
              <div className="icon">
                <i className="icofont-email"/>
              </div>
              <h3>Mail Here</h3>
              <p><a href="#">pelagia.kozielska@gmail.com</a></p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="contact-info-box">
              <div className="icon">
                <i className="icofont-google-map"/>
              </div>
              <h3>Pick up in person</h3>
              <p>Kraków, Poland</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
            <div className="contact-info-box">
              <div className="icon">
                <i className="icofont-phone"/>
              </div>
              <h3>Get in touch</h3>
              <p>Leave your phone number</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="contact-area ptb-120">
      <div className="container">
        <div className="section-title">
          <span>Contact me</span>
          <h2>Get in touch with me</h2>
        </div>

        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-lg-6 col-md-12">
            <img src="/images/marketing.png" alt="image"/>
          </div>

          <div className="col-lg-6 col-md-12">
            <form id="contactForm">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <input type="email" className="form-control" required={true} placeholder="Email"/>
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <textarea name="message" className="form-control" id="message" cols="30" rows="5" required placeholder="Your Message"/>
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <button type="submit" className="btn btn-primary">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
  </>;
}
