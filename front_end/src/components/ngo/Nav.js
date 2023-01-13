import React from "react";
import "./ngo_nav.css";
import pit from "../img/pit.jpg";
import { BrowserRouter as Router } from "react-router-dom";

class NgoNav extends React.Component {
  render() {
    return (
      <Router>
        <div class="ngo_nav">
          <ul class="ngo_ul">
            <li class="ngo_li">
              <a class="active" href="/ngohome">
                <img alt="sorry" height="67px" width="190px" src={pit} />
              </a>
            </li>
            <li class="ngo_li">
              <a class="links" href="/">
                Logout
              </a>
            </li>
            <li class="ngo_li">
              <a class="links" href="/ngoprofile">
                My Profile
              </a>
            </li>
            <li class="ngo_li">
              <a class="links" href="/inflow">
                Donation Summary
              </a>
            </li>
            <li class="ngo_li">
              <a class="links" href="/ngohome">
                NGO Home
              </a>
            </li>
          </ul>
        </div>
      </Router>
    );
  }
}
export default NgoNav;
