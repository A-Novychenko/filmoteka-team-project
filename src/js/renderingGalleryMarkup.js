import { renderMarkupSearch } from "./markupSearch";
import { movieContainer } from "./refs";
import ApiService from './apiService';

const apiService = new ApiService();
getMovies();

export async function getMovies() {
  const response = await apiService.fetchTrendFilms();
  const results = response.data.results;
  console.log(results)
  try {
    movieContainer.innerHTML = renderMarkupSearch(results)
  } catch (err) {
    console.log(err)
  }
}