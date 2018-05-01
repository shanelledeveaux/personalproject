import React from "react";
import "./Dashboard.css";
import Header from "../Header/Header";
import Family from "../Family/Family";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { getFamily, removeFamily } from "../../ducks/reducer";
// import SelectField from "material-ui/SelectField";
// import MenuItem from "material-ui/MenuItem";
import TextField from "material-ui/TextField";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      familySize: 0,
      income: 0
    };
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

  handleChange = event => {
    this.setState({ familySize: event.target.value });
    console.log(this.state);
  };

  incomeChange = event => {
    this.setState({ income: event.target.value });
  };

  render() {
    const { family } = this.props.reducer;
    console.log(this.props.family);
    const list = family.map((e, i) => {
      return (
        <Family
          key={e.familyid}
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
      );
    });

    return (
      <div className="addfam">
        <Header />

        <div className="familyholder">
          <div className="housebox">{list}</div>
          <div className="calc-div">
            <div className="titlecalc"> Eligibility Calculator </div>
            <div className="inputfield">
              <div className="label">Family Size: </div>
              <TextField
                value={this.state.familySize}
                onChange={this.handleChange}
              />
              <br />
              <div className="label">Total Gross Monthly Income: </div>
              <TextField
                value={this.state.income}
                onChange={this.incomeChange}
                hintText="$$$"
              />
            </div>
            {this.state.income <= 12140 + (this.state.familySize - 1) * 4320 ? (
              <div>
                <h1>You qualify!</h1>
              </div>
            ) : (
              <div>
                <h1>You denied, b!</h1>
              </div>
            )}
          </div>
          <div className="api">API HERE</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { getFamily, removeFamily })(Dashboard);
