import React, {useContext} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../context/AuthContext';
import {colors} from '../themes/appTheme';

interface ITouchableIconsProps {
  iconName: string;
}

const TouchableIcon = ({iconName}: ITouchableIconsProps) => {
  const {changeFavIcon} = useContext(AuthContext);

  return (
    <TouchableOpacity
      onPress={() => changeFavIcon(iconName)}
      style={{flexDirection: 'row'}}>
      <Text>
        <Icon name={iconName} size={80} color={colors.primary} />;
      </Text>
    </TouchableOpacity>
  );
};

export default TouchableIcon;
