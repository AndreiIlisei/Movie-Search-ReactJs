import React from "react";
import { SMovies } from "./StyledComponents/StyleMovie";

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) => {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 6) {
    return "orange";
  } else {
    return "red";
  }
};

const Movie = ({ title, poster_path, overview, vote_average }) => {
  return (
    <SMovies>
      <div className="movie">
        <img src={IMGPATH + poster_path} alt={title} onError={(e)=>{e.target.onerror = null; e.target.src="https://image.freepik.com/free-vector/glitch-error-404-page-background_23-2148090003.jpg"}} />
        <div className="movie-info">
          <h3>{title}</h3>
          <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average} </span>
        </div>

        <div className="movie-overview">
          <h2>Overview:</h2>
          <p>{overview}</p>
        </div>
      </div>
    </SMovies>
  );
};

export default Movie;
