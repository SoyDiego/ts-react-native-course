import {View, Text, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParams = {
  Home: undefined;
  DetailScreen: undefined;
};

type HomeScreenProps = StackNavigationProp<RootStackParams, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenProps>();

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
