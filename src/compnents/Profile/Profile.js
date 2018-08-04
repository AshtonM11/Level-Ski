import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Loader } from "mx-react-components";

class Profile extends Component {
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
        {this.state.loading ? (
          <Loader isLoading={this.state.loading} isRelative={true}>
            Loading...
          </Loader>
        ) : (
          <div>
            {this.state.user.nickname ? (
              <div>profile page </div>
            ) : (
              <div>
                <Link to="/login">Return to login</Link>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Profile;
