import apiservice from './apiservice';
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

function onBtnWatchedClick() {
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

onBtnWatchedClick();

export function libraryListRender(curentPage = 1) {
  let curentPageToRender = curentPage;
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
        librPagination(totalPages);

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

function librPagination(total = 1) {
  totalPages = total;
  let murkup = '';

  let beforeTwoPage = apiservice.page - 2;
  let beforePage = apiservice.page - 1;
  let afterPage = apiservice.page + 1;
  let afterTwoPage = apiservice.page + 2;

  if (apiservice.page > 1) {
    murkup += `<li class="pagination__item pagination__item_arrows">◄</li> `;
    murkup += `<li class="pagination__item">1</li>`;
  }

  if (apiservice.page > 4) {
    murkup += `<li class="pagination__item three-drops">...</li>`;
  }

  if (apiservice.page > 3) {
    murkup += `<li class="pagination__item">${beforeTwoPage}</li>`;
  }

  if (apiservice.page > 2) {
    murkup += `<li class="pagination__item">${beforePage}</li>`;
  }

  murkup += `<li class="pagination__item current">${apiservice.page}</li>`;

  if (totalPages - 1 > apiservice.page) {
    murkup += `<li class="pagination__item">${afterPage}</li>`;
  }

  if (totalPages - 2 > apiservice.page) {
    murkup += `<li class="pagination__item">${afterTwoPage}</li>`;
  }

  if (totalPages - 3 > apiservice.page) {
    murkup += `<li class="pagination__item three-drops">...</li>`;
  }

  if (totalPages > apiservice.page) {
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
    apiservice.page += 1;
    libraryListRender(apiservice.page);
    librPagination(totalPages);
    // console.log('apiservice.page: ', apiservice.page);

    return;
  }

  if (e.target.textContent === '◄') {
    apiservice.page -= 1;
    libraryListRender(apiservice.page);
    librPagination(totalPages);
    // console.log('apiservice.page: ', apiservice.page);

    return;
  }

  if (true) {
    // console.log(e.target.textContent);
    apiservice.page = Number(e.target.textContent);
    libraryListRender(apiservice.page);
    librPagination(totalPages);
    // console.log('apiservice.page: ', apiservice.page);
  }
}
