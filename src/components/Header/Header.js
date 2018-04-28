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
        <div className="title">YourHome</div>
        <div className="menu-button">
          <Link to="/AddFamily">
            <i class="material-icons">group_add</i>
          </Link>
          <Link to="/Dash">
            <i class="material-icons">home</i>
          </Link>
        </div>
      </div>
    );
  }
}
