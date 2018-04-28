import React from "react";
import "./Member.css";
import Checkbox from "material-ui/Checkbox";

const styles = {
  block: {
    maxWidth: 250
  },
  checkbox: {
    marginBottom: 16
  }
};

const Member = props => {
  return (
    <div className="member">
      <div className="membername">
        <p className="firstname">{props.firstname}</p>
        <p className="lastname">{props.lastname}</p>
      </div>
      <div className="memberinfo">
        <p className="role">Role: {props.role}</p>
        <p className="birthday">Birthdate: {props.birthday}</p>
        <p className="workplace">Work Place: {props.work}</p>
        <p className="income">Income: {props.income}</p>
        <p className="race">Race: {props.race}</p>
        <p className="ethnicity">Ethnicity: {props.ethnicity}</p>
        <p className="firstchild">Age At First Child: {props.firstchild}</p>
        <p className="education">Education Level: {props.education}</p>
        <p className="criminalrecord">Criminal Record: {props.record}</p>
        <Checkbox label="Active" labelPosition="left" style={styles.checkbox} />
      </div>
      <div className="button-container">
        <button onClick={() => props.removeMember(props.id)}>DELETE</button>
      </div>
    </div>
  );
};

export default Member;
