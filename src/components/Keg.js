import React from "react";

function Keg(){
  const brewerName = "Against the Grain";
  const beerName = "The Green Dragon";
  return (
    <React.Fragment>
      <h3>{brewerName}</h3>
      <h3>{beerName}</h3>
      <p><em>It comes in pints!</em></p>
      <hr/>
    </React.Fragment>
  );
}

export default Keg;