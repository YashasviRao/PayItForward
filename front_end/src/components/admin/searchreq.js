import React from "react";
import AdminNav from "./Nav";
import "./addcats.css";
import "./validate.css";
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

class SearchReq extends React.Component {
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

  goToAddCats(row) {
    sessionStorage.setItem("pname", row);

    window.location.href = "/addcats";
  }
  renderResultRows() {
    let s = this.state.s;
    let n;
    return s.map((song, index) => {
      let i = "/productimages/" + song[4];
      //console.log(i,typeof(i))
      let a = "nprice-" + index;
      return (
        <tr id={index} className="foralign">
          <td>
            <center>{song[0]}</center>
          </td>
          <td>
            <center>{song[1]}</center>
          </td>
          <td>
            <button onClick={() => this.goToAddCats(song[0])}>
              {" "}
              Request to Add{" "}
            </button>
          </td>
          <td>
            <button onClick={() => this.deleteDetails(index)}> Remove </button>
          </td>
        </tr>
      );
    });
  }

  deleteDetails(row) {
    let s = this.state.s;
    var body = { name: s[row][0] };
    const url = "http://localhost:9000/deletesearchreq";

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
        // alert("Details deleted");
        swal({
          title: "Product Deleted!",
          text: "",
          icon: "success",
          button: "Ok",
        }).then(function () {
          window.location.reload(false);
        });
      }
    });
  }

  fetchDetails(row) {
    let s = this.state.s;
    var body = { pname: s[row][0] };
    //console.log()
    const url = "http://localhost:9000/addcats";

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
        //alert("Details submitted.. Product is certified for purchasing..");
        swal({
          title: "Product Validated!",
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
        }).then(function () {
          window.location.reload(false);
        });
      }
    });
    //window.location.href = "/addcats";
  }

  products() {
    const url = "http://localhost:9000/searchreq";

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
    return (
      <div style={admin} class="adminmain">
        <AdminNav />
        <center class="a_heading">REQUEST TO ADD PRODUCTS</center>
        <div class="admin">
          <table class="etable" border="1" id="etable_val">
            <th>
              <center>Product Name</center>
            </th>
            <th>
              <center>Frequency</center>
            </th>
            <th>
              <center>Request to Add</center>
            </th>
            <th>
              <center>Remove</center>
            </th>
            {<tbody> {this.renderResultRows()} </tbody>}
          </table>
        </div>
      </div>
    );
  }
}

export default SearchReq;
