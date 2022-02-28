import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../Navigation/Navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import useMoviesDetails from '../hooks/useMoviesDetails';

interface DetailProps
  extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

const screenHeight = Dimensions.get('window').height;
const DetailScreen = ({route}: DetailProps) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  useMoviesDetails(movie.id);

  return (
    <ScrollView>
      <View style={styles.imageBorder}>
        <View style={styles.imageContainer}>
          <Image source={{uri}} style={styles.posterImage} />
        </View>
      </View>

      <View style={styles.marginContainer}>
        <Text style={styles.subtitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>

      <View style={styles.marginContainer}>
        <Icon name="star-outline" size={80} color="#FFC107" />
      </View>
    </ScrollView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  imageContainer: {
    width: '100%',
    height: screenHeight * 0.7,
    shadow: {
      borderRadius: 10,
      flex: 1,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.24,
      shadowRadius: 7.0,

      elevation: 12,
    },
  },
  imageBorder: {
    flex: 1,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
    overflow: 'hidden',
  },
  posterImage: {
    flex: 1,
  },
});
