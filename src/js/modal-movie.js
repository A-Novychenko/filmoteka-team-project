import { clicksMovie } from './refs';
import { openModalMovie } from './refs';
import { closeModalMovieBtn } from './refs';
import { renderMarkupModal } from './markupModal';
import { modalGallery } from './refs';

// console.log(localMovie.data.results);

clicksMovie.addEventListener('click', oneToggle);
closeModalMovieBtn.addEventListener('click', closeBtn);
openModalMovie.addEventListener('click', clickBackdropCloseTeamModal);

export function oneToggle(evt) {
  try {
    const sourceForModal = localStorage.getItem('sourceForModal');
    // console.log('sourceForModal: ', sourceForModal);

    openModalMovie.classList.toggle('is-hidden');
    window.addEventListener('keydown', keyPressEscCloseMovieModal);
    if (openModalMovie.classList.contains('is-hidden')) {
      window.removeEventListener('keydown', keyPressEscCloseMovieModal);
    }

    // console.log('9999999999999999999999999999999');

    let localArray;
    /////////////////  вибір джерела даних залежно від того, де відкрита модалка
    if (sourceForModal === 'currentFilms') {
      const localMovie = JSON.parse(localStorage.getItem('currentFilms'));
      localArray = localMovie.data.results;
    } else if (sourceForModal === 'watchedFilms') {
      const localMovie = JSON.parse(localStorage.getItem('watchedFilms'));
      localArray = localMovie;
    }
    if (sourceForModal === 'queuedFilms') {
      const localMovie = JSON.parse(localStorage.getItem('queuedFilms'));
      localArray = localMovie;
    }

    // console.log('localArray', localArray);

    // const localMovie = JSON.parse(localStorage.getItem('currentFilms'));
    // const localArray = localMovie.data.results;
    //  console.log(localArray);
    const li = evt.target.closest('.movie__item');
    const liId = li.dataset.movie;
    //  console.log(liId);

    cleanHtml();
    const arrId = localArray.find(arr => arr.id == liId);
    //  console.log(arrId);
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
  }
}

export function keyPressEscCloseMovieModal(evt) {
  const ESC_KEY_CODE = `Escape`;

  if (evt.code === ESC_KEY_CODE) {
    window.removeEventListener('keydown', keyPressEscCloseMovieModal);

    openModalMovie.classList.toggle('is-hidden');
  }
}

export function closeBtn() {
  // openModalMovie.classList.toggle('is-hidden')
  setTimeout(() => openModalMovie.classList.add('is-hidden'), 150);
}

export function cleanHtml() {
  modalGallery.innerHTML = '';
}
