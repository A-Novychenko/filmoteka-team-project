import ApiService from './apiService';

const refs = {
  modal: document.querySelector('.js-test-modal'),
  watched: document.querySelector('.js-test-add'),
  delete: document.querySelector('.js-test-del'),
};

refs.modal.addEventListener('click', onClick);
// refs.addToWatched.addEventListener('click', onAddToWatchedBtnClick);

const apiService = new ApiService();
const STORAGE_KEY = 'currentFilms';
const WATCHED_KEY = 'watchedFilms';
const QUEUED_KEY = 'queuedFilms';

let watchedArr = [];
let queueArr = [];

returnSavedData();

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

// const watchedFilm3 = {
//   adult: false,
//   backdrop_path: '/1vXD5HXqkhvsXFHE7KmCPZGPR1e.jpg',
//   genre_ids: [18, 35],
//   id: 536554,
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

async function onClick() {
  // Открыли сайт, пришел ответ с бека
  // await apiService.fetchTrendFilms();

  //    Нарисовали карточки фильмов
  // const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  // const films = savedData.data.results;
  // console.log(films);

  // Клик по фильму №..., открылась модалка,
  // filmEvtCurrentTarget - выбраный фильм
  // const filmEvtCurrentTarget = films[17];
  // console.log(filmEvtCurrentTarget.id);

  watchedArr = JSON.parse(localStorage.getItem(WATCHED_KEY));
  if (!watchedArr) {
    console.log('Тут пусто');
    return;
    // Остаются кнопки 'Add to watched' и 'Add to queue'
  } else if (watchedArr.length === 1) {
    console.log('Before Add', watchedArr);
    // проверяем есть ли он в списке Watched и Queue

    if (watchedArr[0].id === filmEvtCurrentTarget.id) {
      // на кнопке Watched или Queue должно быть написано Удалить
      console.log('Такой фильм уже eсть');
      return;
    } else {
      //  Если фильма нет, на кнопке Watched есть ивент лисенер с ф.onAddToWatchedBtnClick
      // Клик на кнопку "Add to watched"
      console.log('Нет такого фильма');
      // onAddToWatchedBtnClick(filmEvtCurrentTarget);
    }
  } else {
    const clickedFilmToCheckW = watchedArr.find(
      film => film.id === filmEvtCurrentTarget.id
    );
    if (clickedFilmToCheckW) {
      // на кнопке Watched должно быть написано Удалить
      console.log('Такой фильм уже eсть');
      return;
    } else {
      //  Если фильма нет, на кнопке Watched есть ивент лисенер с ф.onAddToWatchedBtnClick
      // Клик на кнопку "Add to watched"
      console.log('Нет такого фильма');
      // onAddToWatchedBtnClick(filmEvtCurrentTarget);
    }
  }

  //   const clickedFilmToCheckQ = queueArr.findIndex(
  //     film => film.id === filmEvtCurrentTarget.id
  //   );
  //   if (clickedFilmToCheckQ) {
  //     console.log('Такой фильм уже eсть');
  //     return;
  //     // на кнопке Queue должно быть написано Удалить
  //   } else {
  //     //  Если фильма нет, на кнопке Queue есть ивент лисенер с ф.onAddToQueueBtnClick
  //     // Клик на кнопку "Add to queue"
  //     console.log('НЕЕЕТ ЕГО');
  //     onAddToQueueBtnClick();
  //   }
}

refs.watched.addEventListener('click', onAddToWatchedBtnClick);

async function onAddToWatchedBtnClick() {
  // await apiService.fetchTrendFilms();
  // const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  // const films = savedData.data.results;
  // const filmToAdd = films[17];
  // const filmToAdd = evt.currentTarget;
  // toGetFilm();

  watchedArr.push(filmToAdd);
  console.log('After Adding', watchedArr);
  localStorage.setItem(WATCHED_KEY, JSON.stringify(watchedArr));

  // Подмена кнопки
  // Перерисовка интерфейса ???
}

// function onAddToQueueBtnClick(film) {
//   queueArr.push(film);
// }

refs.delete.addEventListener('click', onDeleteBtnClick);

function onDeleteBtnClick(evt) {
  // const filmToDelete = evt.currentTarget;
  // const filmToDelete = watchedFilm1;

  // const filmToDeleteId = watchedArr.findIndex(
  //   film => film.id === filmToDelete.id
  // );
  watchedArr.splice(filmToDeleteId, 1);
  console.log('After Delete', watchedArr);
  localStorage.setItem('watchedFilms', JSON.stringify(watchedArr));

  // Подмена кнопки
  // Перерисовка интерфейса ???
}

function returnSavedData() {
  JSON.parse(localStorage.getItem('WATCHED_KEY'));
  const savedData = JSON.parse(localStorage.getItem('WATCHED_KEY'));
  if (!savedData) {
    // localStorage.setItem('watchedFilms', []);
    return;
  } else return savedData;
}

// function toGetFilm() {
//   apiService.fetchTrendFilms();
//   const savedData = JSON.parse(localStorage.getItem('currentFilms'));
//   const films = savedData.data.results;
//   const filmToAdd = films[18];
//   return filmToAdd;
// }
