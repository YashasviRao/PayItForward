import React from "react";
import "./sidenav.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
/*"/scatlist/namesub" */
var path = "/scatlist/";
var panelname = "";

class Sidenav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      s: [],
      dict: {},
      expanded: "",
    };
    console.log("hello");
  }

  handleChange = () => (event) => {
    return false;
  };

  componentDidMount() {
    //let s=this.state.s;
    console.log("In cdm");
    const url = "http://localhost:9000/cats";

    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");

    headers.append("Access-Control-Allow-origin", url);
    headers.append("Access-Control-Allow-Credentials", "true");

    headers.append("POST", "GET");

    fetch(url, {
      headers: headers,
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        this.setState({ s: res });
        console.log(this.state.s);
        console.log("for start");
        for (var i = 0; i < this.state.s.length; i++) {
          console.log("in for");
          this.subcats(this.state.s[i], i);
          console.log(this.state.s[i], i);
        }
      });
  }
  subcats(category, index) {
    var i = this.state.index;
    const url = "http://localhost:9000/subcats";

    var body = { cat: category };
    let headers1 = new Headers();
    headers1.append("Content-Type", "application/json");
    headers1.append("Accept", "application/json");

    headers1.append("Access-Control-Allow-origin", url);
    headers1.append("Access-Control-Allow-Credentials", "true");

    headers1.append("POST", "GET");

    fetch(url, {
      headers: headers1,
      method: "POST",
      body: JSON.stringify(body),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        const dict = this.state.dict;
        dict[category] = response;
        this.setState({
          dict: { ...this.state.dict, [category]: response },
        });
      });
  }

  render() {
    const { s, dict } = this.state;
    return s.map((val, index) => {
      panelname = "panel" + index;
      return (
        <div class="side_accordian">
          <Accordion style={{ width: 500 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              style={{
                height: 90,
                backgroundColor: "rgb(243, 145, 137)",
              }}
            >
              <div class="cat_head">{val}</div>
              {/*this.subcats(val)*/}
            </AccordionSummary>

            <AccordionDetails
              style={{
                backgroundColor: "#ffe6ee",
              }}
            >
              <div>
                {this.state.dict[val]
                  ? this.state.dict[val].map((val, index) => {
                      return (
                        <ul class="dets">
                          <a href={path + val}>
                            <li key={index}>{val}</li>
                          </a>
                        </ul>
                      );
                    })
                  : null}
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      );
    });
  }
}
export default Sidenav;
