import React from "react";
import AdminNav from "./Nav";
import "./addcats.css";
import "./validate.css";
import Popupform from "./popupform";
import swal from "sweetalert";
import emailjs from "emailjs-com";

const admin = {
  width: "100%",
  height: "100%",
  backgroundRepeat: "repeat",
  backgroundSize: "cover",
  overflow: "auto",
};

const table = {
  top: "20%",
  left: "40%",
};

class ValidateNgo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      status: "",
      s: [],
      p: null,
      sf: false,
    };
  }

  renderResultRows() {
    let s = this.state.s;
    return s.map((song, index) => {
      return (
        <tr id={index} className="foralign">
          <td>
            <center>{song[6]}</center>
          </td>
          <td>
            <center>{song[2]}</center>
          </td>
          <td>
            <center>{song[4]}</center>
          </td>
          <td>
            <center>{song[1]}</center>
          </td>
          <td>
            <button onClick={() => this.fetchDetails(index)}> Validate </button>
          </td>
          <td>
            <button onClick={() => this.deleteDetails(index)}> Delete </button>
          </td>
        </tr>
      );
    });
  }

  deleteDetails(row) {
    let s = this.state.s;
    var body = { id: s[row][0] };
    const url = "http://localhost:9000/deletengo";

    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");

    headers.append("Access-Control-Allow-origin", url);
    headers.append("Access-Control-Allow-Credentials", "true");

    headers.append("POST", "GET");
    this.state.name = s[row][6];
    this.state.email = s[row][2];
    this.state.status = "rejected";
    fetch(url, {
      headers: headers,
      method: "POST",
      body: JSON.stringify(body),
    }).then((response) => {
      if (response.ok) {
        // alert("Details deleted");
        {
          const templateId = "validate_ngo";
          this.sendFeedback(templateId, {
            from_name: this.state.name,
            status: this.state.status,
            email: this.state.email,
          });
        }
        swal({
          title: "NGO details deleted successfully!",
          text: "",
          icon: "success",
          button: "Ok",
        }).then(function () {
          window.location.reload(false);
        });
      }
    });
  }

  fetchDetails(row) {
    let s = this.state.s;
    var n = 1;
    var body = { id: s[row][0], state: n };
    console.log();

    const url = "http://localhost:9000/updatengo";

    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");

    headers.append("Access-Control-Allow-origin", url);
    headers.append("Access-Control-Allow-Credentials", "true");

    headers.append("POST", "GET");
    this.state.name = s[row][6];
    this.state.email = s[row][2];
    this.state.status = "accepted";
    console.log(s[row][5]);
    /* if (s[row][5] == 1) 
      this.state.status = "accepted";*/
    fetch(url, {
      headers: headers,
      method: "POST",
      body: JSON.stringify(body),
    }).then((response) => {
      if (response.ok) {
        {
          const templateId = "validate_ngo";
          this.sendFeedback(templateId, {
            from_name: this.state.name,
            status: this.state.status,
            email: this.state.email,
          });
        }

        swal({
          title: "NGO details submitted successfully!",
          text: "",
          icon: "success",
          button: "Ok",
        }).then(function () {
          window.location.reload(false);
        });
      }
    });
  }
  sendFeedback(templateId, variables) {
    window.emailjs
      .send(
        "service_948f54k",
        templateId,
        variables,
        "user_oJXQbWO2xPiinezeflcBs"
      )
      .then((res) => {
        // alert('Email successfully sent!')
      })
      // Handle errors here however you like, or use a React error boundary
      .catch((err) =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
    // window.location.reload(false);
  }

  ngo() {
    const url = "http://localhost:9000/ngoslist";

    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");

    headers.append("Access-Control-Allow-origin", url);
    headers.append("Access-Control-Allow-Credentials", "true");

    headers.append("POST", "GET");

    fetch(url, {
      headers: headers,
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        this.setState({ s: res });
        console.log(this.state.s);
      });
  }
  componentDidMount() {
    this.ngo();
  }

  render() {
    return (
      <div style={admin} class="adminmain">
        <AdminNav />
        <center class="a_heading">VALIDATE NGO</center>
        <div class="admin">
          <table class="etable" border="1" id="etable_val">
            <th>
              <center>Username</center>
            </th>
            <th>
              <center>Email</center>
            </th>
            <th>
              <center>Phone</center>
            </th>
            <th>
              <center>Address</center>
            </th>
            <th>
              <center>Validate</center>
            </th>
            <th>
              <center>Remove</center>
            </th>

            <tbody> {this.renderResultRows()} </tbody>
          </table>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default ValidateNgo;
