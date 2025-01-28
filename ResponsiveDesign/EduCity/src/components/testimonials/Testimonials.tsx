import React, { useRef } from "react";
import "./Testimonials.css";
import back from "../../assets/back-button.png";
import forward from "../../assets/next.png";
import testimonial from "../../assets/testimonials.png";

export const Testimonials = () => {
  const slider = useRef();
  let tx = 0;
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < -0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  return (
    <div>
      <div className="testimonials">
        <img src={back} alt="" className="backBtn" onClick={slideBackward} />
        <img src={forward} alt="" className="nextBtn" onClick={slideForward} />
        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={testimonial} alt="" />
                  <div>
                    <h3>William 1</h3>
                    <span>Edusity, USA</span>
                  </div>
                </div>
                <p>
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions I've ever made. The supportive community,
                  state-of-the-art facilities, and commitment to academic
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={testimonial} alt="" />
                  <div>
                    <h3>jackson 2</h3>
                    <span>Edusity, USA</span>
                  </div>
                </div>
                <p>
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions I've ever made. The supportive community,
                  state-of-the-art facilities, and commitment to academic
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={testimonial} alt="" />
                  <div>
                    <h3>Jackson william 3</h3>
                    <span>Edusity, USA</span>
                  </div>
                </div>
                <p>
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions I've ever made. The supportive community,
                  state-of-the-art facilities, and commitment to academic
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={testimonial} alt="" />
                  <div>
                    <h3>Jack Sparrow 4</h3>
                    <span>Edusity, USA</span>
                  </div>
                </div>
                <p>
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions I've ever made. The supportive community,
                  state-of-the-art facilities, and commitment to academic
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
