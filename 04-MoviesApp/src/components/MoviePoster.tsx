import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {Movie} from '../interfaces/movieInterface';

interface MoviePosterProps {
  movie: Movie;
}

const MoviePoster = ({movie}: MoviePosterProps) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <View style={styles.container}>
      <View style={styles.shadow}>
        <Image style={styles.image} source={{uri}} />
      </View>
    </View>
  );
};

export default MoviePoster;

const styles = StyleSheet.create({
  container: {width: 300, height: 420},
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

    elevation: 24,
  },
});
