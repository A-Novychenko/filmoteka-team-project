import { clicksMovie } from './refs';
import { openModalMovie } from './refs';

const refs = {
  modal: document.querySelector('.js-test-modal'),
  watched: document.querySelector('.js-watched'),
  queue: document.querySelector('.js-queue'),
};
const WATCHED_KEY = 'watchedFilms';
const QUEUED_KEY = 'queuedFilms';
const OBJ_KEY = 'obj';

let watchedArr = [];
let queueArr = [];
let obj = [];

returnSavedWatched();
returnSavedQueue();

clicksMovie.addEventListener('click', onMovieClick);

function onMovieClick(evt) {
  // if (openModalMovie.classList.contains('is-hidden')) {
  //   // localStorage.removeItem(OBJ_KEY);

  // }

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
  // localStorage.setItem(OBJ_KEY, JSON.stringify(obj));
}

// function onMovieClick(evt) {
//   const localMovie = JSON.parse(localStorage.getItem('currentFilms'));
//   const localArray = localMovie.data.results;
//   console.log(localArray);
//   const li = evt.target.closest('.movie__item');
//   const liId = li.dataset.movie;
//   console.log(liId);

//   const arrId = localArray.find(arr => arr.id == liId);
//   console.log(arrId);

//   refs.watched.addEventListener('click', () => {
//     onAddBtnClick(arrId, watchedArr, WATCHED_KEY);
//     refs.watched.textContent = 'DELETE FROM WATCHED';

//     refs.watched.removeEventListener('click', () => {
//       onAddBtnClick(arrId, watchedArr, WATCHED_KEY);

//       // refs.watched.addEventListener('click', () => {
//       //   onDeleteBtnClick(arrId, watchedArr, WATCHED_KEY);
//       // });
//     });
//   });
// }

// const filmToAdd = watchedFilm1;
// const filmToDelete = watchedFilm1;

// function changeToDeleteWatchedBtn() {
//   refs.watched.textContent = 'DELETE FROM WATCHED';
//   refs.watched.addEventListener('click', onDeleteWatchedBtnClick123);
//   refs.watched.removeEventListener('click', onAddToWatchedBtnClick123);
// }

// function changeToAddWatchedBtn() {
//   refs.watched.textContent = 'ADD TO WATCHED';
//   refs.watched.addEventListener('click', onAddToWatchedBtnClick123);
//   refs.watched.removeEventListener('click', onDeleteWatchedBtnClick123);
// }

// function onDeleteWatchedBtnClick123(filmToDelete) {
//   onDeleteBtnClick(filmToDelete, watchedArr, WATCHED_KEY);
//   changeToAddWatchedBtn();
// }

// function onAddToWatchedBtnClick123(filmToDelete) {
//   onAddBtnClick(filmToDelete, watchedArr, WATCHED_KEY);
//   changeToDeleteWatchedBtn();
// }

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

refs.queue.addEventListener('click', onAlexVar);

function onAlexVar() {
  if (refs.queue.textContent === 'ADD TO QUEUE') {
    onAddBtnClick(obj[0], queueArr, QUEUED_KEY);
    refs.queue.textContent = 'DELETE FROM QUEUE';
  } else if (refs.queue.textContent === 'DELETE FROM QUEUE') {
    onDeleteBtnClick(obj[0], queueArr, QUEUED_KEY);
    refs.queue.textContent = 'ADD TO QUEUE';
  }
}

async function onAddToQueueBtnClick123() {
  // const object = await JSON.parse(localStorage.getItem(OBJ_KEY));
  // console.log(object);
  onAddBtnClick(obj, queueArr, QUEUED_KEY);
  changeToDeleteQueueBtn();
}

async function onDeleteQueueBtnClick123() {
  // const object = await JSON.parse(localStorage.getItem(OBJ_KEY));
  onDeleteBtnClick(obj, queueArr, QUEUED_KEY);
  changeToAddQueueBtn();
}

function changeToDeleteQueueBtn() {
  refs.queue.textContent = 'DELETE FROM QUEUE';
  refs.queue.addEventListener('click', onDeleteQueueBtnClick123);
  refs.queue.removeEventListener('click', onAddToQueueBtnClick123);
}

function changeToAddQueueBtn() {
  refs.queue.textContent = 'ADD TO QUEUE';
  refs.queue.addEventListener('click', onAddToQueueBtnClick123);
  refs.queue.removeEventListener('click', onDeleteQueueBtnClick123);
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

// refs.modal.addEventListener('click', onClickCheck);

export function onClickCheck(film) {
  // localStorage.setItem(
  //   QUEUED_KEY,
  //   JSON.stringify([watchedFilm2, watchedFilm1])
  // );
  // localStorage.setItem(WATCHED_KEY, JSON.stringify([watchedFilm3]));

  onClickWatchedCheck(film);
  onClickQueueCheck(film);
}

export function onClickWatchedCheck(film) {
  watchedArr = JSON.parse(localStorage.getItem(WATCHED_KEY));
  if (!watchedArr) {
    console.log('В WATCHED пусто');
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
    }
  }
}

function onClickQueueCheck(film) {
  queueArr = JSON.parse(localStorage.getItem(QUEUED_KEY));
  // console.log(queueArr);
  if (!queueArr) {
    console.log('В QUEUE пусто');
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
      // onAddToWatchedBtnClick(filmEvtCurrentTarget);
    }
  }
}
