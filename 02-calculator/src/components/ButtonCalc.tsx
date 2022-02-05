import {View, Text} from 'react-native';
import React from 'react';
import {styles} from '../theme/appTheme';

interface IButtonCalcProps {
  text: string;
  color?: string;
}

const ButtonCalc = ({text, color = "#2D2D2D"}: IButtonCalcProps) => {
  return (
    <View style={{...styles.button, backgroundColor: color}}>
      <Text style={styles.textInButton}>{text}</Text>
    </View>
  );
};

export default ButtonCalc;
