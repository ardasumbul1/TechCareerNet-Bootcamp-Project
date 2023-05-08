import React from 'react'
import { getMoviesByGenre } from '../lib/movies';
import styles from '../styles/Carousel.module.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import Layout from '../components/layout';




function GenresPage({ genres,movies }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 5

  };

  return (
    <Layout>
      <div className={styles.container}>
          {genres.map((genre,index) => (
              <div key={index}>
              <Link className={styles.link} href={"/genres/"+genre.name}>
                <h2 className={styles.title} > {genre.name}  </h2>
              </Link>
              <div className={styles.genre}>
                {movies.map((movie) => (
                  <div key={movie.id}>
              <div>
                <Slider {...settings}>
                        {(movie.genre == genre.name)&& movie.list.map((item,index)=>(
                        <div className={styles["carousel-container"]}key={index}>
                            <div className={styles.poster}>
                              <Link href={"/movies/"+item.title}>
                                  <img className={styles.image}src={"https://image.tmdb.org/t/p/w500"+item.path} alt=""/>
                              </Link>
                            </div>
                        </div>
                      ))}
                </Slider>
              </div>

            </div>
              ))}

                </div>
              </div>
          ))}
      </div>
    </Layout>

  )
}

export async function getStaticProps() {
  const apiKey = '5ee2a92807317e8a8547a1cc9a56bcfa'
  const response = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`
  )
  const data = await response.json()
  const movies_list = []; 

  let id=1; 
  let second_id=0;
  for (const element of data.genres) {
    const movies = await getMoviesByGenre(element.name);
    let titles = [];
    movies.map((m) =>{
      titles.push({id:second_id,title:m.title,path:m.backdrop_path});
      second_id ++;
    })
    movies_list.push({ id: id, genre: element.name, list: titles});
    id++;
  }

  return {
    props: {
      genres: data.genres,
      movies: movies_list,
    },

  }
}

export default GenresPage