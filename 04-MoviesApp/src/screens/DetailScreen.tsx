import {View, Text} from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../Navigation/Navigation';

interface DetailProps
  extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

const DetailScreen = ({route}: DetailProps) => {
  const movie = route.params;

  console.log(movie.original_title);

  return (
    <View>
      <Text>DetailScreen</Text>
    </View>
  );
};

export default DetailScreen;
