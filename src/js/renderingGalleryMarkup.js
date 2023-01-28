import { renderMarkupSearch } from './markupSearch';
import { movieContainer } from './refs';
import ApiService from './apiService';
import pagination from './pagination';
import { hideLoader, showLoader } from './loader';

const apiService = new ApiService();
getMovies();

export async function getMovies() {
  try {
    showLoader();
    const response = await apiService.fetchTrendFilms();
    const results = response.data.results;
    movieContainer.innerHTML = renderMarkupSearch(results);
    hideLoader();
    pagination();
  } catch (err) {
    console.log(err);
  }
}
