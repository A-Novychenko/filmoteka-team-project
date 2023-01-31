import { headerForm, errorText } from './refs';
import apiservice from './ApiService';
import { renderMarkupSearch } from './markupSearch';
import { cleanHtml } from './markupSearch';
import { getMovies } from './renderingGalleryMarkup';
import { hideLoader, showLoader } from './loader';
import pagination from './pagination';
import { movieContainer } from './refs';

// const apiService = new ApiService();

export async function onHeaderFormClick(evt) {
  try {
    evt.preventDefault();
    apiservice.query = evt.currentTarget.keyword.value;
    const keyWord = evt.currentTarget.keyword.value;
    // console.log('keyWord: ', keyWord);
    localStorage.setItem('keyWord', keyWord);
    cleanHtml();

    if (!apiservice.query.trim()) {
      errorText.classList.remove('header__error_hidden');
      setTimeout(() => errorText.classList.add('header__error_hidden'), 2000);
      return;
    }

    showLoader();
    const response = await apiservice.fetchFilmsByKeyWord();
    const results = response.data.results;
    headerForm.reset();

    if (results.length === 0) {
      errorText.classList.remove('header__error_hidden');
      setTimeout(() => errorText.classList.add('header__error_hidden'), 2000);
      getMovies();
      headerForm.reset();
    } else {
      movieContainer.innerHTML = renderMarkupSearch(results);

      pagination(1, response.data.total_pages);
      hideLoader();
    }
  } catch (err) {
    console.log(err);
  }
}
