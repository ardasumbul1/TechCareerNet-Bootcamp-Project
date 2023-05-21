import Link from 'next/link';
import styles from '../styles/Show.module.css';


export default function Show({movie}){
    return(
        <div className={styles['container']}>
           <div className={styles['gradient-image-container']}>
                <img src={"https://image.tmdb.org/t/p/w500"+movie.backdrop_path} alt="Your Image" className={styles['gradient-image']} />
                <div className={styles['gradient-overlay']}></div>
           </div>

            <div className={styles['info']}>
                <h1>{movie.title}</h1>
                <p>{movie.overview}</p>
                <p>{movie.release_date}</p>
                <button className={styles['infoButton']} type="button"><Link className={styles['infoLink']} href={"/movies/"+movie.title}>More Info</Link></button>
               
            </div>
        </div>
    )
}
