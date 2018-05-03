import React from "react";
import "./Family.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { removeFamily } from "../../ducks/reducer";
import Swal from "sweetalert2";

const Family = props => {
  console.log(props.id);
  return (
    <div className="family">
      <div className="family-info">
        <p className="name">Family Name: {props.name} </p>
      </div>
      <div className="details">
        <p className="address1">Address: {props.address1} </p>
        <p className="address2">{props.address2} </p>
        <p className="city">City: {props.city}</p>
        <p className="state">State: {props.stateName}</p>
        <p className="zip">Zip: {props.zip}</p>
        <p className="casemgr">Case Manager: {props.casemgr} </p>
      </div>
      {/* Link => /family/props.id */}
      <div className="button-container">
        <div>
          <Link to={`/Family/${props.id}`}>
            <button>View</button>
          </Link>
        </div>
        <button
          onClick={() =>
            Swal({
              title: "Are you sure?",
              text:
                "If you click delete, this will permanently remove the entire family and it's contents.",
              type: "warning",
              showCancelButton: true,
              confirmButtonText: "Yes, delete it!",
              cancelButtonText: "No, keep it."
            }).then(result => {
              if (result.value) {
                props.removeFamily(props.id);
                Swal("Deleted!", "This family has been deleted.", "success");
              } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal("Cancelled", "Your family file is safe :)", "error");
              }
            })
          }
        >
          Delete
        </button>
      </div>
    </div>
  );
};
const mapStateToProps = state => state;

export default connect(mapStateToProps, { removeFamily })(Family);
