import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import TrendingMovies from "./TrendingMovies";

import { useSelector, useDispatch } from "react-redux";
import fetchData from "../utils/api";
import { getApiConfig } from "../reduxStore/movieSlice";
import Loading from "./Loading";

const Home = () => {
  const dispatch = useDispatch();
  const { movieData } = useSelector((state) => state.movie);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    fetchData("trending/movie/week").then((res) => {
      dispatch(getApiConfig(res.results));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    // Change the background image every 1 second
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % movieData.length);
    }, 5000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [movieData]);

  return (
    <>
      <Navbar />
      {movieData && movieData.length > 0 ? (
        <div
          className="w-screen h-[90vh]"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(https://image.tmdb.org/t/p/w1280${movieData[currentImageIndex].backdrop_path})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="  flex justify-center items-center text-center p-5 flex-col text-white capitalize ">
            <div className=" p-4 mt-12">
              <p className=" text-5xl">welcome to cinemaSeeker.</p>
              <p className=" my-1 text-lg">
                millions of movies and TV shows to descover !!
              </p>
              <p className="title my-1 text-lg">start exploring.</p>
            </div>
            <div>
              <input
                type="text"
                placeholder="search movie or tv shows"
                className="text-black outline-none placeholder:capitalize w-fit md:w-[550px] py-3 px-4 bg-white text-lg capitalize rounded-l-lg"
              />
              <button className=" py-3 px-4 bg-slate-500 text-lg rounded-r-lg border-l border-l-gray-200/20">
                Search
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}

      <TrendingMovies />
    </>
  );
};

export default Home;
