import React from 'react';
import LabeledText from './LabeledText.jsx';

const Card = (props) => {
  return (
    <div className='card'>
      <LabeledText label='Hello' text='World' />
    </div>
  );
};

export default Card;
