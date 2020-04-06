import React from 'react';
import { 
  Button,
  FlatList,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen = props => {
  const renderGridItem = ({ item }) => {
    return(
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => props.navigation.navigate('CategoryMeals')}
      >
        <View>
          <Text>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

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
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150
  }
 });

 export default CategoriesScreen;
