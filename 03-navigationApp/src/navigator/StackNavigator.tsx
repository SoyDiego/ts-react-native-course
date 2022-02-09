import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Page1Screen from '../screens/Page1Screen';
import Page2Screen from '../screens/Page2Screen';
import Page3Screen from '../screens/Page3Screen';
import PersonScreen from '../screens/PersonScreen';

export type RootStackParamList = {
  Page1Screen: undefined;
  Page2Screen: undefined;
  Page3Screen: undefined;
  PersonScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {backgroundColor: 'white'},
        headerShadowVisible: false,
      }}>
      <Stack.Screen
        name="Page1Screen"
        options={{title: 'Page 1'}}
        component={Page1Screen}
      />
      <Stack.Screen
        name="Page2Screen"
        options={{title: 'Page 2'}}
        component={Page2Screen}
      />
      <Stack.Screen
        name="Page3Screen"
        options={{title: 'Page 3'}}
        component={Page3Screen}
      />
      <Stack.Screen
        name="PersonScreen"
        options={{title: 'Person Screen'}}
        component={PersonScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
