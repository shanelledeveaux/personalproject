import React from "react";
import "./CaseNote.css";

const CaseNote = props => {
  return (
    <div className="CaseNote">
      <div className="note">
        <p className="date">{props.date}</p>
        <p className="info">{props.notes}</p>
      </div>
      <div className="button">
        <button onClick={() => props.removeNote(props.id)}>DELETE</button>
      </div>
    </div>
  );
};

export default CaseNote;
