import React, { useEffect, useState } from 'react';
import Card from '../components/Card.jsx';

const CardContainer = () => {
  const [drinksList, setDrinksList] = useState([]);

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

  const cards = [];
  for (const drink of drinksList) {
    cards.push(<Card drink={drink} />);
  }
  return <div className='cardContainer'>{cards}</div>;
};

export default CardContainer;
