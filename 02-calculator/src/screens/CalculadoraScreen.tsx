import {View, Text} from 'react-native';
import React from 'react';
import {styles} from '../theme/appTheme';
import ButtonCalc from '../components/ButtonCalc';

const CalculadoraScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.smallResult}>1,500.00</Text>
      <Text style={styles.result}>1,500.00</Text>

      <View style={styles.row}>
        <ButtonCalc text="C" color="#9B9B9B" />
        <ButtonCalc text="+/-" color="#9B9B9B" />
        <ButtonCalc text="del" color="#9B9B9B" />
        <ButtonCalc text="/" color="#FF9427" />
      </View>
    </View>
  );
};

export default CalculadoraScreen;
