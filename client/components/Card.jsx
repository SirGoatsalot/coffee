import React from 'react';
import LabeledText from './LabeledText.jsx';

const Card = (props) => {
  const labels = [];
  for (const label in props.drink) {
    console.log('current Label: ', label);
    if (label !== '_id' && label !== '__v') {
      labels.push(<LabeledText label={label} text={props.drink[label]} />);
    }
  }
  return <div className='card'>{labels}</div>;
};

export default Card;
