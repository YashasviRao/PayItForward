import React from "react";
import CNav from "./Nav";
import "./pur_nav.css";
import "./pur_home.css";
import "./sidenav.css";
import Sidenav from "./sidenav";
import "./pur_table.css";
import productalone from "./productalone.js";
var s;
const purchaser = {
  width: "100%",
  height: "100%",
  backgroundRepeat: "repeat",
  backgroundSize: "cover",
  overflow: "auto",
};

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cp: ["a"],
      avail: null,
    };
  }
  componentDidMount() {
    const url = "http://localhost:9000/csearch";
    var body = { search: sessionStorage.getItem("search") };
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
    if (this.state.cp.length == 0) {
      const url = "http://localhost:9000/addsearch";
      var body = {
        search: sessionStorage.getItem("search"),
        id: sessionStorage.getItem("id"),
      };
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
        }
      });
    } else {
      return s.map((song, index) => {
        let i = "/productimages/" + song[4];
        //console.log(i,typeof(i))
        let a = "nprice-" + index;
        this.state.avail = song[3];
        return (
          <tr id={index} className="foralign">
            <td>{song[1]}</td>
            <td>
              <div class="cost">Rs {song[6]}/-</div>
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
  }

  buy(index) {
    let id = this.state.cp[index][0];
    console.log(id);
    window.location.href = "/productalone/" + id;
  }
  renderTable() {
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
        <center class="res_heading">Search Results</center>
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
  renderOopsie() {
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
        <img src={"/assets/snoopy.gif"} class="oopsie_img" />
        <center class="oopsie_msg">
          Oopsie...The product you are looking for seems to be unavailable.
        </center>
        {this.renderproducts()}
      </div>
    );
  }
  render() {
    if (this.state.cp.length != 0) {
      console.log("available");
      return this.renderTable();
    } else {
      return this.renderOopsie();
    }
  }
}
export default Search;
