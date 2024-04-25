import React from "react";

const MovieCardThree = () => {
  return (
    <div className="w-48 pr-4 ">
      <div className="w-64 pr-4 hover:z-30">
        <img
          className="transition-all duration-500 rounded-md hover:cursor-pointer hover:scale-150 hover:z-30"
          alt="poster"
          src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/cMD9Ygz11zjJzAovURpO75Qg7rT.jpg"
        ></img>
      </div>
    </div>
  );
};

export default MovieCardThree;
