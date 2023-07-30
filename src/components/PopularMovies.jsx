import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import fetchData from "../utils/api";
import { getApiConfig } from "../reduxStore/movieSlice";
import { getTvShows } from "../reduxStore/tvShowsSlice";
import AllMovieCards from "./AllMovieCards";
import AllTvShowsCards from "./AllTvShowsCards";
import Navbar from "./Navbar";
import Loading from "./Loading";

const PopularMovies = () => {
  const dispatch = useDispatch();
  const { movieData } = useSelector((state) => state.movie);
  const { tvShowsData } = useSelector((state) => state.tvShows);

  useEffect(() => {
    fetchData("movie/popular").then((res) => {
      dispatch(getApiConfig(res.results));
    });
    fetchData("tv/popular").then((res) => {
      dispatch(getTvShows(res.results));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />
      {movieData ? (
        <div>
          <p className="text-white capitalize text-2xl ml-4 mt-4">
            popular movies
          </p>
          <AllMovieCards data={movieData} />
        </div>
      ) : (
        <Loading />
      )}
      {tvShowsData ? (
        <div className=" mt-20">
          <p className="text-white capitalize text-2xl ml-4 mt-4">
            popular TV shows
          </p>
          <AllTvShowsCards data={tvShowsData} />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default PopularMovies;
