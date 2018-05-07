import React from "react";
import "./CompleteFamily.css";
import Header from "../../Header/Header";
import Member from "../Member/Member";
import CaseNote from "../../CaseNote/CaseNote";
import Goal from "../../Goal/Goal";
// import RaisedButton from "material-ui/RaisedButton";
import { Tabs, Tab } from "material-ui/Tabs";
import axios from "axios";
import moment from "moment";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  getMember,
  removeMember,
  getCaseNotes,
  editActive,
  removeNote
} from "../../../ducks/memberreducer";
import { getGoals, removeGoal, editSlider } from "../../../ducks/demoreducer";

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 700
  }
};

class CompleteFamily extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "a"
    };
  }

  componentDidMount() {
    this.props.getMember(this.props.match.params.id);
    this.props.getCaseNotes(this.props.match.params.id);
    // this.props.getDemo(this.props.match.params.id);
    this.props.getGoals(this.props.match.params.id);
  }

  handleChange = value => {
    this.setState({
      value: value
    });
  };

  render() {
    const style = {
      margin: 12
    };
    const { member } = this.props.memberreducer;
    // console.log(this.props.member);
    const list = member.map((e, i) => {
      let ebirthday = moment(e.birthday).format("LL");
      console.log(member);
      return (
        <Member
          key={i}
          id={e.personid}
          familyid={e.familyid}
          firstname={e.firstname}
          lastname={e.lastname}
          role={e.role}
          birthday={ebirthday}
          work={e.workplace}
          income={e.income}
          race={e.race}
          ethnicity={e.ethnicity}
          firstchild={e.ageatfirstchild}
          education={e.education}
          record={e.criminalrecord}
          active={e.active}
          editActive={this.props.editActive}
          removeMember={this.props.removeMember}
        />
      );
    });

    const { caseNotes } = this.props.memberreducer;
    // console.log(caseNotes);
    const note = caseNotes.map((e, i) => {
      let edate = moment(e.date).format("LL");
      return (
        <CaseNote
          key={i}
          id={e.noteid}
          familyid={e.familyid}
          date={edate}
          notes={e.casenote}
          removeNote={this.props.removeNote}
        />
      );
    });

    const { demo } = this.props.demoreducer;
    const goal = demo.map((e, i) => {
      console.log(e);
      return (
        <Goal
          key={i}
          id={e.demoid}
          familyid={e.familyid}
          goal={e.goal}
          step1={e.step1}
          step2={e.step2}
          step3={e.step3}
          slider={this.props.slider}
          editSlider={this.props.editSlider}
        />
      );
    });

    return (
      <div className="addfam">
        <div>
          <Header />
        </div>
        <div className="familytools">
          <Link to={`/Family/${this.props.match.params.id}/AddMember`}>
            <i class="person-icon">person_add</i>
          </Link>
          <Link to={`/Family/${this.props.match.params.id}/Screen5`}>
            <i class="person-icon">note_add</i>
          </Link>
          <Link to={`/Family/${this.props.match.params.id}/Screen3`}>
            <i class="material-icons">playlist_add</i>
          </Link>
          {/* <Link to={`/Family/${this.props.match.params.id}/Screen3`}>
            <i class="material-icons">navigate_next</i>
          </Link> */}
        </div>
        <Tabs
          className="tabs"
          value={this.state.value}
          onChange={this.handleChange}
          inkBarStyle={{ background: "grey" }}
        >
          <Tab label="Family Members" value="a">
            <div className="memberdiv">
              {/* <div className="text">Family Members</div> */}
              <div className="fammember">
                {list.length === 0 ? (
                  <div className="conren">
                    Click the person icon above to add family members to this
                    family.
                  </div>
                ) : (
                  <div className="fammember2">{list}</div>
                )}
              </div>
            </div>
          </Tab>
          {/* //TAB TAB TAB TAB TAB */}

          <Tab label="Goals" value="b">
            <div className="goals">
              {goal.length === 0 ? (
                <div className="conren">
                  Click the list icon above to add a goal for this family.
                </div>
              ) : (
                <div className="goals2">{goal}</div>
              )}
            </div>
          </Tab>
          <Tab label="Case Notes" value="c">
            <div className="casebox">
              <div className="casenotebox">
                {note.length === 0 ? (
                  <div className="conren">
                    Click the note icon above to add case notes to this family.
                  </div>
                ) : (
                  <div className="casenotebox">{note}</div>
                )}
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {
  getMember,
  removeMember,
  getCaseNotes,
  editActive,
  removeNote,
  getGoals,
  editSlider
})(CompleteFamily);
