import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = props => {
  const renderGridItem = ({ item }) => (
    <CategoryGridTile
      item={item}
      handlePress={() => props.navigation.navigate('CategoryMeals', item)}
    />
  );

  return (
    <FlatList
      data={CATEGORIES}
      numColumns={2}
      renderItem={renderGridItem}
    />
  );
 };

 const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
 });

 export default CategoriesScreen;
