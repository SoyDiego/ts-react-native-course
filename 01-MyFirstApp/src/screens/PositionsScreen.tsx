import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const PositionsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxViolet} />
      <View style={styles.boxOrange} />
      <View style={styles.boxGreen} />
      <View style={styles.boxOrange} />
    </View>
  );
};

export default PositionsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#28c4d9',
    flex: 1,
    alignItems: 'center',
  },
  boxViolet: {
    width: 100,
    height: 100,
    backgroundColor: '#5856dc',
    borderWidth: 5,
    borderColor: 'white',
    position: 'absolute',
    top: 10,
  },
  boxOrange: {
    width: 100,
    height: 100,
    backgroundColor: '#f0a23b',
    borderWidth: 5,
    borderColor: 'white',
    position: 'absolute',
    bottom: 10,
    right: 0,
  },
  boxGreen: {
    width: 100,
    height: 100,
    backgroundColor: '#3fcea0',
    borderWidth: 5,
    borderColor: 'white',
    position: 'absolute',
    bottom: 10,
    left: 0,
  },
});
