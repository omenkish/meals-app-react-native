import React from 'react';
import { Button, FlatList, StyleSheet, View, Text} from 'react-native';

import { MEALS } from '../data/dummy-data';

const CategoryMeal = props => {
  const catId = props.route.params.id;
  const { navigate } = props.navigation;

  const renderMealItem = ({ item }) => {
    return(
      <View><Text>{item.title}</Text></View>
    );
  }
  console.log('Meals: ', MEALS);

  const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);
   return (
    <View style={styles.screen}>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={displayedMeals}
        renderItem={renderMealItem}
      />
      <Button
        title='Go to meal Details'
        onPress={() => navigate('MealDetail')}
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
