import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
    
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const randomMovie = Math.floor(Math.random() * 20) + 1;
  const mainMovie = movies[randomMovie];

  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};
export default MainContainer;