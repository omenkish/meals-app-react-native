import React, { useState } from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import CategoriesScreen from '../screens/Categories';
import CategoryMealsScreen from '../screens/CategoryMeals';
import MealDetailScreen from '../screens/MealDetails';
import Colors from '../constants/colors';
 
const Stack =  createStackNavigator();

const MealsNavigator = () => (
  <Stack.Navigator initialRouteName="Categories">
    <Stack.Screen
      name="Categories"
      component={CategoriesScreen}
      options={{ 
        title: 'Meal Categories',
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.headerColor
          : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : ''
      }}
    />
    <Stack.Screen name="MealDetail" component={MealDetailScreen} />
    <Stack.Screen
      name="CategoryMeals"
      component={CategoryMealsScreen}
      options={({ route }) => ({ title: route.params.title })} 
    />
  </Stack.Navigator>
);

export default MealsNavigator;
