import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <React.Fragment>
      <h3>{props.brand} &mdash; {props.name}</h3>
      <p><em>ALC/VOL {props.alcoholContent}%</em></p>
      <p><em>${props.price} per pint</em></p>
      <p><em>It comes in pints!</em></p>
      <hr/>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  alcoholContent: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired
}

export default Keg;