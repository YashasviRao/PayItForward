import React from "react";
import ngo1 from "../img/ngo1.png";
import ngo2 from "../img/ngo2.png";
import ngo3 from "../img/ngo3.png";
import ngo4 from "../img/ngo4.png";
import NgoNav from "./Nav";
import "./ngohome.css";
import "./ngo_nav.css";
import BackgroundSlider from "react-background-slider";
var eid, profile, image1, image2, message, ngo, s;

const ngos = {
  // backgroundImage: "url(" + ngo1 + ")",
  width: "100%",
  height: "100%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
};

class Ngo extends React.Component {
  render() {
    return (
      <div style={ngos}>
        <NgoNav />
        <BackgroundSlider
          images={[ngo1, ngo2, ngo3, ngo4]}
          duration={3}
          transition={2}
        />{" "}
      </div>
    );
  }
}
export default Ngo;
