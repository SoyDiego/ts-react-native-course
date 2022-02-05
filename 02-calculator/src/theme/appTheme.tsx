import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#000000',
  },
  calculatorContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
  },
  result: {
    color: '#fff',
    fontSize: 50,
    textAlign: 'right',
  },
  smallResult: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 30,
    textAlign: 'right',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    height: 80,
    width: 80,
    borderRadius: 100,
    backgroundColor: '#2D2D2D',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  textInButton: {
    color: '#FFFFFF',
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    fontWeight: 'bold',
  },
});
