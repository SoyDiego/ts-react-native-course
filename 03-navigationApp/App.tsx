import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import LateralMenuBasic from './src/navigator/LateralMenuBasic';
import LateralMenu from './src/navigator/LateralMenu';
import {AuthProvider} from './src/context/AuthContext';
// import StackNavigator from './src/navigator/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <StackNavigator /> */}
        <LateralMenu />
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({children}: any) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default App;
