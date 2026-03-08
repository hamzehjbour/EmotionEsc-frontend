import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

function page() {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.imgWrapper}>
        <Image
          src="/hero.jpg"
          className={styles.img}
          fill
          alt="person walking infront of a bus"
          priority
          sizes="100svh"
        />
        <div className={styles.overlay} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.heroText}>
          Discover movies that match your mood
        </h1>
        <h2 className={styles.heroSubText}>
          Let your emotions decide what to watch tonight.
        </h2>

        <Link href="/movies" className={styles.buttonPrimary}>
          Detect My Mood
        </Link>
      </div>
    </section>
  );
}

export default page;
