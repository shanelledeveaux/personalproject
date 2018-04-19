import React from "react";
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
  }

  // removeFamily(id) {
  //   axios
  //     .delete(`/api/family/${id}`)
  //     .then(response => console.log(`deleted product: ${id}`))
  //     .then(() => this.getFamily())
  //     .catch(error => console.log(error));
  // }

  render() {
    const { family } = this.props.reducer;
    // console.log(this.props.family);
    const list = family.map((e, i) => {
      return (
        <Link key={e.familyid} to={`/Family/${e.familyid}`}>
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
        </Link>
      );
    });

    return (
      <div className="addfam">
        <div>
          <Header />
        </div>
        THIS IS THE DASHBOARD
        <div className="housebox">{list}</div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { getFamily, removeFamily })(Dashboard);
