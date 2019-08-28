import mockedData from './../../core/data.json';

export function getMovies(searchToggleValue, sortToggleValue, searchValue) {
  let { movies } = mockedData;
  movies = [...movies].sort((a, b) => {
    return b[sortToggleValue] - a[sortToggleValue];
  });
  if (searchValue !== '') {
    movies = movies.filter(el => {
      return el[searchToggleValue].toLowerCase().indexOf(searchValue.toLowerCase()) >= 0;
    });
  }
  return movies;
}
