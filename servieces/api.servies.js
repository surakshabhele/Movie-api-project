const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "?api_key=95193749e7fdd898c249dba053974e48";

async function executeHttpRequest(url, options = { method: "GET" }) {
  const { method, data, param } = options;
  const response = await fetch(`${BASE_URL}${url}${API_KEY}${param ?`&${param}` : ''}`, {
    method,
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log("byidrespo", response);
  const json = await response.json();
  if (!response.ok) {
    throw { statusText: response.statusText, code: response.status, ...json };
  }
  return json;
}
export const getTopMovies = () => {
  return executeHttpRequest("/movie/top_rated");
};
export const getNowInTheatreMovies = () => {
  return executeHttpRequest("/movie/now_playing");
};
export const getMostPopularMovies = () => {
  return executeHttpRequest("/movie/popular");
};
export const getMovieDetailByid = (id) => {
  return executeHttpRequest(`/movie/${id}`);
};
export const getTrailerByid = (id) => {
  return executeHttpRequest(`/movie/${id}/videos`);
};
export const getSearch = (text) => {
   return executeHttpRequest(`/search/movie`,{param: `query=${text}`});
};
export const getTrending = (time) => {
  // console.log(movie,time)
  return executeHttpRequest(`/trending/movie/${time}`);
};
export const getTrendingTV = (time) => {
  // console.log(person,time)
  return executeHttpRequest(`/trending/tv/${time}`);
};
export const getTrendingPerson = (time) => {
  // console.log(person,time)
  return executeHttpRequest(`/trending/person/${time}`);
};
// export const getTrendingDay = (movie) => {
//   return executeHttpRequest(`/trending/${movie}/day`);
// };
// export const getTrendingWeek = (movie) => {
//   const data= executeHttpRequest(`/trending/${movie}/week`);
// console.log("dtweek",data)
// return data;
// };






// const BASE_URL = "https://imdb-api.com/en/API";
// // const API_KEY = "k_f5r2d20k";
// const API_KEY = "k_ctge6ezx";
// async function executeHttpRequest(url, options = { method: "GET" }) {
//   const { method, data } = options;
//   const response = await fetch(`${BASE_URL}${url}/${API_KEY}`, {
//     method,
//     body: data ? JSON.stringify(data) : undefined,
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   const json = await response.json();
//   if (!response.ok) {
//     throw { statusText: response.statusText, code: response.status, ...json };
//   }
//   return json;
// }
// export const getTopMovies = () => {
//   return executeHttpRequest("/Top250Movies");
// };
// export const getNowInTheatreMovies = () => {
//   return executeHttpRequest("/InTheaters");
// };

// export const getMostPopularMovies = () => {
//   return executeHttpRequest("/MostPopularMovies");
//   // return executeHttpRequest("/BoxOfficeAllTime");
// };

