import {View, Text} from 'react-native';
import React from 'react';
import {colors, styles} from '../themes/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab1Screen = () => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Íconos</Text>
      <Text>
        <Icon name="airplane-outline" size={80} color={colors.primary} />;
        <Icon name="at-outline" size={80} color={colors.primary} />;
        <Icon
          name="battery-charging-outline"
          size={80}
          color={colors.primary}
        />
        ;
        <Icon name="game-controller-outline" size={80} color={colors.primary} />
        ;
        <Icon name="happy-outline" size={80} color={colors.primary} />;
      </Text>
    </View>
  );
};

export default Tab1Screen;
