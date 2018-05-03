import React from "react";
import Header from "../../Header/Header";
import routes from "../../../routes";
import { Link } from "react-router-dom";
import Divider from "material-ui/Divider";
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";
import { connect } from "react-redux";
import {
  updateName,
  updateAddress1,
  updateAddress2,
  updateCity,
  updateState,
  updateZip,
  updateCasemgr,
  submitFamily
} from "../../../ducks/reducer";

class AddFamily extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);
    const style = {
      marginLeft: 20
    };

    return (
      <div>
        <Header />
        <div className="addfam">
          <div className="instructions">
            Complete Information Fields Below To Add a New Family To Your
            Caseload.
          </div>
          <Paper zDepth={2}>
            <TextField
              hintText="Last Name"
              style={style}
              underlineShow={false}
              onChange={e => this.props.updateName(e.target.value)}
            />
            <Divider />
            <TextField
              hintText="Address Line 1"
              style={style}
              underlineShow={false}
              onChange={e => this.props.updateAddress1(e.target.value)}
            />
            <Divider />
            <TextField
              hintText="Address Line 2"
              style={style}
              underlineShow={false}
              onChange={e => this.props.updateAddress2(e.target.value)}
            />
            <Divider />
            <TextField
              hintText="City"
              style={style}
              underlineShow={false}
              onChange={e => this.props.updateCity(e.target.value)}
            />
            <Divider />
            <TextField
              hintText="State"
              style={style}
              underlineShow={false}
              onChange={e => this.props.updateState(e.target.value)}
            />
            <Divider />
            <TextField
              hintText="Zip"
              style={style}
              underlineShow={false}
              onChange={e => this.props.updateZip(e.target.value)}
            />
            <Divider />
            <TextField
              hintText="Case Manager"
              style={style}
              underlineShow={false}
              onChange={e => this.props.updateCasemgr(e.target.value)}
            />
            <Divider />
          </Paper>
          {/* <Link to="/Dash">
            <button>Back</button>
          </Link> */}
          <Link to="/Dash">
            <button
              onClick={e => {
                this.props.submitFamily(
                  this.props.reducer.name,
                  this.props.reducer.address1,
                  this.props.reducer.address2,
                  this.props.reducer.city,
                  this.props.reducer.stateName,
                  this.props.reducer.zip,
                  this.props.reducer.casemgr
                );
              }}
            >
              Submit
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {
  updateName,
  updateAddress1,
  updateAddress2,
  updateCity,
  updateState,
  updateZip,
  updateCasemgr,
  submitFamily
})(AddFamily);
