import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

 const MealDetails = props => {
   return (<View style={styles.screen}>
     <Text>The Meal Details Screen!</Text>
   </View>);
 };

 const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
 });

 export default MealDetails;
