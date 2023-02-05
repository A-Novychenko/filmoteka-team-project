import { headerForm, errorText, guard, buttonTop } from './refs';
import apiservice from './apiService';
import { renderMarkupSearch } from './markupSearch';
import { cleanHtml } from './markupSearch';
import { hideLoader, showLoader } from './loader';
import pagination from './pagination';
import { movieContainer, sadEror, paginationDiv } from './refs';
import { getMovies } from './renderingGalleryMarkup';
import { observer } from './buttonTop';


export async function onHeaderFormClick(evt) {
  try {
    evt.preventDefault();
    apiservice.query = evt.currentTarget.keyword.value;
    const keyWord = evt.currentTarget.keyword.value;
    // console.log('keyWord: ', keyWord);
    localStorage.setItem('keyWord', keyWord);
    cleanHtml();
    paginationDiv.classList.add('visually-hidden');
    apiservice.page = 1;

    if (!apiservice.query.trim()) {
      buttonTop.style.display = 'none';
      errorText.classList.remove('header__error_hidden');
      // sadEror.classList.remove('header__error_hidden');
      document.body.classList.add('sad__smile');
      paginationDiv.classList.add('visually-hidden');
      setTimeout(() => {
        errorText.classList.add('header__error_hidden');
        // sadEror.classList.add('header__error_hidden');
        document.body.classList.remove('sad__smile');
        paginationDiv.classList.remove('visually-hidden');

        getMovies();
      }, 2500);
      headerForm.reset();
      return;
    }

    showLoader();
    const response = await apiservice.fetchFilmsByKeyWord();
    const results = response.data.results;
    headerForm.reset();
    hideLoader();

    if (results.length === 0) {
      // paginationDiv.classList.add('visually-hidden');
      buttonTop.style.display = 'none';
      errorText.classList.remove('header__error_hidden');
      // sadEror.classList.remove('header__error_hidden');
      document.body.classList.add('sad__smile');

      setTimeout(() => {
        errorText.classList.add('header__error_hidden');
        // sadEror.classList.add('header__error_hidden');
        document.body.classList.remove('sad__smile');
        paginationDiv.classList.remove('visually-hidden');

        getMovies();
      }, 2500);

      headerForm.reset();
    } else {
      movieContainer.innerHTML = renderMarkupSearch(results);
      paginationDiv.classList.remove('visually-hidden');
      observer.observe(guard);

      pagination(1, response.data.total_pages);
      hideLoader();
    }
  } catch (err) {
    console.log(err);
  }
}
