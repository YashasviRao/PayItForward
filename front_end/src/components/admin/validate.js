import React from "react";
import AdminNav from "./Nav";
import "./addcats.css";
import "./validate.css";
import Popupform from "./popupform";
import swal from "sweetalert";

const admin = {
  width: "100%",
  height: "100%",
  backgroundRepeat: "repeat",
  backgroundSize: "cover",
  overflow: "auto",
};

const table = {
  top: "20%",
  left: "40%",
};

class Validate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      status: "",
      s: [],
      p: null,
      sf: false,
    };
  }

  renderResultRows() {
    let s = this.state.s;
    let n;
    return s.map((song, index) => {
      let i = "/productimages/" + song[4];
      //console.log(i,typeof(i))
      let a = "nprice-" + index;
      return (
        <tr id={index}>
          <td>{song[1]}</td>
          <td>{song[3]}</td>
          <td>
            <img src={i} class="validateimage" />
          </td>
          <td>Rs {song[6]}/-</td>
          <td>{song[7]}</td>
          <td contentEditable="true" id={a} width="100px"></td>
          <td>
            <button onClick={() => this.fetchDetails(index)}> Validate </button>
          </td>
          <td>
            <button onClick={() => this.deleteDetails(index)}> Delete </button>
          </td>
        </tr>
      );
    });
  }

  deleteDetails(row) {
    let s = this.state.s;
    var body = { pid: s[row][0] };
    const url = "http://localhost:9000/deleteproduct";

    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");

    headers.append("Access-Control-Allow-origin", url);
    headers.append("Access-Control-Allow-Credentials", "true");

    headers.append("POST", "GET");
    this.state.name = s[row][1];
    this.state.email = this.getEmail(s[row][8]);
    this.state.status = "rejected";
    fetch(url, {
      headers: headers,
      method: "POST",
      body: JSON.stringify(body),
    }).then((response) => {
      if (response.ok) {
        // alert("Details deleted");
        swal({
          title: "Product details deleted successfully!",
          text: "",
          icon: "success",
          button: "Ok",
        }).then(function () {
          window.location.reload(false);
        });
        {
          const templateId = "donate_product_validate";
          this.sendFeedback(templateId, {
            from_name: this.state.name,
            status: this.state.status,
            email: this.state.email,
          });
        }
      }
    });
  }

  fetchDetails(row) {
    let s = this.state.s;
    let a = "nprice-" + row;
    let n = document.getElementById(a).innerHTML;
    //  console.log(row,n)
    var body = { pid: s[row][0], np: n };
    console.log();
    const url = "http://localhost:9000/updateproduct";

    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");

    headers.append("Access-Control-Allow-origin", url);
    headers.append("Access-Control-Allow-Credentials", "true");

    headers.append("POST", "GET");
    this.state.name = s[row][1];
    this.state.email = this.getEmail(s[row][8]);
    //  if(s[row][9]==1)
    this.state.status = "accepted";
    fetch(url, {
      headers: headers,
      method: "POST",
      body: JSON.stringify(body),
    }).then((response) => {
      if (response.ok) {
        //alert("Details submitted.. Product is certified for purchasing..");
        swal({
          title: "Product validated!",
          text: "",
          icon: "success",
          button: "Ok",
        }).then(function () {
          window.location.reload(false);
        });
        const templateId = "donate_product_validate";
        this.sendFeedback(templateId, {
          from_name: this.state.name,
          status: this.state.status,
          email: this.state.email,
        });
        /*.then(function(){
                    window.location.reload(false);
                  });*/
      }
    });
  }
  getEmail(did) {
    const url = "http://localhost:9000/getEmail";
    var body = { id: did };
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
    })
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        this.setState({ email: res.email });
        console.log(this.state.email, typeof this.state.email);
      });
  }
  sendFeedback(templateId, variables) {
    window.emailjs
      .send(
        "service_hkjkkl7",
        templateId,
        variables,
        "user_1HqWAdcWXIFilFZ5jsmdk"
      )
      .then((res) => {
        // alert('Email successfully sent!')
      })
      // Handle errors here however you like, or use a React error boundary
      .catch((err) =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
    // window.location.reload(false);
  }
  products() {
    const url = "http://localhost:9000/products";

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
      });
  }
  componentDidMount() {
    this.products();
  }

  render() {
    let i = "/productimages/bajaj1.jpeg";

    return (
      <div style={admin} class="adminmain">
        <AdminNav />
        <center class="a_heading">VALIDATE PRODUCTS</center>
        <div class="admin">
          <table class="etable" border="1" id="etable_val">
            <th>
              <center>Name</center>
            </th>
            <th>
              <center>Category</center>
            </th>
            <th>
              <center>Image</center>
            </th>
            <th>
              <center>Original Cost</center>
            </th>
            <th>
              <center>Year of Purchase</center>
            </th>
            <th>
              <center>Nominal Price (In Rs)</center>
            </th>
            <th>
              <center>Validate</center>
            </th>
            <th>
              <center>Remove</center>
            </th>

            <tbody> {this.renderResultRows()} </tbody>
          </table>
          <br />
          <br />
        </div>
        {/* <img src={window.location.origin + "/productimages/drafter.jpg"}/> */}
      </div>
    );
  }
}

export default Validate;
