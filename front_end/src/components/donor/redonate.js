import React from "react";
import DonorNav from "./Nav";
import "./donor_table.css";

const donor = {
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

class RedonateReq extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      s: [],
    };
  }

  renderResultRows() {
    console.log(sessionStorage.getItem("id"));
    let s = this.state.s;
    console.group(s);
    return s.map((song, index) => {
      let i = "/productimages/" + song[4];
      let a = "nprice-" + index;
      return (
        <tr id={index} className="foralign">
          <td>
            <center>{song[0]}</center>
          </td>
          <td>
            <center>{song[1]}</center>
          </td>
          <td>
            <center>{song[2]}</center>
          </td>
          <td>
            <center>{song[3]}</center>
          </td>
          <td>
            <button onClick={() => this.donate(index)}> Donate </button>
          </td>
        </tr>
      );
    });
  }

  donate(row) {
    window.location.href = "/donorhome";
  }

  products() {
    var body = { did: sessionStorage.getItem("id") };
    const url = "http://localhost:9000/redonate";

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
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        this.setState({ s: res });
        console.log(this.state.s);
      });
  }
  componentDidMount() {
    this.products();
  }

  render() {
    return (
      <div style={donor} class="donormain">
        <DonorNav />
        <center class="d_heading">RE-DONATION REQUESTS</center>
        <div class="donor">
          <table class="dtable" border="1" id="dtable_val">
            <th>
              <center>Product Name</center>
            </th>
            <th>
              <center>Category</center>
            </th>
            <th>
              <center>Sub-Category</center>
            </th>
            <th>
              <center>NGO</center>
            </th>
            <th>
              <center>Donate</center>
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

export default RedonateReq;
