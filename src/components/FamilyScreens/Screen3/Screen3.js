import React from "react";
import "./Screen3.css";
import Header from "../../Header/Header";
import routes from "../../../routes";
import { Link } from "react-router-dom";
import Divider from "material-ui/Divider";
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";
import { connect } from "react-redux";
import {
  updateGoal,
  updateStep1,
  updateStep2,
  updateStep3,
  submitGoal
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
        <div className="input">Add A New Goal</div>
        <Paper zDepth={2}>
          <TextField
            hintText="Goal"
            style={style}
            underlineShow={false}
            onChange={e => this.props.updateGoal(e.target.value)}
          />
          <Divider />
          <TextField
            hintText="Action Step 1"
            style={style}
            underlineShow={false}
            onChange={e => this.props.updateStep1(e.target.value)}
          />
          <Divider />
          <TextField
            hintText="Action Step 2"
            style={style}
            underlineShow={false}
            onChange={e => this.props.updateStep2(e.target.value)}
          />
          <Divider />
          <TextField
            hintText="Action Step 3"
            style={style}
            underlineShow={false}
            onChange={e => this.props.updateStep3(e.target.value)}
          />
          <Divider />
        </Paper>
        <Link to={`/Family/${this.props.match.params.id}`}>
          <button
            onClick={e =>
              this.props.submitGoal(
                this.props.demoreducer.goal,
                this.props.demoreducer.step1,
                this.props.demoreducer.step2,
                this.props.demoreducer.step3,
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
  updateGoal,
  updateStep1,
  updateStep2,
  updateStep3,
  submitGoal
})(Screen3);
