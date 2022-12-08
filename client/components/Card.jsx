import React from 'react';
import LabeledText from './LabeledText.jsx';
import CardHeader from '../containers/CardHeader.jsx';
import DeleteButton from '../components/DeleteButton.jsx';

const Card = (props) => {
  const labels = [];
  const NO_LABEL = new Set(['_id', '__v', 'name', 'zeldaName']);
  for (const label in props.drink) {
    if (!NO_LABEL.has(label) && props.drink[label]) {
      labels.push(<LabeledText label={label} text={props.drink[label]} />);
    }
  }
  return (
    <div className='card'>
      <DeleteButton id={props.drink._id} deleteDrink={props.deleteDrink} />
      <CardHeader name={props.drink.name} zeldaName={props.drink.zeldaName} />
      {labels}
    </div>
  );
};

export default Card;
