import React from 'react';

export function Footer() {
  return (
    <footer className="footer-area ptb-120 pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

              <ul className="social-links">
                <li><a href="#" target="_blank"><i className="icofont-facebook"/></a></li>
                <li><a href="#" target="_blank"><i className="icofont-twitter"/></a></li>
                <li><a href="#" target="_blank"><i className="icofont-instagram"/></a></li>
                <li><a href="#" target="_blank"><i className="icofont-pinterest"/></a></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-footer-widget ml-4">
              <h3>Quick Links</h3>

              <ul className="list">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">FAQ's</a></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h3>Recent Post</h3>

              <ul className="footer-recent-post">
                <li>
                  <a href="#">The Most Popular New Business Apps</a>

                  <span>25 Feb 2021</span>
                </li>

                <li>
                  <a href="#">The Best Marketing Management Tools</a>

                  <span>27 Feb 2021</span>
                </li>

                <li>
                  <a href="#">3 WooCommerce Plugins to Boost Sales</a>

                  <span>28 Feb 2021</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h3>Get in Touch</h3>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>

              <ul className="footer-contact-info">
                <li>
                  <i className="icofont-google-map"></i>
                  <span>Location:</span>
                  27 Division St, New York, NY 10002, USA
                </li>

                <li>
                  <i className="icofont-phone"/>
                  <span>Phone:</span>
                  <a href="tel:+44014799584">+44 014799584</a>
                </li>

                <li>
                  <i className="icofont-email"/>
                  <span>Email:</span>
                  <a href="mailto:support@fleja.com">support@fleja.com</a>
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
