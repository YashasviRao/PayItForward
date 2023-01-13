import React from "react";
import CNav from "./Nav";
import "./pur_nav.css";
import "./pur_home.css";
import "./sidenav.css";
import Sidenav from "./sidenav";
import Strike from "react-strike";
import productalone from "./productalone.js";
var s;
const purchaser = {
  width: "100%",
  height: "100%",
  backgroundRepeat: "repeat",
  backgroundSize: "cover",
  overflow: "auto",
};

class Scatlist extends React.Component {
  constructor(props) {
    super(props);
    s = this.props.match.params.scat;
    console.log(s);
    this.state = {
      cp: [],
    };
  }
  componentDidMount() {
    const url = "http://localhost:9000/getcproducts";
    var body = { scat: s };
    console.log(body);
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
        this.setState({ cp: res });
        console.log(res);
      });
  }
  renderproducts() {
    let s = this.state.cp;
    let n;
    return s.map((song, index) => {
      let i = "/productimages/" + song[4];
      //console.log(i,typeof(i))
      let a = "nprice-" + index;
      return (
        <tr id={index} className="foralign">
          <td>{song[1]}</td>
          <td>
            <div class="strike-cost">Rs {song[6]}/-</div>
            <div class="nominal">Rs {song[2]}/-</div>
          </td>
          <td>{song[3]}</td>
          <td>
            <img src={i} class="purchaserimage" />
          </td>
          <td>
            {song[5]}
            <br />
            Year of Purchase : {song[7]}{" "}
          </td>

          <td>
            <button onClick={() => this.buy(index)}>BUY</button>
          </td>
        </tr>
      );
    });
  }

  buy(index) {
    let id = this.state.cp[index][0];
    console.log(id);
    window.location.href = "/productalone/" + id;
  }
  render() {
    return (
      <div style={purchaser} class="purchasermain">
        <CNav />
        <div class="csidebar">
          <br />
          <br />
          <br />
          <br />
          <Sidenav />
        </div>
        <center class="res_heading">{s}</center>
        <div class="purchaser">
          <table border="1" class="restable" id="restable">
            <th>Product Name</th>
            <th>Price</th>
            <th>Availability</th>
            <th>Image</th>
            <th>Description</th>
            <th>Purchase</th>
            {this.renderproducts()}
          </table>
        </div>
      </div>
    );
  }
}
export default Scatlist;
