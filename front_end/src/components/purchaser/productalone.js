import React from "react";
import emailjs from "emailjs-com";
import CNav from "./Nav";
import "./sidenav.css";
import "./pur_table.css";
import { BrowserRouter, Route } from "react-router-dom";
import Sidenav from "./sidenav";
import swal from "sweetalert";

var id, s1, s2, cid;
const purchaser = {
  width: "100%",
  height: "100%",
  backgroundRepeat: "repeat",
  backgroundSize: "cover",
  overflow: "auto",
};
class productalone extends React.Component {
  constructor(props) {
    super(props);
    id = this.props.match.params.id;
    cid = sessionStorage.getItem("id");
    console.log(id);
    this.state = {
      cp: [],
      aprice: null,
      reqquant: null,
      email: null,
      name: "Name",
      feedback: "Thanks For buying",
    };
    this.reqquant = this.reqquant.bind(this);
    this.aprice = this.aprice.bind(this);
    this.buyproduct = this.buyproduct.bind(this);
    this.cart = this.cart.bind(this);
  }

  reqquant = (event) => {
    this.setState({
      reqquant: event.target.value,
    });
  };
  aprice = (event) => {
    this.setState({
      aprice: event.target.value,
    });
  };

  componentDidMount() {
    this.singleProduct();
    this.getEmail();
  }

  getEmail() {
    const url = "http://localhost:9000/getEmail";
    var body = { id: sessionStorage.getItem("id") };
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
        this.setState({ email: res.email });
        console.log(this.state.email, typeof this.state.email);
      });
  }
  singleProduct() {
    const url = "http://localhost:9000/singleproduct";
    var body = { id: id };
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
        console.log(this.state.cp);

        console.log(s1, s2);
      });
  }
  buyproduct(event) {
    event.preventDefault();
    console.log(this.state.reqquant, this.state.aprice);
    console.log(this.state.cp.quant);
    if (this.state.aprice < this.state.cp.nprice) {
      swal({
        title: "Oops!",
        text: "The agreed price should be greater than or equal to nominal price.",
        icon: "warning",
        button: "Ok",
      });
    } else if (this.state.reqquant > this.state.cp.quant) {
      swal({
        title: "Oops!",
        text: "The quantity should be less than or equal to availability.",
        icon: "warning",
        button: "Ok",
      });
    } else {
      var body = {
        pid: id,
        cid: cid,
        aprice: this.state.aprice,
        quant: this.state.cp.quant,
        nquant: this.state.reqquant,
      };
      const url = "http://localhost:9000/buyproduct";
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
          {
            const templateId = "buy_product_successful";

            this.sendFeedback(templateId, {
              from_name: this.state.cp.pname,
              email: this.state.email,
            });
          }

          // alert("Details submitted.. Thank You For Purchasing..");
          swal({
            title: "Purchase Successful!",
            text: "",
            icon: "success",
            button: "Ok",
          }).then(function () {
            window.location.href = "/pur_home";
          });
        }
      });
    }
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

  cart(event) {
    event.preventDefault();
    console.log(this.state.reqquant, this.state.aprice);
    console.log(this.state.cp.quant);
    //console.log(this.state.cp.quant)
    if (this.state.aprice < this.state.cp.nprice) {
      swal({
        title: "Oops!",
        text: "The agreed price should be greater than or equal to the nominal price.",
        icon: "warning",
        button: "Ok",
      });
    } else if (this.state.reqquant > this.state.cp.quant) {
      swal({
        title: "Oops!",
        text: "The quantity should be less than or equal to the availability.",
        icon: "warning",
        button: "Ok",
      });
    } else {
      var body = {
        pid: id,
        cid: cid,
        aprice: this.state.aprice,
        quant: this.state.cp.quant,
        nquant: this.state.reqquant,
      };
      const url = "http://localhost:9000/cartproduct";
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
          swal({
            title: "Product Added to Cart!",
            text: "",
            icon: "success",
            button: "Ok",
          }).then(function () {
            window.location.href = "/pur_home";
          });
        }
      });
    }
  }

  render() {
    s1 = "/productimages/" + this.state.cp.img1;
    s2 = "/productimages/" + this.state.cp.img2;
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
        <center class="prod_heading">{this.state.cp.pname}</center>
        <div class="productalone">
          <div className="div_left">
            <img src={s1} width="600px" height="600px" />
            <br />
            <br />
            {/* <img src={s2} width="400px" height="400px"/> */}
          </div>

          <div class="div_right">
            <table class="productalonetable">
              <tr>
                <td>
                  <h3 class="particular">Nominal Price </h3>
                </td>
                <td>
                  <h3>
                    <h5 class="struck-cost">Rs {this.state.cp.cost}</h5>
                    <h5 class="particular_big">
                      Rs.
                      {this.state.cp.nprice}
                    </h5>
                  </h3>
                </td>
              </tr>
              <tr>
                <td>
                  <h3 class="particular">Availabitlity </h3>
                </td>
                <td>
                  <h3 class="particular">{this.state.cp.quant}</h3>
                </td>
              </tr>
              <tr>
                <td>
                  <h3 class="particular">Description </h3>
                </td>
                <td>
                  <h3 class="particular">{this.state.cp.des}</h3>
                </td>
              </tr>
              <tr>
                <td>
                  <h3 class="particular">Year of Purchase </h3>
                </td>
                <td>
                  <h3 class="particular">{this.state.cp.year}</h3>
                </td>
              </tr>
              <tr>
                <td>
                  <h3 class="particular">Required Quantity </h3>
                </td>
                <td>
                  <h3>
                    <input
                      class="particular"
                      type="text"
                      class="producttext"
                      value={this.state.reqquant}
                      onChange={this.reqquant}
                      required
                    />
                  </h3>
                </td>
              </tr>
              <tr>
                <td>
                  <h3 class="particular">Agreed price </h3>
                </td>
                <td>
                  <h3>
                    <input
                      class="particular"
                      type="text"
                      class="producttext"
                      value={this.state.aprice}
                      onChange={this.aprice}
                      required
                    />
                  </h3>
                </td>
              </tr>
              <br />
              <br />
              <button className="productalonebtn" onClick={this.buyproduct}>
                Buy Product
              </button>
              &nbsp;&nbsp;&nbsp;
              <button className="productalonebtn" onClick={this.cart}>
                Add To Cart
              </button>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default productalone;
