import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { model } from "../utils/geminiai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovies, showErrorState } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };
  const handleGptSearchClick = async () => {
    dispatch(addGptMovies({ movieName: [], movieResults: [] }));
    dispatch(showErrorState(null));
    const gptQuery =
      "Act as a Movie Recommender System and suggest some movies for the query " +
      searchText.current.value +
      " only give me names of 5 movies, coma seprated like the exaple result given ahead. Example Result: The Dark Knight, Inception, Interstellar, The Prestige, Memento.";
    const result = await model.generateContent(gptQuery);
    const response = await result.response;
    const text = response.text();
    const movieNames = text.split(",").map((name) => name.trim());
    if (text && movieNames.length === 5) {
      const movies = text.split(",");
      const data = movies.map((movie) => searchMovieTMDB(movie));
      const results = await Promise.all(data);
      dispatch(addGptMovies({ movieName: movies, movieResults: results }));
    } else {
      console.error("error occured", text);
      dispatch(showErrorState(text));
    }
  };
  return (
    <div className="pt-[40%] md:pt-[10%] flex justify-center">
      <form
        className="md:w-1/2 w-full bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceHolder}
          className="p-4 m-4 col-span-9"
        />
        <button
          className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
        {/* <div className="py-2 px-4 col-span-9 text-white">
          {lang[langKey].suggestion}
        </div> */}
      </form>
    </div>
  );
};

export default GptSearchBar;
