import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
} from 'react-native';
import React from 'react';

const DimensionsScreen = () => {
  //   const {width, height} = Dimensions.get('window');

  const {width, height} = useWindowDimensions();

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.boxViolet} />
        <View style={styles.boxOrange} />
      </View>
      <Text style={styles.dimensions}>
        W: {width} - H: {height}
      </Text>
    </View>
  );
};

export default DimensionsScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    backgroundColor: 'pink',
  },
  boxViolet: {
    backgroundColor: '#5656db',
    width: '50%',
    height: '50%',
  },
  boxOrange: {
    backgroundColor: '#ff9f43',
  },
  dimensions: {
    fontSize: 20,
  },
});
