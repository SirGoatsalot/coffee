import React, { useEffect, useState, useRef } from 'react';
import Card from '../components/Card.jsx';
import CustomDrinkCard from '../components/CustomDrinkCard.jsx';

const CardContainer = () => {
  const [drinksList, setDrinksList] = useState([]);
  const [newDrink, setNewDrink] = useState([]);
  const [deleteID, setDeleteID] = useState('');
  const [drinksUpdated, setDrinksUpdated] = useState(false);

  const firstRun = useRef(true);

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
  }, [drinksUpdated]);

  // Post a new drink when one is created
  useEffect(() => {
    const postNewDrink = async (newDrinkInfo) => {
      try {
        const newDrink = await fetch('/drinks', {
          method: 'POST',
          body: JSON.stringify(newDrinkInfo),
          headers: { 'Content-Type': 'application/json' },
        });
        setDrinksUpdated(newDrinkInfo);
      } catch (err) {
        console.log(err);
      }
    };
    if (!firstRun.current) postNewDrink(newDrink);
  }, [newDrink]);

  // Delete the drink ID when it is updated
  useEffect(() => {
    const deleteDrink = async (ID) => {
      try {
        await fetch(`/drinks/${ID}`, {
          method: 'DELETE',
        });
        setDrinksUpdated(ID);
      } catch (err) {
        console.log(err);
      }
    };
    if (!firstRun.current) deleteDrink(deleteID);
    else firstRun.current = false;
  }, [deleteID]);

  const cards = [];
  for (const drink of drinksList) {
    cards.push(<Card drink={drink} deleteDrink={setDeleteID} />);
  }
  return (
    <div className='cardContainer'>
      {cards}
      <CustomDrinkCard setNewDrink={setNewDrink} />
    </div>
  );
};

export default CardContainer;
