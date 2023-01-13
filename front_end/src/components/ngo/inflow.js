import React from "react";
import NgoNav from "./Nav";
import "./ngo_table.css";

const ngo = {
  width: "100%",
  height: "100%",
  backgroundRepeat: "repeat",
  backgroundSize: "cover",
  overflow: "auto",
};

const table = {
  top: "0%",
  left: "40%",
};

class Inflow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      s: [],
      p: null,
      sf: false,
      total_fund: 0,
      temp: 0,
    };
  }
  x;
  renderResultRows() {
    let s = this.state.s;
    return s.map((song, index) => {
      let amt = song[6] + this.state.total_fund;
      //this.setState({ total_fund: amt });
      this.state.total_fund += song[6];
      return (
        <tr id={index} className="foralign">
          <td>{song[5]}</td>

          <td>{song[3]}</td>

          <td>{song[0]}</td>
          <td>{song[1]}</td>
          <td>Rs {song[6]}/-</td>
        </tr>
      );
    });
  }

  products() {
    let body = { name: sessionStorage.getItem("id") };
    console.log(body);
    const url = "http://localhost:9000/ngosummary";

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
        console.log(this.state.total_fund);
        this.setState({ temp: this.state.total_fund });
      });
  }
  componentDidMount() {
    this.products();
  }
  render() {
    return (
      <div style={ngo} class="ngomain">
        <NgoNav />
        <center class="n_heading">DONATION SUMMARY</center>
        <center class="n_summ">
          Total amount received: {this.state.total_fund}
        </center>
        <div class="ngo">
          <table id="ntable" class="ntable" border="1">
            <th>
              <center>Donor Name</center>
            </th>
            <th>
              <center>Purchaser Name</center>
            </th>
            <th>
              <center>Product Name</center>
            </th>
            <th>
              <center>Quantity Purchased</center>
            </th>
            <th>
              <center>Amount Received</center>
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

export default Inflow;
