import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../themes/appTheme';

interface ITouchableIconsProps {
  iconName: string;
}

const TouchableIcon = ({iconName}: ITouchableIconsProps) => {
  return (
    <TouchableOpacity onPress={() => console.log(iconName)}>
      <Text>
        <Icon name={iconName} size={80} color={colors.primary} />;
      </Text>
    </TouchableOpacity>
  );
};

export default TouchableIcon;
