import axios from "axios";
import React, { Component } from "react";
import "./Login.css";
import Nav from "../nav/Nav";
import { Redirect } from "react-router-dom";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      loading: true
    };
  }

  componentDidMount() {
    axios({
      method: "get",
      url: "/api/user"
    }).then(response => {
      console.log("this is response", response);
      this.setState({ user: response.data, loading: false });
    });
  }

  render() {
    return (
      <div>
        {this.state.user.nickname ? <Redirect to="/" /> : null}
        <div className="hero-image">
          {" "}
          <h1> Level Ski </h1>
          <div className="box">
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Password" />
            <button className="login-button"> Login </button>
            <a href="http://localhost:3005/login">
              {" "}
              <p>
                {" "}
                <button className="signup-button">Sign Up </button>{" "}
              </p>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
