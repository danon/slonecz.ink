import React from 'react';
import {Link} from 'react-router-dom';

export default function Cta() {
  return <section className="cta-area ptb-120 bg-08071c">
    <div className="container">
      <div className="cta-content">
        <span>Looking for exclusive services?</span>
        <h2>Get the best for your business</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

        <Link to="/contact" className="btn btn-primary">
          Contact Us
        </Link>
      </div>
    </div>
  </section>;
}
