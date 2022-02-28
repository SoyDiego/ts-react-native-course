import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {FullMovie} from '../interfaces/movieInterface';

interface MovieDetails {
  isLoading: boolean;
  fullMovie: FullMovie;
  cast: any[];
}

const useMoviesDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>();

  const getMovieDetails = async () => {
    const res = await movieDB.get<FullMovie>(`/${movieId}`);
    console.log(res.data.overview);
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return {
    state,
  };
};

export default useMoviesDetails;
