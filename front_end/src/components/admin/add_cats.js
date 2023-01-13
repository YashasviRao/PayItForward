import React from "react";
import AdminNav from "./Nav";
import "./addcats.css";
import swal from "sweetalert";

const admin = {
  width: "100%",
  height: "100%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
};

var image2;

class AddCats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "hide",
      value1: "hide",

      cats: [],
      cat: "",
      subcats: [],
      category: "",
      subcategory: "",
      pname: sessionStorage.getItem("pname"),
      file2: null,
    };
    //  this.handleNewCategoryChange = this.handleNewCategoryChange.bind(this);
    //  this.handleNewSubcategoryChange = this.handleNewSubcategoryChange.bind(this);
    this.handleProductChange = this.handleProductChange.bind(this);
    this.handleImage2 = this.handleImage2.bind(this);
  }

  handleProductChange = (event) => {
    this.setState({
      pname: event.target.value,
    });
  };

  componentDidMount() {
    this.cats();
  }
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

  handleSubmit = (event) => {
    //event.preventDefault();
    // sessionStorage.removeItem("pname");
    var body = {
      pname: this.state.pname,
      category: this.state.category,
      subcategory: this.state.subcategory,
      file2: this.state.file2,
    };
    if (this.state.category == "") {
      alert("Please select the category");
    } else if (this.state.subcategory == "") {
      alert("Please select the subcategory");
    } else {
      const url = "http://localhost:9000/addcategory";
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
          swal({
            title: "Category Added Successfully!",
            text: "",
            icon: "success",
            button: "Ok",
          }).then(function () {
            //window.location.reload(false);
            window.location = "/searchrequest";
          });
        }
      });
      sessionStorage.removeItem("pname");
      // window.location.href = "/searchrequest";
    }
  };
  divstatus3 = (e) => {
    this.setState({ category: e.target.value });
  };
  divstatus2 = (e) => {
    this.setState({ subcategory: e.target.value });
  };
  divstatus = (e) => {
    if (e.target.value == "Others") {
      this.setState({ value: "show" });
      e.target.id = "hide";
    } else {
      this.setState({ value: "hide" });
      e.target.id = "hide";
    }
    this.setState({ category: e.target.value });
    console.log(this.state.category);
    this.subcats(e.target.value);
  };
  divstatus1 = (e) => {
    if (e.target.value == "Others") {
      this.setState({ value1: "show" });
      e.target.id = "hide";
    } else {
      this.setState({ value1: "hide" });
      e.target.id = "hide";
    }
    this.setState({ subcategory: e.target.value });
    console.log(this.state.subcategory);
  };

  render() {
    return (
      <div style={admin} class="adminmain">
        <AdminNav />
        <div>
          <form>
            <div class="adminreq">
              <h1 class="add_cat">ADD CATEGORY</h1>
              <label for="product" class="addlabel">
                Product:
              </label>
              <br />
              <input
                type="text"
                value={sessionStorage.getItem("pname")}
                id="text_pname"
                onChange={this.handleProductChange}
              />
              <br />
              <label for="category" class="addlabel">
                Category:
              </label>
              <br />
              <select
                id="category"
                name="category"
                class="select"
                onChange={this.divstatus}
              >
                <option id="hide" value="Select">
                  Select Category
                </option>
                {this.dd()}
                <option id="show" value="Others">
                  Others
                </option>
              </select>{" "}
              <br />
              <br />
              <div className={this.state.value}>
                <input
                  type="text"
                  placeholder="Enter new Category"
                  onChange={this.divstatus3}
                  name="newcategory"
                  required
                />{" "}
              </div>
              <label for="subcategory" class="addlabel">
                Subcategory :
              </label>
              <select
                id="category"
                name="category"
                class="select"
                onChange={this.divstatus1}
              >
                <option id="hide" value="">
                  Select Subcategory
                </option>
                {this.dd1()}
                <option id="show" value="Others">
                  Others
                </option>
              </select>{" "}
              <br />
              <br />
              <div className={this.state.value1}>
                <input
                  type="text"
                  placeholder="Enter new Subcategory"
                  name="newsubcategory"
                  onChange={this.divstatus2}
                  required
                />{" "}
              </div>
              <br />
              <center>
                <div>
                  <input
                    type="file"
                    onInput={this.handleImage2}
                    required
                    class="a_upload"
                  />
                  <br />
                  <br />
                  <div class="proof_img">
                    <img src={this.state.file2} class="fileimage" />
                  </div>
                </div>

                <button
                  type="submit"
                  class="addbtn"
                  name="add"
                  onClick={this.handleSubmit}
                >
                  Add Product Request
                </button>
              </center>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default AddCats;
