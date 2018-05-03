import React from "react";
import "./CaseNote.css";

const CaseNote = props => {
  return (
    <div className="casenote">
      <div className="note">
        <p className="date">{props.date}</p>
        <p className="info">{props.notes}</p>
      </div>
      <div className="button">
        <button onClick={() => props.removeNote(props.id, props.familyid)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default CaseNote;
