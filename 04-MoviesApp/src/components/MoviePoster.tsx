import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Movie} from '../interfaces/movieInterface';
import {useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../Navigation/Navigation';
import {StackNavigationProp} from '@react-navigation/stack';

interface MoviePosterProps {
  movie: Movie;
  height?: number;
  width?: number;
}

type DetailScreenNavigationProp = StackNavigationProp<
  RootStackParams,
  'DetailScreen'
>;

const MoviePoster = ({movie, height = 420, width = 300}: MoviePosterProps) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const navigation = useNavigation<DetailScreenNavigationProp>();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        width,
        height,
        marginHorizontal: 2,
        paddingBottom: 20,
        paddingHorizontal: 7,
      }}
      onPress={() => navigation.navigate('DetailScreen', movie)}>
      <View style={styles.shadow}>
        <Image style={styles.image} source={{uri}} />
      </View>
    </TouchableOpacity>
  );
};

export default MoviePoster;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 10,
  },
  shadow: {
    borderRadius: 10,
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.9,
    shadowRadius: 16.0,

    elevation: 12,
  },
});
