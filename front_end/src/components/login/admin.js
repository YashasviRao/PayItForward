import React from "react";
import UserProfile from "../donor/UserProfile";
import swal from "sweetalert";
import "./admin_login.css";

export class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);

    this.handleadminSubmit = this.handleadminSubmit.bind(this);
  }

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleadminSubmit(event) {
    event.preventDefault();
    if (this.state.email == "admin@gmail.com" && this.state.password == "admin")
      window.location.href = "/adminhome";
    else
      swal({
        title: "Invalid Admin",
        text: "",
        icon: "error",
        button: "ok",
      });
  }

  render() {
    return (
      <form className="loginform">
        <div className="base-container" ref={this.props.containerRef}>
          <div className="header">Login</div>
          <div className="content">
            <div className="form">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="footer">
            <button
              type="submit"
              class="ad_btn"
              onClick={this.handleadminSubmit.bind(this)}
            >
              Login
            </button>
            <br />
            <br />
            <a class="home_btn" href="/home">
              <span>Home</span>
            </a>
          </div>
        </div>
      </form>
    );
  }
}
