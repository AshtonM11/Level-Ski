import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
        console.log("Login Failed! ", err);
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

  // register = () => {
  //   axios
  //     .post("http://localhost:3005/register", {
  //       username: this.state.username,
  //       password: this.state.password
  //     })
  //     .then(res => {
  //       if (res.data.exists) {
  //         console.log("Username already exists, try a different username.");
  //       } else {
  //         console.log("Username is available.");
  //       }
  //     })
  //     .catch(err => {
  //       console.log("Registration failed ", err);
  //     });
  // };

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <h2> Login </h2>
        <input
          className="auth-input"
          name="username"
          type="text"
          placeholder="Username"
          value={this.state.username}
          onChange={e => this.userHandleChange(e.target.value)}
        />
        <input
          className="auth-input"
          name="password"
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={e => this.passwordHandleChange(e.target.value)}
        />
        <div className="auth-button" onClick={() => this.login()}>
          <button> Login </button>
        </div>
        <div className="auth-button" onClick={() => this.register()}>
          <button> Register </button>
        </div>
      </div>
    );
  }
}
