import React from "react";
import AboutNav from "./about_nav";
import pitimg1 from "./img/pitimg1.jpg";
import "./home_nav.css";
import "./about.css";
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

const About2 = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    console.log("CALLED");
    setExpanded(isExpanded ? panel : false);
  };
  /*data = [
    "For Donors" = "1. If you are a donor, you can go ahead and pick an NGO to donate your products. <br /><br />2. The admin validates your products to qualify them for sale. <br /> <br /> 3. If your product is purchased by someone, you will get notified about the entire transaction. <br /> <br /> 4. We let you know how your profits helped the NGO you picked through a summarization tab. <br />",
    "For Purchasers"="1. If you are a donor, you can go ahead and pick an NGO to donate your products. <br /><br />2. The admin validates your products to qualify them for sale. <br /> <br /> 3. If your product is purchased by someone, you will get notified about the entire transaction. <br /> <br /> 4. We let you know how your profits helped the NGO you picked through a summarization tab. <br />",
    "For NGOs"="1. If you are a donor, you can go ahead and pick an NGO to donate your products. <br /><br />2. The admin validates your products to qualify them for sale. <br /> <br /> 3. If your product is purchased by someone, you will get notified about the entire transaction. <br /> <br /> 4. We let you know how your profits helped the NGO you picked through a summarization tab. <br />",
  ];*/
  const abouts = [
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

  return (
    <div style={about} class="about">
      <AboutNav />
      <div class="how_we_work">
        <h1 class="contentHead_2">How We Work</h1>

        <div class="accordian">
          <Accordion
            style={{ width: 2500 }}
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              style={{ height: 150, backgroundColor: "rgb(243, 145, 137)" }}
            >
              <div class="title">{abouts[0].title}</div>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: "rgb(243, 145, 137)" }}>
              <div class="data">
                {abouts[0].data[0]}
                <br />
                <br />
                {abouts[0].data[1]}
                <br />
                <br />
                {abouts[0].data[2]}
                <br />
                <br />
                {abouts[0].data[3]}
              </div>
            </AccordionDetails>
          </Accordion>
        </div>

        <div class="accordian">
          <Accordion
            style={{ width: 2500 }}
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              style={{ height: 150, backgroundColor: "rgb(243, 145, 137)" }}
            >
              <div class="title">{abouts[1].title}</div>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: "rgb(243, 145, 137)" }}>
              <div class="data">
                {abouts[1].data[0]}
                <br />
                <br />
                {abouts[1].data[1]}
                <br />
                <br />
                {abouts[1].data[2]}
                <br />
                <br />
                {abouts[1].data[3]}
              </div>
            </AccordionDetails>
          </Accordion>
        </div>

        <div class="accordian">
          <Accordion
            style={{ width: 2500 }}
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              style={{ height: 150, backgroundColor: "rgb(243, 145, 137)" }}
            >
              <div class="title">{abouts[2].title}</div>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: "rgb(243, 145, 137)" }}>
              <div class="data">
                {abouts[2].data[0]}
                <br />
                <br />
                {abouts[2].data[1]}
                <br />
                <br />
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default About2;
