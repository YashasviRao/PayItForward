import React from "react";
import "./pur_nav.css";
import pit from "../img/pit.jpg";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import Switch from "react-switch";
class CNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: null,
      checked: true,
      in_cart: "",
    };

    this.searchProducts = this.searchProducts.bind(this);
    this.search = this.search.bind(this);
    this.handleChange = this.handleChange.bind(this);
    console.log("cart:", sessionStorage.getItem("id"));
    console.log(this.state.in_cart);
  }

  handleChange(checked) {
    this.setState({ checked });
    window.location.href = "/donorhome";
  }

  search(event) {
    this.setState({
      search: event.target.value,
    });
  }
  searchProducts(event) {
    event.preventDefault();
    //console.log(this.state.search);
    let s = this.state.search;
    //console.log(s);
    sessionStorage.setItem("search", s);
    if (sessionStorage.getItem("search") != null)
      window.location.href = "/psearch";
  }
  componentDidMount() {
    //let s = this.state.s;
    var body = { cid: sessionStorage.getItem("id") };
    const url = "http://localhost:9000/cartnumber";

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
        console.log(response);
        return response.json();
      })
      .then((res) => {
        let c = res[0];
        console.log(res);
        this.setState({ in_cart: c });
        console.log(this.state.in_cart);
      });
  }
  render() {
    return (
      <Router>
        <div class="cust_nav">
          <ul class="cust_ul">
            <li class="cust_li">
              <a class="active" href="/pur_home">
                <img alt="sorry" height="67px" width="190px" src={pit} />
              </a>
            </li>
            <li class="cust_li">
              <div class="toggle_area">
                <label htmlFor="material-switch"></label>
                <span class="side_p">Donor</span>

                <Switch
                  checked={this.state.checked}
                  onChange={this.handleChange}
                  className="react-switch"
                  id="material-switch"
                  uncheckedIcon={false}
                  checkedIcon={false}
                  height={35}
                  width={80}
                  offColor="#f39189"
                  onColor="#f39189"
                  boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                  activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                />
                <span class="side_d">Purchaser</span>
              </div>
            </li>
            <li class="cust_li">
              <a class="links" href="/">
                Logout
              </a>
            </li>
            <li class="cust_li">
              <a class="links" href="/purchaserprofile">
                My Profile
              </a>
            </li>
            <li class="cust_li">
              <a class="links" href="/purchasersum">
                Summary
              </a>
            </li>
            <li class="cust_li">
              <a class="links" href="/cart">
                My Cart ({this.state.in_cart})
              </a>
            </li>
            <li class="cust_li">
              <a class="links" href="/products">
                My Products
              </a>
            </li>
            <li class="cust_li">
              <a class="links" href="/pur_home">
                Home
              </a>
            </li>
            <li class="cust_li">
              <input
                type="text"
                name="search"
                placeholder="Search for something here"
                value={this.state.search}
                onChange={this.search}
                class="searchlink"
                onKeyPress={(event) => {
                  if (event.key === "Enter") {
                    this.searchProducts(event);
                  }
                }}
              />
              <button class="search" onClick={this.searchProducts}>
                {" "}
                Search{" "}
              </button>
            </li>
          </ul>
        </div>
      </Router>
    );
  }
}
export default CNav;
