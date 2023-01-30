import ApiService from './apiService';
import { renderMarkupSearch } from './markupSearch';
import { getMovies } from './renderingGalleryMarkup';
import { movieContainer } from './refs';

const paginationList = document.querySelector('.pagination__list');
const paginationBox = document.querySelector('.pagination');
paginationBox.addEventListener('click', clickFunction);

const apiService = new ApiService();

let currentPage;

export default async function pagination(currentP, totalPages) {
  currentPage = currentP;

  let murkup = '';

  let beforeTwoPage = currentPage - 2;
  let beforePage = currentPage - 1;
  let afterPage = currentPage + 1;
  let afterTwoPage = currentPage + 2;

  if (currentPage > 1) {
    murkup += `<li class="pagination__item">◄</li> `;
    murkup += `<li class="pagination__item">1</li>`;
  }

  if (currentPage > 4) {
    murkup += `...`;
  }

  if (currentPage > 3) {
    murkup += `<li class="pagination__item">${beforeTwoPage}</li>`;
  }

  if (currentPage > 2) {
    murkup += `<li class="pagination__item">${beforePage}</li>`;
  }

  murkup += `<li class="pagination__item current">${currentPage}</li>`;

  if (totalPages - 1 > currentPage) {
    murkup += `<li class="pagination__item">${afterPage}</li>`;
  }

  if (totalPages - 2 > currentPage) {
    murkup += `<li class="pagination__item">${afterTwoPage}</li>`;
  }

  if (totalPages - 3 > currentPage) {
    murkup += `...`;
  }
  if (totalPages > currentPage) {
    murkup += `<li class="pagination__item">${totalPages}</li>`;
    murkup += `<li class="pagination__item pagination__item_arrows">►</li>`;
  }
  paginationList.innerHTML = murkup;
}

async function clickFunction(e) {
  let response;

  if (e.target.tagName !== 'LI') {
    return;
  }
  if (e.target.textContent === '...') {
    return;
  }

  const searchToSource = localStorage.getItem('searchSource'); // , 'byTrend'  byKeyWord
  window.scrollBy(0, -10000);
  if (e.target.textContent === '►') {
    apiService.page = currentPage;
    apiService.increamentPage();

    if (searchToSource === 'byTrend') {
      response = await apiService.fetchTrendFilms();
    } else {
      response = await apiService.fetchFilmsByKeyWord();
    }
    const results = response.data.results;

    movieContainer.innerHTML = renderMarkupSearch(results);
    pagination(response.data.page, response.data.total_pages);
    // window.scrollBy(0, -1000);
    return;
  }

  if (e.target.textContent === '◄') {
    apiService.decrementPage();

    if (searchToSource === 'byTrend') {
      response = await apiService.fetchTrendFilms();
    } else {
      response = await apiService.fetchFilmsByKeyWord();
    }

    const results = response.data.results;
    movieContainer.innerHTML = renderMarkupSearch(results);
    pagination(response.data.page, response.data.total_pages);
    // window.scrollBy(0, -1000);
    return;
  }

  if (true) {
    apiService.page = Number(e.target.textContent);

    if (searchToSource === 'byTrend') {
      response = await apiService.fetchTrendFilms();
    } else {
      response = await apiService.fetchFilmsByKeyWord();
    }

    const results = response.data.results;
    movieContainer.innerHTML = renderMarkupSearch(results);
    pagination(response.data.page, response.data.total_pages);
    // window.scrollBy(0, -1000);
    return;
  }
}
