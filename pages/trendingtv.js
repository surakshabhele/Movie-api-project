// import { style } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getTrendingTV } from "../servieces/api.servies";

function TrendingTV() {
  const [trendingTv, setTrendingTv] = useState();
  const [dayWeekTv, setDayWeekTv] = useState();
  const trendingTvAll = useQuery(
    ["tv", dayWeekTv],
    () => getTrendingTV(dayWeekTv),
    {
      onSuccess: (data) => {
        // console.log("trendingTvAll", data);
        setTrendingTv(data);
      },
    }
  );
  useEffect(() => {
    setDayWeekTv("day");
  }, []);

  return (
    <div className="trendingdw">
      <div className="trendingdw-content">
        <h1 className="trending-all"> Trending Tv Shows :</h1>
        <span
          style={{ cursor: "pointer" }}
          onClick={() => setDayWeekTv("day") }
          className="day-btn"
          
        >
          Today
        </span>
        {/* <br/> */}
        <span
          style={{ cursor: "pointer"  }}
          onClick={() => setDayWeekTv("week")}
          className="week-btn"
        >
          This Week
        </span>
      </div>
      <div className="main-content">
        {trendingTv &&
          trendingTv.results.map((movie, index) => {
            return (
              <div key={movie.id} className="containts">
                <img
                  className="image"
                  src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                  style={{ width: 150, height: 220, cursor: "pointer" }}
                />
                <div className="title">{movie.name}</div>
                {/* <div>{movie.overview}</div> */}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default TrendingTV;
