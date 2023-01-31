import { openModalMovie } from './refs';

const WATCHED_KEY = 'watchedFilms';
const QUEUED_KEY = 'queuedFilms';

openModalMovie.addEventListener('click', onClickModal);

export function onClickModal(e) {
  const refs = {
    watched: document.querySelector('.btn_modal_watched'),
    queue: document.querySelector('.btn_modal_queued'),
  };

  if (e.target.classList.contains('btn_modal_watched')) {
    // console.log('7777777777777watched7777777777777777');
    // console.log('треба додать');
    // console.log(e.target.dataset.ttt);
    const currentId = Number(e.target.dataset.ttt);
    // console.log('currentId: ', currentId);
    // if (refs.watched.classList. === 'ADD TO WATCHED') {
    if (refs.watched.textContent === 'ADD TO WATCHED') {
      refs.watched.classList.toggle('current');

      try {
        const currentFilms = localStorage.getItem('currentFilms');
        // console.log(1);
        // console.log('currentFilms: ', currentFilms);
        const filmToAdd = JSON.parse(currentFilms).data.results.find(
          movie => movie.id === currentId
        );
        // console.log('filmToAdd', filmToAdd);
        // console.log(2);
        const watchedFilms = localStorage.getItem('watchedFilms');
        const InWatchedFilmsArr = JSON.parse(watchedFilms) || [];
        // console.log('watchedFilms: ', InWatchedFilmsArr);
        // console.log(3);
        InWatchedFilmsArr.push(filmToAdd);

        localStorage.setItem('watchedFilms', JSON.stringify(InWatchedFilmsArr));

        // console.log('filmToAdd: ', filmToAdd);
      } catch (error) {
        console.log(error.message);
      }

      // onBtnWatchedClick();

      refs.watched.textContent = 'DELETE FROM WATCHED';
    } else if (refs.watched.textContent === 'DELETE FROM WATCHED') {
      // console.log('currentId: ', e.target.dataset.ttt);

      const currentId = e.target.dataset.ttt;
      // console.log('currentId: ', currentId);
      refs.watched.classList.toggle('current');

      try {
        const watchedFilms = localStorage.getItem('watchedFilms');
        // console.log('currentFilms: ', currentFilms);
        const newwatchedFilms = JSON.parse(watchedFilms).filter(
          movie => movie.id != currentId
        );

        // console.log('newwatchedFilms', newwatchedFilms);

        // const watchedFilms = localStorage.getItem('watchedFilms') || [];

        // watchedFilms.push(filmToAdd);

        localStorage.setItem('watchedFilms', JSON.stringify(newwatchedFilms));

        // console.log('filmToAdd: ', filmToAdd);
      } catch (error) {
        console.log(error.message);
      }

      //  onBtnWatchedClick();

      // onDeleteBtnClick(filmToDelete, watchedArr, WATCHED_KEY);

      refs.watched.textContent = 'ADD TO WATCHED';
    }
    // return;
  }

  if (e.target.classList.contains('btn_modal_queued')) {
    // console.log('7777777777777777queue7777777777777');

    const currentId = Number(e.target.dataset.ttt);
    // console.log('currentId: ', currentId);
    // console.log('currentId: ', currentId);
    // if (refs.watched.classList. === 'ADD TO WATCHED') {
    if (refs.queue.textContent === 'ADD TO QUEUE') {
      refs.queue.classList.toggle('current');

      try {
        const currentFilms = localStorage.getItem('currentFilms');
        // console.log(1);
        // console.log('currentFilms: ', currentFilms);
        const filmToAdd = JSON.parse(currentFilms).data.results.find(
          movie => movie.id === currentId
        );
        // console.log('filmToAdd', filmToAdd);
        // console.log(2);
        const queuedFilms = localStorage.getItem('queuedFilms');
        const InWatchedFilmsArr = JSON.parse(queuedFilms) || [];
        // console.log('queuedFilms: ', InWatchedFilmsArr);
        // console.log(3);
        InWatchedFilmsArr.push(filmToAdd);

        localStorage.setItem('queuedFilms', JSON.stringify(InWatchedFilmsArr));
        onBtnQueueClick();
        // console.log('filmToAdd: ', filmToAdd);
      } catch (error) {
        console.log(error.message);
      }

      refs.queue.textContent = 'DELETE FROM QUEUE';
    } else if (refs.queue.textContent === 'DELETE FROM QUEUE') {
      // console.log('currentId: ', e.target.dataset.ttt);

      const currentId = e.target.dataset.ttt;
      // console.log('currentId: ', currentId);
      refs.queue.classList.toggle('current');

      try {
        const queuedFilms = localStorage.getItem('queuedFilms');
        // console.log('currentFilms: ', currentFilms);
        const newwatchedFilms = JSON.parse(queuedFilms).filter(
          movie => movie.id != currentId
        );

        // console.log('newwatchedFilms', newwatchedFilms);

        // const queuedFilms = localStorage.getItem('queuedFilms') || [];

        // queuedFilms.push(filmToAdd);

        localStorage.setItem('queuedFilms', JSON.stringify(newwatchedFilms));

        // console.log('filmToAdd: ', filmToAdd);
      } catch (error) {
        console.log(error.message);
      }
      // onDeleteBtnClick(filmToDelete, watchedArr, WATCHED_KEY);
      // onBtnQueueClick();
      refs.queue.textContent = 'ADD TO QUEUE';
    }
  }
}
