import { useEffect } from "react";
import AllMovieCards from "./AllMovieCards";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfig } from "../reduxStore/movieSlice";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import fetchData from "../utils/api";
import Loading from "./Loading";
import { getTvShows } from "../reduxStore/tvShowsSlice";
import AllTvShowsCards from "./AllTvShowsCards";

const Search = () => {
  const { query } = useParams();
  const dispatch = useDispatch();
  const { movieData } = useSelector((state) => state.movie);
  const { tvShowsData } = useSelector((state) => state.tvShows);

  useEffect(() => {
    fetchData(
      `search/movie?query=${query}&api_key=a4bcdf65bea0a9e12bc7ade358909a06`
    ).then((res) => {
      dispatch(getApiConfig(res.results));
    });
    fetchData(
      `search/tv?query=${query}&api_key=a4bcdf65bea0a9e12bc7ade358909a06`
    ).then((res) => {
      dispatch(getTvShows(res.results));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Navbar />
      {movieData ? (
        <div>
          <p className="text-white capitalize text-2xl ml-4 mt-4">movies</p>

          <AllMovieCards data={movieData} />
        </div>
      ) : (
        <Loading />
      )}
      {tvShowsData ? (
        <div className=" mt-20">
          <p className="text-white capitalize text-2xl ml-4 mt-4">tv shows</p>
          <AllTvShowsCards data={tvShowsData} />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Search;
