import React from "react";
import Nav from "./Nav";
import contact from "./img/contact.jpg";
import "./home_nav.css";
import "./contact.css";
import swal from "sweetalert";

const contacts = {
  width: "100%",
  height: "100%",
  backgroundImage: "url(" + contact + ")",
  backgroundRepeat: "repeat",
  backgroundSize: "cover",
  overflow: "auto",
};

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      msg: "",
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMsgChange = this.handleMsgChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handlePhoneChange = (event) => {
    this.setState({
      phone: event.target.value,
    });
  };
  handleMsgChange = (event) => {
    this.setState({
      msg: event.target.value,
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    var body = {
      email: this.state.email,
      username: this.state.name,
      phone: this.state.phone,
      msg: this.state.msg,
    };
    console.log(body);

    const url = "http://localhost:9000/feedback";
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
    }).then((response) => {
      if (response.ok) {
        // alert('Feedback Details submitted');
        swal({
          title: "Details submitted!",
          text: "",
          icon: "success",
          button: "Ok",
        }).then(function () {
          window.location.reload(false);
        });
      }
    });
  }

  render() {
    return (
      <div style={contacts}>
        <Nav />

        <div class="contact">
          <br />
          <br />
          <br />
          <br />
          <h1 class="contentHead">CONTACT US</h1>
          <br />
          <form class="contactform">
            <input
              id="text"
              type="text"
              placeholder="Name..."
              name="name"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
            <input
              id="text"
              type="text"
              placeholder="Email.."
              name="email"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
            <input
              id="text"
              type="text"
              placeholder="Phone Number.."
              name="phone"
              value={this.state.phone}
              onChange={this.handlePhoneChange}
            />
            <textarea
              cols="20"
              rows="10"
              id="textarea"
              placeholder="Message.."
              name="msg"
              value={this.state.msg}
              onChange={this.handleMsgChange}
            ></textarea>
            <br />
            <br />
            <br />
            <br />
            <button type="submit" id="submit" onClick={this.handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
