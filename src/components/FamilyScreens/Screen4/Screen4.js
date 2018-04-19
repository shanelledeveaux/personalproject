import React from "react";
import Header from "../../Header/Header";
import routes from "../../../routes";
import { Link } from "react-router-dom";

export default class AddMember extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="screen4">
        <div>
          <Header />
        </div>
        SCREEN 4
        <Link to="/Screen5">
          <button>Next</button>
        </Link>
      </div>
    );
  }
}
