import { useRouter } from "next/router";
import React from "react";
import { useQuery } from "react-query";
import { getMovieDetailByid } from "../../servieces/api.servies";

function DetailOfTopMovie(props) {
  const router = useRouter();
  const id = router.query.id;
  console.log(id, "iddd");
  // const  detaildata  = useQuery( "movie",() => getMovieDetailByid(id));
  const { isLoading, isError, data, isSuccess, error } = useQuery([id], () =>
    getMovieDetailByid(id)
  );
  // const bannerImage = "https://image.tmdb.org/t/p/original" + data.poster_path;
  return (
    <>
      <div className="detail-page">
        
        <div className='img'>
        {isSuccess && (
          <img src={"https://image.tmdb.org/t/p/w500" + data.poster_path} style={{width:400 ,height:400}} />
        )}
        </div>
        <div className='det-para'>
        <h1 className='title'>Details</h1>
        {isSuccess && <span className='title'>{data.title}</span>}
        {isSuccess && <span className='detail'>Language:{data.original_language}</span>}
        {isSuccess && <span className='detail'>Release Date:{data.release_date}</span>}
       
        {isSuccess &&
          data.genres.map((key1, i) => {
            return (
              <>
                <div className='detail' key={i}>genres:{key1.name}</div>
              </>
            );
          })}
        {isSuccess &&
          data.production_companies.map((key1, i) => {
            return (
              <>
                <div className='detail' key={i}>production_company:{key1.name}</div>
                <div className='detail' key={i}>origin_country:{key1.origin_country}</div>
              </>
            );
          })}
        {isSuccess && <p className='para'> {data.overview}</p>}
      </div>
      </div>
    </>
  );
}
export default DetailOfTopMovie;

// export async function getServerSideProps(context) {
//   const id = context.query.id;
//   const movieName = await getMovieName(id);
//   return { props: { movieName } };
// }
