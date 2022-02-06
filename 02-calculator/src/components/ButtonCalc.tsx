import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from '../theme/appTheme';

interface IButtonCalcProps {
  text: string;
  color?: string;
  width?: boolean;
  action: (number: string) => void;
}

const ButtonCalc = ({
  text,
  color = '#2D2D2D',
  width = false,
  action,
}: IButtonCalcProps) => {
  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          ...styles.button,
          backgroundColor: color,
          width: width ? 180 : 80,
        }}>
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            ...styles.textInButton,
            color: color === '#9B9B9B' ? '#000000' : '#FFFFFF',
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonCalc;
