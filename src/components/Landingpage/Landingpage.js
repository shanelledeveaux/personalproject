import React from "react";
import "./Landingpage.css";
import routes from "../../routes";
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
        <div className="title">LOGINNNNNNNNN</div>
        <button onClick={this.loginHandler}>LOGIN</button>
      </div>
    );
  }
}

export default Landingpage;
