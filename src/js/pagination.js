// import ApiService from './apiService';
import ApiService from './apiService';
import { renderMarkupSearch } from './markupSearch';
// console.log('renderMarkupSearch: ', renderMarkupSearch);
import { getMovies } from './renderingGalleryMarkup';
import { movieContainer } from './refs';
// console.log('movieContainer: ', movieContainer);
// console.log('movieContainer: ', movieContainer);
//test
const paginationList = document.querySelector('.pagination__list');

const paginationBox = document.querySelector('.pagination');
// console.log(paginationBox);
paginationBox.addEventListener('click', clickFunction);
//test

const apiService = new ApiService();

let totalPages;

export default async function pagination(total) {
  paginationBox.addEventListener('click', clickFunction);

  totalPages = total;
  // console.log('totalPages: ', totalPages);
  console.log('paginationTotalPages: ', totalPages);

  // let totalPages = await apiService
  //   .fetchTrendFilms()
  //   .then(res => res.data.total_pages);

  let murkup = '';

  let beforeTwoPage = apiService.page - 2;
  let beforePage = apiService.page - 1;
  let afterPage = apiService.page + 1;
  let afterTwoPage = apiService.page + 2;
  console.log('apiService.page', apiService.page);

  if (apiService.page > 1) {
    murkup += `<li class="pagination__item pagination__item_arrows">◄</li> `;
    murkup += `<li class="pagination__item">1</li>`;
  }

  if (apiService.page > 4) {
    murkup += `<li class="pagination__item three-drops">...</li>`;
  }

  if (apiService.page > 3) {
    murkup += `<li class="pagination__item">${beforeTwoPage}</li>`;
  }

  if (apiService.page > 2) {
    murkup += `<li class="pagination__item">${beforePage}</li>`;
  }

  murkup += `<li class="pagination__item current">${apiService.page}</li>`;

  if (totalPages - 1 > apiService.page) {
    murkup += `<li class="pagination__item">${afterPage}</li>`;
  }

  if (totalPages - 2 > apiService.page) {
    murkup += `<li class="pagination__item">${afterTwoPage}</li>`;
  }

  if (totalPages - 3 > apiService.page) {
    murkup += `<li class="pagination__item three-drops">...</li>`;
  }

  if (totalPages > apiService.page) {
    murkup += `<li class="pagination__item">${totalPages}</li>`;
    murkup += `<li class="pagination__item pagination__item_arrows">►</li>`;
  }

  paginationList.innerHTML = murkup;
}

async function clickFunction(e) {
  if (e.target.tagName !== 'LI') {
    return;
  }
  if (e.target.textContent === '...') {
    return;
  }

  if (e.target.textContent === '►') {
    apiService.increamentPage();
    const response = await apiService.fetchTrendFilms();
    const results = response.data.results;
    // console.log('results: ', results);
    movieContainer.innerHTML = renderMarkupSearch(results);
    pagination(totalPages);
    // console.log(apiService.page);

    return;
  }

  if (e.target.textContent === '◄') {
    apiService.decrementPage();
    const response = await apiService.fetchTrendFilms();
    const results = response.data.results;
    // console.log('results: ', results);
    movieContainer.innerHTML = renderMarkupSearch(results);
    pagination(totalPages);
    // console.log(apiService.page);

    return;
  }

  if (true) {
    // console.log(e.target.textContent);
    apiService.page = Number(e.target.textContent);
    const response = await apiService.fetchTrendFilms();
    const results = response.data.results;
    // console.log('results: ', results);
    movieContainer.innerHTML = renderMarkupSearch(results);

    pagination(totalPages);
  }
}
