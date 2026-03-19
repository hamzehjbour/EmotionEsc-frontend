"use client";

import { CalendarIcon, ClockIcon, StarIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import { useRef, useState } from "react";
import styles from "./MoviePreviewCard.module.css";

function MoviePreviewCard({ movie }) {
  const [showTrailer, setShowTrailer] = useState(false);
  const [playeMovie, setPlayMovie] = useState(false);
  const movieTrailerTimer = useRef(null);

  const releaseYear = new Date(movie.release_date).getFullYear();

  const hours = Math.trunc(movie.runtime / 60);
  const minutes = movie.runtime % 60;
  const overview = movie.overview.split(" ").slice(0, 40).join(" ");

  function handleMouseEnter() {
    movieTrailerTimer.current = setTimeout(() => {
      setShowTrailer(true);
    }, 500);
  }

  function handleMouseLeave() {
    clearTimeout(movieTrailerTimer.current);
    setShowTrailer(false);
  }

  function handlePlayMovie() {
    setPlayMovie(true);
  }

  return (
    <div
      className={styles.movieTrailer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showTrailer ? (
        movie?.trailers.length > 0 ? (
          <iframe
            src={`https://www.youtube.com/embed/${movie.trailers.at(0).key}?autoplay=1&mute=1&contorls=0&rel=0`}
            allow="autoplay"
            allowFullScreen
          />
        ) : (
          setShowTrailer(false)
        )
      ) : (
        <div>
          <Image
            src={`${process.env.NEXT_PUBLIC_tmdb_image_api}${movie.backdrop_path}`}
            className={styles.movieBackdrop}
            fill
            alt={`${movie.title} backdrop image`}
          />

          <div className={styles.overlay}>
            <div className={styles.movieInfo}>
              {movie?.images?.file_path ? (
                <div className={styles.logoWrapper}>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_tmdb_image_api}${movie.images.file_path}`}
                    className={styles.logo}
                    alt={`${movie.title} logo`}
                    fill
                  />
                </div>
              ) : null}
              <div className={styles.movieMetaDatas}>
                <span className={styles.metaData}>
                  <StarIcon className={styles.metaDataIcon} /> {movie.rating}
                </span>
                <span className={styles.metaData}>
                  <CalendarIcon className={styles.metaDataIcon} />
                  {releaseYear}
                </span>
                <span className={styles.metaData}>
                  <ClockIcon className={styles.metaDataIcon} />
                  {hours}h {minutes}m
                </span>
                {movie.genres.map((genre) => (
                  <span key={genre.id}>{genre.name}</span>
                ))}
              </div>
              <div className={styles.overview}>{overview}...</div>

              <button
                className={styles.moviePlayer}
                onMouseEnter={handleMouseLeave}
                onClick={handlePlayMovie}
              >
                Play
              </button>
            </div>
          </div>
        </div>
      )}

      {playeMovie && (
        <iframe
          src={`https://www.vidking.net/embed/movie/${movie.id}`}
          width="100%"
          height="600"
          frameBorder="0"
          allowFullScreen
          referrerPolicy="no-referrer"
          allow="autoplay; fullscreen"
        />
      )}
    </div>
  );
}

export default MoviePreviewCard;
