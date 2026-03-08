import styles from "./MovieSectionTitle.module.css";

function MovieSectionTitle({ children }) {
  return <h1 className={styles.sectionTitle}>{children}</h1>;
}

export default MovieSectionTitle;
