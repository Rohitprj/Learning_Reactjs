import React from "react";
import "./Testimonials.css";
import back from "../../assets/back-button.png";
import forward from "../../assets/next.png";
export const Testimonials = () => {
  return (
    <div>
      <div className="testimonials">
        <img src={back} alt="" />
        <img src={forward} alt="" />
      </div>
    </div>
  );
};
