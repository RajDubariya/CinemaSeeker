import { useEffect } from "react";
import AllMovieCards from "./AllMovieCards";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfig } from "../reduxStore/movieSlice";
import Loading from "./Loading";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import fetchData from "../utils/api";

const MoviesByGenres = () => {
  const dispatch = useDispatch();
  const { movieData } = useSelector((state) => state.movie);
  const { genreId } = useParams();

  useEffect(() => {
    fetchData(`discover/movie?with_genres=${genreId}`).then((res) => {
      dispatch(getApiConfig(res.results));
    });
  }, [dispatch, genreId]);

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
    </>
  );
};

export default MoviesByGenres;
