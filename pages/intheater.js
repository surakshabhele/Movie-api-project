import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function InTheater({ data2 }) {
  const router = useRouter();
  const [mintheater, setmintheater] = useState();
  console.log("ff", mintheater);
  useEffect(() => {
    setmintheater(data2);
  }, []);
  return (
    <>
      <div className="intheater-page">
        <h1 className="nowmovie">Movies Now Playing In Theater </h1>
        {/* {data2.dates.maximum} */}
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
          }}
          loop={true}
          effect={"fade"}
          modules={[Navigation]}
          navigation={true}
          slidesPerView={6}
          spaceBetween={10}
        >
          {mintheater &&
            mintheater.results.map((movie, i) => {
              return (
                <div
                  className="intheater-content"
                  key={movie.id}>
                  <SwiperSlide  className="slides">
                    <div className="title">{movie.title}</div>
                    <div className="releasestate">{movie.releaseState}</div>
                    <img
                      className="image"
                      src={'https://image.tmdb.org/t/p/w500'+movie.backdrop_path}
                      style={{ width: 200, height: 260, cursor: "pointer" }}
                    />
                    <br/>
                    <button
                      onClick={() => {
                        router.push(`/Detail2/${movie.id}`);
                      }}
                      style={{cursor:'pointer'}}
                      className="trailer-btn"
                    >
                  Trailer
                    </button>
                    {/* <button
                      onClick={() =>
                        router.push({
                          query: { id: movie.id },
                          pathname: '/Details/[id]',
                        })
                      }
                    >
                      Trailer
                    </button> */}
                  </SwiperSlide>
                </div>
              );
            })}
        </Swiper>
      </div>
    </>
  );
}

export default InTheater;
