import { clicksMovie } from './refs';
import { openModalMovie } from './refs';
import { closeModalMovieBtn } from './refs';
import { renderMarkupModal } from './markupModal';
import { modalGallery } from './refs';
import { cleanHtmlTrailer } from './trailer';

clicksMovie.addEventListener('click', oneToggle);
closeModalMovieBtn.addEventListener('click', closeBtn);
openModalMovie.addEventListener('click', clickBackdropCloseModal);

modalGallery.addEventListener('click', onBtnBack);

let arrId;

export function oneToggle(evt) {
  if (!evt.target.closest('.movie__item')) {
    return;
  }

  try {
    document.body.classList.add('movie-modal-open');
    openModalMovie.classList.remove('is-hidden');

    window.addEventListener('keydown', keyPressEscCloseMovieModal);
    if (openModalMovie.classList.contains('is-hidden')) {
      window.removeEventListener('keydown', keyPressEscCloseMovieModal);
    }

    let localArray;
    const sourceForModal = localStorage.getItem('sourceForModal');
    if (sourceForModal === 'currentFilms') {
      const localMovie = JSON.parse(localStorage.getItem('currentFilms'));
      localArray = localMovie.data.results;
    } else if (sourceForModal === 'watchedFilms') {
      const localMovie = JSON.parse(localStorage.getItem('watchedFilms'));
      localArray = localMovie;
    } else if (sourceForModal === 'queuedFilms') {
      const localMovie = JSON.parse(localStorage.getItem('queuedFilms'));
      localArray = localMovie;
    }

    const li = evt.target.closest('.movie__item');
    const liId = li.dataset.movie;

    cleanHtml();
    arrId = localArray.find(arr => arr.id == liId);

    if (arrId == undefined) {
    } else
      modalGallery.insertAdjacentHTML('beforeend', renderMarkupModal(arrId));
  } catch (err) {
    console.log(err);
  }
}

export function clickBackdropCloseModal(e) {
  if (e.target === e.currentTarget) {
    modalClose();
  }
}

export function keyPressEscCloseMovieModal(evt) {
  const ESC_KEY_CODE = `Escape`;

  if (evt.code === ESC_KEY_CODE) {
    modalClose();
  }
}

export function closeBtn() {
  modalClose();
}

function modalClose() {
  closeModalMovieBtn.setAttribute('disabled', 'enabled');
  setTimeout(() => {
    closeModalMovieBtn.removeAttribute('disabled');
  }, 300);
  cleanHtmlTrailer();
  window.removeEventListener('keydown', keyPressEscCloseMovieModal);
  document.body.classList.remove('movie-modal-open');
  openModalMovie.classList.add('is-hidden');
}

export function cleanHtml() {
  modalGallery.innerHTML = '';
}

async function onBtnBack(evt) {
  try {
    const btnBack = evt.target.classList.contains('btn_modal__back');
    if (btnBack) {
      setTimeout(
        () => (modalGallery.innerHTML = renderMarkupModal(arrId)),
        150
      );
    }
  } catch (err) {
    console.log(err);
  }
}
