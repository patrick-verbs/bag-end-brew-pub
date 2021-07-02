// import logo from './logo.svg';
import React from "react";
import Header from "./Header";

function App(){
  const name = "Thato";
  const name2 = "Haley";
  return (
    <React.Fragment>
      <Header />
      <h3>Against the Grain</h3>
      <h3>The Green Dragon</h3>
      <p><em>It comes in pints!</em></p>
      {/* This is a JSX comment. */}
      <hr/>
    </React.Fragment>
  );
}

export default App;