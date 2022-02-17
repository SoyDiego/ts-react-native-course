import {View, Text} from 'react-native';
import React from 'react';
import {styles} from '../themes/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab1Screen = () => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Íconos</Text>
      <Text>
        <Icon name="airplane-outline" size={30} color="#900" />;
      </Text>
    </View>
  );
};

export default Tab1Screen;
