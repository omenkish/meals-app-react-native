import React from 'react';
import { useSelector } from 'react-redux';

import MealList from '../components/MealList';
import { StyleSheet, View } from 'react-native';
import DefaultText from '../components/DefaultText';

const CategoryMeal = props => {
  const catId = props.route.params.id;

  const availableMeals = useSelector(state => state.meals.filteredMeals);
  
  const displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

  if (displayedMeals.length) {
    return (
      <MealList listData={displayedMeals} navigation={props.navigation}/>
    );
  }

  return (
    <View style={styles.content}>
      <DefaultText>No meals found, maybe check your filters?</DefaultText>
    </View>
  )
 };

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

 export default CategoryMeal;
