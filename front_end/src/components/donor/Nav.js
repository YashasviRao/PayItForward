import React from "react";
import "./donor_nav.css";
import pit from "../img/pit.jpg";
import { BrowserRouter as Router } from "react-router-dom";
import Switch from "react-switch";

class DonorNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
    window.location.href = "/pur_home";
  }

  render() {
    return (
      <Router>
        <div class="donor_nav">
          <ul class="donor_ul">
            <li class="donor_li">
              <a class="active" href="/donordash">
                <img alt="sorry" height="67px" width="190px" src={pit} />
              </a>
            </li>
            <li class="donor_li">
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
            <li class="donor_li">
              <a class="links" href="/dlogout">
                Logout
              </a>
            </li>
            <li class="donor_li">
              <a class="links" href="/donorprofile">
                My Profile
              </a>
            </li>
            <li class="donor_li">
              <a class="links" href="/redonatereq">
                Re-donation Requests
              </a>
            </li>
            <li class="donor_li">
              <a class="links" href="/productreq">
                Product Requests
              </a>
            </li>
            <li class="donor_li">
              <a class="links" href="/dproducts">
                Donated Products
              </a>
            </li>
            <li class="donor_li">
              <a class="links" href="/donorhome">
                Donate
              </a>
            </li>
            <li class="donor_li">
              <a class="links" href="/donordash">
                Home
              </a>
            </li>
          </ul>
        </div>
      </Router>
    );
  }
}
export default DonorNav;
