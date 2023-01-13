import React from "react";
import swal from "sweetalert";
import "./register.css";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validNameRegex = RegExp(/^[a-zA-Z0-9 ]{10,}$/);
const validPhoneRegex = RegExp(/^[6-9]{1}[0-9]{9}$/);
const validAddress = RegExp(/[A-Za-z0-9'\.\-\s\,]$/);

export class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      name: "",
      address: "",
      phone: "",
      ifngo: false,
      errors: {
        name: "",
        email: "",
        phone: "",
        address: "",
        password: "",
      },
      a: false,
      e: false,
      p: false,
      ph: false,
      n: false,
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleIfngoChange = this.handleIfngoChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }
  handleNameChange = (event) => {
    const { name, value } = event.target;
    let errors = this.state.errors;
    errors.name = validNameRegex.test(value)
      ? ""
      : "Invalid name. Please enter at least 10 alpha numerics.";
    if (errors.name == "") {
      this.setState({ n: true });
    }
    this.setState({ errors, [name]: value });
  };

  handlePasswordChange = (event) => {
    const { name, value } = event.target;
    let errors = this.state.errors;
    errors.password =
      value.length < 8 ? "Passwords must be at least 8 characters long." : "";
    if (errors.password == "") {
      this.setState({ p: true });
    }
    this.setState({ errors, [name]: value });
  };

  handleEmailChange = (event) => {
    const { name, value } = event.target;
    let errors = this.state.errors;
    errors.email = validEmailRegex.test(value) ? "" : "Invalid email.";
    if (errors.email == "") {
      this.setState({ e: true });
    }
    this.setState({ errors, [name]: value });
  };

  handlePhoneChange = (event) => {
    const { name, value } = event.target;
    let errors = this.state.errors;
    errors.phone = validPhoneRegex.test(value) ? "" : "Invalid phone number.";
    if (errors.phone == "") {
      this.setState({ ph: true });
    }
    this.setState({ errors, [name]: value });
  };

  handleAddressChange = (event) => {
    const { name, value } = event.target;
    let errors = this.state.errors;
    errors.address = validAddress.test(value) ? "" : "Invalid address.";
    if (errors.address == "") {
      this.setState({ a: true });
    }
    this.setState({ errors, [name]: value });
  };

  handleIfngoChange = (event) => {
    this.setState({
      ifngo: event.target.checked,
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    var body = {
      email: this.state.email,
      password: this.state.password,
      username: this.state.name,
      address: this.state.address,
      phone: this.state.phone,
    };
    console.log(body);
    if (this.state.name == "") {
      swal({
        title: "Please enter your name",
        text: "",
        icon: "error",
        button: "OK",
      });
    } else if (this.state.password == "") {
      swal({
        title: "Please enter the password",
        text: "",
        icon: "error",
        button: "OK",
      });
    } else if (this.state.email == "") {
      swal({
        title: "Please enter your e-mail",
        text: "",
        icon: "error",
        button: "OK",
      });
    } else if (this.state.phone == "") {
      swal({
        title: "Please enter your phone number",
        text: "",
        icon: "error",
        button: "OK",
      });
    } else if (this.state.address == "") {
      swal({
        title: "Please enter your name",
        text: "",
        icon: "error",
        button: "OK",
      });
    } else {
      let url = "http://localhost:9000/person";
      let headers = new Headers();

      headers.append("Content-Type", "application/json");
      headers.append("Accept", "application/json");

      headers.append("Access-Control-Allow-origin", url);
      headers.append("Access-Control-Allow-Credentials", "true");

      headers.append("POST", "GET");
      if (
        this.state.n == true &&
        this.state.e == true &&
        this.state.ph == true &&
        this.state.p == true
      ) {
        if (this.state.ifngo) url = "http://localhost:9000/addngo";
        console.log("in if");
        fetch(url, {
          headers: headers,
          method: "POST",
          body: JSON.stringify(body),
        })
          .then((response) => {
            if (response.ok) {
              swal({
                title: "Registration Successful!",
                text: "",
                icon: "success",
                button: "OK",
              }).then(function () {
                window.location = "/login";
              });
            }
          })
          .catch((error) => {
            console.error(error);
            swal({
              title: "This e-mail already exists",
              text: "",
              icon: "error",
              button: "OK",
            });
          });
      }
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div>
        <form>
          <div className="base-container">
            <div className="header">Register</div>
            <div className="content">
              <div className="form">
                <div className="form-group row">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    name="name"
                    placeholder="Enter name"
                    value={this.state.name}
                    onChange={this.handleNameChange}
                    required
                  />
                  <span class="error">{errors.name}</span>
                </div>
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
                  <span class="error">{errors.email}</span>
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
                  <span class="error">{errors.password}</span>
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="number"
                    name="phone"
                    placeholder="Enter phone number"
                    value={this.state.phone}
                    onChange={this.handlePhoneChange}
                    required
                  />
                  <span class="error">{errors.phone}</span>
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    name="address"
                    placeholder="Enter address"
                    value={this.state.address}
                    onChange={this.handleAddressChange}
                    required
                  />
                  <span class="error">{errors.address}</span>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="ifngo"
                    value={this.state.ifngo}
                    onChange={this.handleIfngoChange}
                  />{" "}
                  <label htmlFor="ifngo"> If NGO, please check this box.</label>
                </div>
              </div>
            </div>
            <button type="submit" onClick={this.handleSubmit} class="r-btn">
              Register
            </button>
            <br />

            <a class="reg_home_btn" href="/home">
              <span>Home</span>
            </a>
          </div>
        </form>
      </div>
    );
  }
}
