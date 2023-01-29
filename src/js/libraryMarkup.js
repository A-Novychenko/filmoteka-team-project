import ApiService from './apiService';
import { btnWatched, btnQueue, libraryData } from './refs';
import { renderMarkupSearch } from './markupSearch';

const apiService = new ApiService();

const paginationList = document.querySelector('.pagination__list');
const paginationBox = document.querySelector('.pagination');

let totalPages;
let libBlockToShow;

btnWatched.addEventListener('click', onBtnWatchedClick);
btnQueue.addEventListener('click', onBtnQueueClick);

function onBtnWatchedClick() {
  paginationList.innerHTML = '';
  apiService.resetPage();
  btnWatched.classList.add('btnIsActive');
  btnQueue.classList.remove('btnIsActive');
  libBlockToShow = 'watched';
  libraryListRender();
}

function onBtnQueueClick() {
  paginationList.innerHTML = '';
  apiService.resetPage();
  btnWatched.classList.remove('btnIsActive');
  btnQueue.classList.add('btnIsActive');
  libBlockToShow = 'queue';
  libraryListRender();
}

onBtnWatchedClick();

function libraryListRender(curentPage = 1) {
  let curentPageToRender = curentPage;
  console.log('перемальовую: ', curentPageToRender);
  let watchedList;

  try {
    if (libBlockToShow === 'watched') {
      watchedList = localStorage.getItem('watchedFilms'); //watchedFilms
      // console.log('watchedList: ', watchedList);
    } else {
      watchedList = localStorage.getItem('queuedFilms');
    }
  } catch (err) {
    console.log(err);
  }

  libraryData.innerHTML = '';

  try {
    if (watchedList) {
      let watchedListToRender;

      if (libBlockToShow === 'watched') {
        watchedListToRender = JSON.parse(watchedList);
      } else {
        watchedListToRender = JSON.parse(watchedList);
      }

      const screenWidth = window.screen.width;

      let array_size;

      if (screenWidth < 767) {
        array_size = 4;
        // console.log('mobile');
      } else if (screenWidth > 767 && screenWidth < 1280) {
        array_size = 8;
        // console.log('tablet');
      } else {
        array_size = 9;
        // console.log('desc');
      }
      // console.log('array_size: ', array_size);

      if (watchedListToRender.length > array_size) {
        // const array_size = 9;
        const sliced_array = [];
        for (let i = 0; i < watchedListToRender.length; i += array_size) {
          sliced_array.push(watchedListToRender.slice(i, i + array_size));
        }
        // console.log('pages to paginate', sliced_array.length);

        totalPages = sliced_array.length;
        librPagination(totalPages);

        try {
          let newMurkup = renderMarkupSearch(
            sliced_array[curentPageToRender - 1]
          );
          libraryData.innerHTML = `<ul class="library__list js-library-list">${newMurkup}</ul>`;
        } catch (err) {
          console.log(err);
        }
      } else {
        newMurkup = renderMarkupSearch(watchedListToRender);
        libraryData.innerHTML = `<ul class="library__list js-library-list">${newMurkup}</ul>`;
      }
    } else {
      libraryData.innerHTML = `<div class="no-data">
      <p>
        It's empty here now
      </p>
      <a class="no-data-btn" href="./index.html">Let's fix it</a>
    </div>`;
    }
  } catch (err) {
    console.log(err);
  }
}

// ..........................................................

function librPagination(total) {
  totalPages = total;
  let murkup = '';

  let beforeTwoPage = apiService.page - 2;
  let beforePage = apiService.page - 1;
  let afterPage = apiService.page + 1;
  let afterTwoPage = apiService.page + 2;

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

// ..........................................................

paginationBox.addEventListener('click', onLibrPaginationClick);

function onLibrPaginationClick(e) {
  if (e.target.tagName !== 'LI') {
    return;
  }
  if (e.target.textContent === '...') {
    return;
  }

  if (e.target.textContent === '►') {
    apiService.page += 1;
    libraryListRender(apiService.page);
    librPagination(totalPages);
    console.log('apiService.page: ', apiService.page);

    return;
  }

  if (e.target.textContent === '◄') {
    apiService.page -= 1;
    libraryListRender(apiService.page);
    librPagination(totalPages);
    console.log('apiService.page: ', apiService.page);

    return;
  }

  if (true) {
    // console.log(e.target.textContent);
    apiService.page = Number(e.target.textContent);
    libraryListRender(apiService.page);
    librPagination(totalPages);
    console.log('apiService.page: ', apiService.page);
  }
}
