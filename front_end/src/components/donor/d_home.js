import React from "react";
import DonorNav from "./Nav";
import "./donor_nav.css";
import dhome from "../img/donate letters.png";
//import "./addcats.css";
//import "./validate.css";
//import Popupform from "./popupform";
import swal from "sweetalert";

const purchaser = {
  width: "100%",
  height: "100%",
  backgroundRepeat: "repeat",
  backgroundSize: "cover",
  overflow: "auto",
};
class D_Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      s: [],
      donated: 0,
      sold: 0,
      fund: 0,
      st: 0,
    };
  }

  componentDidMount() {
    this.products();
  }

  products() {
    let body = { did: sessionStorage.getItem("id") };
    console.log(body);
    const url = "http://localhost:9000/getproducts";

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

  render() {
    let s = this.state.s;
    let n;
    console.log(s);
    s.map((song, index) => {
      console.log(s);
      this.state.donated += song[9] + song[7];
      this.state.sold += song[9];
      let a = "nprice-" + index;
      this.state.st = song[4];
      this.state.fund += song[10];
    });
    return (
      <div style={purchaser} class="adminmain_home">
        <DonorNav />
        <div class="grid-container-don">
          <div class="grid-item-don">
            Total Products Donated:
            <center class="dash_center-don">{this.state.donated}</center>
          </div>

          <div class="grid-item-don">
            Total Products Sold:
            <center class="dash_center-don">{this.state.sold}</center>
          </div>

          <div class="grid-item-don">
            Total Amount Raised:
            <center class="dash_center-don">{this.state.fund}</center>
          </div>
        </div>
        <img src={dhome} class="donor_img" />
      </div>
    );
  }
}

export default D_Summary;
