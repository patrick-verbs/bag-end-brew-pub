import React from "react";
import PropTypes from "prop-types";
import Keg from "./Keg";

// const masterKegList = [
//   {
//     name: 'The Green Dragon',
//     brand: 'Against the Grain',
//     price: '5.00',
//     alcoholContent: '12.5'
//   },
//   {
//     name: 'The Hobbit: Smaug Stout',
//     brand: 'Fish Tale',
//     price: '5.00',
//     alcoholContent: '9.5'
//   }
// ]

function KegList(props){
  return (
    <React.Fragment>
      <hr />
      {props.kegList.map((keg, index) =>
      // ^ loops through the list passed down by KegControl
        <Keg
          name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
          key={index}
        />
      )}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array
}

export default KegList;