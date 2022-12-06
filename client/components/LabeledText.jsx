import React from 'react';

const LabeledText = (props) => {
  return (
    <p className='LabeledText'>
      <span className='LabeledText fw-bold'>{props.label}: </span>
      {props.text}
    </p>
  );
};

export default LabeledText;
