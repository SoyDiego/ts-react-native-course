import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {Cast} from '../interfaces/creditsInterface';

interface CastingItemProps {
  actor: Cast;
}

const CastingItem = ({actor}: CastingItemProps) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
  return (
    <View style={styles.container}>
      {actor.profile_path && (
        <Image source={{uri}} style={{width: 50, height: 50}} />
      )}
      <View style={styles.actorInfo}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>{actor.name}</Text>
        <Text style={{fontSize: 16, opacity: 0.7}}>{actor.character}</Text>
      </View>
    </View>
  );
};

export default CastingItem;

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.9,
    shadowRadius: 16.0,

    elevation: 12,
    marginLeft: 20,
    paddingRight: 15,
  },
  actorInfo: {
    marginLeft: 10,
  },
});
