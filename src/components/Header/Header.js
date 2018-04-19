import React from "react";
import "./Header.css";
import RaisedButton from "material-ui/RaisedButton";
import routes from "../../routes";
import { Link } from "react-router-dom";

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
        <div>FAM MANG</div>
        <div className="menu-button">
          <Link to="/AddFamily">
            <RaisedButton label="Add Family" style={style} />
          </Link>
          <Link to="/Dash">
            <RaisedButton label="Dash" style={style} />
          </Link>
        </div>
      </div>
    );
  }
}
