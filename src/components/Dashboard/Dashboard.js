import React from "react";
import "./Dashboard.css";
import Header from "../Header/Header";
import Family from "../Family/Family";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { getFamily, removeFamily } from "../../ducks/reducer";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getFamily();
    this.props.removeFamily();
  }

  removeFamily(id) {
    axios
      .delete(`/api/family/${id}`)
      .then(() => this.getFamily())
      .catch(error => console.log(error));
    // .then(response => console.log(`deleted product: ${id}`))
  }

  render() {
    const { family } = this.props.reducer;
    console.log(this.props.family);
    const list = family.map((e, i) => {
      return (
        <div key={e.familyid}>
          <Family
            id={e.familyid}
            name={e.familyname}
            address1={e.address1}
            address2={e.address2}
            city={e.city}
            stateName={e.state}
            zip={e.zip}
            casemgr={e.casemgr}
            removeFamily={this.props.removeFamily}
          />
        </div>
      );
    });

    return (
      <div className="addfam">
        <div>
          <Header />
        </div>
        <div className="familyholder">
          <div className="housebox">{list}</div>
        </div>
        <div className="todo">TODO LIST</div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { getFamily, removeFamily })(Dashboard);
