import { renderMarkupSearch } from './markupSearch';
import { movieContainer } from './refs';
import apiservice from './apiService';
import pagination from './pagination';
import { hideLoader, showLoader } from './loader';

// const apiService = new ApiService();
getMovies();

export async function getMovies() {
  try {
    showLoader();
    // apiservice.resetPage();
    const response = await apiservice.fetchTrendFilms();
    const results = response.data.results;
    // console.log('results: ', results);
    // alert(response.data.total_pages);
    movieContainer.innerHTML = renderMarkupSearch(results);
    hideLoader();

    // console.log('response.data.total_pages01: ', response.data.total_pages);

    pagination(1, response.data.total_pages);
  } catch (err) {
    console.log(err);
  }
}
