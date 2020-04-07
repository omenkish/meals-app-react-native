import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import MealItem from '../components/MealItem';

const MealList = props => {
  const renderMealItem = ({ item }) => {
    return <MealItem  item={item} handlePress={() => props.navigation.navigate('MealDetail', item)}/>;
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        renderItem={renderMealItem}
        style={{width: '100%'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default MealList;
