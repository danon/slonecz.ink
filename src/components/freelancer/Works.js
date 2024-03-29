import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const images = [
  '/images/work-image/1.jpg',
  '/images/work-image/2.jpg',
  '/images/work-image/3.jpg',
  '/images/work-image/4.jpg',
  '/images/work-image/5.jpg',
  '/images/work-image/6.jpg'
];

export class Works extends Component {
  state = {
    photoIndex: 0,
    isOpenImage: false
  };

  render() {
    const {photoIndex, isOpenImage} = this.state;
    return <section className="works-area ptb-120 pb-0 bg-08071c">
      <div className="container">
        <div className="section-title">
          <span>My Works</span>
          <h2>Some Of My Competed Projects</h2>
        </div>
      </div>

      <div className="row m-0">
        <div className="col-lg-6 col-md-12 col-sm-12 p-0">
          <div className="single-work m-0">
            <img src="/images/work-image/1.jpg" alt="image"/>

            <div className="works-content">
              <h3><a href="#">Abstrakcja</a></h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <span className="popup-btn" onClick={e => {
              this.setState({isOpenImage: true, photoIndex: 0});
            }}>
              <i className="icofont-expand"/>
            </span>
          </div>
        </div>

        {isOpenImage && <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => this.setState({isOpenImage: false})}
          onMovePrevRequest={() =>
            this.setState({
              photoIndex: (photoIndex + images.length - 1) % images.length,
            })
          }
          onMoveNextRequest={() =>
            this.setState({
              photoIndex: (photoIndex + 1) % images.length,
            })
          }
        />}

        <div className="col-lg-3 col-md-6 col-sm-6 p-0">
          <div className="single-work m-0">
            <img src="/images/work-image/2.jpg" alt="image"/>

            <div className="works-content">
              <h3><a href="#">Kosmos</a></h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <span className="popup-btn" onClick={e => {
              this.setState({isOpenImage: true, photoIndex: 1});
            }}>
              <i className="icofont-expand"/>
            </span>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6 p-0">
          <div className="single-work m-0">
            <img src="/images/work-image/3.jpg" alt="image"/>

            <div className="works-content">
              <h3><a href="#">Czarownica</a></h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <span className="popup-btn" onClick={e => {
              this.setState({isOpenImage: true, photoIndex: 2});
            }}>
              <i className="icofont-expand"/>
            </span>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6 p-0">
          <div className="single-work m-0">
            <img src="/images/work-image/4.jpg" alt="image"/>

            <div className="works-content">
              <h3><a href="#">Czerwone wino</a></h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <span className="popup-btn" onClick={e => {
              this.setState({isOpenImage: true, photoIndex: 3});
            }}>
              <i className="icofont-expand"/>
            </span>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6 p-0">
          <div className="single-work m-0">
            <img src="/images/work-image/5.jpg" alt="image"/>

            <div className="works-content">
              <h3><a href="#">Delikatne niebo</a></h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <span className="popup-btn" onClick={e => {
              this.setState({isOpenImage: true, photoIndex: 4});
            }}>
              <i className="icofont-expand"/>
            </span>
          </div>
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12 p-0">
          <div className="single-work m-0">
            <img src="/images/work-image/6.jpg" alt="image"/>

            <div className="works-content">
              <h3><a href="#">Viserion</a></h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <span className="popup-btn" onClick={e => {
              this.setState({isOpenImage: true, photoIndex: 5});
            }}>
              <i className="icofont-expand"/>
            </span>
          </div>
        </div>
      </div>

      <div className="shape11"><img src="/images/shapes/11.png" alt="shape"/></div>
      <div className="shape12"><img src="/images/shapes/12.png" alt="shape"/></div>
    </section>;
  }
}

export default Works;
