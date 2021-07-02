import React from "react";
import Keg from "./Keg";

const masterKegList = [
  {
    name: 'The Green Dragon',
    brand: 'Against the Grain',
    price: '5.00',
    alcoholContent: '12.5'
  },
  {
    name: 'The Hobbit: Smaug Stout',
    brand: 'Fish Tale',
    price: '5.00',
    alcoholContent: '9.5'
  }
]

function KegList(){
  return (
    <React.Fragment>
      <hr />
      {masterKegList.map((keg, index) =>
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

export default KegList;