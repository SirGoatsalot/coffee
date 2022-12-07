import React, { useEffect, useState } from 'react';
import Card from '../components/Card.jsx';
import CustomDrinkCard from '../components/CustomDrinkCard.jsx';

const CardContainer = () => {
  const [drinksList, setDrinksList] = useState([]);
  const [newDrink, setNewDrink] = useState([]);

  // Get the list of drinks when the page loads
  useEffect(() => {
    const getNewDrinks = async () => {
      try {
        const response = await fetch('/drinks');
        const newDrinksList = await response.json();
        setDrinksList(newDrinksList);
      } catch (err) {
        console.log(err);
      }
    };
    getNewDrinks();
  }, []);

  // Post a new drink when one is created
  useEffect(() => {
    const postNewDrink = async (newDrinkInfo) => {
      try {
        const newDrink = await fetch('/drinks', {
          method: 'POST',
          body: JSON.stringify(newDrinkInfo),
          headers: { 'Content-Type': 'application/json' },
        });
      } catch (err) {
        console.log(err);
      }
    };
    postNewDrink(newDrink);
  }, [newDrink]);

  const cards = [];
  for (const drink of drinksList) {
    cards.push(<Card drink={drink} />);
  }
  return (
    <div className='cardContainer'>
      {cards}
      <CustomDrinkCard setNewDrink={setNewDrink} />
    </div>
  );
};

export default CardContainer;
