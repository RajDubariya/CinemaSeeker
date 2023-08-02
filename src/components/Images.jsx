import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { useEffect } from "react";
import fetchData from "../utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getMovieImages } from "../reduxStore/movieSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { useParams } from "react-router-dom";

const Images = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { movieimages } = useSelector((state) => state.movie);
  useEffect(() => {
    fetchData(`/movie/${id}/images`).then((res) => {
      dispatch(getMovieImages(res.backdrops));
    });
  }, [dispatch, id]);

  return (
    <>
      <p className="text-white capitalize text-2xl ml-4 my-4">Photos</p>

      <Swiper
        modules={[Navigation,Autoplay]}
        navigation
        spaceBetween={50}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 2,
          },

          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {movieimages &&
          movieimages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-cente shadow-lg shadow-gray-100/50">
                <img
                  src={`https://image.tmdb.org/t/p/w300${image.file_path}`}
                  alt=" "
                  className=" w-full h-full hover:scale-105"
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default Images;
