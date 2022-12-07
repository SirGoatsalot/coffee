import React from 'react';

const LabeledText = (props) => {
  const newText = props.label
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .toUpperCase(/^[a-z]/g);
  return (
    <div className='LabeledText'>
      <span className='LabeledText fw-bold'>{newText}: </span>
      {props.text}
    </div>
  );
};

export default LabeledText;
