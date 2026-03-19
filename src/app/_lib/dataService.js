const options = {
  method: "GET",
};

export async function getPopularMovies() {
  const res = await fetch(
    `${process.env.backend_api}/movies/popular-movies`,
    options,
  );

  // For Testing
  // await new Promise((res) => setTimeout(res, 3000));

  const data = await res.json();

  // console.log(data.data.results);

  return data.data.results;
}

export async function getTopRatedMovies() {
  const res = await fetch(
    `${process.env.backend_api}/movies/top-rated-movies`,
    options,
  );

  const data = await res.json();

  return data.data.results;
}

export async function getMovieDetails(movieId) {
  const res = await fetch(
    `${process.env.backend_api}/movies/movie-details/${movieId}`,
    options,
  );

  const data = await res.json();

  return data;
}
