import {useRef, useState} from 'react';

enum Operators {
  addition,
  substract,
  multiply,
  divide,
}

const useCalculator = () => {
  const [baseNumber, setBaseNumber] = useState('0');
  const [previousNumber, setPreviousNumber] = useState('0');

  const lastOperation = useRef<Operators>();

  const reset = () => {
    setBaseNumber('0');
    setPreviousNumber('0');
  };

  const buildNumber = (number: string) => {
    //Don't accept double point (.)
    if (number === '.' && baseNumber.includes('.')) return;

    if (baseNumber.startsWith('0') || baseNumber.startsWith('-0')) {
      // Decimal point
      if (number === '.') {
        setBaseNumber(baseNumber + number);
      }
      // Evaluate if there is other 0 and there is a decimal point
      else if (number === '0' && baseNumber.includes('.')) {
        setBaseNumber(baseNumber + number);
        //Evalute if is not 0 and  is not a decimal point
      } else if (number !== '0' && !baseNumber.includes('.')) {
        setBaseNumber(number);
        // Deny to add more than one 0
      } else if (number === '0' && !baseNumber.includes('.')) {
        setBaseNumber(number);
      } else {
        setBaseNumber(baseNumber + number);
      }
    } else {
      setBaseNumber(baseNumber + number);
    }
  };

  const positiveNegative = () => {
    if (baseNumber.includes('-')) {
      setBaseNumber(baseNumber.replace('-', ''));
    } else {
      setBaseNumber('-' + baseNumber);
    }
  };

  const deleteLastNumber = () => {
    let negative = '';
    let tempNumber = baseNumber;
    if (baseNumber.includes('-')) {
      negative = '-';
      tempNumber = baseNumber.replace('-', '');
    }

    if (tempNumber.length === 1) {
      setBaseNumber('0');
    } else {
      setBaseNumber(negative + tempNumber.slice(0, -1));
    }
  };

  const changeNumberToPrevious = () => {
    if (baseNumber.endsWith('.')) {
      setPreviousNumber(baseNumber.slice(0, -1));
    } else {
      setPreviousNumber(baseNumber);
    }

    setBaseNumber('0');
  };

  const btnDivide = () => {
    changeNumberToPrevious();
    lastOperation.current = Operators.divide;
  };

  const btnMultiply = () => {
    changeNumberToPrevious();
    lastOperation.current = Operators.multiply;
  };
  const btnSubstract = () => {
    changeNumberToPrevious();
    lastOperation.current = Operators.substract;
  };
  const btnAddition = () => {
    changeNumberToPrevious();
    lastOperation.current = Operators.addition;
  };

  const calculate = () => {
    const num1 = Number(baseNumber);
    const num2 = Number(previousNumber);

    switch (lastOperation.current) {
      case Operators.addition:
        setBaseNumber(`${num1 + num2}`);

        break;
      case Operators.substract:
        setBaseNumber(`${num2 - num1}`);
        break;
      case Operators.multiply:
        setBaseNumber(`${num1 * num2}`);
        break;
      case Operators.divide:
        setBaseNumber(`${num2 / num1}`);
        break;
    }
    setPreviousNumber('0');
  };

  return {
    baseNumber,
    previousNumber,
    reset,
    buildNumber,
    positiveNegative,
    deleteLastNumber,
    btnDivide,
    btnMultiply,
    btnSubstract,
    btnAddition,
    calculate,
  };
};

export default useCalculator;
