import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import LateralMenuBasic from './src/navigator/LateralMenuBasic';
import LateralMenu from './src/navigator/LateralMenu';
// import StackNavigator from './src/navigator/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <LateralMenuBasic /> */}
      <LateralMenu />
    </NavigationContainer>
  );
};

export default App;
