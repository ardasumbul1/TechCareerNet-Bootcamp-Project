import { getMoviesByGenre } from '../../lib/movies';
import styles from '../../styles/Genres.module.css'
import Layout from '../../components/layout';
import Link from 'next/link';



export async function getServerSideProps({ params }) {

  const movies = await getMoviesByGenre(params.genre);
  return {
    props: { movies:movies,
             genre: params.genre},
  };
}

function GenrePage({ movies,genre }) {
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.maintitle}>{genre}</h1>
        <div className={styles.movieList}>
          {movies.map((movie) => (
            <div className={styles.movieItem} key={movie.id}>
              <Link href={"/movies/"+movie.title}>
                 <img className={styles.poster} src={"https://image.tmdb.org/t/p/w200"+movie.poster_path} alt=""/>
              </Link>
              <h2 className={styles.title}>{movie.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </Layout>

  );
}

export default GenrePage;