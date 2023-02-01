import { openModalMovie } from './refs';

openModalMovie.addEventListener('click', onClickModal);

export function onClickModal(e) {
  const refs = {
    watched: document.querySelector('.btn_modal_watched'),
    queue: document.querySelector('.btn_modal_queued'),
  };

  if (e.target.classList.contains('btn_modal_watched')) {
    const currentId = Number(e.target.dataset.ttt);

    if (refs.watched.textContent === 'ADD TO WATCHED') {
      refs.watched.classList.toggle('current');

      try {
        const currentFilms = localStorage.getItem('currentFilms');
        const filmToAdd = JSON.parse(currentFilms).data.results.find(
          movie => movie.id === currentId
        );
        const watchedFilms = localStorage.getItem('watchedFilms');
        const InWatchedFilmsArr = JSON.parse(watchedFilms) || [];

        InWatchedFilmsArr.push(filmToAdd);

        localStorage.setItem('watchedFilms', JSON.stringify(InWatchedFilmsArr));
      } catch (error) {
        console.log(error.message);
      }

      refs.watched.textContent = 'DELETE FROM WATCHED';
    } else if (refs.watched.textContent === 'DELETE FROM WATCHED') {
      const currentId = e.target.dataset.ttt;
      refs.watched.classList.toggle('current');

      try {
        const watchedFilms = localStorage.getItem('watchedFilms');
        const newwatchedFilms = JSON.parse(watchedFilms).filter(
          movie => movie.id != currentId
        );

        localStorage.setItem('watchedFilms', JSON.stringify(newwatchedFilms));
      } catch (error) {
        console.log(error.message);
      }

      refs.watched.textContent = 'ADD TO WATCHED';
    }
  }

  if (e.target.classList.contains('btn_modal_queued')) {
    const currentId = Number(e.target.dataset.ttt);

    if (refs.queue.textContent === 'ADD TO QUEUE') {
      refs.queue.classList.toggle('current');

      try {
        const currentFilms = localStorage.getItem('currentFilms');
        const filmToAdd = JSON.parse(currentFilms).data.results.find(
          movie => movie.id === currentId
        );

        const queuedFilms = localStorage.getItem('queuedFilms');
        const InWatchedFilmsArr = JSON.parse(queuedFilms) || [];

        InWatchedFilmsArr.push(filmToAdd);

        localStorage.setItem('queuedFilms', JSON.stringify(InWatchedFilmsArr));
      } catch (error) {
        console.log(error.message);
      }

      refs.queue.textContent = 'DELETE FROM QUEUE';
    } else if (refs.queue.textContent === 'DELETE FROM QUEUE') {
      const currentId = e.target.dataset.ttt;
      refs.queue.classList.toggle('current');

      try {
        const queuedFilms = localStorage.getItem('queuedFilms');
        const newwatchedFilms = JSON.parse(queuedFilms).filter(
          movie => movie.id != currentId
        );

        localStorage.setItem('queuedFilms', JSON.stringify(newwatchedFilms));
      } catch (error) {
        console.log(error.message);
      }
      refs.queue.textContent = 'ADD TO QUEUE';
    }
  }
}
