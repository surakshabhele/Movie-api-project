import React, { useEffect } from "react";
import { getTopMovies } from "../servieces/api.servies";
import { useState } from "react";
import StarIcon from "../components/star-icon";
import _ from "lodash";
import "swiper/css";
import "swiper/css/navigation";
import { useRouter } from "next/router";
import {  Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper, { Autoplay, Pagination } from "swiper";
// import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
function TopMovies({ data1 }) {
  const [topmovie, setTopmovie] = useState();
  // async function fetchData() {
  //   const response = await getTopMovies();
  //   console.log(response, "res");
  //   setTopmovie(response);
  // }
  const router=useRouter()
  // console.log("first", topmovie);
  useEffect(() => {
    setTopmovie(data1.results);
  }, []);
  return (
    <div>
      <div className="top-movies">
        <h1 className="topmovie">Top Movies</h1>
        <Swiper
          style={{
            "--swiper-pagination-color": "#fff",
          }}
          slidesPerView={7}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          // loop={true}
          // effect={"fade"}
          className="mySwiper"
        >
        <div className="content">
          {topmovie &&
            topmovie.map((movie, index) => {
              return (
                <div key={movie.id}>
                  <SwiperSlide>
                  <div 
                   onClick={() => {
                    router.push(`/Details/${movie.id}`);
                  }}
                  // onClick={()=>router.push({ query: { id:movie.id},pathname:"/Details/[id]" })} 
                  className="subcontent">
                    <img
                      src={'https://image.tmdb.org/t/p/w500'+movie.backdrop_path}
                      style={{ width: 200, height: 260 }}
                      className="subcontent-img"
                    />
                    <div className="rating">
                      <StarIcon width={20}height={20} />
                      {movie.vote_average}
                    </div>
                    <h1 className="title">{movie.title}</h1>
                  </div>
                  </SwiperSlide>
                </div>
              );
            })}
        </div>
        </Swiper>
      </div>
     
    </div>
  );
}

export default TopMovies;
