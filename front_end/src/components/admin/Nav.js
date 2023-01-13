import React from "react";
import "./admin_nav.css";
import pit from "../img/pit.jpg";

import { BrowserRouter as Router } from "react-router-dom";

class AdminNav extends React.Component {
  render() {
    return (
      <Router>
        <div class="admin_nav">
          <ul class="admin_ul">
            <li class="admin_li">
              <a class="active" href="/adminhome">
                <img alt="sorry" height="80px" width="240px" src={pit} />
              </a>
            </li>
            <li class="admin_li">
              <a class="links" href="/">
                Logout
              </a>
            </li>
            <li class="admin_li">
              <a class="links" href="/feedback">
                Feedback
              </a>
            </li>
            <li class="admin_li">
              <a class="links" href="/addcats">
                Add Categories
              </a>
            </li>
            <li class="admin_li">
              <a class="links" href="/searchrequest">
                Search Requests
              </a>
            </li>
            <li class="admin_li">
              <a class="links" href="/validatengo">
                Validate NGOs
              </a>
            </li>
            <li class="admin_li">
              <a class="links" href="/validate">
                Validate Products
              </a>
            </li>
            <li class="admin_li">
              <a class="links" href="/adminhome">
                Home
              </a>
            </li>
          </ul>
        </div>
      </Router>
    );
  }
}
export default AdminNav;
