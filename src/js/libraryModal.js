import { renderMarkupModal } from './markupModal';
// import { cleanHtml } from "./markupSearch";   --- 69 - імпорт одноіменної функції
import { modalGallery } from './refs';

import { openModalMovie } from './refs';
import { closeModalMovieBtn } from './refs';
import { libraryListRender } from './libraryMarkup';
// import { onBtnWatchedClick } from './libraryMarkup';


const libraryModalClick = document.querySelector('.js-library-data');

libraryModalClick.addEventListener('click', oneToggle);
closeModalMovieBtn.addEventListener('click', closeBtn);
openModalMovie.addEventListener('click', clickBackdropCloseTeamModal);

export function oneToggle(evt) {
  // console.log('oneToggle: ');

  /////////////////////////////////перевірка, якщо пустий список - модалка не відкривається
  // console.log(evt.target);
  // console.log(evt.target.classList);
  if (
    !evt.target.closest('.movie__item')
    // evt.target.closest('.no-data') ||
    // !evt.target.closest('.movie__item') ///movie__item    evt.target.classList.contains.contains('library__list')
  ) {
    // console.log('не запускаємо модалку');
    return;
  }

  try {
    openModalMovie.classList.toggle('is-hidden');
    window.addEventListener('keydown', keyPressEscCloseMovieModal);
    if (openModalMovie.classList.contains('is-hidden')) {
      window.removeEventListener('keydown', keyPressEscCloseMovieModal);
    }

    let localArray;
    const sourceForModal = localStorage.getItem('sourceForModal');
    // console.log('sourceForModal: ', sourceForModal);
    /////////////////  вибір джерела даних залежно від того, де відкрита модалка
    if (sourceForModal === 'watchedFilms') {
      const localMovie = JSON.parse(localStorage.getItem('watchedFilms'));
      localArray = localMovie;
    }
    if (sourceForModal === 'queuedFilms') {
      const localMovie = JSON.parse(localStorage.getItem('queuedFilms'));
      localArray = localMovie;
    }

    // const localMovie = JSON.parse(localStorage.getItem('currentFilms'));
    // // console.log();
    // const localArray = localMovie.data.results;
    // console.log(localArray);
    const li = evt.target.closest('.movie__item');
    const liId = li.dataset.movie;
    // console.log(liId);

    cleanHtml();
    const arrId = localArray.find(arr => arr.id == liId);
    // console.log(arrId);
    if (arrId == undefined) {
      //  console.log(localArray);
    } else
      modalGallery.insertAdjacentHTML('beforeend', renderMarkupModal(arrId));
  } catch (err) {
    console.log(err);
  }
}

export function clickBackdropCloseTeamModal(e) {
  if (e.target === e.currentTarget) {
    openModalMovie.classList.toggle('is-hidden');
    libraryListRender();
  }
}

export function keyPressEscCloseMovieModal(evt) {
  const ESC_KEY_CODE = `Escape`;

  if (evt.code === ESC_KEY_CODE) {
    window.removeEventListener('keydown', keyPressEscCloseMovieModal);

    openModalMovie.classList.toggle('is-hidden');
    libraryListRender();
  }
}

export function closeBtn() {
  // openModalMovie.classList.toggle('is-hidden')
  setTimeout(
    () => openModalMovie.classList.add('is-hidden', libraryListRender()),//
    150
  );
}

export function cleanHtml() {
  modalGallery.innerHTML = '';
}
