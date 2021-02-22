import React, { useEffect, useState } from "react";
import { SMovies } from "./StyledComponents/StyleMovie";
import Movie from "./Movie";

const APIURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=10696bdae74cb78c282bf539cad918fc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function Search() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(APIURL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      fetch(SEARCHAPI + searchTerm)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setMovies(data.results);
        });
      setSearchTerm("");
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <SMovies>
      <div className="searchBar">
        <form onSubmit={handleOnSubmit}>
          <div className="finder">
            <div className="finder__outer">
              <div className="finder__inner">
                <div className="finder__icon"></div>
                <input
                  className="finder__input"
                  type="search"
                  placeholder=""
                  value={searchTerm}
                  onChange={handleOnChange}
                ></input>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </SMovies>
  );
}

export default Search;
