import React from 'react';
import {Link} from "react-router-dom";

export function Footer() {
  return (
    <footer className="footer-area ptb-120 pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <ul className="social-links">
                <li><a href="#" target="_blank"><i className="icofont-facebook"/></a></li>
                <li><a href="https://www.instagram.com/slonecz.ink/" target="_blank"><i className="icofont-instagram"/></a></li>
                <li><a href="#" target="_blank"><i className="icofont-pinterest"/></a></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-footer-widget ml-4">
              <h3>Quick Links</h3>

              <ul className="list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about-me">About</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/faq">FAQ's</Link></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h3>Get in Touch</h3>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>

              <ul className="footer-contact-info">
                <li>
                  <i className="icofont-google-map"/>
                  Kraków, Poland
                </li>

                <li>
                  <i className="icofont-email"/>
                  <a href="mailto:pelagia.kozielska@gmail.com">pelagia.kozielska@gmail.com</a>
                </li>

                <li>
                  <i className="icofont-instagram"/>
                  <a href="https://www.instagram.com/slonecz.ink/">@slonecz.ink</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <p>Copyright &copy; 2021 Daniel Wilkowski</p>
            </div>
          </div>
        </div>
      </div>

      <img src="/images/line-bg.png" className="line-bg" alt="line-bg"/>

      <div className="shape23">
        <img src="/images/shapes/23.png" alt="shape"/>
      </div>
      <div className="shape24">
        <img src="/images/shapes/24.png" alt="shape"/>
      </div>
      <div className="shape27">
        <img src="/images/shapes/27.png" alt="shape"/>
      </div>
    </footer>
  );
}

export default Footer;
