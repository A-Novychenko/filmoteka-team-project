import { headerForm, errorText } from './refs';
import apiservice from './apiService';
import { renderMarkupSearch } from './markupSearch';
import { cleanHtml } from './markupSearch';
import { hideLoader, showLoader } from './loader';
import pagination from './pagination';
import { movieContainer, sadEror, pagination } from './refs';
import { getMovies } from './renderingGalleryMarkup';

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
      setTimeout(() => errorText.classList.add('header__error_hidden'), 2500);
      pagination.classList.add('visually-hidden');
      sadEror.classList.remove('header__error_hidden');
      headerForm.reset();
      return;
    }

    showLoader();
    const response = await apiservice.fetchFilmsByKeyWord();
    const results = response.data.results;
    headerForm.reset();
    hideLoader();

    if (results.length === 0) {
      errorText.classList.remove('header__error_hidden');
      sadEror.classList.remove('header__error_hidden');
      pagination.classList.add('visually-hidden');
      setTimeout(() => {
        errorText.classList.add('header__error_hidden');
        sadEror.classList.add('header__error_hidden');
        pagination.classList.remove('visually-hidden');

        getMovies();
      }, 2500);

      // setTimeout(() => sadEror.classList.remove('header__error_hidden'), 2500);
      // sadEror.classList.remove('header__error_hidden');
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
