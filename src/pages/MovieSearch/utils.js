import mockedData from './../../core/data.json';

export function getMovies(searchValue) {
  let { movies } = mockedData;

  if (searchValue !== '') {
    movies = movies.filter(el => {
      return el.title.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0;
    });
  }

  return movies;
}
