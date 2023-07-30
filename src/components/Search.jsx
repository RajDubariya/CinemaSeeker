import axios from "axios";
import { useEffect } from "react";
import AllMovieCards from "./AllMovieCards";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfig } from "../reduxStore/movieSlice";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";

const Search = () => {
  const { query } = useParams();
  const dispatch = useDispatch();
  const { movieData } = useSelector((state) => state.movie);

  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=a4bcdf65bea0a9e12bc7ade358909a06`;

  const getDetails = async () => {
    const response = await axios.get(url);
    dispatch(getApiConfig(response.data.results));
  };
  useEffect(() => {
    getDetails();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(movieData);
  return (
    <>
      <Navbar />
      <AllMovieCards data={movieData} />
    </>
  );
};

export default Search;
