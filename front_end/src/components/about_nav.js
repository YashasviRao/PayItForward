import React from "react";
import "./about.css";
import pit from "./img/pit.jpg";

import { BrowserRouter as Router } from "react-router-dom";

class AboutNav extends React.Component {
  render() {
    return (
      <Router>
        <div class="about_nav">
          <ul class="about_ul">
            <li class="about_li">
              <a class="active" href="/">
                <img alt="sorry" height="67px" width="190px" src={pit} />
              </a>
            </li>

            <li class="about_li">
              <a class="links" href="/login">
                Login
              </a>
            </li>
            <li class="about_li">
              <a class="links" href="/about2">
                How we work
              </a>
            </li>
            <li class="about_li">
              <a class="links" href="/about1">
                What we do
              </a>
            </li>

            <li class="about_li">
              <a class="links" href="/">
                Home
              </a>
            </li>
          </ul>
        </div>
      </Router>
    );
  }
}
export default AboutNav;
