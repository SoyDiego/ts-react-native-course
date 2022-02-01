/* eslint-disable react-native/no-inline-styles */
import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';

const CounterScreen = () => {
  const [counter, setCounter] = useState(10);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 50}}>Counter: {counter} </Text>
      <Button title="+1" onPress={() => setCounter(counter + 1)} />
    </View>
  );
};

export default CounterScreen;
