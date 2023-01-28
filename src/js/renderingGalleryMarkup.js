import { renderMarkupSearch } from './markupSearch';
import { movieContainer } from './refs';
import ApiService from './apiService';
import pagination from './pagination';

const apiService = new ApiService();
getMovies();

export async function getMovies() {
  try {
    const response = await apiService.fetchTrendFilms();
    const results = response.data.results;
    movieContainer.innerHTML = renderMarkupSearch(results);
    pagination();
  } catch (err) {
    console.log(err);
  }
}
