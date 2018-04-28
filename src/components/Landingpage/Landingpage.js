import React from "react";
import "./Landingpage.css";
import routes from "../../routes";
// import famlogo from "../Landingpage/Family.png";
// import axios from "axios";

class Landingpage extends React.Component {
  constructor() {
    super();

    this.loginHandler = this.loginHandler.bind(this);
  }
  loginHandler() {
    window.location = process.env.REACT_APP_LOGIN;
  }
  render() {
    return (
      <div className="main">
        <div className="logo">
          YourHome
          <button onClick={this.loginHandler}>LOGIN</button>
        </div>
      </div>
    );
  }
}

export default Landingpage;
