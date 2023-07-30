import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import fetchData from "../utils/api";
import { getApiConfig } from "../reduxStore/movieSlice";
import { getTvShows } from "../reduxStore/tvShowsSlice";
import Loading from "./Loading";
import AllMovieCards from "./AllMovieCards";
import AllTvShowsCards from "./AllTvShowsCards";

const TrendingMovies = () => {
  const dispatch = useDispatch();
  const { movieData } = useSelector((state) => state.movie);
  const { tvShowsData } = useSelector((state) => state.tvShows);

  useEffect(() => {
    fetchData("trending/movie/week").then((res) => {
      dispatch(getApiConfig(res.results));
    });
    fetchData("trending/tv/week").then((res) => {
      dispatch(getTvShows(res.results));
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {movieData ? (
        <div>
          <p className="text-white capitalize text-2xl ml-4 mt-4">
            trending movies
          </p>
          <AllMovieCards data={movieData} />
        </div>
      ) : (
        <Loading />
      )}
      {tvShowsData ? (
        <div className=" mt-20">
          <p className="text-white capitalize text-2xl ml-4 mt-4">
            trending TV shows
          </p>
          <AllTvShowsCards data={tvShowsData} />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default TrendingMovies;
