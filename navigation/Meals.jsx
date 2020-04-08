import React from 'react';
import { Platform, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CategoriesScreen from '../screens/Categories';
import CategoryMealsScreen from '../screens/CategoryMeals';
import MealDetailScreen from '../screens/MealDetails';
import Colors from '../constants/colors';
import FavouritesScreen from '../screens/Favourites';
import FiltersScreen from '../screens/Filters';
import HeaderIcon from '../shared/HeaderIcon';
 
const Stack = createStackNavigator();

const MealsNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primaryColor
          : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : '',
        headerTitleStyle: { fontFamily: 'open-sans-bold'},
        headerBackTitleStyle: { fontFamily: 'open-sans-regular'}
      }}
    >
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={(props) => ({
          title: 'Meal Categories',
          headerLeft: () => (
            <HeaderIcon
              title="Your Favourites"
              iconName="ios-menu"
              iconTitle="Menu"
              handlePress={() => props.navigation.toggleDrawer()}
            />
          ),
        })}
      />
      <Stack.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={({ route }) => ({ title: route.params.title} )}
      />
      <Stack.Screen
        name="CategoryMeals"
        component={CategoryMealsScreen}
        options={({ route }) => ({ title: route.params.title })} 
      />
    </Stack.Navigator>
  );
};

const FavouritesNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Favourites"
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.headerColor
          : ''
          },
          headerTintColor: Platform.OS === 'android' ? 'white' : ''
      }}
    >
      <Stack.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={(props) => ({ 
          title: 'Your Favourites',
          headerLeft: () => (
            <HeaderIcon
              title="Your Favourites"
              iconName="ios-menu"
              iconTitle="Menu"
              handlePress={() => props.navigation.toggleDrawer()}
            />
          ),
        })}
      />
      <Stack.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={({ route }) => ({ title: route.params.title} )}
      />
    </Stack.Navigator>
  );
};

const FiltersNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.headerColor
          : ''
          },
          headerTintColor: Platform.OS === 'android' ? 'white' : ''
      }}
    >
      <Stack.Screen
        name="Filters"
        component={FiltersScreen}
        options={(props) => ({ 
          title: 'Filter Meals',
          headerLeft: () => (
            <HeaderIcon
              title="Your Favourites"
              iconName="ios-menu"
              iconTitle="Menu"
              handlePress={() => props.navigation.toggleDrawer()}
            />
          ),
        })}
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
          ),
          tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'open-sans-bold'}}>Meals</Text> : 'Meals'
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={FavouritesNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name='ios-star' size={25} color={color}/>
          ),
          tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'open-sans-bold'}}>Favourites</Text> : 'Favourites',
          tabBarColor: Colors.accentColor
        }}
      />
    </Tab.Navigator>
  );
};

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Meals"
      drawerContentOptions={{
        activeTintColor: Colors.accentColor,
        activeBackgroundColor: '#f5f5f5',
        labelStyle: { fontFamily: 'open-sans-bold'}
      }}
    >
      <Drawer.Screen
        name="Meals"
        component={MealsFavTabNavigator}
      />
      <Drawer.Screen
        name="Filters"
        component={FiltersNavigator}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
