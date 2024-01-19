import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function MostPopularMovies({ data3 }) {
  const router = useRouter();
  const [mostpopular, setMostpopular] = useState();
  useEffect(() => {
    setMostpopular(data3.results);
  }, []);
  return (
    <>
      <div className="mostpopular-page">
        <h2 className="nowmovie">Most Popular Movies  </h2>
        <Swiper
          style={{
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          effect={"fade"}
          spaceBetween={30}
          // centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
          slidesPerView={5}
        >
          {mostpopular &&
            mostpopular.map((movie, i) => {
              return (
                <div
                  className="intheater-content"
                  key={movie.id}>
                  <SwiperSlide >
                    <div className="slides">
                    <div className="title">{movie.title}</div>
                    <img
                      className="image"
                      src={'https://image.tmdb.org/t/p/w500'+movie.backdrop_path}
                      style={{ width: 250, height: 270, cursor: "pointer" }}
                      // style={{ width: 1360, height: 560, cursor: "pointer" }}
                    />
                    </div>
                  </SwiperSlide>
                </div>
              );
            })}
        </Swiper>
      </div>
    </>
  );
}
export default MostPopularMovies;
