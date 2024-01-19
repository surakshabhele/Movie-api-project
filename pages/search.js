import React, { useEffect, useState } from "react";
import StarIcon from "../components/star-icon";

function Search({ data4 }) {
  //   const [show, setShow] = useState({});
  console.log("dta", data4);
  //   useEffect(() => {
  //     // setShow(data4.results);
  //     console.log("show",show)
  //   }, []);

  return (
    <div className="search-page">
      {/* {data4.length != 0 ? ( */}
      <div className="contain-box">
        {data4.map((data, i) => {
          return (
            <div className="contain" key={data.id}>
            <div className="img">
              {data.backdrop_path?
              <img
                src={"https://image.tmdb.org/t/p/w500" + data.backdrop_path}
                style={{ width: 200, height: 260 }}
                className="subcontent-img"
              />
              //  &&
              // <img
              //   src={"https://image.tmdb.org/t/p/w500" + data.poster_path}
              //   style={{ width: 200, height: 260 }}
              //   className="subcontent-img"
              // />
              :null
              }
              </div>
              <div className="left-detail">
                <div className="title">{data.original_title}</div>
              <div className="para">{data.overview}</div>
              <div className="details">Release Date:{data.release_date}</div>
              <div className="details"><StarIcon width={20} height={20}/>{data.vote_average}</div>
              </div>
            </div>
            
          );
        })}
      </div>
      {/* ) : (
        <div className="loading">: loading...</div>
      )} */}
    </div>
  );
}
export default Search;
// {show.length!=0 &&
//     show.map((s, i) => {
//       <div className="s" key={i}>
//         <div>{s.id}</div>
//         {/* <div>{results.genre_ids}</div> */}
//         <div>{s.adult}</div>
//       </div>;
//     })}
