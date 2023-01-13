import React from "react";
import AdminNav from "./Nav";
import ngo from "../img/ngo.jpg";
import swal from "sweetalert";

const admin = {
  width: "100%",
  height: "100%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
};
const feedbacktable = {
  position: "absolute",
  top: "20%",
  left: "20%",
  right: "20%",
};

class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      s: [],
    };
  }

  renderResultRows() {
    let s = this.state.s;
    let n;
    return s.map((song, index) => {
      return (
        <tr id={index} className="foralign">
          <td>{song[1]}</td>
          <td>{song[2]}</td>
          <td>{song[3]}</td>
          <td>
            <div class="center_feed">{song[4]}</div>
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
    console.log(body);
    const url = "http://localhost:9000/deletefeedback";

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
        //alert("Details deleted");
        swal({
          title: "Feedback Deleted",
          text: "",
          icon: "success",
          button: "Ok",
        }).then(function () {
          window.location.reload(false);
        });
      }
    });
  }

  feedbacks() {
    const url = "http://localhost:9000/feedbacks";

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
    this.feedbacks();
  }

  render() {
    return (
      <div style={admin} class="adminmain">
        <AdminNav />
        <center class="a_heading">USER FEEDBACK</center>
        <div class="admin">
          <table id="etable_feed" class="etable_feed" border="1">
            <th>
              <center>Name</center>
            </th>
            <th>
              <center>Email</center>
            </th>
            <th>
              <center>Phone Number</center>
            </th>
            <th>
              <center>Message</center>
            </th>
            <th>
              <center>Delete</center>
            </th>
            <tbody> {this.renderResultRows()} </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Feedback;
