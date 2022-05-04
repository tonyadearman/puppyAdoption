import React from "react";
import "./Icons.css";

export default function Icons() {
  return (
    <div className="icons">
      <div className="icons-parent">
        <a href="">
          <i className="fa fa-search fa-5x">
            <h1 className="about-search">Find Your Puppy</h1>
          </i>
        </a>

        <h1 className="line">|</h1>
        <a href="">
          <i className="fa fa-clipboard fa-5x">
          <h1 className="about-search">Reserve Your Puppy</h1>
          </i>
        </a>

        <h1 className="line">|</h1>
        <a href="">
          <i className="fa fa-credit-card fa-5x">
          <h1 className="about-search">Pay For Your Puppy</h1>
          </i>
        </a>
      </div>
    </div>
  );
}
