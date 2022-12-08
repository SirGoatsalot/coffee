import React, { useState, useEffect } from 'react';
import LabeledInput from './LableledInput.jsx';

const CustomDrinkCard = (props) => {
  const [name, setName] = useState('');
  const [brewType, setBrewType] = useState('');
  const [grind, setGrind] = useState(null);
  const [gramsIn, setGramsIn] = useState(null);
  const [gramsOut, setGramsOut] = useState(null);
  const [brewTime, setBrewTime] = useState(null);
  const [author, setAuthor] = useState(null);
  const [useZeldaName, setUseZeldaName] = useState(true);

  // useEffect(() => {
  //   const getZeldaName = async () => {
  //     try {
  //       const entryID = Math.floor(Math.random() * 390);
  //       const entry = await fetch(
  //         `https://botw-compendium.herokuapp.com/api/v2/entry/${entryID}`
  //       ).then((data) => data.json());
  //       const newName = entry.name;
  //       setZeldaName(newName);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   if (useZeldaName) getZeldaName();
  // }, [useZeldaName]);

  return (
    <div className='card customDrinkCard'>
      <form
        onSubmit={(e) => {
          setUseZeldaName(true);
          props.setNewDrink({
            name,
            useZeldaName,
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
          className='cardButton'
          id='customDrinkSubmitButton'
          type='submit'
          value='Submit'
        />
      </form>
    </div>
  );
};

export default CustomDrinkCard;
