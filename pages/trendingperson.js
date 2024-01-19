import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getTrendingPerson } from "../servieces/api.servies";

function TrendingPersonbox() {
  const [trendingPerson, setTrendingPerson] = useState();
  const [dayWeekPerson, setDayWeekPerson] = useState();
  const trendingPersonAll = useQuery(
    ["person", dayWeekPerson],
    () => getTrendingPerson(dayWeekPerson),
    {
      onSuccess: (data) => {
        console.log("trendingPersonAll", data);
        setTrendingPerson(data);
      },
    }
  );
  useEffect(() => {
    setDayWeekPerson("day");
  }, []);

  return (
    <div className="trendingdw">
      <div className="trendingdw-content">
        <h1 className="trending-all"> Popular People :</h1>
        {/* <span
          style={{ cursor: "pointer" }}
          onClick={() => setDayWeekPerson("day")}
          className="day-btn"
        >
          Today
        </span> */}
        {/* <br/> */}
        {/* <span
          style={{ cursor: "pointer" }}
          onClick={() => setDayWeekPerson("week")}
          className="week-btn"
        >
          This Week
        </span> */}
      </div>
      <div className="main-content">
        {trendingPerson &&
          trendingPerson.results.map((movie, index) => {
            return (
              <div key={movie.id} className="containts">
                {movie.profile_path ? (
                  <img
                    className="image"
                    src={"https://image.tmdb.org/t/p/w500" + movie.profile_path}
                    style={{ width: 150, height: 220, cursor: "pointer" }}
                  />
                ) : (
                  <img  className="image"
                    style={{ width: 150, height: 220, cursor: "pointer" }}
                    src="/blank-profile.png"
                  />
                )}
                <div className="title">{movie.name}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default TrendingPersonbox;
