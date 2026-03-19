import { getMovieDetails } from "@/app/_lib/dataService";
import styles from "./page.module.css";
import MoviePreviewCard from "@/app/_components/MoviePreviewCard";
import Image from "next/image";

async function page({ params }) {
  const { movieId } = await params;

  const { data } = await getMovieDetails(movieId);

  const actors = data.actors
    .filter((actor) => actor.profile_path !== null)
    .slice(0, 18);

  return (
    <>
      <MoviePreviewCard movie={data} />

      <div className={styles.relatedToMovie}>
        <section>
          <h2 className={styles.relatedToTitle}>Cast</h2>

          <div className={styles.actors}>
            {actors.map((actor) => (
              <div key={actor.id} className={styles.actor}>
                {actor.profile_path && (
                  <div className={styles.actorImageWrapper}>
                    <Image
                      src={`${process.env.tmdb_image_api}${actor.profile_path}`}
                      className={styles.actorImage}
                      fill
                      alt={`${actor.original_name} profile picture`}
                    />
                  </div>
                )}
                <div className={styles.charInfo}>
                  <h3 className={styles.actorName}>{actor.original_name}</h3>
                  <h4 className={styles.charName}>{actor.character}</h4>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default page;
