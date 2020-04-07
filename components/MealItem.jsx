import React from 'react';
import {
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  View
} from 'react-native';

const MealItem = ({ item, handlePress }) => {
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  };

  return(
    <View style={styles.mealItem}>
      <TouchableComponent onPress={handlePress}>
        <View>
          <View style={{...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground
              source={{uri: item.imageUrl}}
              style={styles.bgImage}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{...styles.mealRow, ...styles.mealDetail }}>
            <Text>{item.duration}m</Text>
            <Text>{item.complexity.toUpperCase()}</Text>
            <Text>{item.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  mealRow: {
    flexDirection: 'row',
  },
  mealItem: {
    height: 200,
    width: '90%',
    backgroundColor: '#f5f5f5',
    marginHorizontal: '5%',
    marginVertical: 10,
    marginTop: '3%',
    borderRadius: 10,
    overflow: 'hidden'
  },
  mealHeader: {
    height: '80%',
    paddingBottom: 5
  },
  mealDetail: {
    padding: 15,
    paddingBottom: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '20%'
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end'
  },
  titleContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    color: 'white',
    textAlign: 'center'
  }
});

export default MealItem;
