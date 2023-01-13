import React from "react";
import CNav from "./Nav";
import "./pur_nav.css";
import cdash from "../img/cust_dash.png";

const purchaser = {
  width: "100%",
  height: "100%",
  backgroundRepeat: "repeat",
  backgroundSize: "cover",
  overflow: "auto",
};
class C_Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      s: [],
      sold: 0,
      fund: 0,
      prods: 0,
    };
  }
  products() {
    let body = { cid: sessionStorage.getItem("id") };
    console.log(body);
    const url = "http://localhost:9000/cprofile";

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
        // this.state.sold=this.state.s.length;
        console.log("No of products bought:", this.state.sold);
      });
  }
  componentDidMount() {
    this.products();
  }
  render() {
    let s = this.state.s;
    let n;
    s.map((song, index) => {
      //let amt=song[6]+this.state.total_fund;
      this.state.fund += song[2];
    });
    this.state.sold = this.state.s.length;

    return (
      <div style={purchaser} class="adminmain_home">
        <CNav />
        <div class="grid-container-cust">
          <div class="grid-item-cust">
            Total Products Purchased:
            <center class="dash_center-cust">{this.state.sold}</center>
          </div>

          <div class="grid-item-cust">
            Total Amount Raised:
            <center class="dash_center-cust">{this.state.fund}</center>
          </div>
        </div>
        <img src={cdash} class="cust_img" />
      </div>
    );
  }
}

export default C_Summary;
