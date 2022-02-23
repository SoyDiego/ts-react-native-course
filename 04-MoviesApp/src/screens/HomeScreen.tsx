import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import useMovies from '../hooks/useMovies';

const HomeScreen = () => {
  const {moviesInCinema, isLoading} = useMovies();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={100} color="red" />
      </View>
    );
  }

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
