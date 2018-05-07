import React from "react";
import "./CaseNote.css";

const CaseNote = props => {
  return (
    <div className="casenote">
      <div className="note">
        <p className="date">{props.date}</p>
        <p className="info">{props.notes}</p>
        <button onClick={() => props.removeNote(props.id, props.familyid)}>
          Delete
        </button>
      </div>

      {/* <button onClick={() => props.removeNote(props.id, props.familyid)}>
          Delete
        </button> */}
    </div>
  );
};

export default CaseNote;
