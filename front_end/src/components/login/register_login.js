import React from "react";
import "./App.scss";
import { Login, Register } from "./index";
import "./login.css"



class RegisterLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true
    };
  }

  componentDidMount() {
    //Add .right by default
    this.rightSide.classList.add("right");
  }

  changeState() {
    const { isLogginActive } = this.state;

    if (isLogginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
  }

  render() {
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Login" : "Register";
    const currentActive = isLogginActive ? "login" : "register";
    return (
      <div class="App_login"><center>
        <div className="login">
          <div className="container" ref={ref => (this.container = ref)}>
            {isLogginActive && (
              
              <Register containerRef={ref => (this.current = ref)} />
            )}
            {!isLogginActive && (
             <Login containerRef={ref => (this.current = ref)} />
            )}
          </div>
          <RightSide
            current={current}
            currentActive={currentActive}
            containerRef={ref => (this.rightSide = ref)}
            onClick={this.changeState.bind(this)}
          />
        </div>
        </center>
      </div>
     
      
    );
  }
}

const RightSide = props => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}>
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

export default RegisterLogin;
