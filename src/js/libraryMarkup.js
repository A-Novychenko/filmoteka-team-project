import apiservice from './apiService';
import { libraryData } from './refs';
import { renderMarkupSearch } from './markupSearch';
// import { openModalMovie } from './refs';

const LibPaginationList = document.querySelector('.pagination__list');
const LibPaginationBox = document.querySelector('.pagination');
// LibPaginationBox.addEventListener('click', clickFunction);
LibPaginationBox.addEventListener('click', onLibrPaginationClick);

let totalPages;
let curentPageToRender;

export function libraryListRender(curentPage, totalPage) {
  LibPaginationList.innerHTML = '';
  apiservice.resetPage();

  let curentPageToRender = curentPage || apiservice.page;
  let totalPages = totalPage || 1;
  let watchedList;

  let libBlockToShow = localStorage.getItem('sourceForModal');
  // console.log('libBlockToShow: ', libBlockToShow);

  try {
    if (libBlockToShow === 'watchedFilms') {
      watchedList = localStorage.getItem('watchedFilms'); //watchedFilms
    } else {
      watchedList = localStorage.getItem('queuedFilms');
    }
  } catch (err) {
    console.log(err);
  }

  libraryData.innerHTML = '';

  try {
    if (watchedList && watchedList !== '[]') {
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
      } else if (screenWidth > 767 && screenWidth < 1280) {
        array_size = 8;
      } else {
        array_size = 9;
      }

      if (watchedListToRender.length > array_size) {
        const sliced_array = [];
        for (let i = 0; i < watchedListToRender.length; i += array_size) {
          sliced_array.push(watchedListToRender.slice(i, i + array_size));
        }

        totalPages = sliced_array.length;
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
        LibPaginationList.innerHTML = '';
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
  // console.log('librPagination: ');
  totalPages = totalPage;

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

  LibPaginationList.innerHTML = murkup;
  window.scrollBy(0, -10000);
  // window.scrollBy(0, -window.pageYOffset + 270);
}

// const clickToSckroll = document.querySelector('.pagination__item');
// clickToSckroll.addEventListener('click', up);

// document.getElementById(IDelemen).onclick = up();

// {/* <a href="#" onclick="return up()">наверх</a> */}

//////////////////плавна прокрутка

// ..........................................................



export function onLibrPaginationClick(e) {
  // console.log('onLibrPaginationClick: ');
  // up();

  // console.log('e.target.tagName: ', e.target.tagName);
  if (e.target.tagName !== 'LI') {
    
    return;
  }
  if (e.target.textContent === '...') {
    return;
  }
  // console.log('e.target.textContent: ', e.target.textContent);

  if (e.target.textContent === '►') {
    
    curentPageToRender += 1;
    libraryListRender(curentPageToRender, totalPages);
    apiservice.page = curentPageToRender;
    return;
  }

  if (e.target.textContent === '◄') {
    curentPageToRender -= 1;
    libraryListRender(curentPageToRender, totalPages);
    apiservice.page = curentPageToRender;
    return;
  }

  if (true) {
    curentPageToRender = Number(e.target.textContent);
    libraryListRender(curentPageToRender, totalPages);
    apiservice.page = curentPageToRender;
  }
}
