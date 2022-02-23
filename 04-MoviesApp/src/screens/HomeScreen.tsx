import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import movieDB from '../api/movieDB';
import {MovieDBNowPlaying} from '../interfaces/movieInterface';

const HomeScreen = () => {
  useEffect(() => {
    movieDB.get<MovieDBNowPlaying>('/now_playing').then(response => {
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
