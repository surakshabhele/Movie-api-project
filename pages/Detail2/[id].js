import { useRouter } from "next/router";
import React from "react";
import { useQuery } from "react-query";
import { getTrailerByid } from "../../servieces/api.servies";

function DetailOfTopMovie2() {
  const router = useRouter();
  const id = router.query.id;
  console.log(id, "iddd");
  const { isLoading, isError, data, isSuccess, error } = useQuery([id], () =>
    getTrailerByid(id)
  );
  console.log("tariler", data);
  return (
    <>
      <div className="trail-page">
        {isSuccess &&
          data.results.map((value, j) => {
            return (
              <>
                <div key={j}>
                  <span>name:{value.name}</span> <span>({value.type})</span>
                  <br />
                  <iframe
                    width="853"
                    height="480"
                    src={"https://www.youtube.com/embed/" + value.key}
                    title={value.name}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
}

export default DetailOfTopMovie2;
