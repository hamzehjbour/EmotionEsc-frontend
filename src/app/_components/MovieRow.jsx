import Image from "next/image";
import styles from "./MovieRow.module.css";

async function MovieRow({ movies }) {
  // const movies = await getPopularMovies();

  return (
    <div className={styles.moviesRow}>
      {movies.map((movie) => (
        <div key={movie.id} className={styles.card}>
          <div className={styles.posterWrapper}>
            <Image
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              className={styles.posterImage}
              fill
              alt={`${movie.title} poster image`}
            />
            <div className={styles.overlay}>
              {/* <div className={styles.movieTitle}>{movie.title}</div>
              <div className={styles.movieMeta}>{movie.release_date}</div> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieRow;
