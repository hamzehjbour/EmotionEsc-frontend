"use client";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./MovieCardSkeleton.module.css";

function MovieCardSkeleton() {
  return (
    <div className={styles.skeletonContainer}>
      {Array.from({ length: 20 }).map((_, i) => (
        <Skeleton
          baseColor="var(--color-bg-secondary)"
          height={300}
          width={200}
          key={i}
          borderRadius="var(--radius-card)"
          style={{
            aspectRatio: "2 / 3",
          }}
        />
      ))}
    </div>
  );
}

export default MovieCardSkeleton;
