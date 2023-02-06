import apiservice from './apiService';
import { renderMarkupSearch } from './markupSearch';
import { getMovies } from './renderingGalleryMarkup';
import { movieContainer } from './refs';

import { onLibrPaginationClick } from './libraryMarkup';

const paginationList = document.querySelector('.pagination__list'); //
const paginationBox = document.querySelector('.pagination');
paginationBox.addEventListener('click', clickFunction);
paginationBox.removeEventListener('click', onLibrPaginationClick);

// const apiService = new ApiService();

let currentPage;

export default async function pagination(currentP, totalPages) {
  currentPage = currentP;

  let murkup = '';

  let beforeTwoPage = currentPage - 2;
  let beforePage = currentPage - 1;
  let afterPage = currentPage + 1;
  let afterTwoPage = currentPage + 2;

  if (currentPage > 1) {
    murkup += `<li class="pagination__item pagination__item_arrows">◄</li> `;
    murkup += `<li class="pagination__item">1</li>`;
  }

  if (currentPage > 4) {
    murkup += `<li class="pagination__item three-drops">...</li>`;
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
    murkup += `<li class="pagination__item three-drops">...</li>`;
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

  if (e.target.textContent === '►') {
    apiservice.page = currentPage;
    apiservice.increamentPage();

    if (searchToSource === 'byTrend') {
      response = await apiservice.fetchTrendFilms();
    } else {
      response = await apiservice.fetchFilmsByKeyWord();
    }
    const results = response.data.results;

    movieContainer.innerHTML = renderMarkupSearch(results);
    pagination(response.data.page, response.data.total_pages);
    // window.scrollBy(0, -window.pageYOffset + 270);
    window.scrollTo(0, 230);
    // window.scrollBy(0, -1000);
    return;
  }

  if (e.target.textContent === '◄') {
    apiservice.decrementPage();

    if (searchToSource === 'byTrend') {
      response = await apiservice.fetchTrendFilms();
    } else {
      response = await apiservice.fetchFilmsByKeyWord();
    }

    const results = response.data.results;
    movieContainer.innerHTML = renderMarkupSearch(results);
    pagination(response.data.page, response.data.total_pages);
    // window.scrollBy(0, -1000);
    // window.scrollBy(0, -window.pageYOffset + 270);
    window.scrollTo(0, 230);
    return;
  }

  if (true) {
    apiservice.page = Number(e.target.textContent);

    if (searchToSource === 'byTrend') {
      response = await apiservice.fetchTrendFilms();
    } else {
      response = await apiservice.fetchFilmsByKeyWord();
    }

    const results = response.data.results;
    movieContainer.innerHTML = renderMarkupSearch(results);

    pagination(response.data.page, response.data.total_pages);
    // window.scrollBy(0, -1000);
    // console.log(window.pageYOffset);
    // window.scrollBy(0, -window.pageYOffset + 270);
    window.scrollTo(0, 230);
    return;
  }
}
