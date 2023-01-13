import React from "react";
import AdminNav from "./Nav";
import "./addcats.css";
import "./validate.css";
import Popupform from "./popupform";
import swal from "sweetalert";

const admin = {
  width: "100%",
  height: "100%",
  backgroundRepeat: "repeat",
  backgroundSize: "cover",
  overflow: "auto",
};

class AdminHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      s: [],
      s1: [],
      products_to_validate: "",
      ngos_validate: "",
      search_reqs: "",
      donate: "",
      sold: "",
      fund: "",
    };
  }
  products() {
    const url = "http://localhost:9000/products";

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
        this.state.products_to_validate = this.state.s.length;
        //console.log(this.state.s);
        console.log(
          "products to be validated:",
          this.state.products_to_validate
        );
      });
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
        this.state.ngos_validate = this.state.s.length;
        console.log("ngos to be validated:", this.state.ngos_validate);
      });
  }
  search() {
    const url = "http://localhost:9000/searchreq";

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
        this.state.search_reqs = this.state.s.length;
        console.log("No of searches:", this.state.search_reqs);
      });
  }
  donated_and_sold() {
    const url = "http://localhost:9000/donate_and_sell";

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
        this.setState({ s1: res });
        this.state.donate = this.state.s1[0];
        this.state.sold = this.state.s1[1];
        this.state.fund = this.state.s1[2];
        console.log("No of donations:", this.state.donate);
        console.log("No of products sold:", this.state.sold);
        console.log("Total fund raised:", this.state.fund);
      });
  }
  componentDidMount() {
    this.donated_and_sold();
    this.products();
    this.ngo();
    this.search();
    this.search();
  }

  render() {
    {
      /*let pv=this.state.products_to_validate
    let sr=this.state.search_reqs*/
    }
    // this.products();
    // this.ngo();
    // this.search();
    // this.donated_and_sold();
    return (
      <div style={admin} class="adminmain_home">
        <AdminNav />
        <div class="grid-container">
          <a href="/validate">
            <div class="grid-item">
              Products to be validated:
              <center class="dash_center">
                {this.state.products_to_validate}
              </center>
            </div>
          </a>
          <a href="/validatengo">
            <div class="grid-item">
              NGOs to be validated:
              <center class="dash_center">{this.state.ngos_validate}</center>
            </div>
          </a>
          <a href="/searchrequest">
            <div class="grid-item">
              New search requests:
              <center class="dash_center">{this.state.search_reqs}</center>
            </div>
          </a>
          <div class="grid-item">
            Total distinct products donated:
            <center class="dash_center">{this.state.donate}</center>
          </div>
          <div class="grid-item">
            Total products sold:
            <center class="dash_center">{this.state.sold}</center>
          </div>
          <div class="grid-item">
            Total revenue raised:
            <center class="dash_center">{this.state.fund}</center>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminHome;
