/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';

const CounterScreen = () => {
  const [counter, setCounter] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter: {counter} </Text>
      <TouchableOpacity
        style={styles.fabLocationBR}
        onPress={() => setCounter(counter + 1)}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>+1</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.fabLocationBL}
        onPress={() => setCounter(counter - 1)}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>-1</Text>
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
  fab: {
    backgroundColor: '#5856d6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
  },
  fabLocationBR: {
    position: 'absolute',
    bottom: 30,
    right: 30,
  },
  fabLocationBL: {
    position: 'absolute',
    bottom: 30,
    left: 30,
  },
  fabText: {
    fontSize: 30,
    color: '#fff',
    alignSelf: 'center',
  },
});
