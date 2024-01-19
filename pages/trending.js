// import { Pagination } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import { useQuery } from "react-query";
// import { getTrending } from "../servieces/api.servies";
// import Select, {
//   components,
//   ControlProps,
//   Props,
//   StylesConfig,
// } from "react-select";
// // import Select from "react-select/dist/declarations/src/Select";
// function Trending(props) {
//   // const trending = props.Trending;
//   // console.log(trending);
//   const [trendingAll, setTrendingAll] = useState();
//   const [trendingM, setTrendingM] = useState();
//   const [trendingTV, setTrendingTV] = useState("tv");
//   const [trendingP, setTrendingP] = useState();
//   const [page, setPage] = useState();
//   const [movie, setMovie] = useState({});
//   const [time, setTime] = useState("day");

//   const trendingQuery = useQuery(
//     ["trending", { movie, time }],
//     () => getTrending({ movie, time }),
//     {
//       onSuccess: (data) => {
//         console.log("data", data);
//       },
//     }
//   );
//   console.log("trenQ", trendingQuery);

//   const handleChage = (e, p) => {
//     setPage(p);
//   };
//   const options = [
//     {
//       label: "day",
//       value: "day",
//     },
//     {
//       label: "week",
//       value: "week",
//     }
//   ];
//   // function TrendingMovie() {
//   //   setTrendingM(trending);
//   // }
//   // function TrendingTVs() {
//   //   setTrendingTV(trending);
//   // }
//   // console.log("trending", trending);
//   return (
//     <div className="trending-page">
//       <h2 className="trending">Trending : </h2>
//       <div className="trending-page-box">
//         <div className="time-window">
//           <Select>
//             {options.map((option) => (
//               <option value={option.value}>{option.label}</option>
//             ))}
//           </Select>
//           <div className="day">Day</div>
//           <div className="day">Week</div>
//         </div>
//         <div className="media-type">
//           <div className="all">All</div>
//           <div className="all" onClick={() => setMovie("movie")}>
//             movie
//             <Pagination count={1000} onChange={handleChage}></Pagination>
//             {trendingQuery.data &&
//               trendingQuery.data.results.map((movie, index) => {
//                 return (
//                   <div className="containts">
//                     <div>{movie.title}</div>
//                     <img
//                       className="image"
//                       src={
//                         "https://image.tmdb.org/t/p/w500" + movie.backdrop_path
//                       }
//                       style={{ width: 270, height: 300, cursor: "pointer" }}
//                     />
//                     <div>{movie.overview}</div>
//                   </div>
//                 );
//               })}
//           </div>
//           <div className="all" onClick={() => setMovie("tv")}>
//             Tv
//             {trendingQuery.data &&
//               trendingQuery.data.results.map((movie, index) => {
//                 return (
//                   <div className="containts">
//                     <div>{movie.title}</div>
//                     <img
//                       className="image"
//                       src={
//                         "https://image.tmdb.org/t/p/w500" + movie.backdrop_path
//                       }
//                       style={{ width: 270, height: 300, cursor: "pointer" }}
//                     />
//                     <div>{movie.overview}</div>
//                   </div>
//                 );
//               })}
//           </div>
//           <div className="all">Person</div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Trending;
// // export async function getServerSideProps(context) {
// //   const Trending = await getTrending(`${movie}, ${time}`);
// //   return {
// //     props: { Trending },
// //   };
// // }
