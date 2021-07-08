import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h3>{keg.brand} &mdash; {keg.name}</h3>
      <p><em>ALC/VOL {keg.alcoholContent}%</em></p>
      <p><em>${keg.price} per pint</em></p>
      <p><em>It comes in pints!</em></p>
      <button onClick={ props.onClickingEdit }>Update Keg</button>
      <button onClick={()=> onClickingDelete(keg.id) }>Delete Keg</button>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func
};

export default KegDetail;