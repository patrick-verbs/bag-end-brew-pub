import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg } = props;

  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h3>{keg.brand} &mdash; {keg.name}</h3>
      <p><em>ALC/VOL {keg.alcoholContent}%</em></p>
      <p><em>${keg.price} per pint</em></p>
      <p><em>It comes in pints!</em></p>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object
};

export default KegDetail;