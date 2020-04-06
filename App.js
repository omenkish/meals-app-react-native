import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';

import MealsNavigator from './navigation/Meals';

enableScreens();

const fetchFonts = () => Font.loadAsync({
  'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
});
export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }
  return (
    <NavigationContainer>
      <MealsNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
