import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {Movie, MovieDBNowPlaying} from '../interfaces/movieInterface';

const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesInCinema, setMoviesInCinema] = useState<Movie[]>([]);

  const getMovies = async () => {
    const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing');
    setMoviesInCinema(resp.data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    //Now_playing
    getMovies();
  }, []);
  return {moviesInCinema, isLoading};
};

export default useMovies;
