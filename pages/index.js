import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import SearchIcon from "../components/search-icon";
import {
  getMostPopularMovies,
  getNowInTheatreMovies,
  getSearch,
  getTopMovies,
  getTrending,
} from "../servieces/api.servies";
import InTheater from "./intheater";
import MostPopularMovies from "./mostpopular";
import TopMovies from "./topmovies";
import { useQueries, useQuery } from "react-query";
import Search from "./search";
import CrosIcon from "../components/cross-icon";
import TrendingPersonbox from "./trendingperson";
import TrendingAll from "./trendingall";
import Movie from "../components/movie-icon";
// import { color } from "@mui/system";
import TrendingTV from "./trendingtv";

function Index(props) {
  // console.log(props);
  const router = useRouter();
  const topMovie = props.topMovies;
  const intheaterMovie = props.InTheaters;
  const mostpopularMovie = props.mostpopularM;
  // const [found, setFound] = useState(true);
  const [enableSearch, setEnableSearch] = useState(false);
  const [final, setFinal] = useState("");
  const dataQuery = useQuery(["search", final], () => getSearch(final), {
    onSuccess: (data) => {
      console.log("final", data);
    },
    enabled: enableSearch,
  });
  const searchQuery = dataQuery.isSuccess ? dataQuery.data.results : [];
  const found = searchQuery.length === 0 ? true : false;

  const handleChange = (e) => {
    setFinal(e.target.value);
  };

  return (
    <div className="movie-web-page">
      <div className="header">
        <div className="movie-header">
          <Movie width={100} height={100} />
          <h1
            onClick={() => router.push("/menu")}
            style={{ cursor: "pointer" }}
            className="menu"
          >
            THE MOVIE DB
          </h1>
        </div>
        <div className="search-bar">
          <SearchIcon />
          <input
            className="search"
            type="search"
            placeholder="search"
            // value={value}
            onChange={(e) => {
              handleChange(e), console.log("e", e);
            }}
          />
          <button
            className="reset"
            style={{ cursor: "pointer" }}
            onClick={() => {
              setFinal("");
              // setEnableSearch(false)
              // setValue("");
            }}
          >
            <CrosIcon width={20} height={20} />
          </button>
          <button
            className="search-item"
            onClick={() => setEnableSearch(true)}
            style={{ cursor: "pointer" }}
          >
            Search
          </button>
        </div>
        {/* <h1 className="watchlist" style={{ cursor: "pointer" }}>
          Watchlist
        </h1> */}
        {/* <div
          onClick={() => router.push("/sign-in")}
          style={{ cursor: "pointer" }}
          className="sign-in"
        >
          sign In
        </div> */}
        {/* <div className="lag">Eng</div> */}
      </div>
      {dataQuery.isLoading && <p>loading...</p>}
      {dataQuery.isSuccess ? <Search data4={searchQuery} /> : null}
      {found && (
        <div className="web-contents">
          <MostPopularMovies data3={mostpopularMovie} />
          <TopMovies data1={topMovie} />
          <InTheater data2={intheaterMovie} />
          <TrendingAll />
          <TrendingTV />
          <TrendingPersonbox />
          {/* <div onClick={()=>router.push("/trending")}>Trending</div> */}
        </div>
      )}
      <div className="footer">
        <h1 className="footer-name">THE MOVIE DB</h1>
        <ul>
          <li className="copyright-text">Contact Us</li>
          <li className="copyright-text">
            Copyright &copy; 2022 All Rights Reserved by
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Index;

export async function getServerSideProps(context) {
  const topMovies = await getTopMovies();
  const InTheaters = await getNowInTheatreMovies();
  const mostpopularM = await getMostPopularMovies();

  // const InTheaters= await gets();
  // let start = 0;
  // const end = 10;
  // const totalPage = movie.items.length /10
  // console.log("array......", movie);
  // let shortResponse = movie.items
  // let shortResponse = _.slice(movie.items, 0, 10);

  return {
    props: {
      topMovies,
      InTheaters,
      mostpopularM,
    },
  };
}

// const [dayWeek, setDayWeek] = useState();
// const trendingAlltime = useQuery([], () => getTrending(dayWeek), {
//   onSuccess: (data) => {
//     console.log("trendingalltime", data);
//   },
// });
// const change =(e)=>{
//   setDayWeek(e.target.value)
// }
