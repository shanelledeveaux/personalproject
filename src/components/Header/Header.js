import React from "react";
import "./Header.css";
import RaisedButton from "material-ui/RaisedButton";
import routes from "../../routes";
import { Link } from "react-router-dom";
import famlogo from "../Landingpage/Family.png";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  logout() {
    window.location = process.env.REACT_APP_LOGOUT;
  }
  render() {
    const style = {
      margin: 12
    };
    return (
      <div className="header">
        {/* <img className="famlogo" src={famlogo} alt="Fam Logo" width="8%" /> */}
        <Link to="/Dash" className="title">
          YourHome
        </Link>
        <div className="menu-button">
          <Link to="/AddFamily">
            <i className="material-icons">group_add</i>
          </Link>
          {/* <a */}
          {/* href={process.env.REACT_APP_LOGOUT}> */}
          <i onClick={() => this.logout()} class="material-icons">
            close
          </i>
          {/* </a> */}
          {/* <Link to="/Dash">
            <i className="material-icons">home</i>
          </Link> */}
        </div>
      </div>
    );
  }
}
