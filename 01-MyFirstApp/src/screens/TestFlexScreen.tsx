import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const TestFlexScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxViolet} />
      <View style={styles.boxOrange} />
      <View style={styles.boxBlue} />
    </View>
  );
};

export default TestFlexScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'slateblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxViolet: {
    backgroundColor: 'violet',
    width: 100,
    height: 100,
    borderWidth: 5,
    borderColor: 'white',
  },
  boxOrange: {
    backgroundColor: 'orange',
    width: 100,
    height: 100,
    borderWidth: 5,
    borderColor: 'white',
    alignSelf: 'flex-end',
  },
  boxBlue: {
    backgroundColor: 'lightblue',
    width: 100,
    height: 100,
    borderWidth: 5,
    borderColor: 'white',
  },
});
