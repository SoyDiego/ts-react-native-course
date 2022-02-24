import {
  View,
  Text,
  ActivityIndicator,
  Dimensions,
  FlatList,
  ScrollView,
} from 'react-native';
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
    <ScrollView>
      <View style={{marginTop: top + 20}}>
        <View style={{height: 440}}>
          {/* Principal Carousel */}
          <Carousel
            autoplay={true}
            autoplayInterval={3000}
            data={moviesInCinema}
            renderItem={({item}) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
          />
        </View>

        {/* Popular Movies Carousel */}
        <View style={{backgroundColor: 'red', height: 260}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 20}}>
            Popular Movies
          </Text>
          <FlatList
            data={moviesInCinema}
            renderItem={({item}) => (
              <MoviePoster movie={item} width={140} height={200} />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id.toString()}
          />
        </View>

        {/* Popular Movies Carousel */}
        <View style={{backgroundColor: 'red', height: 260}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 20}}>
            Popular Movies
          </Text>
          <FlatList
            data={moviesInCinema}
            renderItem={({item}) => (
              <MoviePoster movie={item} width={140} height={200} />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
