import React from 'react';
import {SafeAreaView} from 'react-native';
// import FlexScreen from './src/screens/FlexScreen';
import TestFlexScreen from './src/screens/TestFlexScreen';
// import BoxObjectModelScreen from './src/screens/BoxObjectModelScreen';
// import DimensionsScreen from './src/screens/DimensionsScreen';
// import PositionsScreen from './src/screens/PositionsScreen';
// import CounterScreen from './src/screens/CounterScreen';
// import HelloWorldScreen from './src/screens/HelloWorldScreen';

const App = () => {
  return (
    // <HelloWorldScreen />
    // <CounterScreen />
    <SafeAreaView style={{flex: 1}}>
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionsScreen /> */}
      {/* <PositionsScreen /> */}
      {/* <FlexScreen /> */}
      <TestFlexScreen />
    </SafeAreaView>
  );
};

export default App;
