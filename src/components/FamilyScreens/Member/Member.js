import React from "react";
import "./Member.css";
import Checkbox from "material-ui/Checkbox";
import Swal from "sweetalert2";

const styles = {
  block: {
    maxWidth: 250
  },
  checkbox: {
    marginBottom: 16
  }
};

const Member = props => {
  // console.log(props);
  return (
    <div className="member">
      <div className="membername">
        <p className="firstname">{props.firstname}</p>
        <p className="lastname">{props.lastname}</p>
      </div>
      <div className="memberinfo">
        <p className="role">Role: {props.role}</p>
        <p className="birthday">Birthdate: {props.birthday}</p>
        <p className="workplace">Work Place: {props.workplace}</p>
        <p className="income">Income: {props.income}</p>
        <p className="race">Race: {props.race}</p>
        <p className="ethnicity">Ethnicity: {props.ethnicity}</p>
        <p className="firstchild">Age At First Child: {props.firstchild}</p>
        <p className="education">Education Level: {props.education}</p>
        <p className="criminalrecord">Criminal Record: {props.record}</p>
        <Checkbox
          label="Active"
          checked={props.active}
          labelPosition="left"
          style={styles.checkbox}
          onCheck={() =>
            props.editActive(props.id, props.familyid, !props.active)
          }
        />
      </div>
      <div className="button-container">
        <button
          onClick={() =>
            Swal({
              title: "Are you sure?",
              text:
                "If you click delete, this will permanently remove this family member and it's contents.",
              type: "warning",
              showCancelButton: true,
              confirmButtonText: "Yes, delete it!",
              cancelButtonText: "No, keep it."
            }).then(result => {
              if (result.value) {
                props.removeMember(props.id, props.familyid);
                Swal(
                  "Deleted!",
                  "Your family member has been deleted.",
                  "success"
                );
              } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal(
                  "Cancelled",
                  "This family member file is safe :)",
                  "error"
                );
              }
            })
          }
        >
          DELETE
        </button>
      </div>
    </div>
  );
};

export default Member;
