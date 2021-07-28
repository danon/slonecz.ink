import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

export class Navbar extends Component {
  state = {
    drawer: false,
    searchForm: false,
    collapsed: true,
  };

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    let {products} = this.props;
    const {collapsed} = this.state;
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
    let layOutCls = 'p-relative';

    return (
      <header id="header">
        <div id="navbar" className={`artflex-nav ${layOutCls}`}>
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link to="/" className="navbar-brand">
                <img src="/images/logo.png" alt="logo"/>
              </Link>

              <button
                onClick={this.toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"/>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Home <i className="icofont-simple-down"/>
                    </a>
                    <ul className="dropdown_menu">
                      <li className="nav-item">
                        <Link to="/freelancer" className="nav-link">
                          Freelancer Portfolio
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/startup-agency" className="nav-link">
                          Startup Agency
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/agency-portfolio" className="nav-link">
                          Agency Portfolio
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Pages <i className="icofont-simple-down"/>
                    </a>
                    <ul className="dropdown_menu">
                      <li className="nav-item">
                        <a href="#" className="nav-link">About</a>
                        <ul className="dropdown_menu">
                          <li className="nav-item">
                            <Link to="/about-us" className="nav-link">
                              About Us
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link to="/about-me" className="nav-link">
                              About Me
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link to="/login" className="nav-link">
                          Login
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/coming-soon" className="nav-link">
                          Coming Soon
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/404" className="nav-link">
                          404 Error
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/faq" className="nav-link">
                          FAQ
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/contact" className="nav-link">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Blog <i className="icofont-simple-down"/>
                    </a>
                    <ul className="dropdown_menu">
                      <li className="nav-item">
                        <Link to="/blog" className="nav-link">
                          Blog
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/blog-details" className="nav-link">
                          Blog Details
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Portfolio <i className="icofont-simple-down"/>
                    </a>
                    <ul className="dropdown_menu">
                      <li className="nav-item">
                        <Link to="/portfolio" className="nav-link">
                          Portfolio
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/portfolio-details" className="nav-link">
                          Portfolio Details
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Portfolio <i className="icofont-simple-down"/>
                    </a>

                    <ul className="dropdown_menu">
                      <li className="nav-item">
                        <Link to="/products" className="nav-link">
                          Products
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/product-details" className="nav-link">
                          Products Details
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/cart" className="nav-link">
                          Cart
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/checkout" className="nav-link">
                          Checkout
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link to="/contact" className="nav-link">
                      Contact
                    </Link>
                  </li>
                </ul>

                <div className="others-option">
                  <ul>
                    <li>
                      <Link to="/cart" className="cart-icon">
                        <i className="icofont-bag"/>
                        <span>{products.length}</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = ({addedItems}) => ({products: addedItems});

export default connect(mapStateToProps)(Navbar);
