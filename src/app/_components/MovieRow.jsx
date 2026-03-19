import Image from "next/image";
import styles from "./MovieRow.module.css";
import Link from "next/link";

async function MovieRow({ movies }) {
  // const movies = await getPopularMovies();
  // console.log(movies);

  return (
    <div className={styles.moviesRow}>
      {movies.map((movie) => (
        <Link
          href={`/movies/${movie.id}`}
          key={movie.id}
          className={styles.card}
        >
          <div className={styles.posterWrapper}>
            <Image
              src={`${process.env.tmdb_image_api}${movie.poster_path}`}
              className={styles.posterImage}
              fill
              alt={`${movie.title} poster image`}
            />
            <div className={styles.overlay}>
              {/* <div className={styles.movieTitle}>{movie.title}</div>
              <div className={styles.movieMeta}>{movie.release_date}</div> */}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default MovieRow;
