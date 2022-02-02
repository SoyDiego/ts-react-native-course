import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Fab from '../components/Fab';

const CounterScreen = () => {
  const [counter, setCounter] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter: {counter} </Text>

      <Fab position="br" title="+1" onPress={() => setCounter(counter + 1)} />

      <Fab position="bl" title="-1" onPress={() => setCounter(counter - 1)} />

      {/* <TouchableOpacity
        style={styles.fabLocationBL}
        onPress={() => setCounter(counter - 1)}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>-1</Text>
        </View>
      </TouchableOpacity> */}
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
