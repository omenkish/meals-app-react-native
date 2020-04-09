import React from 'react';
import { useSelector } from 'react-redux';

import MealList from '../components/MealList';


const Favourites = props => {
  const favouriteMeals = useSelector(state => state.meals.favouriteMeals);

  return (
    <MealList listData={favouriteMeals} navigation={props.navigation}/>
  );
};

export default Favourites;
