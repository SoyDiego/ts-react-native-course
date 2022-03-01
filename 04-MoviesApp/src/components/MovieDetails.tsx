import {View, Text} from 'react-native';
import React from 'react';
import {FullMovie} from '../interfaces/movieInterface';
import {Cast} from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';

interface MovieDetailsProps {
  fullMovie: FullMovie;
  cast: Cast[];
}

const MovieDetails = ({fullMovie, cast}: MovieDetailsProps) => {
  return (
    <>
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="md-star" size={20} color="gold" />
          <Text>{fullMovie.vote_average}</Text>
          <Text style={{marginLeft: 5}}>
            {' '}
            - {fullMovie.genres.map(genre => genre.name).join(', ')}
          </Text>
        </View>
      </View>
      <Text>{fullMovie.overview}</Text>
    </>
  );
};

export default MovieDetails;
