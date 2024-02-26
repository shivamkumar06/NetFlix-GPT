import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularmovies from "../hooks/usePopularMovies";
import useTopRatedmovies from "../hooks/useTopRatedMovies";
import useUpcomingmovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";


const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularmovies();
  useTopRatedmovies();
  useUpcomingmovies();


  return (
    <div>
      <Header />
      {showGptSearch ? (<GptSearch />) :(<>
        <MainContainer />
      <SecondaryContainer />
      </>)}
      {/* 
          MainContainer
            - VideoBackground
            - VideoTitle
          SecondaryContainer
            - MovieList * n
              - cards * n
      */}
    </div>
  );
};
export default Browse;
