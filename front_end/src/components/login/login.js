import React from "react";
import UserProfile from "../donor/UserProfile";
import swal from "sweetalert";
import "./login.css";

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      ifngo: false,
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleifNgoChange = this.handleifNgoChange.bind(this);
    this.handledonateSubmit = this.handledonateSubmit.bind(this);
    this.handlepurchaseSubmit = this.handlepurchaseSubmit.bind(this);
    this.handlengoSubmit = this.handlengoSubmit.bind(this);
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
  handleifNgoChange = (event) => {
    this.setState({
      ifngo: event.target.value,
    });
  };

  handledonateSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    var body = {
      email: this.state.email,
      password: this.state.password,
      ifngo: this.state.ifngo,
    };
    console.log(body);
    if (this.state.email == "") {
      swal({
        title: "Please enter your username",
        text: "",
        icon: "error",
        button: "OK",
      });
    } else if (this.state.password == "") {
      swal({
        title: "Please enter your password",
        text: "",
        icon: "error",
        button: "OK",
      });
    } else {
      const url = "http://localhost:9000/login";
      let headers = new Headers();

      headers.append("Content-Type", "application/json");
      headers.append("Accept", "application/json");

      headers.append("Access-Control-Allow-origin", url);
      headers.append("Access-Control-Allow-Credentials", "true");

      headers.append("POST", "GET");

      fetch(url, {
        headers: headers,
        method: "POST",
        body: JSON.stringify(body),
      })
        .then((response) =>
          response
            .json()
            .then((data) => ({
              data1: data,
            }))
            .then((res) => {
              var id = res.data1.id;
              console.log(id);
              sessionStorage.setItem("id", id);
              window.location.href = "/donordash";
            })
        )
        .catch((error) => {
          swal({
            title: "Invalid Donor",
            text: "",
            icon: "error",
            button: "OK",
          });
        });
    }
  }
  handlepurchaseSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    var body = {
      email: this.state.email,
      password: this.state.password,
      ifngo: this.state.ifngo,
    };
    console.log(body);
    if (this.state.email == "") {
      swal({
        title: "Please enter your name",
        text: "",
        icon: "error",
        button: "OK",
      });
    } else if (this.state.password == "") {
      swal({
        title: "Please enter your password",
        text: "",
        icon: "error",
        button: "OK",
      });
    } else {
      const url = "http://localhost:9000/login";
      let headers = new Headers();

      headers.append("Content-Type", "application/json");
      headers.append("Accept", "application/json");

      headers.append("Access-Control-Allow-origin", url);
      headers.append("Access-Control-Allow-Credentials", "true");

      headers.append("POST", "GET");

      fetch(url, {
        headers: headers,
        method: "POST",
        body: JSON.stringify(body),
      })
        .then((response) =>
          response
            .json()
            .then((data) => ({
              data1: data,
            }))
            .then((res) => {
              var id = res.data1.id;
              console.log(id);
              sessionStorage.setItem("id", id);
              window.location.href = "/pur_home";
            })
        )
        .catch((error) => {
          swal({
            title: "Invalid Login Credentials",
            text: "",
            icon: "error",
            button: "OK",
          });
        });
    }
  }
  handlengoSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    var body = {
      email: this.state.email,
      password: this.state.password,
      ifngo: true,
    };
    console.log(body);
    if (this.state.email == "") {
      swal({
        title: "Please enter your username",
        text: "",
        icon: "error",
        button: "OK",
      });
    } else if (this.state.password == "") {
      swal({
        title: "Please enter your password",
        text: "",
        icon: "error",
        button: "OK",
      });
    } else {
      const url = "http://localhost:9000/login";
      let headers = new Headers();

      headers.append("Content-Type", "application/json");
      headers.append("Accept", "application/json");

      headers.append("Access-Control-Allow-origin", url);
      headers.append("Access-Control-Allow-Credentials", "true");

      headers.append("POST", "GET");

      fetch(url, {
        headers: headers,
        method: "POST",
        body: JSON.stringify(body),
      })
        .then((response) =>
          response
            .json()
            .then((data) => ({
              data1: data,
            }))
            .then((res) => {
              var id = res.data1.id;
              console.log(id);
              sessionStorage.setItem("id", id);
              window.location.href = "/ngohome";
            })
        )
        .catch((error) => {
          swal({
            title: "Invalid NGO",
            text: "",
            icon: "error",
            button: "OK",
          });
        });
    }
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
              class="l_btn"
              onClick={this.handledonateSubmit.bind(this)}
            >
              Donate
            </button>
            <br />
            <button
              type="submit"
              class="l_btn"
              onClick={this.handlepurchaseSubmit.bind(this)}
            >
              Purchase
            </button>
            <br />
            <button
              type="submit"
              class="l_btn"
              onClick={this.handlengoSubmit.bind(this)}
            >
              NGO
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
