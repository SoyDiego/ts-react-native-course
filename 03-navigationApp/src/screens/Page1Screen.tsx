import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, Button} from 'react-native';
import {RootStackParamList} from '../navigator/StackNavigator';
import {styles} from '../themes/appTheme';

interface Props extends NativeStackScreenProps<RootStackParamList> {}

const Page1Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text>Page1Screen</Text>
      <Button
        title="Go to page 2"
        onPress={() => navigation.navigate('Page2Screen')}
      />
    </View>
  );
};

export default Page1Screen;
