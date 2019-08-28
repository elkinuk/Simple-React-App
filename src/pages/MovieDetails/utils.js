import mockedData from './../../core/data.json';

export function getMoviesByGenre(genre) {
  const moviesByGenre = [...mockedData.movies].filter(el => {
    return el['genre'].toLowerCase().indexOf(genre.toLowerCase()) >= 0;
  });
  return moviesByGenre;
}

export function getCurentMovie(id) {
  return mockedData.movies[id];
}
