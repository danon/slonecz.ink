import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route} from "react-router-dom";
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

import ThankYou from './pages/thankyou';
import Homepage from './pages';
import a404 from "./pages/404.js";
import aboutMe from "./pages/about-me.js";
import aboutUs from "./pages/about-us.js";
import agencyportfolio from "./pages/agency-portfolio.js";
import blog from "./pages/blog.js";
import blogdetails from "./pages/blog-details.js";
import cart from "./pages/cart.js";
import checkout from "./pages/checkout.js";
import comingsoon from "./pages/coming-soon.js";
import contact from "./pages/contact.js";
import freelancer from "./pages/freelancer.js";
import index from "./pages/index.js";
import faq from "./pages/faq";
import portfolio from "./pages/portfolio.js";
import portfoliodetails from "./pages/portfolio-details.js";
import productdetails from "./pages/product-details.js";
import products from "./pages/products.js";
import startupagency from "./pages/startup-agency.js";
import thankYou from "./pages/thankyou.js";

const store = initStore();

ReactDOM.render(
  <>
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" exact component={Homepage}/>
        <Route path="/thankyou" component={ThankYou}/>
        <Route path="/404" component={a404}/>
        <Route path="/about-me" component={aboutMe}/>
        <Route path="/about-us" component={aboutUs}/>
        <Route path="/agency-portfolio" component={agencyportfolio}/>
        <Route path="/blog" component={blog}/>
        <Route path="/blog-details" component={blogdetails}/>
        <Route path="/cart" component={cart}/>
        <Route path="/checkout" component={checkout}/>
        <Route path="/coming-soon" component={comingsoon}/>
        <Route path="/contact" component={contact}/>

        <Route path="/faq" component={faq}/>
        <Route path="/freelancer" component={freelancer}/>
        <Route path="/index" component={index}/>
        <Route path="/portfolio" component={portfolio}/>
        <Route path="/portfolio-details" component={portfoliodetails}/>
        <Route path="/product-details" component={productdetails}/>
        <Route path="/products" component={products}/>
        <Route path="/startup-agency" component={startupagency}/>
        <Route path="/thankyou" component={thankYou}/>
      </BrowserRouter>
    </Provider>
  </>,
  document.getElementById('root')
);
