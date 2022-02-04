import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.box1}>Box 1</Text>
      <Text style={styles.box2}>Box 2</Text>
      <Text style={styles.box3}>Box 3</Text>
    </View>
  );
};

export default FlexScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'slateblue',
  },
  box1: {
    flex: 7,
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  },
  box2: {
    flex: 2,
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  },
  box3: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  },
});
