import React from "react";
import "./home_nav.css";
import pit from "./img/pit.jpg";

import { BrowserRouter as Router } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <Router>
        <div class="home_nav">
          <ul class="home_ul">
            <li class="home_li">
              <a class="active" href="/">
                <img alt="sorry" height="67px" width="190px" src={pit} />
              </a>
            </li>
            <li class="home_li">
              <a class="links" href="/admin">
                Admin
              </a>
            </li>
            <li class="home_li">
              <a class="links" href="/login">
                Login
              </a>
            </li>
            <li class="home_li">
              <a class="links" href="/contact">
                Contact Us
              </a>
            </li>
            <li class="home_li">
              <a class="links" href="/about1">
                About Us
              </a>
            </li>
          </ul>
        </div>
      </Router>
    );
  }
}
export default Nav;
