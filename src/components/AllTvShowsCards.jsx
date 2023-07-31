import { Link } from "react-router-dom";
import Loading from "./Loading";

const AllTvShowsCards = ({ data }) => {
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
    return <Loading/>;
  }
  return (
    <>
      {data ? (
        <div>
          <div className=" flex justify-center items-center cursor-pointer">
            <div className="w-full text-white grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 p-3">
              {data?.map((tv) => (
                <Link key={tv.id} to={`/tv/${tv.id}`}>
                  <div className="relative flex justify-center  flex-col border-b-2 border-b-gray-100/30 rounded-xl shadow-lg shadow-gray-100/10">
                    <img
                      src={
                        tv.poster_path
                          ? `https://image.tmdb.org/t/p/w342${tv.poster_path}`
                          : "https://eurogrid.in/wp-content/uploads/2017/06/product_image_not_available.png"
                      }
                      alt={tv.name}
                      className=" rounded-xl hover:scale-105"
                    />

                    <p className=" p-2 ">{tv.name}</p>
                    <p className=" p-2 ">
                      Year : {tv.first_air_date.slice(0, 4)}
                    </p>
                    <div
                      className={`border-4 ${getVoteColor(
                        tv.vote_average
                      )} w-10 h-10 rounded-full flex items-center justify-center text-white text-xs absolute  bottom-2 right-3`}
                    >
                      {tv.vote_average.toFixed(1).slice(0, 3)}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <p>loading</p>
      )}
    </>
  );
};

export default AllTvShowsCards;
