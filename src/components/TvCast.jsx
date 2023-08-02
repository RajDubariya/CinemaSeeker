import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchData from "../utils/api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useParams } from "react-router-dom";
import { getCast } from "../reduxStore/tvShowsSlice";

const TvCast = () => {
  const dispatch = useDispatch();
  const { cast } = useSelector((state) => state.tvShows);
  const { id } = useParams();
  useEffect(() => {
    fetchData(`tv/${id}/credits`).then((res) => {
      dispatch(getCast(res.cast));
    });
  }, [dispatch, id]);

  return (
    <>
      <p className="text-white capitalize text-2xl ml-4 my-4">cast</p>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        spaceBetween={50}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 4,
          },
          640: {
            slidesPerView: 7,
          },

          1024: {
            slidesPerView: 10,
          },
        }}
      >
        <div className=" flex flex-row items-center justify-center ">
          {cast.map((actor) => (
            <SwiperSlide key={actor.id}>
              <div className=" text-white text-center flex items-center flex-col mx-2">
                <div className=" rounded-full w-14 md:w-20 h-14 md:h-20 overflow-hidden">
                  <img
                    src={
                      actor.profile_path
                        ? `https://image.tmdb.org/t/p/w185/${actor.profile_path}`
                        : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyKpQUy8JP90MAZxFjU0P9bPqkUWL35fd8Ag&usqp=CAU`
                    }
                    alt={actor.name}
                    className=" w-full h-full object-cover"
                  />
                </div>

                <p className=" text-sm md:text-md">{actor.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
};

export default TvCast;
