import React, { useState } from 'react';

const CustomDrinkCard = (props) => {
  const [name, setName] = useState('');
  const [brewType, setBrewType] = useState('');

  return (
    <div className='card'>
      <form
        onSubmit={() => {
          props.setNewDrink({ name, brewType });
        }}
      >
        <label className='fw-bold'>
          NAME:
          <input
            type='text'
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
        <br />
        <label className='fw-bold'>
          BREW TYPE:
          <input
            type='text'
            onChange={(e) => {
              setBrewType(e.target.value);
            }}
          />
        </label>
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
};

export default CustomDrinkCard;
