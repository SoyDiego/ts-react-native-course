import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'fbbaba6b1cde768a6f7be0135b4dc63f',
    language: 'es-ES',
  },
});

export default movieDB;
