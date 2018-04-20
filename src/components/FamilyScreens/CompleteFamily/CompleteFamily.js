import React from "react";
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
  getCaseNotes
} from "../../../ducks/memberreducer";
import { getDemo } from "../../../ducks/demoreducer";

class CompleteFamily extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getMember(this.props.match.params.id);
    this.props.getCaseNotes(this.props.match.params.id);
    this.props.getDemo(this.props.match.params.id);
  }

  render() {
    console.log(this.props);
    const style = {
      margin: 12
    };
    const { member } = this.props.memberreducer;

    const list = member.map((e, i) => {
      return (
        <Member
          key={i}
          id={e.memberid}
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
        <Link to={`/Family/${this.props.match.params.id}/AddMember`}>
          <RaisedButton label="Add Member" style={style} />
        </Link>
        COMPLETE FAMILY PAGE
        <div className="memberbox">{list}</div>
        <div className="casenote">{note}</div>
        <div className="demoinfo">{demo}</div>
        <Link to={`/Family/${this.props.match.params.id}/Screen3`}>
          <RaisedButton label="Next" style={style} />
        </Link>
        <Link to={`/Family/${this.props.match.params.id}/Screen5`}>
          <RaisedButton label="Add Case Notes" style={style} />
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {
  getMember,
  removeMember,
  getCaseNotes,
  getDemo
})(CompleteFamily);
