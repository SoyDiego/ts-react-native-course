import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {RootStackParamList} from '../navigator/StackNavigator';
import {styles} from '../themes/appTheme';

interface Props extends NativeStackScreenProps<RootStackParamList> {}

const Page1Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page1Screen</Text>
      <Button
        title="Go to page 2"
        onPress={() => navigation.navigate('Page2Screen')}
      />

      <Button
        title="Go to Person Screen"
        onPress={() => navigation.navigate('PersonScreen')}
      />

      <Text>Navigate with Arguments</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('PersonScreen', {
            name: 'Pedro',
          } as any);
        }}>
        <Text>Pedro</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Page1Screen;
