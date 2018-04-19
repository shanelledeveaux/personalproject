import React from "react";
import Header from "../../Header/Header";
import routes from "../../../routes";
import { Link } from "react-router-dom";
import Divider from "material-ui/Divider";
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";
import { connect } from "react-redux";
import {
  updateFirst,
  updateLast,
  updateRole,
  updateBirthday,
  updateWork,
  updateIncome,
  updateRace,
  updateEthnicity,
  updateFirstChild,
  updateEducation,
  updateRecord,
  submitMember
} from "../../../ducks/memberreducer";

class AddMember extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //componenetdidmoungt

  render() {
    // var injectTapEventPlugin = require("react-tap-event-plugin");
    // injectTapEventPlugin();
    console.log(this.props);
    const style = {
      customWidth: {
        width: 200
      },
      marginLeft: 20
    };

    return (
      <div className="addfam">
        <div>
          <Header />
        </div>
        ADD MEMBER HERE
        {/* NEED BIRTHDAY, RACE ETHNICIY AND RECORD */}
        <Paper zDepth={2}>
          <TextField
            hintText="First Name"
            style={style}
            underlineShow={false}
            onChange={e => this.props.updateFirst(e.target.value)}
          />
          <Divider />
          <TextField
            hintText="Last Name"
            style={style}
            underlineShow={false}
            onChange={e => this.props.updateLast(e.target.value)}
          />
          <Divider />
          <TextField
            hintText="Role"
            style={style}
            underlineShow={false}
            onChange={e => this.props.updateRole(e.target.value)}
          />
          <Divider />
          <TextField
            hintText="Birthday"
            style={style}
            underlineShow={false}
            onChange={e => this.props.updateBirthday(e.target.value)}
          />
          <Divider />
          <TextField
            hintText="Place Of Employment"
            style={style}
            underlineShow={false}
            onChange={e => this.props.updateWork(e.target.value)}
          />
          <Divider />
          <TextField
            hintText="Income"
            style={style}
            underlineShow={false}
            onChange={e => this.props.updateIncome(e.target.value)}
          />
          <Divider />
          <TextField
            hintText="Race"
            style={style}
            underlineShow={false}
            onChange={e => this.props.updateRace(e.target.value)}
          />
          <Divider />
          <TextField
            hintText="Ethnicity"
            style={style}
            underlineShow={false}
            onChange={e => this.props.updateEthnicity(e.target.value)}
          />
          <Divider />
          <TextField
            hintText="Age At First Child"
            style={style}
            underlineShow={false}
            onChange={e => this.props.updateFirstChild(e.target.value)}
          />
          <Divider />
          <TextField
            hintText="Education Level"
            style={style}
            underlineShow={false}
            onChange={e => this.props.updateEducation(e.target.value)}
          />
          <Divider />
          <TextField
            hintText="Criminal Record"
            style={style}
            underlineShow={false}
            onChange={e => this.props.updateRecord(e.target.value)}
          />
          <Divider />
        </Paper>
        <Link to="/Screen3">
          <button>Next</button>
        </Link>
        <Link to={`/Family/${this.props.match.params.id}`}>
          <button
            onClick={e =>
              this.props.submitMember(
                this.props.memberreducer.firstname,
                this.props.memberreducer.lastname,
                this.props.memberreducer.role,
                this.props.memberreducer.birthday,
                this.props.memberreducer.work,
                this.props.memberreducer.income,
                this.props.memberreducer.race,
                this.props.memberreducer.ethnicity,
                this.props.memberreducer.firstchild,
                this.props.memberreducer.education,
                this.props.memberreducer.record,
                this.props.match.params.id
              )
            }
          >
            Add Family Member
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
  updateFirst,
  updateLast,
  updateRole,
  updateBirthday,
  updateWork,
  updateIncome,
  updateRace,
  updateEthnicity,
  updateFirstChild,
  updateEducation,
  updateRecord,
  submitMember
})(AddMember);
