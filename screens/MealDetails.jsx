import React from 'react';
import { Image, ScrollView, StyleSheet, View, Text} from 'react-native';
import {HeaderButtons, Item } from 'react-navigation-header-buttons';

import DefaultText from '../components/DefaultText';
import CustomHeaderButton from '../components/HeaderButton';

const ListItem = props => (
  <View style={styles.listItem}>
    <DefaultText>{props.children}</DefaultText>
  </View>
);

export const headerIcon = (props, handlePress) => (
  props.navigation.setOptions({
    headerRight:() => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favourite"
          iconName="ios-star"
          onPress={handlePress}
        />
      </HeaderButtons>
    ),
  })
);

const MealDetails = (props) => {
  const { params: item } = props.route; 
 
  headerIcon(props, () => alert('search'));

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.imageUrl}} style={styles.image} />
      </View>
      <View style={styles.details}>
        <DefaultText>{item.duration}m</DefaultText>
        <DefaultText>{item.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{item.affordability.toUpperCase()}</DefaultText>
      </View>
      <View>
        <Text style={styles.title}>Ingredients</Text>
        {
          item.ingredients.map(ingredient => (
            <ListItem key={ingredient}>{ingredient}</ListItem>
          ))
        }
      </View>

      <View>
        <Text style={styles.title}>Steps</Text>
        {
          item.steps.map((step, index) => (
            <ListItem key={step}>{index + 1})  {step}</ListItem>
          ))
        }
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '94%',
    marginHorizontal: '3%',
    marginVertical: '5%',
    borderRadius: 10,
    overflow: 'hidden'
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    paddingTop: 8,
    justifyContent: 'space-around'
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    textAlign: 'center'
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
  }
});

 export default MealDetails;
