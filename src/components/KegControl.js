import React from "react";
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  // The function to handle 'Add Keg' button click, below
  handleClick = () => {
    this.setState({formVisibleOnPage: true});
  }

  render(){
    let currentlyVisibleState = null;
    let addKegButton = null;

    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm />
    } else {
      currentlyVisibleState = <KegList />
      addKegButton = <button onClick={this.handleClick}>Add Keg</button>
      // This doesn't render the button -- it gives it a value so it WILL render
      // (i.e., so the value won't be 'null')
      // That value is the HTML code for a button! One with the function, above
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        {addKegButton}{/* Actually renders the button */}
      </React.Fragment>
    );
  }

}

export default KegControl;