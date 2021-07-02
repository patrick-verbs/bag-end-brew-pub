import React from "react";
import { v4 } from 'uuid';

function NewKegForm() {

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.brand.value);
    console.log(event.target.price.value);
    console.log(event.target.alcoholContent.value);
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Beer Name'
        />
        <input
          type='text'
          name='brand'
          placeholder='Brand'
        />
        <input
          type='number'
          name='price'
          placeholder='Price'
        />
        <input
          type='number'
          name='alcoholContent'
          placeholder='Alcohol Content'
        />
        {/* <textarea
          name='issue'
          placeholder='Describe your issue.'
        /> */}
        <button type='submit'>Add Keg!</button>
      </form>
    </React.Fragment>
  );

}

export default NewKegForm;