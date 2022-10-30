import React from 'react';
import {paintings} from "../../paintings/paintings.js";

export default function FunFacts() {
  const leftToBuy = paintings.length;

  return <section className="funfacts-area ptb-120 bg-38d16a">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="funfact">
            <h3>
              <span className="odometer">152</span>
            </h3>
            <p>Pictures painted</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="funfact">
            <h3>
              <span className="odometer">{leftToBuy}</span>
            </h3>
            <p>Only {leftToBuy} left to buy</p>
          </div>
        </div>
      </div>
    </div>
  </section>;
}
