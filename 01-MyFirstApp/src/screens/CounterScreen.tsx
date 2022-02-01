/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {tsLiteralType} from '@babel/types';

const CounterScreen = () => {
  const [counter, setCounter] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter: {counter} </Text>
      <TouchableOpacity onPress={() => setCounter(counter + 1)}>
        <View>
          <Text>+1</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 50,
  },
});
