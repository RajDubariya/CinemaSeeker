import { useEffect } from "react";
import Navbar from "./Navbar";
import fetchData from "../utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getTvShows } from "../reduxStore/tvShowsSlice";
import Loading from "./Loading";
import { Link, useParams } from "react-router-dom";

const TvShowsDetails = () => {
  const dispatch = useDispatch();
  const { tvShowsData } = useSelector((state) => state.tvShows);
  const { id } = useParams();

  useEffect(() => {
    fetchData(`/tv/${id}`).then((res) => {
      dispatch(getTvShows(res));
    });
  }, [dispatch, id]);

  const getVoteColor = (voteAverage) => {
    if (voteAverage >= 7) {
      return "border-[#008000]"; // Green for high ratings
    } else if (voteAverage >= 5) {
      return "border-[#FFFF00]"; // Yellow for average ratings
    } else {
      return "border-[#FF0000]"; // Red for low ratings
    }
  };
  return (
    <>
      <Navbar />
      {tvShowsData && tvShowsData.genres ? (
        <div
          className="w-screen  md:h-[90vh]"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)),url(https://image.tmdb.org/t/p/w1280${tvShowsData.backdrop_path})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className=" w-full h-full flex flex-col  md:flex-row  text-white p-10 ">
            <div className="md:h-[80%] flex items-center justify-center ">
              <div className="  rounded-xl shadow-lg shadow-gray-100/50">
                <img
                  src={`https://image.tmdb.org/t/p/w342${tvShowsData.poster_path}`}
                  alt={tvShowsData.title}
                  className=" rounded-xl h-full hover:scale-105"
                />
              </div>
            </div>

            <div className="mt-8 md:mt-0 capitalize  w-[100%] px-10 py-4">
              <p className=" text-4xl">
                {tvShowsData.name} (
                {tvShowsData.first_air_date.toString().slice(0, 4)})
              </p>
              <p className=" py-2">{tvShowsData.tagline}</p>
              <p className=" py-2">
                release date : {tvShowsData.first_air_date}
              </p>
              <ul className=" py-2 flex items-center gap-2 text-sm">
                {tvShowsData.genres.map((genre) => (
                  <Link
                    to={`/tvGenre/${genre.id}`}
                    key={genre.id}
                    className=" bg-gray-400 py-1 px-3 rounded-full"
                  >
                    {genre.name}
                  </Link>
                ))}
              </ul>
              <div
                className={`border-4 ${getVoteColor(
                  tvShowsData.vote_average
                )} w-12 h-12 rounded-full mt-2 flex items-center justify-center text-white text-md  `}
              >
                {tvShowsData.vote_average.toString().slice(0, 3)}
              </div>
              <p className=" py-2 text-lg">overview : {tvShowsData.overview}</p>
              <p>runtime : {tvShowsData.episode_run_time} minutes/episode</p>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default TvShowsDetails;
