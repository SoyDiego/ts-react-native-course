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
    flexDirection: 'row',
    backgroundColor: 'slateblue',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  box1: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  },
  box2: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  },
  box3: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  },
});
