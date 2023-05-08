import { getMovieDetail } from '../../lib/movies';
import styles from '../../styles/Detail.module.css'
import Layout from '../../components/layout';
import Link from 'next/link';



export async function getServerSideProps({ params }) {

  const movieDetail = await getMovieDetail(params.movie);
  return {
    props: { movieDetail},
  };
}

function GenrePage({ movieDetail}) {
  return (
    <Layout>
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img className={styles.poster} src={"https://image.tmdb.org/t/p/w500"+movieDetail.poster_path} alt=""/>
            </div>
            <div className={styles.detailsContainer}>
                <h1 className={styles.title}>{movieDetail.title}</h1>
                <p className={styles.overview}>{movieDetail.overview}</p>
                <div className={styles.infoContainer}>
                <p className={styles.releaseDate}><b>Release Date: </b>{movieDetail.release_date}</p>
                <p className={styles.rating}><b>Rating: </b>{movieDetail.vote_average} ({movieDetail.vote_count} votes)</p>
                </div>
            </div>
        </div>
    </Layout>

  );
}

export default GenrePage;