import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const PositionsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxViolet} />
      <View style={styles.boxOrange} />
    </View>
  );
};

export default PositionsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28c4d9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxViolet: {
    width: 100,
    height: 100,
    backgroundColor: '#5856dc',
    borderWidth: 5,
    borderColor: 'white',
  },
  boxOrange: {
    width: 100,
    height: 100,
    backgroundColor: '#f0a23b',
    borderWidth: 5,
    borderColor: 'white',
    top: -50,
  },
});
