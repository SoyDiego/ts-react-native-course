import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Page1Screen from '../screens/Page1Screen';
import Page2Screen from '../screens/Page2Screen';
import Page3Screen from '../screens/Page3Screen';

export type RootStackParamList = {
  Page1Screen: undefined;
  Page2Screen: undefined;
  Page3Screen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Page1Screen" component={Page1Screen} />
      <Stack.Screen name="Page2Screen" component={Page2Screen} />
      <Stack.Screen name="Page3Screen" component={Page3Screen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
