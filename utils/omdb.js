

import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_OMDB_API_KEY;

export const searchMovies = async (query) => {
  try {
    const res = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
    return res.data.Response === "True" ? res.data.Search : [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getMovieDetails = async (imdbID) => {
  try {
    const res = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}&plot=full`);
    return res.data.Response === "True" ? res.data : null;
  } catch (error) {
    console.error(error);
    return null;
  }
};
