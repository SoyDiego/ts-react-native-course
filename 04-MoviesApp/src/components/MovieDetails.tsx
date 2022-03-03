import {View, Text, FlatList} from 'react-native';
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

      <View style={{marginHorizontal: 20}}>
        <Text style={{marginTop: 10, fontSize: 20, fontWeight: 'bold'}}>
          Crew
        </Text>
      </View>

      <FlatList
        style={{marginVertical: 10, height: 70}}
        data={cast.slice(1)}
        keyExtractor={(item: Cast) => item.id.toString()}
        renderItem={({item}) => <CastingItem actor={item} />}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
};

export default MovieDetails;
