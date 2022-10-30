import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Provider} from 'react-redux';

import {initStore} from './store/reducers/cartReducer';

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import "./css/animate.min.css";
import "./css/bootstrap.min.css";
import "./css/icofont.min.css";
import "./css/responsive.scss";
import "./css/style.scss";

import notFound from "./pages/notFound.js";
import aboutMe from "./pages/about-me.js";
import cart from "./pages/cart.js";
import checkout from "./pages/checkout.js";
import contact from "./pages/contact.js";
import homepage from "./pages/homepage.js";
import faq from "./pages/faq";
import portfolio from "./pages/portfolio.js";
import painting from "./pages/painting.js";
import paintings from "./pages/paintings.js";

const store = initStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={homepage}/>
        <Route path="/about-me" component={aboutMe}/>
        <Route path="/cart" component={cart}/>
        <Route path="/checkout" component={checkout}/>
        <Route path="/contact" component={contact}/>
        <Route path="/faq" component={faq}/>
        <Route path="/portfolio" component={portfolio}/>
        <Route path="/paintings/:id" component={painting}/>
        <Route path="/paintings" component={paintings}/>
        <Route component={notFound}/>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
