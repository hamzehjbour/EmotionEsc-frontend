import { getTopRatedMovies } from "@/app/_lib/dataService";
import MovieRow from "./MovieRow";

async function TopRated() {
  const movies = await getTopRatedMovies();

  return <MovieRow movies={movies} />;
}

export default TopRated;
