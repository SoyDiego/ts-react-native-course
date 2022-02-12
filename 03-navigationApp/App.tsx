import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import LateralMenuBasic from './src/navigator/LateralMenuBasic';
// import StackNavigator from './src/navigator/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <LateralMenuBasic />
    </NavigationContainer>
  );
};

export default App;
