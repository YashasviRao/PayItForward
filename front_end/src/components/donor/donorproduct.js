import React from "react";
import dhome from "../img/dhome.jpg";
import "./donorhome.css";
import "./donor_nav.css";
import pit from "../img/pit.jpg";
import swal from "sweetalert";
import emailjs from "emailjs-com";

var eid, profile, image1, image2, message, ngo, s;

const donor = {
  backgroundImage: "url(" + dhome + ")",
  width: "100%",
  height: "100%",
  backgroundRepeat: "no-repeat",
  backgroundRepeat: "repeat",
  backgroundSize: "cover",
  overflow: "auto",
};

class Dproduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pname: null,
      quant: null,
      quality: null,
      date: null,
      des: null,
      category: null,
      file1: null,
      file2: null,
      ngo: [],
      sngo: null,
      scat: null,
      category: "",
      cats: [],
      subcats: [],
    };

    this.handleImage1 = this.handleImage1.bind(this);
    this.handleImage2 = this.handleImage2.bind(this);
    this.pnameChange = this.pnameChange.bind(this);
    this.quantChange = this.quantChange.bind(this);
    this.qualityChange = this.qualityChange.bind(this);
    this.desChange = this.desChange.bind(this);
    this.categoryChange = this.categoryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.scatChange = this.scatChange.bind(this);
    this.costChange = this.costChange.bind(this);
    this.yearChange = this.yearChange.bind(this);

    eid = sessionStorage.getItem("id");
    profile = "/donorprofile";
    console.log(eid);
  }

  componentDidMount() {
    this.cats();
    // this.subcats(this.state.category);
  }

  pnameChange = (event) => {
    this.setState({
      pname: event.target.value,
    });
  };

  costChange = (event) => {
    this.setState({
      cost: event.target.value,
    });
  };
  yearChange = (event) => {
    this.setState({
      year: event.target.value,
    });
  };

  scatChange = (event) => {
    this.setState({
      scat: event.target.value,
    });
  };

  quantChange = (event) => {
    this.setState({
      quant: event.target.value,
    });
  };
  qualityChange = (event) => {
    this.setState({
      quality: event.target.value,
    });
  };

  desChange = (event) => {
    this.setState({
      des: event.target.value,
    });
  };
  categoryChange = (event) => {
    this.setState({
      category: event.target.value,
    });
    console.log(this.state.category);
    this.subcats(event.target.value);
  };

  handleImage1(event) {
    this.setState({
      file1: URL.createObjectURL(event.target.files[0]),
    });
    image1 = event.target.files[0].name;
  }
  handleImage2(event) {
    this.setState({
      file2: URL.createObjectURL(event.target.files[0]),
    });
    image2 = event.target.files[0].name;
  }
  subcats(category) {
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
        this.setState({ subcats: response });
        console.log(this.state.subcats);
      });
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.quality, this.state.year);

    /*if (!this.state.pname!=null && !this.state.quant!=null && !this.state.quality!=null && !this.state.cost!=null
      && !this.state.year!=null && !this.state.des!=null && !this.state.category!=null && !this.state.scat!=null && 
      !this.state.file1!=null)
      {
      alert("Please enter all the required details.")
      }
    
    else */
    if (this.state.pname == null) {
      alert("You need to mention the name of the product.");
    } else if (this.state.quant == null) {
      alert("You need to mention the quantity of the product.");
    } else if (
      this.state.quality == null ||
      this.state.quality == "Select Quality"
    ) {
      alert("You need to mention the quality of the product.");
    } else if (this.state.cost == null) {
      alert("You need to mention the original cost of the product.");
    } else if (this.state.year == null) {
      alert("You need to mention the purchase year of the product.");
    } else if (this.state.des == null) {
      alert("You need to mention the description of the product.");
    } else if (
      this.state.category == null ||
      this.state.category == "Select Category"
    ) {
      alert("You need to mention the category of the product.");
    } else if (
      this.state.scat == null ||
      this.state.scat == "Select Subcategory"
    ) {
      alert("You need to mention the sub category of the product.");
    } else if (this.state.file1 == null) {
      alert("You need to attach the image of the product.");
    } else {
      console.log(this.state);
      var body = {
        did: eid,
        pname: this.state.pname,
        quant: this.state.quant,
        quality: this.state.quality,
        expdate: sessionStorage.getItem("date"),
        des: this.state.des,
        cat: this.state.category,
        scat: this.state.scat,
        cost: this.state.cost,
        year: this.state.year,
        img1: image1,
        img2: image2,
        state: 0,
        ngo: sessionStorage.getItem("sngo"),
      };
      console.log(body);
      const url = "http://localhost:9000/addproduct";
      let headers = new Headers();

      headers.append("Content-Type", "application/json");
      headers.append("Accept", "application/json");

      headers.append("Access-Control-Allow-origin", url);
      headers.append("Access-Control-Allow-Credentials", "true");

      headers.append("POST", "GET");

      fetch(url, {
        headers: headers,
        method: "POST",
        body: JSON.stringify(body),
      }).then((response) => {
        if (response.ok) {
          var s = parseInt(sessionStorage.getItem("step")) + 1;
          sessionStorage.removeItem("step");
          sessionStorage.setItem("step", s);
          console.log(s, typeof sessionStorage.getItem("step"));
          swal({
            title: "Product donated successfully!",
            text: "",
            icon: "success",
            button: "Ok",
          }).then(function () {
            window.location.reload(false);
          });
        }
      });
    }
  }
  /*sendFeedback (templateId, variables) {
    window.emailjs.send(
    'service_hkjkkl7', templateId,
    variables
    ,'user_1HqWAdcWXIFilFZ5jsmdk').then(res => {
       // alert('Email successfully sent!')
    })
    // Handle errors here however you like, or use a React error boundary
    .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
   // window.location.reload(false);
  }*/

  cats() {
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
        this.setState({ cats: res });
        // console.log(this.sate.ngo[1])
      });
  }

  dd() {
    let s = this.state.cats;
    return s.map((song) => {
      return (
        <option value={song} id="hide">
          {song}
        </option>
      );
    });
  }

  dd1() {
    let s = this.state.subcats;

    return s.map((song) => {
      return (
        <option value={song} id="hide">
          {song}
        </option>
      );
    });
  }

  success() {
    let id = sessionStorage.getItem("id");
    sessionStorage.clear();
    sessionStorage.setItem("id", id);

    window.location.href = "/donorhome";
  }
  render() {
    if (
      parseInt(sessionStorage.getItem("step")) <=
      parseInt(sessionStorage.getItem("difpro"))
    ) {
      return (
        <div style={donor} class="main">
          <div class="donor_nav">
            <ul class="donor_ul">
              <li class="donor_li">
                <a class="active" href="/donorhome">
                  <img alt="sorry" height="67px" width="190px" src={pit} />
                </a>
              </li>
              <li class="donor_li">
                <a class="links" href="/">
                  Logout
                </a>
              </li>
              <li class="donor_li">
                <a class="links">My Profile</a>
              </li>
              <li class="donor_li">
                <a class="links">Redonate Requests</a>
              </li>
              <li class="donor_li">
                <a class="links">Product Requests</a>
              </li>
              <li class="donor_li">
                <a class="links">Donated Products</a>
              </li>
              <li class="donor_li">
                <a class="links" href="/donorhome">
                  Donate
                </a>
              </li>
            </ul>
          </div>
          <div class="secondcontainer1">
            Please add the following details:
            <br />
            <br />
            <form class="donorform">
              <div class="row">
                <div class="col-25">
                  <label for="fname">Product Name</label>
                </div>
                <div class="col-75">
                  <input
                    type="text"
                    id="pname"
                    name="pname"
                    placeholder="Enter product name"
                    value={this.state.pname}
                    onChange={this.pnameChange}
                    required
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-25">
                  <label for="quant">Quantity</label>
                </div>
                <div class="col-75">
                  <input
                    type="text"
                    id="quant"
                    name="quant"
                    placeholder="Enter quantity"
                    value={this.state.quant}
                    onChange={this.quantChange}
                    required
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-25">
                  <label for="quality">Quality</label>
                </div>
                <div class="col-75">
                  <select
                    id="quality"
                    name="quality"
                    value={this.state.quality}
                    onChange={this.qualityChange}
                    required
                  >
                    <option>Select Quality</option>
                    <option value="used">Used</option>
                    <option value="new">New</option>
                  </select>
                </div>
              </div>
              <div class="row">
                <div class="col-25">
                  <label for="cost">Product Original Cost</label>
                </div>
                <div class="col-75">
                  <input
                    type="text"
                    id="cost"
                    name="cost"
                    placeholder="Enter original price"
                    value={this.state.cost}
                    onChange={this.costChange}
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-25">
                  <label for="year">Product Purchased year</label>
                </div>
                <div class="col-75">
                  <input
                    type="text"
                    id="year"
                    name="year"
                    placeholder="Enter year of purchase"
                    value={this.state.year}
                    onChange={this.yearChange}
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-25">
                  <label for="des">Description</label>
                </div>
                <div class="col-75">
                  <textarea
                    id="des"
                    name="des"
                    placeholder="Provide product description"
                    value={this.state.des}
                    onChange={this.desChange}
                    required
                  ></textarea>
                </div>
              </div>
              <div class="row">
                <div class="col-25">
                  <label for="Category">Category</label>
                </div>
                <div class="col-75">
                  <select
                    id="category"
                    name="category"
                    value={this.state.category}
                    onChange={this.categoryChange}
                    required
                  >
                    <option value="select">Select Category</option>
                    {this.dd()}
                  </select>
                </div>
              </div>
              <div class="row">
                <div class="col-25">
                  <label for="ngo">Select Subcategory</label>
                </div>
                <div class="col-75">
                  <select
                    id="scat"
                    name="scat"
                    value={this.state.scat}
                    onChange={this.scatChange}
                    required
                  >
                    <option>Select Subcategory</option>
                    {this.dd1()}
                  </select>
                </div>
              </div>
              <div class="row">
                <div class="col-25">
                  <label for="images">Product Images</label>
                </div>
                <br />
                <div class="d_fileimages">
                  <input type="file" onInput={this.handleImage1} required />
                  <div class="imgfile">
                    <img class="upload" src={this.state.file1} />
                  </div>
                </div>

                <div class="d_fileimages">
                  <input type="file" onInput={this.handleImage2} required />
                  <div class="imgfile">
                    <img class="upload" src={this.state.file2} />
                  </div>
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
    } else {
      return this.success();
    }
  }
}
export default Dproduct;
