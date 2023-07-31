import { useEffect } from "react";
import AllTvShowsCards from "./AllTvShowsCards";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { getTvShows } from "../reduxStore/tvShowsSlice";
import fetchData from "../utils/api";

const TvShowsByGenres = () => {
  const dispatch = useDispatch();
  const { tvShowsData } = useSelector((state) => state.tvShows);
  const { genreId } = useParams();

  useEffect(() => {
    fetchData(`discover/tv?with_genres=${genreId}`).then((res) => {
      dispatch(getTvShows(res.results));
    });
  }, [dispatch, genreId]);

  return (
    <>
      <Navbar />
      {tvShowsData ? (
        <div>
          <p className="text-white capitalize text-2xl ml-4 mt-4">tv shows</p>
          <AllTvShowsCards data={tvShowsData} />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default TvShowsByGenres;
