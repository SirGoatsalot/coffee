import React from 'react';

const LabeledInput = (props) => {
  return (
    <label className='fw-bold labeledText'>
      {props.label}:
      <input
        className='customDrinkInput'
        onChange={(e) => {
          props.updateValue(e.target.value);
        }}
      />
      <br />
    </label>
  );
};

export default LabeledInput;
