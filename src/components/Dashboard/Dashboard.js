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
import Clock from "react-live-clock";
import ToDo from "../ToDo/ToDo";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      familySize: 0,
      income: 0,
      advice: ""
    };
  }

  componentDidMount() {
    this.props.getFamily();
    // this.props.removeFamily();
    this.getAdvice();
  }

  // removeFamily(id) {
  //   axios
  //     .delete(`/api/family/${id}`)
  //     .then(() => this.getFamily())
  //     .catch(error => console.log(error));
  //   // .then(response => console.log(`deleted product: ${id}`))
  // }

  handleChange = event => {
    this.setState({ familySize: event.target.value });
    console.log(this.state);
  };

  incomeChange = event => {
    this.setState({ income: event.target.value });
  };

  getAdvice() {
    axios.get(`http://api.adviceslip.com/advice`).then(response => {
      this.setState({ advice: response.data.slip.advice });
    });
  }

  render() {
    const { family } = this.props.reducer;
    console.log(this.props);
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

    const { advice } = this.state;

    return (
      <div>
        <Header />
        <div className="addfam">
          <div className="familyholder">
            <div className="api">
              <div className="clock">
                <Clock format={"h:mm a"} ticking={true} timezone={"Central"} />
              </div>
              <div className="autodate">
                <Clock format={"dddd, MMMM Do, YYYY"} />
              </div>
              <div className="apititle">Self Care Reminder</div>
              <div className="advice">{advice}</div>
              {/* <button onClick={this.getAdvice}>Next</button> */}
            </div>
            <div className="centerdiv">
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
                {this.state.income <=
                (12140 + (this.state.familySize - 1) * 4320) / 12 ? (
                  <div>
                    <h1>They Qualify!</h1>
                  </div>
                ) : (
                  <div>
                    <h1>They Are Over Income Limits.</h1>
                  </div>
                )}
              </div>
              <div className="todolist">
                <ToDo />
              </div>
            </div>
            {list.length === 0 ? (
              <div className="conren">Click The Icon To Add A Family</div>
            ) : (
              <div className="housebox">{list}</div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { getFamily, removeFamily })(Dashboard);
