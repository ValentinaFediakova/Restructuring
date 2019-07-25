import React, { Component } from 'react'
import AliceCarousel from 'react-alice-carousel'

import './Slider.css'
import 'react-alice-carousel/lib/alice-carousel.css'

import Slide1 from '../App/img/SliderImg/team1.jpg'
import Slide2 from '../App/img/SliderImg/team2.jpg'
import Slide3 from '../App/img/SliderImg/team3.jpg'
import Slide4 from '../App/img/SliderImg/team4.jpg'

import icon1 from '../App/img/SliderImg/i1.png'
import icon2 from '../App/img/SliderImg/i2.png'
import icon3 from '../App/img/SliderImg/i3.png'
import icon4 from '../App/img/SliderImg/i4.png'

import arrowRight from './img/arrow-right.png'
import arrowLeft from './img/arrow-left.png'

class Slider extends Component {
  render() {
    return (
      <div className="Slider-wrap">
        <AliceCarousel
          mouseDragEnabled
          duration={2250}
          responsive={{
            0: {
              items: 1,
            },
            766: {
              items: 2,
            },
            1024: {
              items: 4,
            },
          }}
          buttonsDisabled
          dotsDisabled
          ref={el => (this.Carousel = el)}
        >
          <div className="Slider__wrap-item">
            <img src={Slide1} className="Slider__img" />
            <div className="Slider__up">
              <div className="Slider__up-social">
                <a className="Slider__up-social-item">
                  <img href="/" src={icon1} className="Slider__up-social-img" />
                </a>
                <a className="Slider__up-social-item">
                  <img href="/" src={icon2} className="Slider__up-social-img" />
                </a>
                <a className="Slider__up-social-item">
                  <img href="/" src={icon3} className="Slider__up-social-img" />
                </a>
                <a className="Slider__up-social-item">
                  <img href="/" src={icon4} className="Slider__up-social-img" />
                </a>
              </div>
            </div>
            <div className="Slider__info">
              <div className="Slider__info-title">Md. Khalil Uddin</div>
              <div className="Slider__info-subtitle">Head of Ideas</div>
            </div>
          </div>

          <div className="Slider__wrap-item">
            <img src={Slide2} className="Slider__img" />
            <div className="Slider__up">
              <div className="Slider__up-social">
                <a className="Slider__up-social-item">
                  <img href="/" src={icon1} className="Slider__up-social-img" />
                </a>
                <a className="Slider__up-social-item">
                  <img href="/" src={icon2} className="Slider__up-social-img" />
                </a>
                <a className="Slider__up-social-item">
                  <img href="/" src={icon3} className="Slider__up-social-img" />
                </a>
                <a className="Slider__up-social-item">
                  <img href="/" src={icon4} className="Slider__up-social-img" />
                </a>
              </div>
            </div>
            <div className="Slider__info">
              <div className="Slider__info-title">Rubel Miah</div>
              <div className="Slider__info-subtitle">Lead WordPress Developer</div>
            </div>
          </div>
          <div className="Slider__wrap-item">
            <img src={Slide3} className="Slider__img" />
            <div className="Slider__up">
              <div className="Slider__up-social">
                <a className="Slider__up-social-item">
                  <img href="/" src={icon1} className="Slider__up-social-img" />
                </a>
                <a className="Slider__up-social-item">
                  <img href="/" src={icon2} className="Slider__up-social-img" />
                </a>
                <a className="Slider__up-social-item">
                  <img href="/" src={icon3} className="Slider__up-social-img" />
                </a>
                <a className="Slider__up-social-item">
                  <img href="/" src={icon4} className="Slider__up-social-img" />
                </a>
              </div>
            </div>
            <div className="Slider__info">
              <div className="Slider__info-title">Shamim Mia</div>
              <div className="Slider__info-subtitle">Sr. Web Developer</div>
            </div>
          </div>
          <div className="Slider__wrap-item">
            <img src={Slide4} className="Slider__img" />
            <div className="Slider__up">
              <div className="Slider__up-social">
                <a className="Slider__up-social-item">
                  <img href="/" src={icon1} className="Slider__up-social-img" />
                </a>
                <a className="Slider__up-social-item">
                  <img href="/" src={icon2} className="Slider__up-social-img" />
                </a>
                <a className="Slider__up-social-item">
                  <img href="/" src={icon3} className="Slider__up-social-img" />
                </a>
                <a className="Slider__up-social-item">
                  <img href="/" src={icon4} className="Slider__up-social-img" />
                </a>
              </div>
            </div>
            <div className="Slider__info">
              <div className="Slider__info-title">John Doe</div>
              <div className="Slider__info-subtitle">Front-end Developer</div>
            </div>
          </div>
        </AliceCarousel>

        <button
          className="Slider__arrow-left"
          style={{ backgroundImage: `url(${arrowLeft})` }}
          onClick={() => this.Carousel._slidePrev()}
        />
        <button
          className="Slider__arrow-right"
          style={{ backgroundImage: `url(${arrowRight})` }}
          onClick={() => this.Carousel._slideNext()}
        />
      </div>
    )
  }
}

export default Slider
