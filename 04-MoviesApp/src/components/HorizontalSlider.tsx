import {View, Text} from 'react-native';
import React from 'react';
import {Movie} from '../interfaces/movieInterface';
import {FlatList} from 'react-native-gesture-handler';
import MoviePoster from './MoviePoster';

interface HorizontalSliderProps {
  title?: string;
  movies: Movie[];
}

const HorizontalSlider = ({title, movies}: HorizontalSliderProps) => {
  return (
    <View style={{height: title ? 260 : 220}}>
      {title && (
        <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 20}}>
          {title}
        </Text>
      )}
      <FlatList
        data={movies}
        renderItem={({item}) => (
          <MoviePoster movie={item} width={140} height={200} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default HorizontalSlider;
