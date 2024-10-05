import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { movieResults, movieNames, errorMessage } = useSelector(
    (store) => store.gpt
  );

  if (errorMessage !== null) {
    if (errorMessage) {
      return (
        <p className="p-4 m-4 bg-black text-white bg-opacity-90">
          {errorMessage}
        </p>
      );
    }
  }
  if (!movieNames) {
    return;
  } else {
    if (movieNames.length !== 0) {
      return (
        <div className="p-4 m-4 bg-black text-white bg-opacity-90">
          <div>
            {movieNames.map((movieName, index) => (
              <MovieList
                key={movieName}
                title={movieName}
                movies={movieResults[index]}
              />
            ))}
          </div>
        </div>
      );
    }
  }
};

export default GptMovieSuggestion;
