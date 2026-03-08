import MovieCardSkeleton from "@/app/_components/MovieCardSkeleton";
import MovieSectionTitle from "@/app/_components/MovieSectionTitle";
import TodaysPopular from "@/app/_components/TodaysPopular";
import TopRated from "@/app/_components/TopRated";
import styles from "./page.module.css";

import { Suspense } from "react";

function page() {
  return (
    <div className={styles.movieContainer}>
      <section>
        <MovieSectionTitle>Today&apos;s Popular</MovieSectionTitle>
        <Suspense fallback={<MovieCardSkeleton />}>
          <TodaysPopular />
        </Suspense>
      </section>
      <section>
        <MovieSectionTitle>Top Rated</MovieSectionTitle>
        <Suspense fallback={<MovieCardSkeleton />}>
          <TopRated />
        </Suspense>
      </section>
    </div>
  );
}

export default page;
