import React, {Component} from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import workImage1 from "../../images/work-image/1.jpg";

const images = [
  '/images/work-image/1.jpg',
  '/images/work-image/6.jpg',
  '/images/work-image/21.jpg',
  '/images/work-image/20.jpg',
  '/images/work-image/19.jpg',
  '/images/work-image/18.jpg'
];

export class PortfolioContent extends Component {
  state = {
    photoIndex: 0,
    isOpenImage: false
  };

  render() {
    const {photoIndex, isOpenImage} = this.state;
    return (
      <section className="works-area ptb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="single-work">
                <img src={workImage1} alt="image"/>

                <div className="works-content">
                  <h3><a href="#">Abstrakcja</a></h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <a
                  href="#"
                  className="popup-btn"
                  onClick={e => {
                    e.preventDefault();
                    this.setState({isOpenImage: true, photoIndex: 0});
                  }}
                >
                  <i className="icofont-expand"/>
                </a>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-work">
                <img src="/images/work-image/6.jpg" alt="image"/>

                <div className="works-content">
                  <h3><a href="#">Viserion</a></h3>
                </div>

                <a
                  href="#"
                  className="popup-btn"
                  onClick={e => {
                    e.preventDefault();
                    this.setState({isOpenImage: true, photoIndex: 1});
                  }}
                >
                  <i className="icofont-expand"/>
                </a>

              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-work">
                <img src="/images/work-image/21.jpg" alt="image"/>

                <div className="works-content">
                  <h3><a href="#">Zorza polarna</a></h3>
                </div>

                <a
                  href="#"
                  className="popup-btn"
                  onClick={e => {
                    e.preventDefault();
                    this.setState({isOpenImage: true, photoIndex: 2});
                  }}
                >
                  <i className="icofont-expand"/>
                </a>

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

            <div className="col-lg-6 col-md-6">
              <div className="single-work">
                <img src="/images/work-image/20.jpg" alt="image"/>

                <div className="works-content">
                  <h3><a href="#">Meduza</a></h3>
                </div>

                <a
                  href="#"
                  className="popup-btn"
                  onClick={e => {
                    e.preventDefault();
                    this.setState({isOpenImage: true, photoIndex: 3});
                  }}
                >
                  <i className="icofont-expand"/>
                </a>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-work">
                <img src="/images/work-image/19.jpg" alt="image"/>

                <div className="works-content">
                  <h3><a href="#">Monroe</a></h3>
                </div>

                <a
                  href="#"
                  className="popup-btn"
                  onClick={e => {
                    e.preventDefault();
                    this.setState({isOpenImage: true, photoIndex: 4});
                  }}
                >
                  <i className="icofont-expand"></i>
                </a>

              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-work">
                <img src="/images/work-image/18.jpg" alt="image"/>

                <div className="works-content">
                  <h3><a href="#">Za niedługo lato</a></h3>
                </div>

                <a
                  href="#"
                  className="popup-btn"
                  onClick={e => {
                    e.preventDefault();
                    this.setState({isOpenImage: true, photoIndex: 5});
                  }}
                >
                  <i className="icofont-expand"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PortfolioContent;
