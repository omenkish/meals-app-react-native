import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import {
  HeaderButtons,
  Item
} from 'react-navigation-header-buttons';

import CustomHeaderButton from '../components/HeaderButton';

 const MealDetails = (props) => {

  props.navigation.setOptions({
    headerRight:() => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favourite"
          iconName="ios-star"
          onPress={() => alert('search')}
        />
      </HeaderButtons>
    ),
  });

  return (<View style={styles.screen}>
    <Text>{props.route.params.title}</Text>
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
