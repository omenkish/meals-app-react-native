import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

 const Favourites = props => {
   return (<View style={styles.screen}>
     <Text>The Favourites Screen!</Text>
   </View>);
 };

 const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
 });

 export default Favourites;
