import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { useSelector, useDispatch } from "react-redux";
import fetchData from "../utils/api";
import { getApiConfig } from "../reduxStore/movieSlice";
import AllMovieCards from "./AllMovieCards";
import Loading from "./Loading";

const UpcomingMovies = () => {
  const dispatch = useDispatch();
  const { movieData } = useSelector((state) => state.movie);

  useEffect(() => {
    fetchData("movie/upcoming").then((res) => {
      dispatch(getApiConfig(res.results));
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Navbar />
      {movieData ? (
        <div>
          <p className="text-white capitalize text-2xl ml-4 mt-4">
            upcoming movies
          </p>
          <AllMovieCards data={movieData} />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default UpcomingMovies;
