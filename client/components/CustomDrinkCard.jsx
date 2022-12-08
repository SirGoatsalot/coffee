import React, { useState } from 'react';
import LabeledInput from './LableledInput.jsx';

const CustomDrinkCard = (props) => {
  const [name, setName] = useState('');
  const [brewType, setBrewType] = useState('');
  const [grind, setGrind] = useState(null);
  const [gramsIn, setGramsIn] = useState(null);
  const [gramsOut, setGramsOut] = useState(null);
  const [brewTime, setBrewTime] = useState(null);
  const [author, setAuthor] = useState(null);

  return (
    <div className='card customDrinkCard'>
      <form
        onSubmit={(e) => {
          props.setNewDrink({
            name,
            brewType,
            grind,
            gramsIn,
            gramsOut,
            brewTime,
            author,
          });
          e.preventDefault();
        }}
      >
        <LabeledInput label='NAME' updateValue={setName} />
        <LabeledInput label='BREW TYPE' updateValue={setBrewType} />
        <LabeledInput label='GRIND' updateValue={setGrind} />
        <LabeledInput label='GRAMS IN' updateValue={setGramsIn} />
        <LabeledInput label='GRAMS OUT' updateValue={setGramsOut} />
        <LabeledInput label='BREW TIME' updateValue={setBrewTime} />
        <LabeledInput label='AUTHOR' updateValue={setAuthor} />
        <input
          class='cardButton'
          id='customDrinkSubmitButton'
          type='submit'
          value='Submit'
        />
      </form>
    </div>
  );
};

export default CustomDrinkCard;
