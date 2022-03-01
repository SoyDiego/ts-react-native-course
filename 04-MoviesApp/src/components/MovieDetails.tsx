import {View, Text} from 'react-native';
import React from 'react';
import currencyFormatter from 'currency-formatter';
import {FullMovie} from '../interfaces/movieInterface';
import {Cast} from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import CastingItem from './CastingItem';

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
        <Text style={{marginTop: 10, fontSize: 20, fontWeight: 'bold'}}>
          History
        </Text>
        <Text>{fullMovie.overview}</Text>

        <Text style={{marginTop: 10, fontSize: 20, fontWeight: 'bold'}}>
          Budget
        </Text>
        <Text>{currencyFormatter.format(fullMovie.budget, {code: 'USD'})}</Text>
      </View>

      <View style={{marginHorizontal: 20, marginBottom: 200}}>
        <Text style={{marginTop: 10, fontSize: 20, fontWeight: 'bold'}}>
          Crew
        </Text>
        <CastingItem actor={cast[0]} />
      </View>
    </>
  );
};

export default MovieDetails;
