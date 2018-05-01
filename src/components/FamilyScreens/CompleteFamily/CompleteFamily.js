import React from "react";
import "./CompleteFamily.css";
import Header from "../../Header/Header";
import Member from "../Member/Member";
import CaseNote from "../../CaseNote/CaseNote";
import DemoInfo from "../../DemoInfo/DemoInfo";
import RaisedButton from "material-ui/RaisedButton";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  getMember,
  removeMember,
  getCaseNotes,
  editActive
} from "../../../ducks/memberreducer";
import { getDemo } from "../../../ducks/demoreducer";

class CompleteFamily extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    // this.removeMember = this.removeMember.bind(this);
  }

  componentDidMount() {
    this.props.getMember(this.props.match.params.id);
    this.props.getCaseNotes(this.props.match.params.id);
    this.props.getDemo(this.props.match.params.id);
  }

  //  removeMember(id) {
  //     axios
  //       .delete(`/api/person/${id}`)
  //       .then(() => this.getMember())
  //       .catch(error => console.log(error));
  //   }

  // editActive(id) {
  //   axios
  //     .put(`/api/person/${id}/${familyId}`)
  //     .then(() => this.getMember())
  //     .catch(error => console.log(error));
  // }

  render() {
    const style = {
      margin: 12
    };
    const { member } = this.props.memberreducer;
    // console.log(this.props.member);
    const list = member.map((e, i) => {
      console.log(e);
      return (
        <Member
          key={i}
          id={e.personid}
          familyid={e.familyid}
          firstname={e.firstname}
          lastname={e.lastname}
          role={e.role}
          birthday={e.birthday}
          work={e.work}
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
      return (
        <CaseNote key={i} id={e.noteid} date={e.date} notes={e.casenote} />
      );
    });

    const { demo } = this.props.demoreducer;
    const demos = demo.map((e, i) => {
      return (
        <DemoInfo
          key={i}
          id={e.demoid}
          hud={e.hud}
          snap={e.snap}
          wic={e.wic}
          tanf={e.tanf}
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
            <i class="material-icons">person_add</i>
          </Link>
          <Link to={`/Family/${this.props.match.params.id}/Screen5`}>
            <i class="material-icons">note_add</i>
          </Link>
          {/* <Link to={`/Family/${this.props.match.params.id}/Screen3`}>
            <i class="material-icons">navigate_next</i>
          </Link> */}
        </div>
        <div className="memberdiv">
          <div className="text">Family Members</div>

          <div className="fammember"> {list}</div>
        </div>
        <div className="casebox">
          <div className="text">Family Notes</div>
          <div className="casenotebox"> {note}</div>
        </div>
        <div className="demoinfo">{demo}</div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {
  getMember,
  removeMember,
  getCaseNotes,
  getDemo,
  editActive
})(CompleteFamily);
