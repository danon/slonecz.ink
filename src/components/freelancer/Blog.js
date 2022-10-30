import React from 'react';
import {Link} from 'react-router-dom';

export default function Blog() {
  return <section className="blog-area ptb-120">
    <div className="container">
      <div className="section-title">
        <span>Find me</span>
        <h2>Checkout the social media</h2>
      </div>

      <div className="row">
        <ul>
          <li>Facebook</li>
          <li>Pintrest</li>
          <li>Instagram</li>
          <li>E-Mail</li>
        </ul>
      </div>
    </div>
  </section>;
}
