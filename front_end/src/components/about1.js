import React from "react";
import AboutNav from "./about_nav";
import pitimg1 from "./img/pitimg1.jpg";
import "./home_nav.css";
import "./about.css";
import aboutus from "./img/aboutus.png";
//import swal from "sweetalert";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AccordionSummary from "@material-ui/core/AccordionSummary";

//import BackgroundSlider from "react-background-slider";

const about = {
  width: "100%",
  height: "100%",
  backgroundRepeat: "repeat",
  backgroundSize: "cover",
  overflow: "auto",
};

class About1 extends React.Component {
  /*data = [
    "For Donors" = "1. If you are a donor, you can go ahead and pick an NGO to donate your products. <br /><br />2. The admin validates your products to qualify them for sale. <br /> <br /> 3. If your product is purchased by someone, you will get notified about the entire transaction. <br /> <br /> 4. We let you know how your profits helped the NGO you picked through a summarization tab. <br />",
    "For Purchasers"="1. If you are a donor, you can go ahead and pick an NGO to donate your products. <br /><br />2. The admin validates your products to qualify them for sale. <br /> <br /> 3. If your product is purchased by someone, you will get notified about the entire transaction. <br /> <br /> 4. We let you know how your profits helped the NGO you picked through a summarization tab. <br />",
    "For NGOs"="1. If you are a donor, you can go ahead and pick an NGO to donate your products. <br /><br />2. The admin validates your products to qualify them for sale. <br /> <br /> 3. If your product is purchased by someone, you will get notified about the entire transaction. <br /> <br /> 4. We let you know how your profits helped the NGO you picked through a summarization tab. <br />",
  ];*/
  abouts = [
    {
      title: "For Donors",
      data: [
        "1. Pick an NGO to donate your product(s).",
        "2. The admin validates your products to qualify them for sale.",
        "3. If your product is purchased by someone, you will get notified about the entire transaction.",
        "4. We let you know how your transaction helped the NGO you picked through a summarization tab.",
      ],
    },
    {
      title: "For Purchasers",
      data: [
        "1. Browse through the catalog and select the product(s) - only validated products will be displayed.",
        "2. Enter the quantity and the price you are willing to pay - it should be equal or higher than the nominal price displayed.",
        "3. You can proceed to buy the producct or save it for later in your cart.",
        "4. We let you know how your transaction helped the NGO you picked through a summarization tab.",
      ],
    },
    {
      title: "For NGOs",
      data: [
        "1. Post registration, your account will be validated by the admin.",
        "2. On logging in, you will be able to see the inflow and other details of various transactions pertaining to your NGO.",
      ],
    },
  ];

  render() {
    return (
      <div style={about} class="about">
        <AboutNav />
        <div class="what_we_do">
          <h1 class="contentHead_1">What we do</h1>
          <p class="aboutus">
            Hello!
            <br />
            <br />
            Pay It Forward is a web portal that bridges the gap between people
            in need and NGOs. Furthermore, it gives an opportunity to donors to
            donate products and for buyers to purchase them. The profits are
            sent to the NGOs linked with us. We tell you exactly how your
            donation helps those in need and also give you a proof of it through
            notifications and proper summarization. <br />
            We review and validate the nonprofit organizations that approach us.
            They work for a host of causes ranging from child welfare and
            education to disability, poverty, and women empowerment and many
            others.
            <br />
            <br />
          </p>
        </div>
        <img src={aboutus} class="about_image" />
      </div>
    );
  }
}

export default About1;
