import React from 'react';
import { 
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';

const CategoryGridTile = ({ item, handlePress }) => {
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }
  return(
    <View style={styles.gridItem}>
      <TouchableComponent
        style={{flex: 1}}
        onPress={handlePress}
      >
        <View style={{...styles.container, ...{backgroundColor: item.color}}}>
          <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
        </View>
      </TouchableComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'right'
  }
 });

export default CategoryGridTile;
