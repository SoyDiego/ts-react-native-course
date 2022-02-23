import {View, Text, Button} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import movieDB from '../api/movieDB';

const HomeScreen = () => {
  useEffect(() => {
    movieDB.get('/now_playing').then(response => {
      console.log(response.data.results);
    });
  }, []);

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
