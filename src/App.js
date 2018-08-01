import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./App.css";

export default class UserLogin extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  userHandleChange = name => {
    this.setState({ username: name });
  };

  passwordHandleChange = passwordEntry => {
    this.setState({ password: passwordEntry });
  };

  login = () => {
    axios
      .post("http://localhost:3005/api/login", {
        username: this.state.username,
        password: this.state.password
      })
      .then(res => {
        if (res.data.length) {
          console.log("Login worked");
          this.props.history.push("/dashboard");
        } else {
          console.log("incorrect username or password");
        }
      })
      .catch(err => {
        console.log("Login Failed!", err);
      });
  };

  register = () => {
    axios({
      method: "post",
      url: "http://localhost:3005/api/register",
      data: {
        username: this.state.username,
        password: this.state.password
      }
    })
      .then(response => {
        this.props.history.push("/dashboard");
      })
      .catch(error => {
        this.setState({ errorMessage: "Error logging in" });
      });
  };

  render() {
    return (
      <div>
        <nav>
          <div id="logo">Level Ski </div>
          <div id="nav-items">
            <div>About</div>
            <div>Contact</div>
          </div>
        </nav>
        <div class="hero-image">
          {" "}
          <h2> Welcome </h2>
          <button>Login</button>
        </div>
      </div>
    );
  }
}
