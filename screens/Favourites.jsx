import React from 'react';

import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';

const favouriteMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');
const Favourites = props => {
  return (
    <MealList listData={favouriteMeals} navigation={props.navigation}/>
  );
};

export default Favourites;
