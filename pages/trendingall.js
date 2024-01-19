import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getTrending } from "../servieces/api.servies";
function TrendingAll() {
  const [trendingDay, setTrendingDay] = useState();
  const [dayWeek, setDayWeek] = useState();
  const trendingAlltime = useQuery(
    ["key", dayWeek],
    () => getTrending(dayWeek),
    {
      onSuccess: (data) => {
        console.log("trendingalltime", data);
        setTrendingDay(data);
      },
    }
  );
  useEffect(() => {
    setDayWeek("day");
  }, []);

  return (
    <div className="trendingdw">
      <div className="trendingdw-content">
     <h1 className="trending-all"> Trending All :</h1>
     <span style={{ cursor: "pointer" }} onClick={() => setDayWeek("day")} className="day-btn">
          Today
        </span>
        <span style={{ cursor: "pointer" }} onClick={() => setDayWeek("week")} className="week-btn">
           This Week
        </span>
      
      </div>
        <div className="main-content">
          {trendingDay &&
            trendingDay.results.map((movie, index) => {
              return (
                <div key={movie.id} className="containts">
                  <img
                    className="image"
                    src={
                      "https://image.tmdb.org/t/p/w500" + movie.backdrop_path
                    }
                    style={{ width: 150, height: 220, cursor: "pointer" }}
                  />
                  <div className="title">{movie.title}</div>
                  {/* <div>{movie.overview}</div> */}
                </div>
              );
            })}
        </div>
      </div>
  );
}

export default TrendingAll;
