import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box Object Model</Text>
    </View>
  );
};

export default BoxObjectModelScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'slateblue',
  },
  title: {
    fontSize: 30,
    borderWidth: 10,
    paddingHorizontal: 100,
  },
});
