import { clicksMovie } from './refs';
import { openModalMovie } from './refs';

const refs = {
  modal: document.querySelector('.js-test-modal'),
  watched: document.querySelector('.js-watched'),
  queue: document.querySelector('.js-queue'),
};
const WATCHED_KEY = 'watchedFilms';
const QUEUED_KEY = 'queuedFilms';

let watchedArr = [];
let queueArr = [];
let obj = [];

returnSavedWatched();
returnSavedQueue();

clicksMovie.addEventListener('click', onMovieClick);
refs.queue.addEventListener('click', onQueueClick);
refs.watched.addEventListener('click', onWatchedClick);

function onMovieClick(evt) {
  obj = [];

  const localMovie = JSON.parse(localStorage.getItem('currentFilms'));
  const localArray = localMovie.data.results;
  console.log(localArray);
  const li = evt.target.closest('.movie__item');
  const liId = li.dataset.movie;
  console.log(liId);

  const arrId = localArray.find(arr => arr.id == liId);
  console.log(arrId);
  obj.push(arrId);
  console.log(obj);
}

function onAddBtnClick(filmToAdd, arr, key) {
  arr = arr || [];
  arr.push(filmToAdd);
  console.log('After Adding', arr);
  localStorage.setItem(`${key}`, JSON.stringify(arr));
  // Перерисовка интерфейса ???
}

function onDeleteBtnClick(filmToDelete, arr, key) {
  const filmToDeleteId = arr.findIndex(film => film.id === filmToDelete.id);
  arr.splice(filmToDeleteId, 1);
  console.log('After Delete', arr);
  localStorage.setItem(`${key}`, JSON.stringify(arr));
  // Перерисовка интерфейса ???
}

function onQueueClick() {
  if (refs.queue.textContent === 'ADD TO QUEUE') {
    const lastMovieIndex = obj.length - 1;
    onAddBtnClick(obj[lastMovieIndex], queueArr, QUEUED_KEY);
    refs.queue.textContent = 'DELETE FROM QUEUE';
  } else if (refs.queue.textContent === 'DELETE FROM QUEUE') {
    const lastMovieIndex = obj.length - 1;
    onDeleteBtnClick(obj[lastMovieIndex], queueArr, QUEUED_KEY);
    refs.queue.textContent = 'ADD TO QUEUE';
  }
}

function onWatchedClick() {
  if (refs.watched.textContent === 'ADD TO WATCHED') {
    const lastMovieIndex = obj.length - 1;
    onAddBtnClick(obj[lastMovieIndex], watchedArr, WATCHED_KEY);
    refs.watched.textContent = 'DELETE FROM WATCHED';
  } else if (refs.watched.textContent === 'DELETE FROM WATCHED') {
    const lastMovieIndex = obj.length - 1;
    onDeleteBtnClick(obj[lastMovieIndex], watchedArr, WATCHED_KEY);
    refs.watched.textContent = 'ADD TO WATCHED';
  }
}

async function returnSavedWatched() {
  try {
    const watchedArrData = await JSON.parse(localStorage.getItem(WATCHED_KEY));

    if (!watchedArrData) {
      return;
    } else {
      return watchedArrData;
    }
  } catch (error) {
    console.log(error.message);
  }
}

async function returnSavedQueue() {
  try {
    const queueArrData = await JSON.parse(localStorage.getItem(QUEUED_KEY));

    if (!queueArrData) {
      return;
    } else {
      return queueArrData;
    }
  } catch (error) {
    console.log(error.message);
  }
}

export function onClickCheck(film) {
  onClickWatchedCheck(film);
  onClickQueueCheck(film);
}

export function onClickWatchedCheck(film) {
  watchedArr = JSON.parse(localStorage.getItem(WATCHED_KEY));
  if (!watchedArr) {
    console.log('В WATCHED пусто');
    refs.watched.textContent = 'ADD TO WATCHED';
    return;
    // Остаются кнопки 'Add to watched'
  } else if (watchedArr.length === 1) {
    console.log('Before Add to WATCHED', watchedArr);
    // проверяем есть ли он в списке Watched

    if (watchedArr[0].id === film.id) {
      // на кнопке Watched должно быть написано Удалить
      console.log(watchedArr[0].id);
      console.log(film.id);
      console.log('Такой фильм в WATCHED уже eсть');
      refs.watched.textContent = 'DELETE FROM WATCHED';
      return;
    } else {
      //  Если фильма нет, на кнопке Watched есть ивент лисенер с ф.onAddToWatchedBtnClick
      refs.watched.textContent = 'ADD TO WATCHED';
      console.log('Этого фильма нет в WATCHED');
    }
  } else {
    const clickedFilmToCheckW = watchedArr.find(movie => movie.id === film.id);
    console.log(film.id);
    if (clickedFilmToCheckW) {
      // на кнопке Watched должно быть написано Удалить
      console.log('Такой фильм в WATCHED уже eсть');
      refs.watched.textContent = 'DELETE FROM WATCHED';
      return;
    } else {
      //  Если фильма нет, на кнопке Watched есть ивент лисенер с ф.onAddToWatchedBtnClick
      console.log('Этого фильма нет в WATCHED');
      refs.watched.textContent = 'ADD TO WATCHED';
    }
  }
}

function onClickQueueCheck(film) {
  queueArr = JSON.parse(localStorage.getItem(QUEUED_KEY));
  // console.log(queueArr);
  if (!queueArr) {
    console.log('В QUEUE пусто');
    refs.queue.textContent = 'ADD TO QUEUE';
    return;
    // Остаются кнопки 'Add to queue'
  } else if (queueArr.length === 1) {
    console.log('Before Add to QUEUE', queueArr);
    // проверяем есть ли он в списке Queue

    if (queueArr[0].id === film.id) {
      // на кнопке Queue должно быть написано Удалить
      console.log(queueArr[0].id);
      console.log(film.id);
      console.log('Такой фильм в QUEUE уже eсть');
      refs.queue.textContent = 'DELETE FROM QUEUE';
      return;
    } else {
      //  Если фильма нет, на кнопке Watched есть ивент лисенер с ф.onAddToWatchedBtnClick
      // Клик на кнопку "Add to watched"
      console.log('Этого фильма нет в QUEUE');
      refs.queue.textContent = 'ADD TO QUEUE';
      // onAddToWatchedBtnClick(filmEvtCurrentTarget);
    }
  } else {
    const clickedFilmToCheck = queueArr.find(movie => movie.id === film.id);

    console.log(film.id);
    if (clickedFilmToCheck) {
      // на кнопке Watched должно быть написано Удалить
      console.log('Такой фильм в QUEUE уже eсть');
      refs.queue.textContent = 'DELETE FROM QUEUE';
      return;
    } else {
      //  Если фильма нет, на кнопке Watched есть ивент лисенер с ф.onAddToWatchedBtnClick
      // Клик на кнопку "Add to watched"
      console.log('Этого фильма нет в QUEUE');
      refs.queue.textContent = 'ADD TO QUEUE';
      // onAddToWatchedBtnClick(filmEvtCurrentTarget);
    }
  }
}
