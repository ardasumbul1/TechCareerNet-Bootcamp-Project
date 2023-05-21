const apiKey =  process.env.API_KEY;


async function getGenreIdByName(genreName) {
  const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  const genre = data.genres.find((genre) => genre.name === genreName);
  return genre ? genre.id : null;
}


export async function getMoviesByGenre(genres) {
  const genreId = await getGenreIdByName(genres).then((genreId) => {
    return genreId;
  });
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`
  );
  const data = await response.json();
  return data.results;

}

export async function getMovieDetail(movieName){
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieName}`
  );
  const data = await response.json();
  return data.results[0];
  }