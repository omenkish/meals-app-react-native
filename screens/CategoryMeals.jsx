import React from 'react';
import { Button, StyleSheet, View, Text} from 'react-native';

 const CategoryMeal = props => {
   return (<View style={styles.screen}>
     <Text>The Category Meal Screen!</Text>
     <Button
       title='Go to meal Details'
       onPress={() => props.navigation.navigate('MealDetail')}
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
