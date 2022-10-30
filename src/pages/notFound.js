import React from 'react';
import {Link} from 'react-router-dom';

export default function () {
  return <div className="error">
    <div className="d-table">
      <div className="d-table-cell">
        <h1>404</h1>
        <h2>Page not found <i className="icofont-sad"/></h2>
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    </div>
  </div>;
};
