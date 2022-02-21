import {View, Text} from 'react-native';
import React from 'react';
import {styles} from '../themes/appTheme';
import TouchableIcon from '../components/TouchableIcon';

const Tab1Screen = () => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Íconos</Text>
      <Text style={{flexDirection: 'row'}}>
        <TouchableIcon iconName="airplane-outline" />
        <TouchableIcon iconName="at-outline" />
        <TouchableIcon iconName="battery-charging-outline" />
        <TouchableIcon iconName="game-controller-outline" />
        <TouchableIcon iconName="happy-outline" />;
      </Text>
    </View>
  );
};

export default Tab1Screen;
