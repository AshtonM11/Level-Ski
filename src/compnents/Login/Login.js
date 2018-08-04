// import axios from "axios";
import React, { Component } from "react";
import "./Login.css";
import img from "../../Images/new-color-logo.png";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <nav>
          <div>
            <img className="logo-img" src={img} />
          </div>
          <div id="nav-items">
            <div>About</div>
            <div>Contact</div>
          </div>
        </nav>
        <div className="hero-image">
          {" "}
          <h2> Level Ski </h2>
          <a href="http://localhost:3005/login">
            {" "}
            <button> Login </button>
          </a>
        </div>
      </div>
    );
  }
}
