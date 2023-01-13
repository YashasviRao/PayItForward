import React from "react";
import AdminNav from "./Nav";
import "./addcats.css";

class Addproduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div class="adminmain">
        <AdminNav />
      </div>
    );
  }
}
export default Addproduct;
