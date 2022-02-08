import {View, Text, Button} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigator/StackNavigator';
import {StackActions} from '@react-navigation/native';
import {styles} from '../themes/appTheme';

interface Props extends NativeStackScreenProps<RootStackParamList> {}

const Page3Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text>Page3Screen</Text>
      <Button
        title="Go back!"
        onPress={() => navigation.dispatch(StackActions.pop())}
      />

      <Button
        title="Go to Home!"
        onPress={() => navigation.dispatch(StackActions.popToTop())}
      />
    </View>
  );
};

export default Page3Screen;
