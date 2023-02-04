import { openModalMovie } from './refs';

import { libraryListRender } from './libraryMarkup';

openModalMovie.addEventListener('click', onClickModal);

export function onClickModal(e) {
  const refs = {
    watched: document.querySelector('.btn_modal_watched'),
    queue: document.querySelector('.btn_modal_queued'),
  };

  //////   перевірка звідки і куди звертатися з модалки
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

  if (e.target.classList.contains('btn_modal_watched')) {
    const currentId = Number(e.target.dataset.ttt);

    if (refs.watched.textContent === 'ADD TO WATCHED') {
      refs.watched.classList.toggle('current');
      try {
        let filmToAdd = localArray.find(movie => movie.id === currentId);

        if (!filmToAdd) {
          let filmToAddArr = JSON.parse(sessionStorage.getItem('copyFilm'));
          filmToAdd = filmToAddArr[0];
        }

        const watchedFilms = localStorage.getItem('watchedFilms');
        const InWatchedFilmsArr = JSON.parse(watchedFilms) || [];

        InWatchedFilmsArr.push(filmToAdd);

        localStorage.setItem('watchedFilms', JSON.stringify(InWatchedFilmsArr));
      } catch (error) {
        console.log(error.message);
      }

      refs.watched.textContent = 'DELETE FROM WATCHED';
      if (sourceForModal !== 'currentFilms') {
        libraryListRender();
      }
    } else if (refs.watched.textContent === 'DELETE FROM WATCHED') {
      const currentId = e.target.dataset.ttt;
      refs.watched.classList.toggle('current');

      try {
        const watchedFilms = localStorage.getItem('watchedFilms');

        ///////////////////////записую копію видаленого об'єкта/////////////////////////
        const copyFilm = JSON.parse(watchedFilms).filter(
          movie => movie.id == currentId
        );
        sessionStorage.setItem('copyFilm', JSON.stringify(copyFilm));
        /////////////////////////////////////////////////////////////////////////////////

        const newwatchedFilms = JSON.parse(watchedFilms).filter(
          movie => movie.id != currentId
        );

        localStorage.setItem('watchedFilms', JSON.stringify(newwatchedFilms));
      } catch (error) {
        console.log(error.message);
      }

      refs.watched.textContent = 'ADD TO WATCHED';
      if (sourceForModal !== 'currentFilms') {
        libraryListRender();
      }
    }
  }

  if (e.target.classList.contains('btn_modal_queued')) {
    const currentId = Number(e.target.dataset.ttt);

    if (refs.queue.textContent === 'ADD TO QUEUE') {
      refs.queue.classList.toggle('current');

      let filmToAdd;
      try {
        filmToAdd = localArray.find(movie => movie.id === currentId);

        if (!filmToAdd) {
          let filmToAddArr = JSON.parse(sessionStorage.getItem('copyFilm'));
          filmToAdd = filmToAddArr[0];
        }

        const queuedFilms = localStorage.getItem('queuedFilms');
        const InWatchedFilmsArr = JSON.parse(queuedFilms) || [];

        InWatchedFilmsArr.push(filmToAdd);

        localStorage.setItem('queuedFilms', JSON.stringify(InWatchedFilmsArr));
      } catch (error) {
        console.log(error.message);
      }

      refs.queue.textContent = 'DELETE FROM QUEUE';
      if (sourceForModal !== 'currentFilms') {
        libraryListRender();
      }
    } else if (refs.queue.textContent === 'DELETE FROM QUEUE') {
      const currentId = e.target.dataset.ttt;
      refs.queue.classList.toggle('current');

      try {
        const queuedFilms = localStorage.getItem('queuedFilms');

        ///////////////////////записую копію видаленого об'єкта/////////////////////////
        const copyFilm = JSON.parse(queuedFilms).filter(
          movie => movie.id == currentId
        );
        sessionStorage.setItem('copyFilm', JSON.stringify(copyFilm));
        // console.log('888', sessionStorage.getItem('copyFilm'));
        /////////////////////////////////////////////////////////////////////////////////

        const newwatchedFilms = JSON.parse(queuedFilms).filter(
          movie => movie.id != currentId
        );

        localStorage.setItem('queuedFilms', JSON.stringify(newwatchedFilms));
      } catch (error) {
        console.log(error.message);
      }
      refs.queue.textContent = 'ADD TO QUEUE';
      if (sourceForModal !== 'currentFilms') {
        libraryListRender();
      }
    }
  }
}
