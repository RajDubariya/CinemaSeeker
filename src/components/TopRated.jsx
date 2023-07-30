import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { useSelector, useDispatch } from "react-redux";
import fetchData from "../utils/api";
import { getApiConfig } from "../reduxStore/movieSlice";
import { getTvShows } from "../reduxStore/tvShowsSlice";
import AllMovieCards from "./AllMovieCards";
import AllTvShowsCards from "./AllTvShowsCards";
import Loading from "./Loading";

const TopRated = () => {
  const dispatch = useDispatch();
  const { movieData } = useSelector((state) => state.movie);
  const { tvShowsData } = useSelector((state) => state.tvShows);
  useEffect(() => {
    fetchData("movie/top_rated").then((res) => {
      dispatch(getApiConfig(res.results));
    });
    fetchData("tv/top_rated").then((res) => {
      dispatch(getTvShows(res.results));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <>
        <Navbar />
        {movieData ? (
          <div>
            <p className="text-white capitalize text-2xl ml-4 mt-4">
              top rated movies
            </p>
            <AllMovieCards data={movieData} />
          </div>
        ) : (
          <Loading />
        )}
        {tvShowsData ? (
          <div className=" mt-20">
            <p className="text-white capitalize text-2xl ml-4 mt-4">
              top rated TV shows
            </p>
            <AllTvShowsCards data={tvShowsData} />
          </div>
        ) : (
          <Loading />
        )}
      </>
    </>
  );
};

export default TopRated;
