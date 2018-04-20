import React from "react";
import "./Family.css";
import { Link } from "react-router-dom";
// import { removeFamily } from "../../ducks/reducer";

const Family = props => {
  console.log(props.id);
  return (
    <div>
      <div className="family">
        <div className="family-info">
          <p className="name">Family Name: {props.name} </p>
          <p className="address1">Address: {props.address1} </p>
          <p className="address2">{props.address2} </p>
          <p className="city">City: {props.city}</p>
          <p className="state">State: {props.stateName}</p>
          <p className="zip">Zip: {props.zip}</p>
          <p className="casemgr">Case Manager: {props.casemgr} </p>
        </div>
        {/* Link => /family/props.id */}
        <div className="button-container">
          <button onClick={() => props.removeFamily(props.id)}>DELETE</button>
          <div>
            <Link to={`/Family/${props.id}`}>
              <button>View</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
// mapStateToProps(state) {
//   return state
// }

export default Family;
