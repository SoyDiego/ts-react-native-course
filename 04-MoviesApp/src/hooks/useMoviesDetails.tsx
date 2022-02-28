import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {Cast, CreditsResponse} from '../interfaces/creditsInterface';
import {FullMovie} from '../interfaces/movieInterface';

interface MovieDetails {
  isLoading: boolean;
  fullMovie?: FullMovie;
  cast: Cast[];
}

const useMoviesDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    fullMovie: undefined,
    cast: [],
  });

  const getMovieDetails = async () => {
    const movieDetailsPromise = movieDB.get<FullMovie>(`/${movieId}`);
    const castingPromise = movieDB.get<CreditsResponse>(`/${movieId}/credits`);

    const [movieDetailsResponse, castingResponse] = Promise.all([
      movieDetailsPromise,
      castingPromise,
    ]);

    setState({
      isLoading: false,
      fullMovie: movieDetailsResponse.data,
      cast: castingResponse.data.cast,
    });
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return {
    ...state,
  };
};

export default useMoviesDetails;
