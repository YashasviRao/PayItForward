import React from "react";
import "./App.scss";
import "./admin_login.css";
import { Admin } from "./index";

class AdminLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true,
    };
  }
  render() {
    return (
      <div class="Ad_login">
        <center>
          <div class="login">
            <div class="container" ref={(ref) => (this.container = ref)}>
              {<Admin containerRef={(ref) => (this.current = ref)} />}
            </div>
          </div>
        </center>
      </div>
    );
  }
}

export default AdminLogin;
