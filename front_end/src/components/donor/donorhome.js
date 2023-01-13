import React from "react";
import dhome from "../img/dhome.jpg";
import DonorNav from "./Nav";
import "./donorhome.css";
import "./donor_nav.css";
import pit from "../img/pit.jpg";
import Switch from "react-switch";

var eid, profile, image1, image2, message, ngo, s;

const donor = {
  backgroundImage: "url(" + dhome + ")",
  width: "100%",
  height: "100%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
};

class Donor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ngo: [],
      sngo: null,
      date: null,
      difpro: null,
      checked: false,
    };
    console.log("NGO:", ngo);
    this.difproChange = this.difproChange.bind(this);
    this.dateChange = this.dateChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.sngoChange = this.sngoChange.bind(this);

    this.handleChange = this.handleChange.bind(this);

    eid = sessionStorage.getItem("id");
    profile = "/donorprofile";
    console.log(sessionStorage.getItem("id"));
  }

  handleChange(checked) {
    this.setState({ checked });
    window.location.href = "/pur_home";
  }
  componentDidMount() {
    console.log("In cdm");
    const url = "http://localhost:9000/ngos";

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
        this.setState({ ngo: res });
        // console.log(this.sate.ngo[1])
      });
  }
  dd() {
    let s = this.state.ngo;

    return s.map((song) => {
      return <option value={song}>{song}</option>;
    });
  }

  sngoChange = (event) => {
    sessionStorage.setItem("sngo", event.target.value);
    this.setState({
      sngo: event.target.value,
    });
  };

  difproChange = (event) => {
    sessionStorage.setItem("difpro", event.target.value);
    this.setState({
      difpro: event.target.value,
    });
  };

  dateChange = (event) => {
    sessionStorage.setItem("date", event.target.value);
    this.setState({
      date: event.target.value,
    });
  };
  handleSubmit(event) {
    sessionStorage.setItem("step", 1);
    event.preventDefault();
    /*if (!this.state.date!=null && !this.state.ngo!=null && !this.state.difpro!=null)
      {
      alert("Please enter the required details.")
      }
    
    else */
    if (this.state.date == null) {
      alert("You need to mention the estimated delivery date of the product.");
    } else if (this.state.sngo == null || this.state.sngo == "Select NGO") {
      alert("You need to choose an NGO.");
    } else if (this.state.difpro == null || this.state.difpro == "") {
      alert("You need to mention the number of differnt products.");
    } else {
      window.location.href = "/donorproduct";
    }
  }
  render() {
    return (
      <div style={donor} class="main">
        <DonorNav />
        <div class="procontainer1">
          Please enter the following details:
          <br />
          <br />
          <form>
            <div class="row">
              <div class="col-25">
                <label for="date">Expected date of delievery</label>
              </div>
              <div class="col-75">
                <input
                  type="date"
                  name="date"
                  value={this.state.date}
                  onChange={this.dateChange}
                  required
                />
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="sngo">Select NGO to donate</label>
              </div>
              <div class="col-75">
                <select
                  id="ngo"
                  name="ngo"
                  value={this.state.sngo}
                  onChange={this.sngoChange}
                  required
                >
                  <option>Select NGO</option>
                  {this.dd()}
                </select>
              </div>
              <br />
            </div>
            <div class="row">
              <div class="col-25">
                <label for="difpro">Number of different products</label>
              </div>
              <div class="col-75">
                <input
                  type="text"
                  name="difpro"
                  value={this.state.difpro}
                  onChange={this.difproChange}
                  required
                />
              </div>
            </div>{" "}
            <div class="row">
              <center>
                <button
                  type="submit"
                  class="submit"
                  onClick={this.handleSubmit.bind(this)}
                  value="Submit"
                >
                  Submit And Add Product
                </button>
              </center>
            </div>
          </form>
          <div>
            <h2>{message}</h2>
          </div>
        </div>
      </div>
    );
  }
}
export default Donor;
