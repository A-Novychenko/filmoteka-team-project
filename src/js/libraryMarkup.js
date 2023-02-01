import apiservice from './apiService';
import { btnWatched, btnQueue, libraryData } from './refs';
import { renderMarkupSearch } from './markupSearch';
import { openModalMovie } from './refs';

// const apiservice = new apiservice();

const paginationList = document.querySelector('.pagination__list');
const paginationBox = document.querySelector('.pagination');

let totalPages;
let libBlockToShow;

btnWatched.addEventListener('click', onBtnWatchedClick);
btnQueue.addEventListener('click', onBtnQueueClick);

onBtnWatchedClick();

export function onBtnWatchedClick() {
  paginationList.innerHTML = '';
  apiservice.resetPage();
  btnWatched.classList.add('btnIsActive');
  btnQueue.classList.remove('btnIsActive');
  localStorage.setItem('sourceForModal', 'watchedFilms');
  libBlockToShow = 'watched';
  libraryListRender();
}

function onBtnQueueClick() {
  paginationList.innerHTML = '';
  apiservice.resetPage();
  btnWatched.classList.remove('btnIsActive');
  btnQueue.classList.add('btnIsActive');
  localStorage.setItem('sourceForModal', 'queuedFilms');
  libBlockToShow = 'queue';
  libraryListRender();
}

let curentPageToRender;

export function libraryListRender(curentPage, totalPage) {
  // console.log('curentPage: ', curentPage);
  let curentPageToRender = curentPage || apiservice.page;
  // console.log('apiservice.page: ', apiservice.page);
  let totalPages = totalPage || 1;

  // console.log('libraryListRender___curentPageToRender: ', curentPageToRender);
  // console.log('libraryListRender___totalPages: ', totalPages);

  // console.log('curentPageToRender: ', curentPageToRender);
  // console.log('перемальовую: ', curentPageToRender);
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
    // console.log(watchedList);

    if (watchedList && watchedList !== '[]') {
      // console.log('watchedList: ', watchedList);
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
        // console.log('totalPages777: ', totalPages);
        librPagination(curentPageToRender, totalPages);

        try {
          const newMurkup = renderMarkupSearch(
            sliced_array[curentPageToRender - 1]
          );
          libraryData.innerHTML = `<ul class="library__list js-library-list">${newMurkup}</ul>`;
        } catch (err) {
          console.log(err);
        }
      } else {
        const newMurkup = renderMarkupSearch(watchedListToRender);
        paginationList.innerHTML = '';
        apiservice.page = 1;
        curentPageToRender = 1;
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

function librPagination(curentPageToRender, totalPage) {
  totalPages = totalPage;
  // console.log('librPagination___curentPageToRender: ', curentPageToRender);
  // console.log('librPagination___totalPages: ', totalPages);
  let murkup = '';

  let beforeTwoPage = curentPageToRender - 2;
  let beforePage = curentPageToRender - 1;
  let afterPage = curentPageToRender + 1;
  let afterTwoPage = curentPageToRender + 2;

  if (curentPageToRender > 1) {
    murkup += `<li class="pagination__item pagination__item_arrows">◄</li> `;
    murkup += `<li class="pagination__item">1</li>`;
  }

  if (curentPageToRender > 4) {
    murkup += `<li class="pagination__item three-drops">...</li>`;
  }

  if (curentPageToRender > 3) {
    murkup += `<li class="pagination__item">${beforeTwoPage}</li>`;
  }

  if (curentPageToRender > 2) {
    murkup += `<li class="pagination__item">${beforePage}</li>`;
  }

  murkup += `<li class="pagination__item current">${curentPageToRender}</li>`;

  if (totalPages - 1 > curentPageToRender) {
    murkup += `<li class="pagination__item">${afterPage}</li>`;
  }

  if (totalPages - 2 > curentPageToRender) {
    murkup += `<li class="pagination__item">${afterTwoPage}</li>`;
  }

  if (totalPages - 3 > curentPageToRender) {
    murkup += `<li class="pagination__item three-drops">...</li>`;
  }

  if (totalPages > curentPageToRender) {
    murkup += `<li class="pagination__item">${totalPages}</li>`;
    murkup += `<li class="pagination__item pagination__item_arrows">►</li>`;
  }

  paginationList.innerHTML = murkup;
  window.scrollBy(0, -10000);
  // window.scrollBy(0, -window.pageYOffset + 270);
}

// const clickToSckroll = document.querySelector('.pagination__item');
// clickToSckroll.addEventListener('click', up);

// document.getElementById(IDelemen).onclick = up();

// {/* <a href="#" onclick="return up()">наверх</a> */}

//////////////////плавна прокрутка

// var t;
// // function up() {
//   var top = Math.max(
//     document.body.scrollTop,
//     document.documentElement.scrollTop
//   );
//   if (top > 0) {
//     window.scrollBy(0, -100);
//    let t = setTimeout('up()', 20);
//   } else clearTimeout(t);
//   // return false;
// }

// ..........................................................

paginationBox.addEventListener('click', onLibrPaginationClick);

function onLibrPaginationClick(e) {
  // up();
  if (e.target.tagName !== 'LI') {
    return;
  }
  if (e.target.textContent === '...') {
    return;
  }

  if (e.target.textContent === '►') {
    curentPageToRender += 1;
    libraryListRender(curentPageToRender, totalPages);
    // librPagination(totalPages);
    // console.log('curentPageToRender: ', curentPageToRender);
    apiservice.page = curentPageToRender;
    return;
  }

  if (e.target.textContent === '◄') {
    curentPageToRender -= 1;
    libraryListRender(curentPageToRender, totalPages);
    // librPagination(totalPages);
    // console.log('curentPageToRender: ', curentPageToRender);
    apiservice.page = curentPageToRender;
    return;
  }

  if (true) {
    // console.log(e.target.textContent);
    curentPageToRender = Number(e.target.textContent);
    libraryListRender(curentPageToRender);
    // librPagination(totalPages);
    // console.log('curentPageToRender: ', curentPageToRender);
    apiservice.page = curentPageToRender;
  }
}
