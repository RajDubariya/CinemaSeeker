import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchData from "../utils/api";
import { useParams } from "react-router-dom";
import { getSimilarTvShows } from "../reduxStore/tvShowsSlice";
import AllTvShowsCards from "./AllTvShowsCards";

const SimilarTvShows = () => {
  const dispatch = useDispatch();
  const { similarTvShows } = useSelector((state) => state.tvShows);
  const { id } = useParams();

  useEffect(() => {
    fetchData(`tv/${id}/similar`).then((res) => {
      dispatch(getSimilarTvShows(res.results));
    });
  }, [dispatch, id]);
  return (
    <>
      <AllTvShowsCards data={similarTvShows} />
    </>
  );
};

export default SimilarTvShows;
