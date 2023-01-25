import { headerForm, errorText } from './refs';
import ApiService from './apiService';

const apiService = new ApiService();

export async function onHeaderFormClick(evt) {
  try {
    evt.preventDefault();
    apiService.query = evt.currentTarget.keyword.value;

    page = 1;
    if (!apiService.query.trim()) {
      errorText.classList.remove('header__error_hidden');
      setTimeout(() => errorText.classList.add('header__error_hidden'), 2000);
      return;
    }
    const response = await apiService.fetchFilmsByKeyWord();

    headerForm.reset();

    if (response.data.results.length === 0) {
      errorText.classList.remove('header__error_hidden');
      setTimeout(() => errorText.classList.add('header__error_hidden'), 2000);
      headerForm.reset();
    }
  } catch (err) {
    console.log(err);
  }
}
