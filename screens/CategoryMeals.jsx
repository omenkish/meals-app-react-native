import React from 'react';
import { Button, FlatList, StyleSheet, View, Text} from 'react-native';

import { MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoryMeal = props => {
  const catId = props.route.params.id;
  const { navigate } = props.navigation;

  const renderMealItem = ({ item }) => {
    return <MealItem  item={item} handlePress={() => navigate('MealDetail', item)}/>;
  }

  const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);
   return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        style={{width: '100%'}}
      />
    </View>);
 };

 const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
 });

 export default CategoryMeal;
