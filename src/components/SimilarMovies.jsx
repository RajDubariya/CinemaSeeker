import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchData from "../utils/api";
import { useParams } from "react-router-dom";
import { getSimilarMovie } from "../reduxStore/movieSlice";
import AllMovieCards from "./AllMovieCards";

const SimilarMovies = () => {
  const dispatch = useDispatch();
  const { similarMovies } = useSelector((state) => state.movie);
  const { id } = useParams();

  useEffect(() => {
    fetchData(`movie/${id}/similar`).then((res) => {
      dispatch(getSimilarMovie(res.results));
    });
  }, [dispatch, id]);
  return (
    <>
      <AllMovieCards data={similarMovies} />
    </>
  );
};

export default SimilarMovies;
