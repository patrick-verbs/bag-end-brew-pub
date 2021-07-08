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
      <h3>{keg.pintsLeft} pints in stock</h3>
      <button onClick={ props.onClickingEdit }>Update Keg</button>
      <button onClick={ ()=> onClickingDelete(keg.id) }>Delete Keg</button>
      <button onClick={ props.onClickingSell }>SELL PINT</button>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func,
  onClickingSell: PropTypes.func
};

export default KegDetail;