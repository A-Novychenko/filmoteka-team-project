
// // const refs = {
// //   modal: document.querySelector('.js-test-modal'),
// //   watched: document.querySelector('.js-test-watched'),
// //   queue: document.querySelector('.js-test-queue'),
// // };
// // const WATCHED_KEY = 'watchedFilms';
// // const QUEUED_KEY = 'queuedFilms';

// // let watchedArr = [];
// // let queueArr = [];

// // returnSavedWatched();
// // returnSavedQueue();

// // const watchedFilm1 = {
// //   adult: false,
// //   backdrop_path: '/nAUpDd7iGfESDomaeAWKeNABw4I.jpg',
// //   genre_ids: [28, 12, 878],
// //   id: 545611,
// //   media_type: 'movie',
// //   original_language: 'en',
// //   original_title: 'Everything Everywhere All at Once',
// //   overview:
// //     "An aging Chinese immigrant is swept up in an insane adventure, where she alone can save what's important to her by connecting with the lives she could have led in other universes.",
// //   popularity: 254.782,
// //   poster_path: '/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg',
// //   release_date: '2022-03-24',
// //   title: 'Everything Everywhere All at Once',
// //   video: false,
// //   vote_average: 8.041,
// //   vote_count: 2823,
// // };
// // const watchedFilm2 = {
// //   adult: false,
// //   backdrop_path: '/1vXD5HXqkhvsXFHE7KmCPZGPR1e.jpg',
// //   genre_ids: [18, 35],
// //   id: 674324,
// //   media_type: 'movie',
// //   original_language: 'en',
// //   original_title: 'The Banshees of Inisherin',
// //   overview:
// //     'Two lifelong friends find themselves at an impasse when one abruptly ends their relationship, with alarming consequences for both of them.',
// //   popularity: 216.41,
// //   poster_path: '/4yFG6cSPaCaPhyJ1vtGOtMD1lgh.jpg',
// //   release_date: '2022-10-21',
// //   title: 'The Banshees of Inisherin',
// //   video: false,
// //   vote_average: 7.5,
// //   vote_count: 601,
// // };

// // const filmToAdd = watchedFilm1;
// // const filmToDelete = watchedFilm1;

// // refs.watched.addEventListener('click', onAddToWatchedBtnClick123);

// // function onAddToWatchedBtnClick123() {
// //   onAddBtnClick(filmToAdd, watchedArr, WATCHED_KEY);
// //   changeToDeleteWatchedBtn();
// // }

// // function changeToDeleteWatchedBtn() {
// //   refs.watched.textContent = 'DELETE FROM WATCHED';
// //   refs.watched.addEventListener('click', onDeleteWatchedBtnClick123);
// //   refs.watched.removeEventListener('click', onAddToWatchedBtnClick123);
// // }

// // function changeToAddWatchedBtn() {
// //   refs.watched.textContent = 'ADD TO WATCHED';
// //   refs.watched.addEventListener('click', onAddToWatchedBtnClick123);
// //   refs.watched.removeEventListener('click', onDeleteWatchedBtnClick123);
// // }

// // function onDeleteWatchedBtnClick123() {
// //   onDeleteBtnClick(filmToDelete, watchedArr, WATCHED_KEY);
// //   changeToAddWatchedBtn();
// // }

// // function onAddBtnClick(filmToAdd, arr, key) {
// //   arr.push(filmToAdd);
// //   console.log('After Adding', arr);
// //   localStorage.setItem(`${key}`, JSON.stringify(arr));
// //   // Перерисовка интерфейса ???
// // }

// // function onDeleteBtnClick(filmToDelete, arr, key) {
// //   // const filmToDelete = evt.currentTarget;
// //   const filmToDeleteId = arr.findIndex(film => film.id === filmToDelete.id);
// //   arr.splice(filmToDeleteId, 1);
// //   console.log('After Delete', arr);
// //   localStorage.setItem(`${key}`, JSON.stringify(arr));
// //   // Перерисовка интерфейса ???
// // }

// // refs.queue.addEventListener('click', onAddToQueueBtnClick123);

// // function onAddToQueueBtnClick123() {
// //   onAddBtnClick(filmToAdd, queueArr, QUEUED_KEY);
// //   changeToDeleteQueueBtn();
// // }

// // function onDeleteQueueBtnClick123() {
// //   onDeleteBtnClick(filmToDelete, queueArr, QUEUED_KEY);
// //   changeToAddQueueBtn();
// // }

// // function changeToDeleteQueueBtn() {
// //   refs.queue.textContent = 'DELETE FROM QUEUE';
// //   refs.queue.addEventListener('click', onDeleteQueueBtnClick123);
// //   refs.queue.removeEventListener('click', onAddToQueueBtnClick123);
// // }

// // function changeToAddQueueBtn() {
// //   refs.queue.textContent = 'ADD TO QUEUE';
// //   refs.queue.addEventListener('click', onAddToQueueBtnClick123);
// //   refs.queue.removeEventListener('click', onDeleteQueueBtnClick123);
// // }

// // async function returnSavedWatched() {
// //   try {
// //     const watchedArrData = await JSON.parse(localStorage.getItem(WATCHED_KEY));

// //     if (!watchedArrData) {
// //       return;
// //     } else {
// //       return watchedArrData;
// //     }
// //   } catch (error) {
// //     console.log(error.message);
// //   }
// // }

// // async function returnSavedQueue() {
// //   try {
// //     const queueArrData = await JSON.parse(localStorage.getItem(QUEUED_KEY));

// //     if (!queueArrData) {
// //       return;
// //     } else {
// //       return queueArrData;
// //     }
// //   } catch (error) {
// //     console.log(error.message);
// //   }
// // }

// // refs.modal.addEventListener('click', onClick);

// // async function onClick() {
// //   //   localStorage.setItem(
// //   //     QUEUED_KEY,
// //   //     JSON.stringify([watchedFilm2, watchedFilm1])
// //   //   );
// //   //   localStorage.setItem(
// //   //     WATCHED_KEY,
// //   //     JSON.stringify([watchedFilm1, watchedFilm2])
// //   //   );

// //   watchedArr = JSON.parse(localStorage.getItem(WATCHED_KEY));
// //   if (!watchedArr) {
// //     console.log('В WATCHED пусто');
// //     return;
// //     // Остаются кнопки 'Add to watched' и 'Add to queue'
// //   } else if (watchedArr.length === 1) {
// //     console.log('Before Add to WATCHED', watchedArr);
// //     // проверяем есть ли он в списке Watched и Queue

// //     if (watchedArr[0].id === watchedFilm1.id) {
// //       // на кнопке Watched должно быть написано Удалить
// //       console.log('Такой фильм в WATCHED уже eсть');
// //       changeToDeleteWatchedBtn();
// //       return;
// //     } else {
// //       //  Если фильма нет, на кнопке Watched есть ивент лисенер с ф.onAddToWatchedBtnClick
// //       // Клик на кнопку "Add to watched"
// //       console.log('Этого фильма нет в WATCHED');
// //       // onAddToWatchedBtnClick(filmEvtCurrentTarget);
// //     }
// //   } else {
// //     const clickedFilmToCheckW = watchedArr.find(
// //       film => film.id === watchedFilm1.id
// //     );
// //     if (clickedFilmToCheckW) {
// //       // на кнопке Watched должно быть написано Удалить
// //       console.log('Такой фильм в WATCHED уже eсть');
// //       changeToDeleteWatchedBtn();
// //       return;
// //     } else {
// //       //  Если фильма нет, на кнопке Watched есть ивент лисенер с ф.onAddToWatchedBtnClick
// //       // Клик на кнопку "Add to watched"
// //       console.log('Этого фильма нет в WATCHED');
// //       // onAddToWatchedBtnClick(filmEvtCurrentTarget);
// //     }
// //   }

// //   queueArr = JSON.parse(localStorage.getItem(QUEUED_KEY));
// //   if (!queueArr) {
// //     console.log('В QUEUE пусто');
// //     return;
// //     // Остаются кнопки 'Add to queue'
// //   } else if (queueArr.length === 1) {
// //     console.log('Before Add to QUEUE', queueArr);
// //     // проверяем есть ли он в списке Queue

// //     if (queueArr[0].id === watchedFilm1.id) {
// //       // на кнопке Queue должно быть написано Удалить
// //       console.log('Такой фильм в QUEUE уже eсть');
// //       changeToDeleteQueueBtn();
// //       return;
// //     } else {
// //       //  Если фильма нет, на кнопке Watched есть ивент лисенер с ф.onAddToWatchedBtnClick
// //       // Клик на кнопку "Add to watched"
// //       console.log('Этого фильма нет в QUEUE');
// //       // onAddToWatchedBtnClick(filmEvtCurrentTarget);
// //     }
// //   } else {
// //     const clickedFilmToCheck = queueArr.find(
// //       film => film.id === watchedFilm1.id
// //     );
// //     if (clickedFilmToCheck) {
// //       // на кнопке Watched должно быть написано Удалить
// //       console.log('Такой фильм в QUEUE уже eсть');
// //       changeToDeleteQueueBtn();
// //       return;
// //     } else {
// //       //  Если фильма нет, на кнопке Watched есть ивент лисенер с ф.onAddToWatchedBtnClick
// //       // Клик на кнопку "Add to watched"
// //       console.log('Этого фильма нет в QUEUE');
// //       // onAddToWatchedBtnClick(filmEvtCurrentTarget);
// //     }
// //   }
// // }

// ///////////////////////////переробляю/////////////////////////////////////

import { openModalMovie } from './refs';
import { onBtnWatchedClick } from './libraryMarkup';
import { onBtnQueueClick } from './libraryMarkup';

// const watchedFilm1 = {
//   adult: false,
//   backdrop_path: '/nAUpDd7iGfESDomaeAWKeNABw4I.jpg',
//   genre_ids: [28, 12, 878],
//   id: 545611,
//   media_type: 'movie',
//   original_language: 'en',
//   original_title: 'Everything Everywhere All at Once',
//   overview:
//     "An aging Chinese immigrant is swept up in an insane adventure, where she alone can save what's important to her by connecting with the lives she could have led in other universes.",
//   popularity: 254.782,
//   poster_path: '/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg',
//   release_date: '2022-03-24',
//   title: 'Everything Everywhere All at Once',
//   video: false,
//   vote_average: 8.041,
//   vote_count: 2823,
// };
// const watchedFilm2 = {
//   adult: false,
//   backdrop_path: '/1vXD5HXqkhvsXFHE7KmCPZGPR1e.jpg',
//   genre_ids: [18, 35],
//   id: 674324,
//   media_type: 'movie',
//   original_language: 'en',
//   original_title: 'The Banshees of Inisherin',
//   overview:
//     'Two lifelong friends find themselves at an impasse when one abruptly ends their relationship, with alarming consequences for both of them.',
//   popularity: 216.41,
//   poster_path: '/4yFG6cSPaCaPhyJ1vtGOtMD1lgh.jpg',
//   release_date: '2022-10-21',
//   title: 'The Banshees of Inisherin',
//   video: false,
//   vote_average: 7.5,
//   vote_count: 601,
// };

const WATCHED_KEY = 'watchedFilms';
const QUEUED_KEY = 'queuedFilms';

// const filmToAdd = watchedFilm1;
// const filmToDelete = watchedFilm1;

// let watchedArr = [];
// let queueArr = [];

openModalMovie.addEventListener('click', onClickModal);

function onClickModal(e) {
  const refs = {
    watched: document.querySelector('.btn_modal_watched'),
    queue: document.querySelector('.btn_modal_queued'),
  };

  // async function onClick() {
  //   localStorage.setItem(
  //     QUEUED_KEY,
  //     JSON.stringify([watchedFilm2, watchedFilm1])
  //   );
  //   localStorage.setItem(
  //     WATCHED_KEY,
  //     JSON.stringify([watchedFilm1, watchedFilm2])
  //   );

  //   watchedArr = JSON.parse(localStorage.getItem(WATCHED_KEY));
  //   if (!watchedArr) {
  //     console.log('В WATCHED пусто');
  //     return;
  //     // Остаются кнопки 'Add to watched' и 'Add to queue'
  //   } else if (watchedArr.length === 1) {
  //     console.log('Before Add to WATCHED', watchedArr);
  //     // проверяем есть ли он в списке Watched и Queue

  //     if (watchedArr[0].id === watchedFilm1.id) {
  //       // на кнопке Watched должно быть написано Удалить
  //       console.log('Такой фильм в WATCHED уже eсть');
  //       // changeToDeleteWatchedBtn();
  //       refs.watched.textContent = 'DELETE FROM WATCHED';
  //       return;
  //     } else {
  //       //  Если фильма нет, на кнопке Watched есть ивент лисенер с ф.onAddToWatchedBtnClick
  //       // Клик на кнопку "Add to watched"
  //       console.log('Этого фильма нет в WATCHED');
  //       // onAddToWatchedBtnClick(filmEvtCurrentTarget);
  //     }
  //   } else {
  //     const clickedFilmToCheckW = watchedArr.find(
  //       film => film.id === watchedFilm1.id
  //     );
  //     if (clickedFilmToCheckW) {
  //       // на кнопке Watched должно быть написано Удалить
  //       console.log('Такой фильм в WATCHED уже eсть');
  //       // changeToDeleteWatchedBtn();
  //       refs.watched.textContent = 'DELETE FROM WATCHED';
  //       return;
  //     } else {
  //       //  Если фильма нет, на кнопке Watched есть ивент лисенер с ф.onAddToWatchedBtnClick
  //       // Клик на кнопку "Add to watched"
  //       console.log('Этого фильма нет в WATCHED');
  //       // onAddToWatchedBtnClick(filmEvtCurrentTarget);
  //     }
  //   }

  //   queueArr = JSON.parse(localStorage.getItem(QUEUED_KEY));
  //   if (!queueArr) {
  //     console.log('В QUEUE пусто');
  //     return;
  //     // Остаются кнопки 'Add to queue'
  //   } else if (queueArr.length === 1) {
  //     console.log('Before Add to QUEUE', queueArr);
  //     // проверяем есть ли он в списке Queue

  //     if (queueArr[0].id === watchedFilm1.id) {
  //       // на кнопке Queue должно быть написано Удалить
  //       console.log('Такой фильм в QUEUE уже eсть');
  //       // changeToDeleteQueueBtn();
  //       refs.queue.textContent = 'DELETE FROM QUEUE';
  //       return;
  //     } else {
  //       //  Если фильма нет, на кнопке Watched есть ивент лисенер с ф.onAddToWatchedBtnClick
  //       // Клик на кнопку "Add to watched"
  //       console.log('Этого фильма нет в QUEUE');
  //       // onAddToWatchedBtnClick(filmEvtCurrentTarget);
  //     }
  //   } else {
  //     const clickedFilmToCheck = queueArr.find(
  //       film => film.id === watchedFilm1.id
  //     );
  //     if (clickedFilmToCheck) {
  //       // на кнопке Watched должно быть написано Удалить
  //       console.log('Такой фильм в QUEUE уже eсть');
  //       // changeToDeleteQueueBtn();
  //       refs.queue.textContent = 'DELETE FROM QUEUE';
  //       return;
  //     } else {
  //       //  Если фильма нет, на кнопке Watched есть ивент лисенер с ф.onAddToWatchedBtnClick
  //       // Клик на кнопку "Add to watched"
  //       console.log('Этого фильма нет в QUEUE');
  //       // onAddToWatchedBtnClick(filmEvtCurrentTarget);
  //     }
  //   }
  // }

  if (e.target.classList.contains('btn_modal_watched')) {
    console.log('7777777777777watched7777777777777777');
    // console.log('треба додать');
    // console.log(e.target.dataset.ttt);
    const currentId = Number(e.target.dataset.ttt);
    // console.log('currentId: ', currentId);
    // if (refs.watched.classList. === 'ADD TO WATCHED') {
    if (refs.watched.textContent === 'ADD TO WATCHED') {
      refs.watched.classList.toggle('current');

      try {
        const currentFilms = localStorage.getItem('currentFilms');
        console.log(1);
        // console.log('currentFilms: ', currentFilms);
        const filmToAdd = JSON.parse(currentFilms).data.results.find(
          movie => movie.id === currentId
        );
        console.log('filmToAdd', filmToAdd);
        console.log(2);
        const watchedFilms = localStorage.getItem('watchedFilms');
        const InWatchedFilmsArr = JSON.parse(watchedFilms) || [];
        console.log('watchedFilms: ', InWatchedFilmsArr);
        console.log(3);
        InWatchedFilmsArr.push(filmToAdd);

        localStorage.setItem('watchedFilms', JSON.stringify(InWatchedFilmsArr));

        // console.log('filmToAdd: ', filmToAdd);
      } catch (error) {
        console.log(error.message);
      }

      onBtnWatchedClick();

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

        console.log('newwatchedFilms', newwatchedFilms);

        // const watchedFilms = localStorage.getItem('watchedFilms') || [];

        // watchedFilms.push(filmToAdd);

        localStorage.setItem('watchedFilms', JSON.stringify(newwatchedFilms));

        // console.log('filmToAdd: ', filmToAdd);
      } catch (error) {
        console.log(error.message);
      }
           onBtnWatchedClick();
      // onDeleteBtnClick(filmToDelete, watchedArr, WATCHED_KEY);

      refs.watched.textContent = 'ADD TO WATCHED';
    }
    // return;
  }

  if (e.target.classList.contains('btn_modal_queued')) {
    console.log('7777777777777777queue7777777777777');

    const currentId = Number(e.target.dataset.ttt);
    // console.log('currentId: ', currentId);
    // console.log('currentId: ', currentId);
    // if (refs.watched.classList. === 'ADD TO WATCHED') {
    if (refs.queue.textContent === 'ADD TO QUEUE') {
      refs.queue.classList.toggle('current');

      try {
        const currentFilms = localStorage.getItem('currentFilms');
        console.log(1);
        // console.log('currentFilms: ', currentFilms);
        const filmToAdd = JSON.parse(currentFilms).data.results.find(
          movie => movie.id === currentId
        );
        console.log('filmToAdd', filmToAdd);
        console.log(2);
        const queuedFilms = localStorage.getItem('queuedFilms');
        const InWatchedFilmsArr = JSON.parse(queuedFilms) || [];
        console.log('queuedFilms: ', InWatchedFilmsArr);
        console.log(3);
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

        console.log('newwatchedFilms', newwatchedFilms);

        // const queuedFilms = localStorage.getItem('queuedFilms') || [];

        // queuedFilms.push(filmToAdd);

        localStorage.setItem('queuedFilms', JSON.stringify(newwatchedFilms));

        // console.log('filmToAdd: ', filmToAdd);
      } catch (error) {
        console.log(error.message);
      }
      // onDeleteBtnClick(filmToDelete, watchedArr, WATCHED_KEY);
      onBtnQueueClick();
      refs.queue.textContent = 'ADD TO QUEUE';
    }
  }

  function onAddBtnClick(filmToAdd, arr, key) {
    onDeleteBtnClick(filmToDelete, watchedArr, WATCHED_KEY);
    arr.push(filmToAdd);
    console.log('After Adding', arr);
    localStorage.setItem(`${key}`, JSON.stringify(arr));
    // Перерисовка интерфейса ???
  }

  function onDeleteBtnClick(filmToDelete, arr, key) {
    // const filmToDelete = evt.currentTarget;
    const filmToDeleteId = arr.findIndex(film => film.id === filmToDelete.id);
    arr.splice(filmToDeleteId, 1);
    console.log('After Delete', arr);
    localStorage.setItem(`${key}`, JSON.stringify(arr));
    // Перерисовка интерфейса ???
  }
  ///////   що це ????   ///////////
  returnSavedWatched();
  returnSavedQueue();

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

