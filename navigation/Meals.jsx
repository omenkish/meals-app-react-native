import React, { useState } from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import CategoriesScreen from '../screens/Categories';
import CategoryMealsScreen from '../screens/CategoryMeals';
import MealDetailScreen from '../screens/MealDetails';
import Colors from '../constants/colors';
import FavouritesScreen from '../screens/Favourites';
 
const MealsNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primaryColor
          : ''
          },
          headerTintColor: Platform.OS === 'android' ? 'white' : ''
      }}
    >
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{ title: 'Meal Categories' }}
      />
      <Stack.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
      <Stack.Screen
        name="CategoryMeals"
        component={CategoryMealsScreen}
        options={({ route }) => ({ title: route.params.title })} 
      />
    </Stack.Navigator>
  );
};

const MealsFavTabNavigator = () => {
  const android = Platform.OS === 'android';
  const Tab = android ? createMaterialBottomTabNavigator() : createBottomTabNavigator();

  return (
    <Tab.Navigator
      activeColor='white'
      barStyle={{ backgroundColor: Colors.primaryColor }}
      tabBarOptions={{
        activeTintColor: Colors.headerColor
      }}
      shifting={true}
    >
      <Tab.Screen
        name="Meals"
        component={MealsNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name='ios-restaurant' size={25} color={color}/>
          )
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name='ios-star' size={25} color={color}/>
          ),
          tabBarColor: Colors.accentColor
        }}
      />
    </Tab.Navigator>
  );
};

export default MealsFavTabNavigator;
