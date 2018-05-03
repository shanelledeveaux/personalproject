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
          <Link to="/AddFamily" className="button-wrap">
            <i className="material-icons">group_add</i>
          </Link>
          <Link to="/">
            <i class="material-icons">close</i>
          </Link>
          {/* <Link to="/Dash">
            <i className="material-icons">home</i>
          </Link> */}
        </div>
      </div>
    );
  }
}
