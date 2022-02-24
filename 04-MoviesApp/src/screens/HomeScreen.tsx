import {View, Text, ActivityIndicator, Dimensions} from 'react-native';
import React from 'react';
import Carousel from 'react-native-snap-carousel';
import useMovies from '../hooks/useMovies';
import MoviePoster from '../components/MoviePoster';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const HomeScreen = () => {
  const {width: windowWidth} = Dimensions.get('window');
  const {moviesInCinema, isLoading} = useMovies();

  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={100} color="red" />
      </View>
    );
  }

  return (
    <View style={{marginTop: top + 20}}>
      {/* <MoviePoster movie={moviesInCinema[0]} /> */}
      <View style={{height: 440}}>
        <Carousel
          autoplay={true}
          autoplayInterval={3000}
          data={moviesInCinema}
          renderItem={({item}) => <MoviePoster movie={item} />}
          sliderWidth={windowWidth}
          itemWidth={300}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
