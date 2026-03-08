import { getPopularMovies } from "../_lib/dataService";
import MovieRow from "./MovieRow";

async function TodaysPopular() {
  const movies = await getPopularMovies();

  return <MovieRow movies={movies} />;
}

export default TodaysPopular;
