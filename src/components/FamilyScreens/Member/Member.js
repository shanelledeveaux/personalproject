import React from "react";
import "./Member.css";

const Member = props => {
  return (
    <div className="member">
      <div className="memberinfo">
        <p className="firstname">{props.firstname}</p>
        <p className="lastname">{props.lastname}</p>
        <p className="role">{props.role}</p>
        <p className="birthday">{props.birthday}</p>
        <p className="workplace">{props.work}</p>
        <p className="income">{props.income}</p>
        <p className="race">{props.race}</p>
        <p className="ethnicity">{props.ethnicity}</p>
        <p className="firstchild">{props.firstchild}</p>
        <p className="education">{props.education}</p>
        <p className="criminalrecord">{props.record}</p>
      </div>
      <div className="button-container">
        <button onClick={() => props.removeMember(props.id)}>DELETE</button>
      </div>
    </div>
  );
};

export default Member;
