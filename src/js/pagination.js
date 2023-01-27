// import ApiService from './apiService';
import ApiService from './apiService';
import renderMarkupSearch from './markupSearch';

//test
const paginationList = document.querySelector('.pagination__list');

const paginationBox = document.querySelector('.pagination');
console.log(paginationBox);
paginationBox.addEventListener('click', clickFunction);
//test

const apiService = new ApiService();

export default async function pagination() {
  paginationBox.addEventListener('click', clickFunction);
  let totalPages = await apiService
    .fetchTrendFilms()
    .then(res => res.data.total_pages);

  let murkup = '';

  let beforeTwoPage = apiService.page - 2;
  let beforePage = apiService.page - 1;
  let afterPage = apiService.page + 1;
  let afterTwoPage = apiService.page + 2;
  console.log(apiService.page);

  if (apiService.page > 1) {
    murkup += `<li class="pagination__item">◄</li> `;
    murkup += `<li class="pagination__item">1</li>`;
  }

  if (apiService.page > 4) {
    murkup += `...`;
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
    murkup += `...`;
  }

  if (totalPages > apiService.page) {
    murkup += `<li class="pagination__item">${totalPages}</li>`;
    murkup += `<li class="pagination__item">►</li>`;
  }

  paginationList.innerHTML = murkup;
}

pagination();

function clickFunction(e) {
  console.log(e.target.tagName);
  console.log(typeof e.target.textContent);
  if (e.target.tagName !== 'LI') {
    return;
  }
  if (e.target.textContent === '...') {
    return;
  }

  if (e.target.textContent === '►') {
    apiService.page += 1;
    pagination();
    console.log(apiService.page);

    return;
  }

  if (e.target.textContent === '◄') {
    apiService.page -= 1;
    pagination();
    console.log(apiService.page);

    return;
  }

  if (true) {
    console.log(e.target.textContent);
    apiService.page = Number(e.target.textContent);

    pagination();
  }
}
