import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../theme/appTheme';
import ButtonCalc from '../components/ButtonCalc';

const CalculadoraScreen = () => {
  const [baseNumber, setBaseNumber] = useState('100');
  const [previousNumber, setPreviousNumber] = useState('0');

  const reset = () => {
    setBaseNumber('0');
  };

  const buildNumber = (number: string) => {
    if (baseNumber === '0') {
      setBaseNumber(number);
    } else {
      setBaseNumber(baseNumber + number);
    }
  };

  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.smallResult}>{previousNumber}</Text>
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {baseNumber}
      </Text>

      <View style={styles.row}>
        <ButtonCalc text="C" color="#9B9B9B" action={reset} />
        <ButtonCalc text="+/-" color="#9B9B9B" action={reset} />
        <ButtonCalc text="del" color="#9B9B9B" action={reset} />
        <ButtonCalc text="/" color="#FF9427" action={reset} />
      </View>

      <View style={styles.row}>
        <ButtonCalc text="7" action={buildNumber} />
        <ButtonCalc text="8" action={buildNumber} />
        <ButtonCalc text="9" action={buildNumber} />
        <ButtonCalc text="X" color="#FF9427" action={reset} />
      </View>

      <View style={styles.row}>
        <ButtonCalc text="4" action={buildNumber} />
        <ButtonCalc text="5" action={buildNumber} />
        <ButtonCalc text="6" action={buildNumber} />
        <ButtonCalc text="-" color="#FF9427" action={reset} />
      </View>

      <View style={styles.row}>
        <ButtonCalc text="1" action={buildNumber} />
        <ButtonCalc text="2" action={buildNumber} />
        <ButtonCalc text="3" action={buildNumber} />
        <ButtonCalc text="+" color="#FF9427" action={reset} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="0" action={buildNumber} width />
        <ButtonCalc text="." action={buildNumber} />
        <ButtonCalc text="=" color="#FF9427" action={reset} />
      </View>
    </View>
  );
};

export default CalculadoraScreen;
