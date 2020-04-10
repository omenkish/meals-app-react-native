import React from 'react';
import { useSelector } from 'react-redux';

import MealList from '../components/MealList';
import { StyleSheet, Text, View } from 'react-native';
import DefaultText from '../components/DefaultText';


const Favourites = props => {
  const favouriteMeals = useSelector(state => state.meals.favouriteMeals);

  if (favouriteMeals.length === 0 || !favouriteMeals) {
    return (
      <View style={styles.content}>
        <DefaultText>You currently have no favourited meal!!</DefaultText>
      </View>
    );
  }
  return (
    <MealList listData={favouriteMeals} navigation={props.navigation}/>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Favourites;
