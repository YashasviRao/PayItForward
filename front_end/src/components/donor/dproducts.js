import React from "react";
import DonorNav from "./Nav";
import "./donor_table.css";

const donor = {
  width: "100%",
  height: "100%",
  backgroundRepeat: "repeat",
  backgroundSize: "cover",
  overflow: "auto",
};

class Dproducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      s: [],
      s1: [],
      p: null,
      sf: false,
      st: null,
      sp: null,
      val_status: "",
      sell_status: "",
      quant: 0,
      nquant:0,
    
    };
  }
  x;

  checkStatus() {

    if (this.state.st === 0) {
      this.state.val_status = "Nominal price not yet set";
      this.state.sell_status = "";
      console.log("nom:", this.state.val_status);
    } 
    else if (this.state.st === 1 || this.state.quant==0) 
    {
      this.state.val_status = "Nominal Price: Rs " + this.state.p + "/-";
      console.log("nom:", this.state.val_status);
      if(this.state.nquant==null)
      {
        this.state.sell_status = "Not yet sold";
      }
      else if (this.state.nquant >= 1)
       {
        this.state.sell_status =
          "Sold " + this.state.nquant + " for Rs " + this.state.sp + "/-";
      } 
      
    }
 
  }

  renderResultRows() {
  let s=this.state.s;
    return s.map((song, index) => {
  
      this.state.nquant=song[9];
      this.state.quant=song[7];
      let i = "/productimages/" + song[1];
      //console.log(i,typeof(i))
      let a = "nprice-" + index;
      this.state.st = song[4];
      let v = "";
      if (this.state.st == 0) {
        v = "Not yet validated";
      } else if (this.state.st == 1) {
        v = "Validated";
        this.state.p = song[3];
        this.state.sp = song[10];
      } else if(this.state.st==2){
        v = "Validated";
        this.state.p = song[3];
        this.state.sp = song[10];
      } 
      return (
        <tr id={index} className="foralign">
          <td>{song[0]}</td>

          <td>
            <img src={i} class="validateimage" />
          </td>
          <td>
            {song[7]+song[9]}
          </td>
          <td>{song[2]}</td>
          <td>{v}</td>
          <td>
            {this.checkStatus()}
            {this.state.val_status}
            <br />
            {this.state.sell_status}
          </td>
        </tr>
      );
    });
  }

  products() {
    let body = { did: sessionStorage.getItem("id") };
    console.log(body);
    const url = "http://localhost:9000/getproducts";

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
        this.setState({ s: res });
        console.log(this.state.s);
      });
      
  }

  componentDidMount() {
    this.products();
   
  }

  render() {
    return (
      <div style={donor} class="donormain">
        <DonorNav />

        <center class="d_heading">DONATED PRODUCTS</center>

        <div class="donor">
          <table id="dtable_val" class="dtable" border="1">
            <th>
              <center>Name</center>
            </th>
            <th>
              <center>Image</center>
            </th>
            <th>
              <center>Quantity donated</center>
            </th>
            <th>
              <center>Selected NGO</center>
            </th>
            <th>
              <center>Validation Status</center>
            </th>
            <th>
              <center>Selling Price</center>
            </th>
            <tbody> {this.renderResultRows()} </tbody>
          </table>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default Dproducts;
