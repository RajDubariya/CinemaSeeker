import { Link } from "react-router-dom";
import Loading from "./Loading";

const AllMovieCards = ({ data }) => {
  const getVoteColor = (voteAverage) => {
    if (voteAverage >= 7) {
      return "border-[#008000]"; // Green for high ratings
    } else if (voteAverage >= 5) {
      return "border-[#FFFF00]"; // Yellow for average ratings
    } else {
      return "border-[#FF0000]"; // Red for low ratings
    }
  };

  if (!Array.isArray(data)) {
    return <Loading />;
  }

  return (
    <>
      {data ? (
        <div>
          <div className=" flex justify-center items-center cursor-pointer">
            <div className="w-full text-white grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 p-3">
              {data?.map((movie) => (
                <Link key={movie.id} to={`/movie/${movie.id}`}>
                  <div className="relative flex justify-center  flex-col border-b-2 border-b-gray-100/30 rounded-xl shadow-lg shadow-gray-100/10">
                    <img
                      src={
                        movie.poster_path
                          ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
                          : "https://eurogrid.in/wp-content/uploads/2017/06/product_image_not_available.png"
                      }
                      alt={movie.title}
                      className=" rounded-xl hover:scale-105"
                    />

                    <p className=" p-2 ">{movie.title}</p>
                    <p className=" p-2 ">
                      Year : {movie.release_date.slice(0, 4)}
                    </p>
                    <div
                      className={`border-4 ${getVoteColor(
                        movie.vote_average
                      )} w-10 h-10 rounded-full flex items-center justify-center text-white text-xs absolute  bottom-2 right-3`}
                    >
                      {movie.vote_average.toFixed(1).slice(0, 3)}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default AllMovieCards;
