import React from "react";
import CNav from "./Nav";
import "./pur_nav.css";
import "./pur_home.css";
import "./sidenav.css";
import Sidenav from "./sidenav";

const purchaser = {
  width: "100%",
  height: "100%",
  backgroundRepeat: "repeat",
  backgroundSize: "cover",
  overflow: "auto",
};

class Chome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      s: [],
      dict: {},
      dictImages: {},
    };
  }

  componentDidMount() {
    //let s=this.state.s;
    //console.log("In cdm");
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
        //console.log(this.state.s);
        //console.log("for start");
        for (var i = 0; i < this.state.s.length; i++) {
          //console.log("in for");
          this.subcats(this.state.s[i], i);
          //console.log(this.state.s[i], i);
        }
      });
  }
  subcats(category, index) {
    var i = this.state.index;
    //const url = "http://localhost:9000/subcat_images";
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

  renderCats() {
    const { s, dict, dictImages } = this.state;
    //console.log(dictImages);
    return s.map((val, index) => {
      return (
        <div class="cat-block">
          <div class="main_cat">{val}</div>
          <div>
            {this.state.dict[val]
              ? this.state.dict[val].map((val, index) => {
                  return (
                    <div class="subcat">
                      <a href={"/scatlist/" + val}>
                        <img
                          src={"/catimages/" + val + ".jpg"}
                          alt="Avatar"
                          class="image"
                        />
                        <div class="overlay">
                          <div class="cattext">{val}</div>
                        </div>
                      </a>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div style={purchaser} class="main">
        <CNav />
        <div class="csidebar">
          <br />
          <br />
          <br />
          <br />
          <Sidenav />
        </div>
        <div class="cat">
          {this.renderCats()}
          <br />
          <br />
          <br />
        </div>
      </div>
    );
  }
}
export default Chome;
