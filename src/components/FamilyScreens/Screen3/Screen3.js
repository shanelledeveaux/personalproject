import React from "react";
import Header from "../../Header/Header";
import routes from "../../../routes";
import { Link } from "react-router-dom";
import Divider from "material-ui/Divider";
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";
import { connect } from "react-redux";
import {
  updateHUD,
  updateSNAP,
  updateWIC,
  updateTANF,
  submitDemo
} from "../../../ducks/demoreducer";

class Screen3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const style = {
      marginLeft: 20
    };
    return (
      <div className="screen3">
        <div>
          <Header />
        </div>
        DEMO INFORMATION
        <Paper zDepth={2}>
          <TextField
            hintText="Amount in HUD benefits"
            style={style}
            underlineShow={false}
            onChange={e => this.props.updateHUD(e.target.value)}
          />
          <Divider />
          <TextField
            hintText="Amount in SNAP benefits"
            style={style}
            underlineShow={false}
            onChange={e => this.props.updateSNAP(e.target.value)}
          />
          <Divider />
          <TextField
            hintText="Amount in WIC benefits"
            style={style}
            underlineShow={false}
            onChange={e => this.props.updateWIC(e.target.value)}
          />
          <Divider />
          <TextField
            hintText="Amount in TANF benefits"
            style={style}
            underlineShow={false}
            onChange={e => this.props.updateTANF(e.target.value)}
          />
          <Divider />
        </Paper>
        <Link to="/Screen4">
          <button
            onClick={e =>
              this.props.submitDemo(
                this.props.demoreducer.hud,
                this.props.demoreducer.snap,
                this.props.demoreducer.wic,
                this.props.demoreducer.tanf,
                this.props.match.params.id
              )
            }
          >
            Next
          </button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, {
  updateHUD,
  updateSNAP,
  updateWIC,
  updateTANF,
  submitDemo
})(Screen3);
