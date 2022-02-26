import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {Movie, MovieDBResponse} from '../interfaces/movieInterface';

const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesInCinema, setMoviesInCinema] = useState<Movie[]>([]);
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);

  const getMovies = async () => {
    const resNowPlaying = await movieDB.get<MovieDBResponse>('/now_playing');
    const resPopular = await movieDB.get<MovieDBResponse>('/popular');
    setMoviesInCinema(resNowPlaying.data.results);
    setPopularMovies(resPopular.data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    //Now_playing and Popular movies
    getMovies();
  }, []);
  return {moviesInCinema, popularMovies, isLoading};
};

export default useMovies;
