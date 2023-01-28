import { headerForm, errorText } from './refs';
import ApiService from './apiService';
import { renderMarkupSearch } from './markupSearch';
import { cleanHtml } from './markupSearch';
import { getMovies } from './renderingGalleryMarkup';
import { hideLoader, showLoader } from './loader';

const gallery = document.querySelector('.js-movies-list')
const apiService = new ApiService();

export async function onHeaderFormClick(evt) {
  try {
    evt.preventDefault();
    apiService.query = evt.currentTarget.keyword.value;
    cleanHtml()

    // page = 1;
    if (!apiService.query.trim()) {
      errorText.classList.remove('header__error_hidden');
      setTimeout(() => errorText.classList.add('header__error_hidden'), 2000);
      return;
    }
    showLoader();
    const response = await apiService.fetchFilmsByKeyWord();

    headerForm.reset();

    if (response.data.results.length === 0) {
      errorText.classList.remove('header__error_hidden');
      setTimeout(() => errorText.classList.add('header__error_hidden'), 2000);
      getMovies();
      headerForm.reset();
    } else {
      gallery.insertAdjacentHTML('beforeend', renderMarkupSearch(response.data.results))
      hideLoader();
    }
  } catch (err) {
    console.log(err);
  }
}
