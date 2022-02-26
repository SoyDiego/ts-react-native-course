import {
  View,
  ActivityIndicator,
  Dimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import Carousel from 'react-native-snap-carousel';
import useMovies from '../hooks/useMovies';
import MoviePoster from '../components/MoviePoster';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import HorizontalSlider from '../components/HorizontalSlider';

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
    <ScrollView>
      <View style={{marginTop: top + 20}}>
        <View style={{height: 440}}>
          {/* Principal Carousel */}
          <Carousel
            data={moviesInCinema}
            renderItem={({item}) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
            inactiveSlideOpacity={0.8}
          />
        </View>

        {/* Popular Movies Carousel */}
        <HorizontalSlider title="Popular Movies" movies={moviesInCinema} />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
