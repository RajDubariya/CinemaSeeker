import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect } from "react";
import fetchData from "../utils/api";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { useParams } from "react-router-dom";
import { getTvShowsImages } from "../reduxStore/tvShowsSlice";

const TvshowsImages = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { tvShowsImages } = useSelector((state) => state.tvShows);
  useEffect(() => {
    fetchData(`tv/${id}/images`).then((res) => {
      dispatch(getTvShowsImages(res.backdrops));
    });
  }, [dispatch, id]);
  return (
    <>
      <p className="text-white capitalize text-2xl ml-4 my-4">Photos</p>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={50}
        s
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
        {tvShowsImages &&
          tvShowsImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-cente shadow-lg shadow-gray-100/50">
                <img
                  src={`https://image.tmdb.org/t/p/w300${image.file_path}`}
                  alt=""
                  className=" w-full h-full hover:scale-105"
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default TvshowsImages;
